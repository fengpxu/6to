const path = require('path')
const { resolve } = path
const { networkInterfaces } = require('os')

/**
 * @function getPieceMap
 * @param { Torrent } torrent
 * @returns { Array<number> }
 */
const getPieceMap = torrent => {
  if (!torrent.ready) return []
  const piecesNum = torrent.pieces.length
  const maxLength = piecesNum + 128 - piecesNum % 128
  const piecesPerBit = maxLength / 128
  const arr = []
  let bit = 1, pos = 0
  for (let i = 0; i < maxLength; i++) {
    if (!torrent.pieces[i]) {
      // null or undefined means we have this piece downloaded
      bit &= 1
    } else {
      bit &= 0
    }
    pos++
    if (pos >= piecesPerBit) {
      arr.push(bit)
      bit = 1
      pos = 0
    }
  }
  // console.log(arr.join(''))
  return arr
}

/**
 * @function getByteMap
 * @param { Torrent } tr
 * @returns { Array<number> }
 */
export const getByteMap = (tr) => {
  const arr = getPieceMap(tr)
  const ret = []
  let pos = 0, byte = 0
  for (let i = 0; i < arr.length; i++) {
    byte |= (arr[i] << pos)
    pos++
    if (pos >= 8) {
      ret.push(byte)
      pos = 0
      byte = 0
    }
  }
  return ret
}

const calcPieces = (tr, wire) => {
  const pieceLength = tr.pieceLength
  const length = tr.length
  const pieceNum = Math.ceil(length / pieceLength)
  /** @type {{ buffer: Uint8Array }} */
  const peerPieces = wire.peerPieces
  if (!peerPieces.buffer) return { progress: 0, buffer: null }
  let has = 0
  for (const bitField of peerPieces.buffer) {
    const hasBits = bitField.toString(2).split('').filter(i => i === '1').length
    has += hasBits
  }
  return {
    progress: has / pieceNum,
    has,
    length
  }
}

const responseTorrentProps = [
  'infoHash', 'name',
  'paused', 'length',
  'downloaded', // 'downloadSpeed',
  'uploaded', // 'uploadSpeed',
  'ready', 'waiting', 'progress',
  'isSeeding', 'upload',
  // the 'token' is generated by client
  'token', 'completed',
  // the 'origin' marks origin magnet link or torrent
  'origin', 'path',
  'pending',
  // save origin post
  'fromPost', 'postTitle',
  // seeding file
  'file', 'magnetURI', 'alphabizURI',
  'isAutoUpload',
  'isUploadByFiles',
  // timers
  'createdTime',
  'completedTime',
  'usedTime'
]
/**
 * @typedef { import('../src/types').TorrentInfo } TorrentInfo
 * @typedef { import('webtorrent/lib/torrent') } RawTorrent
 * @typedef { RawTorrent & TorrentInfo } Torrent
 */
/**
 * @method torrentToJson
 * @param { Torrent } tr
 * @param { boolean } isUpload
 * @returns { Partial<Torrent> }
 */
const torrentToJson = (tr, deltaTime, speeder) => {
  const o = {}
  responseTorrentProps.forEach(prop => { o[prop] = tr[prop] })
  if (!o.infoHash && tr.magnetURI) {
    o.infoHash = tr.magnetURI.toLowerCase().match(/:([0-9a-fA-F]{40})/)?.[1]
  }
  o.done = tr.downloaded >= tr.length
  o.download = tr.progress !== 1 && !tr.upload
  o.upload = tr.upload
  // hmm, a typo error that is already used everywhere
  o.recieved = tr.received
  o.files = tr.files
    ? tr.files.map(
      /** @param { import('webtorrent/lib/file') } file */
      file => {
        return {
          name: file.name,
          path: path.resolve(tr.path || '', file.path || file.name),
          progress: file.progress > 0 ? file.progress : 0
        }
      }
    ).filter(i => !i.name.match(/^_____padding_file_(.*)____$/))
    : []
  if (tr.timeRemaining) o.timeRemaining = tr.timeRemaining
  if (tr.metadata) o.hasMetadata = true
  if (tr.numPeers) o.peersNum = tr.numPeers
  if (tr.subtitleList && tr.subtitleList.length) o.subtitleList = tr.subtitleList
  if (typeof deltaTime === 'undefined' || !speeder) return o

  // byte map
  const byteMap = getByteMap(tr)
  if (!tr.byteMap || byteMap.some((byte, index) => {
    return tr.byteMap[index] !== byte
  })) {
    tr.byteMap = byteMap
    // console.log('change byteMap', byteMap)
    tr.emit('byte-map-change')
  }
  o.byteMap = tr.byteMap
  // console.log(o.byteMap)

  // trackers
  if (tr.trackerMap) {
    o.trackerList = [...tr.trackerMap.values()].map(i => {
      const info = { ...i }
      if (info.url.includes('@6')) {
        info.isIpv6 = true
      } else {
        info.isIpv6 = info.url.startsWith('ws') && info.url.includes('ipv6')
      }
      return info
    // }).filter(i => {
    //   return i.isIpv6 ? i.status !== 'connecting' : true
    }).filter(({ url, status }) => {
      if (status !== 'error') return true
      let _url = url
      if (url.includes('@6')) {
        _url = url.replace('@6', '')
      } else {
        _url += '@6'
      }
      const tracker = tr.trackerMap.get(_url)
      if (tracker && tracker.status !== 'error') return false
      return true
    })
  } else {
    o.trackerList = []
  }
  const client = tr.client

  o.connections = tr.wires.map(/** @param { import('../src/types').Wire } wire */wire => {
    // if (!wire.remoteAddress) return
    let address = wire.remoteAddress
    if (!address) {
      const peer = tr._peers[wire.peerId]
      if (peer && peer.type === 'webrtc') {
        const _address = peer.conn?._pc?.currentRemoteDescription?.sdp?.match(/c=IN\sIP\d\s(.*)/)?.[1]
        if (_address) address = _address
        else {
          wire.destroy()
          return null
        }
      } else {
        return null
      }
    }
    let level = 'low'
    if (wire._uploadThrottle._group === client.throttleGroups.mid) level = 'mid'
    if (wire._uploadThrottle._group === client.throttleGroups.high) level = 'high'
    let downloadSpeed = 0, uploadSpeed = 0
    if (speeder.has(wire._debugId)) {
      const prev = speeder.get(wire._debugId)
      downloadSpeed = (wire.downloaded - prev.downloaded) / deltaTime
      if (downloadSpeed < 0) downloadSpeed = 0
      uploadSpeed = (wire.uploaded - prev.uploaded) / deltaTime
      if (uploadSpeed < 0) uploadSpeed = 0
    }
    speeder.set(wire._debugId, {
      downloaded: wire.downloaded,
      uploaded: wire.uploaded
    })
    let hasResource = false
    if (tr.byteMap && wire.remote_byte_map) {
      hasResource = tr.byteMap.some((byte, index) => {
        try {
          const local = byte.toString(2).padStart(8, '0')
          const remote = wire.remote_byte_map[index].toString(2).padStart(8, '0')
          for (let i = 0; i < local.length; i++) {
            if (local[i] === '0' && remote[i] === '1') return true
          }
          return false
        } catch (e) {
          return false
        }
      })
    }
    const { progress, buffer } = calcPieces(tr, wire)
    return {
      id: wire.peerId,
      address,
      isAbPeer: wire._is_alphabiz_peer_,
      hasMeta: wire.remote_has_meta,
      hasResource,
      remoteByteMap: wire.remote_byte_map || [],
      uploadSpeed,
      downloadSpeed,
      user: wire.remoteUser,
      subId: wire.remoteSub,
      transactions: wire.transactions,
      remoteGroup: wire.remoteGroup,
      downloaded: wire.downloaded,
      level,
      progress,
      buffer,
      // Only TCP wires will send encrypted data, ended with _cryptoHandshakeDone = true
      secure: wire._cryptoHandshakeDone
    }
  }).filter(i => i)
  o.connections.sort((a, b) => {
    if (!a.address || !a.address.localeCompare) return 0
    return a.address.localeCompare(b.address)
  })

  if (tr.verifyStatus) o.verifyStatus = tr.verifyStatus
  if (tr.pieces) {
    o.verifiedPieces = tr.pieces.reduce((pre, cur, index) => {
      if (cur === null) {
        const last = pre[pre.length - 1]
        if (Array.isArray(last)) {
          // last is a range like [start, end]
          if (last[1] === index - 1) last[1] = index
          else pre.push(index)
        } else {
          // last is a number
          if (last === index - 1) {
            pre[pre.length - 1] = [last, index]
          } else {
            pre.push(index)
          }
        }
      }
      return pre
    }, [])
    // console.log(o.verifiedPieces)
  }
  return o
}

/**
 * @function getLocalIPList
 * @returns { Array<string> }
 */
const getLocalIPList = () => {
  const data = networkInterfaces()
  const list = new Set()
  for (const k in data) {
    const arr = data[k]
    arr.forEach(info => {
      list.add(info.address)
    })
  }
  return [...list]
}

/**
 * @function parseTrackerWarning
 * @param { string } str tracker error message
 * @returns { string }
 */
const parseTrackerWarning = str => {
  if (typeof str === 'string' && str.includes('(')) {
    return str.substring(0, str.indexOf('(')).trim()
  }
  return str
}

/**
 * @function addTracker
 * @param { Torrent } tr
 * @param { string } url
 */
const addTracker = (tr, url) => {
  if (!tr.discovery || !tr.discovery.tracker) return
  const client = tr.discovery.tracker
  if (client._trackers.find(i => i.announceUrl === url)) return
  if (!client._createTracker) return
  try {
    const ipFamalies = [4]
    if (url.startsWith('http')) ipFamalies.push(6)
    for (const family of ipFamalies) {
      const tracker = client._createTracker(url, family)
      if (!tracker) continue
      client._trackers.push(tracker)
      tracker.setInterval()
      tracker.announce(client._defaultAnnounceOpts())
    }
  } catch (e) {
    console.error('addTracker error', e)
  }
}

/**
 * @function removeTracker
 * @param { Torrent } tr
 * @param { string } url
 * @param { () => void } [onRemoved]
 */
const removeTracker = (tr, url, onRemoved) => {
  if (!tr.discovery || !tr.discovery.tracker) return onRemoved()
  const trackers = tr.discovery.tracker._trackers
  const index = trackers.findIndex(i => i.announceUrl === url)
  if (index === -1) return onRemoved()
  const found = trackers[index]
  if (found && found.destroy) {
    found.destroy((...args) => {
      // check again for index since this is async
      const index = trackers.findIndex(i => i.announceUrl === url)
      if (index !== -1) trackers.splice(index, 1)
      if (typeof onRemoved === 'function') {
        onRemoved(...args)
      }
    })
  } else {
    onRemoved()
  }
}

function useRedirectLogs (path) {
  const { appendFile } = require('fs')
  const { format } = require('util')
  const toLog = (...args) => {
    return `[${new Date().toLocaleString()}] ${format(...args)}\n`
  }
  const logPath = resolve(path, 'webtorrent.log.log')
  const warnPath = resolve(path, 'webtorrent.warn.log')
  const errorPath = resolve(path, 'webtorrent.error.log')

  const console = (function (c) {
    return {
      ...c,
      log (...args) {
        appendFile(logPath, toLog(...args), () => {})
        c.log.apply(c, args)
      },
      warn (...args) {
        appendFile(warnPath, toLog(...args), () => {})
        c.warn.apply(c, args)
      },
      error (...args) {
        appendFile(errorPath, toLog(...args), () => {})
        c.error.apply(c, args)
      }
    }
  })(window.console)
  window.console = console
}

export default {
  useRedirectLogs,
  torrentToJson,
  getLocalIPList,
  getPieceMap,
  parseTrackerWarning,
  addTracker,
  removeTracker
}
