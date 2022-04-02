const path = require('path')
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

const responseTorrentProps = [
  'infoHash', 'name',
  'paused', 'length',
  'downloaded',// 'downloadSpeed',
  'uploaded',// 'uploadSpeed',
  'ready', 'waiting', 'progress',
  'isSeeding', 'upload',
  // the 'token' is generated by client
  'token', 'completed',
  // the 'origin' marks origin magnet link or torrent
  'origin', 'path',
  'pending',
  // seeding file
  'file', 'magnetURI',
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
          path: path.resolve(tr.path, file.path),
          progress: file.progress > 0 ? file.progress : 0
        }
      }
    ).filter(i => !i.name.match(/^_____padding_file_(.*)____$/))
    : []
  if (tr.timeRemaining) o.timeRemaining = tr.timeRemaining
  if (tr.metadata) o.hasMetadata = true
  if (tr.numPeers) o.peersNum = tr.numPeers

  // byte map
  const byteMap = getByteMap(tr)
  if (!tr.byteMap || byteMap.some((byte, index) => {
    return tr.byteMap[index] !== byte
  })) {
    tr.byteMap = byteMap
    console.log('change byteMap', byteMap)
    tr.emit('byte-map-change')
  }
  o.byteMap = tr.byteMap
  // console.log(o.byteMap)

  o.connections = tr.wires.map(/** @param { import('../src/types').Wire } wire */wire => {
    // if (!wire.remoteAddress) return
    let level = 'low'
    if (wire._uploadThrottle._group === client.throttleGroups.mid) level = 'mid'
    if (wire._uploadThrottle._group === client.throttleGroups.high) level = 'high'
    let downloadSpeed = 0, uploadSpeed = 0
    if (speeder.has(wire._debugId)) {
      const prev = speeder.get(wire._debugId)
      downloadSpeed = (wire.downloaded - prev.downloaded) / deltaTime
      uploadSpeed = (wire.uploaded - prev.uploaded) / deltaTime
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
        } catch(e) {
          return false
        }
      })
    }
    return {
      id: wire.peerId,
      address: wire.remoteAddress,
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
      level
    }
  })
  o.connections.sort((a, b) => {
    if (!a.address || !a.address.localeCompare) return 0
    return a.address.localeCompare(b.address)
  })
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

export default {
  torrentToJson,
  getLocalIPList,
  getPieceMap
}