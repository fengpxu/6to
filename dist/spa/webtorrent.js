const WebTorrent=require("webtorrent"),wtVersion=require("webtorrent/package.json").version,{ipcRenderer:ipcRenderer}=require("electron"),crypto=require("crypto"),fs=require("fs"),path=require("path"),{setSecure:setSecure}=require("webtorrent/lib/peer"),FSChunkStore=require("fs-chunk-store"),is=require("electron-is"),{utimes:utimes}=require("utimes");import{useAlphabizProtocol,useClientEvents}from"./wt-extention.js";import preloader from"./webtorrent-preload.js";import utils from"./webtorrent-utils.js";import natTraversal from"./nat.js";const natPorts=[],isMac=is.macOS(),{setAttributeSync:setAttributeSync,removeAttributeSync:removeAttributeSync,listAttributesSync:listAttributesSync}=isMac?require("fs-xattr"):{setAttributeSync(){},removeAttributeSync(){},listAttributesSync(){}},setUtimes=e=>{if(isMac)if(fs.existsSync(e.path)){const t=Date.now(),r=()=>{setTimeout((()=>{utimes(e.path,{btime:t});const r=listAttributesSync(e.path);r&&r.includes("com.apple.progress.fractionCompleted")&&(console.log(`[Done] Set file progress to 1. ${e.path}`),removeAttributeSync(e.path,"com.apple.progress.fractionCompleted"))}),200)};if(1===e.progress)return r(),console.log(`${e.path} is finished. Skip adding progress.`);e.on("done",r),utimes(e.path,{btime:4437792e5}),setAttributeSync(e.path,"com.apple.progress.fractionCompleted","0.01")}else setTimeout((()=>setUtimes(e)),100)};class TrackerMap extends Map{set(e,t){if("object"!==typeof t)return console.error("Not an object",t);super.set(e,Object.assign({url:e},t,{timestamp:Date.now()}))}}let info=()=>{},verbose=()=>{};Object.defineProperty(global,"log",{set(e){info=e?console.log:()=>{},console.log("Toggle log",e)}}),Object.defineProperty(global,"verb",{set(e){verbose=e?console.log:()=>{},console.log("Toggle verb",e)}});const warn=console.error;let startServerInfoHash;process.env.NODE_ENV;const infoHashes=[],shouldDelete=[],speeder=new Map;let prevTime=Date.now(),deltaTime=1e3;const torrentToJson=e=>utils.torrentToJson(e,deltaTime,speeder),speedLimit=e=>"number"!==typeof e?-1:e>0?parseInt(e):-1,getPublicPath=e=>{if(!e||0===e.length)return"";let t=path.dirname(e[0]);for(let r=1;r<e.length;r++)while(!e[r].includes(t)&&t.length>1)t=path.dirname(t);return t},locked=new Set;window.WEBTORRENT_ANNOUCEMENT=require("create-torrent").announceList.map((e=>e[0]));const VERSION_STR=wtVersion.replace(/\d*./g,(e=>("0"+e%100).slice(-2))).slice(0,4),peerId=Buffer.from(`-WW${VERSION_STR}-${crypto.randomBytes(9).toString("base64")}`);let client=null;const initClient=(e=0)=>{if(e>10)return;if(client&&client.torrents.length)return info("Client is not idle, keep it alive");const t={peerId:peerId,maxConns:20},r=parseInt(localStorage.getItem("dhtPort")),o=parseInt(localStorage.getItem("torrentPort"));isNaN(r)||(t.dhtPort=r),isNaN(o)||(t.torrentPort=o);const n=parseInt(localStorage.getItem("maximumConnectionsNum"));isNaN(n)||(t.maxConns=n);const s=parseInt(localStorage.getItem("downloadSpeed")),i=parseInt(localStorage.getItem("uploadSpeed")),a=Number(localStorage.getItem("payedUserShareRate"));t.blocklist=utils.getLocalIPList()||[];const l=localStorage.getItem("webtorrent-secure")||"auto";["auto","enable","disable"].includes(l)?setSecure(l):(setSecure("auto"),localStorage.setItem("webtorrent-secure","auto")),info("init client",t),client=new WebTorrent(t),client.natTraversal=natTraversal,isNaN(s)||client.throttleDownload(s),isNaN(i)||isNaN(a)||client.throttleUpload(i,a),client.on("error",(t=>{warn(t),r&&o&&(e+=1,info("try use difference port"),localStorage.setItem("dhtPort",r+e),localStorage.setItem("torrentPort",o+e),initClient(e)),ipcRenderer.send("webtorrent-client-error",t.message)})),client.on("warning",(e=>{warn(e),ipcRenderer.send("webtorrent-client-warn",e.message)})),client.on("ready",(()=>{console.log("initted"),ipcRenderer.send("webtorrent-initted")})),client.dht.on("listening",(()=>{const e=client.dht.address();console.log("DHT listening",e),natTraversal.portMapping&&(natTraversal.portMapping(e.port,"udp"),natPorts.push(e.port))})),client.on("listening",(()=>{if(console.log("Client listening",client._connPool),client._connPool&&client._connPool.tcpServer){const e=client._connPool.tcpServer.address();console.log("TCP Server",e),natTraversal.portMapping(e.port,"tcp"),natPorts.push(e.port)}})),window.client=client,useClientEvents(client)};setInterval((()=>{client&&client.torrents.forEach((e=>{e.paused||e.discovery&&e.discovery.tracker&&e.discovery.tracker.update()}))}),1e4);const addTracker=(e,t)=>{const r=t&&t.trim(),o="string"===typeof e?client.get(e):e;o&&o.trackerMap&&(o.trackerMap.has(r)||(console.log("add tracker",e,r,o.trackerMap.get(r),o.trackerMap.size),o.trackerMap.set(r,{status:"connecting"}),utils.addTracker(o,r)))},removeTracker=(e,t)=>{const r="string"===typeof e?client.get(e):e;r&&r.trackerMap&&utils.removeTracker(r,t,(()=>{r.trackerMap.delete(t)}))};global.addTracker=addTracker,global.removeTracker=removeTracker;let sendPreloadTasks="1"===localStorage.getItem("send-preload-tasks");const queueTimeout=(e,t)=>{const r=Date.now(),o=()=>{Date.now()-r>=t?e():requestAnimationFrame(o)};requestAnimationFrame(o)};let shouldSendInfo=!0;const updateTorrent=(e=!1)=>{if(!shouldSendInfo&&!e)return queueTimeout(updateTorrent,1e3),info("skip send");verbose("update torrent");const t=Date.now();deltaTime=(t-prevTime)/1e3,prevTime=t;let r=0,o=0;if(client.torrents.length){const e=client.torrents.filter((e=>!shouldDelete.includes(e.infoHash)&&!(e.isAutoUpload&&!e.ready&&!e.verifyStatus))),t=e.map((e=>{e.done||"number"!==typeof e.usedTime||(e.usedTime+=1e3);const t=torrentToJson(e);if(speeder.has(t.infoHash)&&e.ready){const n=speeder.get(t.infoHash);0===n.downloaded?t.downloadSpeed=0:t.downloadSpeed=Math.floor((e.downloaded-n.downloaded)/deltaTime),0===n.uploaded?t.uploadSpeed=0:t.uploadSpeed=Math.floor((e.uploaded-n.uploaded)/deltaTime),t.downloadSpeed<0&&(t.downloadSpeed=0),t.uploadSpeed<0&&(t.uploadSpeed=0),r+=t.downloadSpeed,o+=t.uploadSpeed,speeder.set(t.infoHash,{downloaded:e.downloaded,uploaded:e.uploaded})}else t.downloadSpeed=0,t.uploadSpeed=0,speeder.set(t.infoHash,{downloaded:0,uploaded:0});return t}));isMac&&t.forEach((e=>{if(e.upload||1===e.progress||e.isSeeding)return;const t=e.files;t.forEach((e=>{if("path"in e&&"progress"in e&&fs.existsSync(e.path)){if(e.progress<.01)return;setAttributeSync(e.path,"com.apple.progress.fractionCompleted",e.progress.toFixed(2))}}))})),info("send torrents",t),ipcRenderer.send("webtorrent-torrents",t)}else client.ready&&ipcRenderer.send("webtorrent-torrents",[]);if(ipcRenderer.send("webtorrent-client-info",{downloadSpeed:r<0?0:r,uploadSpeed:o<0?0:o,progress:client.progress,taskNum:client.torrents.length}),client.torrents.length>50&&(client.maxConns=Math.min(client.maxConns,10)),!e){if(sendPreloadTasks){const e=[];for(const[t,r]of preloader.preloadTasks.entries()){const{torrentPath:o,downloadPath:n,torrent:s}=r;s&&e.push({abUrl:t,torrentPath:o,downloadPath:n,torrent:s,postTitle:s.postTitle||""})}for(const t of preloader.taskQueue)e.find((e=>e.abUrl===t.url))||e.push({abUrl:t.origin,torrentPath:null,downloadPath:null,torrent:null,postTitle:t.postTitle});for(const t of preloader.failures)e.find((e=>e.abUrl===t.url))||e.push({abUrl:t.origin,torrentPath:null,downloadPath:null,torrent:null,postTitle:t.postTitle,failed:!0});ipcRenderer.send("webtorrent-preload",e)}else ipcRenderer.send("webtorrent-preload",[]);client.torrents.length>100?(client.maxConns=Math.min(client.maxConns,5),queueTimeout(updateTorrent,2e3)):queueTimeout(updateTorrent,1e3)}};queueTimeout(updateTorrent,1e3);let queueUpdate=null;const forceUpdateTorrent=()=>{queueUpdate&&(clearTimeout(queueUpdate),queueUpdate=setTimeout((()=>{queueUpdate=null,updateTorrent(!0)}),100))},onDone=e=>{if(setTimeout((()=>{isMac&&e.files&&e.files.length&&e.files.forEach((e=>{const t=listAttributesSync(e.path);t&&t.includes("com.apple.progress.fractionCompleted")&&(console.log(`[Done] Set file progress to 1. ${e.path}`),removeAttributeSync(e.path,"com.apple.progress.fractionCompleted","1"))}))}),1e3),e.upload)return console.log("skip upload");e.isSeeding=!0;const t=torrentToJson(e);e.completedTime||(e.completedTime=Date.now()),ipcRenderer.send("webtorrent-done",t),ipcRenderer.send("webtorrent-finish-all-payments",t)},onReady=e=>{e.files.forEach((e=>{e.name.match(/^_____padding_file_(.*)____$/)&&info("deselect",e.name),isMac&&e.path&&setUtimes(e)}));const t=torrentToJson(e);info("ready",t),ipcRenderer.send("webtorrent-ready",t),startServerInfoHash===t.infoHash&&(startServer(t.infoHash,t),startServerInfoHash=""),0===client.torrents.filter((e=>!e.ready)).length&&info("All torrents are ready")},onMetadata=(e,t)=>{ipcRenderer.send("webtorrent-metadata",e.infoHash),ipcRenderer.send("webtorrent-data",torrentToJson(e))},onWire=(e,t,r)=>{if(e.use(r),"webrtc"===e.type){const r=()=>{if(e.remoteAddress)return;const o=t._peers[e.peerId];if(!o)return setTimeout(r,1e3);const n=o.conn?._pc?.currentRemoteDescription?.sdp?.match(/c=IN\sIP\d\s(.*)/)?.[1];if(!n)return setTimeout(r,1e3);e.remoteAddress=n};r()}},onInfoHash=(e,t,r,o)=>{info("infoHash",e);while(shouldDelete.includes(e))shouldDelete.splice(shouldDelete.indexOf(e),1);infoHashes.includes(e)&&client.get(e)!==t?(info("Destroy tr"),ipcRenderer.send("webtorrent-existed",e),t.destroy()):ipcRenderer.send("webtorrent-infohash",e,{...r,isSeeding:o}),infoHashes.push(e),forceUpdateTorrent()},addListeners=(e,t={},r=!1)=>{t||(t={}),e.pending=!1,e.removeAllListeners(),e.setMaxListeners(0),info(`Add listeners to torrent ${e.infoHash||e.token||e.origin}`),e.on("done",(()=>onDone(e))),e.on("ready",(()=>onReady(e))),e.on("metadata",(()=>onMetadata(e,t))),e.on("infoHash",(o=>{onInfoHash(o,e,t,r)})),e.on("warning",(()=>{})),e.on("error",(r=>{console.log("Torrent error",r,t),ipcRenderer.send("webtorrent-error",torrentToJson(e),r.message)}));const o=useAlphabizProtocol(client,e);e.on("wire",(t=>onWire(t,e,o))),e.on("discovery",(()=>{if(e.discovery){if(info("start discovery"),e.trackerMap=new TrackerMap,e.discovery._announce.forEach((t=>{if(verbose("Discovered",t),e.trackerMap.set(t,{status:"connecting"}),!t.startsWith("ws")){if(t.match(/(\d{1,3}\.){3}\d{1,3}/))return;e.trackerMap.set(t+"@6",{status:"connecting"})}})),e.discovery.tracker.on("warning",((t,r,o)=>{if(verbose("tracker warning",r,t.message,o),!r)return console.warn("No emitted url",t);6===o&&(r+="@6"),e.trackerMap.set(r,{status:"error",message:utils.parseTrackerWarning(t.message)})})),e.discovery.tracker.on("update",((t,r,o)=>{if(verbose("tracker update",r,t),!r)return console.warn("No emitted url",t);6===o&&(r+="@6"),e.trackerMap.set(r,{status:"updated",info:t})})),t.customTrackers)for(const r of t.customTrackers)addTracker(e,r)}else info("no discovery")}))},addTorrent=(e,t,r)=>{if(verbose("Add torrent",e,t),t.isSeeding&&1===t.progress)return seedTorrent(e,t.file,t);if(t.infoHash){const e=t.infoHash.match(/btih:([^&]*)/),r=e&&e[1]||t.infoHash;if(r&&client.get(r))return info("exist",client.get(r)),ipcRenderer.send("webtorrent-existed",r)}if(t.origin){if(locked.has(t.origin))return info("origin lock",t.origin),locked.delete(t.origin);locked.add(t.origin)}if(t.token!==t.origin){if(locked.has(t.token))return info("token lock",t.token),info(locked),locked.delete(t.token);locked.add(t.token)}const o=()=>{const o=t.torrentPath&&fs.existsSync(t.torrentPath)?t.torrentPath:fs.existsSync(t.token||t.origin)?t.token||t.origin:t.infoHash;info(o);const n=client.add(o,{path:t.path||t.downloadDirectory,store:FSChunkStore,storeOpts:{postTitle:t.postTitle||""},storeCacheSlots:1,strategy:"sequential",maxWebConns:client.maxConns,announce:[...t.trackers||[],...WEBTORRENT_ANNOUCEMENT]});n.token=e,n.origin=t.infoHash||t.token||t.origin,n.createdTime=t.createdTime||Date.now(),n.usedTime=t.usedTime||0,t.fromPost&&(n.fromPost=t.fromPost),t.postTitle&&(n.postTitle=t.postTitle),t.name&&(n.name=t.name),t.subtitleList&&t.subtitleList.length&&(n.subtitleList=t.subtitleList),verbose("Torrent conf",n),addListeners(n,t),verbose("Listener added"),n.once("infoHash",(()=>{locked.delete(t.origin),locked.delete(n.infoHash),locked.delete(t.token),r&&r(n)})),t.verifiedPieces&&n.once("metadata",(()=>{if(n.length<2e8)return;let e=0,r=.2;n.length>5e9&&(r=.1),n.length>2e10&&(r=.05),n.length>5e10&&(r=.01),n.length>1e11&&(r=.005),t.verifiedPieces.forEach((t=>{if(Array.isArray(t)){const[r,o]=t;for(let t=r+1;t<o-1;t++)n._markVerified(t),e++}else isNaN(t)||(n._markVerified(t),e++)})),info("mark verified",t.verifiedPieces,e)}))};if(client.get(t.infoHash))client.remove(t.infoHash,o);else if(client.torrents.some((t=>t.token===e))){const t=client.torrents.find((t=>t.token===e));if(!t)return o();if(t.infoHash)return r&&r(t);t.once("infoHash",(()=>r&&r(t)))}else o()},stopTorrent=e=>{if(locked.has(e))return;locked.add(e),server&&serverInfoHash===e&&(server.destroy(),server=null,serverInfoHash="");const t=client.get(e);if(t&&(t.isSeeding||t.done)&&(t.completed=!0),t)ipcRenderer.send("webtorrent-finish-all-payments",torrentToJson(t)),t.destroy((()=>{locked.delete(e),ipcRenderer.send("webtorrent-stop",e,t.completed)}));else if(locked.delete(e),e){const t=client.torrents.find((t=>t.token===e));t&&t.destroy((()=>{locked.delete(e),ipcRenderer.send("webtorrent-stop",e,t.completed)}))}else ipcRenderer.send("webtorrent-notfound",e);infoHashes.includes(e)&&infoHashes.splice(infoHashes.indexOf(e),1),forceUpdateTorrent()},deleteTorrent=(e,t,r)=>{if(locked.has(e))return;locked.add(e),shouldDelete.push(e),server&&serverInfoHash===e&&(server.destroy(),server=null,serverInfoHash="");const o=client.get(e)||client.torrents.find((t=>t.token===e));if(info("delete",e,o,t),o){o.emit("deleted"),info("emit",o.emit);const n=o.files.length?o.files.map((e=>e.path)):o.file||[],s=getPublicPath(n);o.destroy({destroyStore:t},(()=>{"function"===typeof r&&r(),t?ipcRenderer.send("webtorrent-delete",o.infoHash||e,s,n):ipcRenderer.send("webtorrent-delete",o.infoHash||e),locked.delete(e);try{client.remove(o.infoHash)}catch(i){}}))}else locked.delete(e),ipcRenderer.send("webtorrent-notfound",e);while(infoHashes.includes(e))infoHashes.splice(infoHashes.indexOf(e),1);forceUpdateTorrent()},seedTorrent=(e,t,r,o=!1,n=null)=>{if(r.infoHash&&client.get(r.infoHash))return info("skip existed",r.infoHash);const s=r.infoHash||r.token||r.origin||(Array.isArray(t)?t[0]:t);if(s){if(locked.has(s))return;locked.add(s)}let i=null;const a=[...r.trackers||[],...WEBTORRENT_ANNOUCEMENT],l={...r,store:FSChunkStore,storeOpts:{postTitle:r.postTitle||""},storeCacheSlots:1,strategy:"sequential",maxWebConns:client.maxConns,announce:a};if(r.infoHash&&!r.upload&&r.files.length)info("[seed] add torrent with token"),info(r),i=client.add(r.infoHash||r.token||r.origin,Object.assign(l,{path:r.path||r.downloadDirectory,skipVerify:1===r.progress}));else if(r.isSeeding&&r.torrentPath&&fs.existsSync(r.torrentPath))info("[seed] add torrent with torrentPath"),i=client.add(r.torrentPath,Object.assign(l,{path:r.path||r.downloadDirectory,skipVerify:!0}));else if(r.isSeeding&&r.magnetURI&&!r.isUploadByFiles)info("[seed] add torrent with magnetURI"),i=client.add(r.magnetURI,Object.assign(l,{path:r.path||r.downloadDirectory,skipVerify:!0})),i.upload=!0,i.isSeeding=!0;else{info("[seed] Seed torrent with files",!!r.infoHash,r);const e=client.torrents.filter((e=>1===e.progress)),o=e.reduce(((e,t)=>{const r=t.files.map((e=>e.path));return e.push(...r),e}),[]);t.some((e=>o.includes(e)))&&ipcRenderer.send("webtorrent-seed-error","task_exists"),i=client.seed(t,Object.assign(l,{skipVerify:!!r.infoHash,onProgress(e,t){i.verifyStatus={current:e,total:t}}})),i.isUploadByFiles=!0}return info("seedTorrent",r,i,t),r.name&&(i.name=r.name),i.isAutoUpload=o,i.token=e,i.isSeeding=!0,i.upload=!0,i.paused=!1,i.file=t,i.createdTime=r.createdTime||Date.now(),addListeners(i,r,!0),i.once("infoHash",(()=>{locked.delete(s),n&&n()})),i.once("metadata",(()=>{ipcRenderer.send("webtorrent-seed",torrentToJson(i))})),i.once("deleted",(()=>{l.onProgress&&(l.onProgress._destroyed=!0)})),i},getTorrent=()=>{const e=client.torrents.map((e=>torrentToJson(e)));return info(e),ipcRenderer.send("webtorrent-list",e)},setThrottleGroup=({infoHash:e,peerId:t,subId:r,level:o})=>{const n=client.get(e);if(!n)return info("not found",e),ipcRenderer.send("webtorrent-set-throttle",{code:-1,message:"Torrent Not Found"}),null;let s=null,i=null;for(const l of n.wires)if(r?l.remoteSub===r:l.peerId===t){s=l;try{l._setThrottleGroup(o)}catch(a){i={code:-1,message:a.message}}break}return s?i?ipcRenderer.send("webtorrent-set-throttle",i):ipcRenderer.send("webtorrent-set-throttle",{code:0,message:"success"}):ipcRenderer.send("webtorrent-set-throttle",{code:-1,message:"Peer Not Found"}),s},saveTorrentFile=(e,t)=>{const r="webtorrent-save-torrent",o=client.get(e);if(!o)return;if(!o.torrentFile||!o.name)return ipcRenderer.send(r,{code:-1,message:"Torrent Not Ready"});const n=path.resolve(t,`${o.name}.torrent`);if(fs.existsSync(n))return ipcRenderer.send(r,{code:0,message:"success",infoHash:e,torrentPath:n});fs.existsSync(t)||fs.mkdirSync(t,{recursive:!0}),fs.writeFileSync(n,o.torrentFile),ipcRenderer.send(r,{code:0,message:"success",infoHash:e,torrentPath:n})};let server=null,serverInfoHash="";const startTorrentServer=e=>{if(info("Start server",e),startServerInfoHash="",server){if(serverInfoHash===e.infoHash)return ipcRenderer.send("webtorrent-server-ready",e.infoHash,{token:e.token,port:server.address().port});server.destroy(),server=null,serverInfoHash=""}info("Create server",e),server=e.createServer(),server.listen(0,(()=>{const t=server.address().port,r={token:e.token,port:t};ipcRenderer.send("webtorrent-server-ready",e.infoHash,r);const o=()=>{const t=e.files.map((t=>{const r=[];for(let o=t._startPiece;o<t._endPiece;o++)r.push(null===e.pieces[o]?1:0);return{name:t.name,path:t.path,progress:r}}));ipcRenderer.send("webtorrent-server-progress",e.infoHash,t)};setTimeout(o,1e3);const n=setInterval(o,5e3);server.once("close",(()=>clearInterval(n)))}))},startServer=(e,t)=>{info("start server",e,t),startServerInfoHash=e;const r=client.get(e);if(!r)return addTorrent(t.token||t.infoHash,t,(()=>startServer(e,t)));r.ready?(info("tr ready. start server"),startTorrentServer(r,t)):r.once("ready",(()=>startTorrentServer(r,t)))},stopServer=()=>{server&&(server.destroy(),server=null,serverInfoHash="",info("Destroy server"))};(function(){ipcRenderer.once("redirect-log",((e,t)=>{console.log("Write webtorrent logs to",t),utils.useRedirectLogs(t)})),ipcRenderer.on("add-torrent",((e,t,r)=>{if(r.magnetURI&&!r.torrentPath){const e=preloader.loadCache(r.magnetURI,r.path);e?(console.log("[Preload] Load cached task",e),r.torrentPath=e):console.log("Cannot find preloaded task for",r)}return addTorrent(t,r)})),ipcRenderer.on("stop-torrent",((e,t)=>(console.log("got stop",t),stopTorrent(t)))),ipcRenderer.on("stop-all-uploading",((e,t)=>{t.forEach((e=>{const t=client.torrents.find((t=>!(!t.infoHash||t.infoHash!==e.infoHash)||!(!t.token||t.token!==e.token)));t&&t.destroy()}))})),ipcRenderer.on("delete-all",((e,t,r,o)=>{shouldSendInfo=!1,info("Delete all",t,r,o);const n=client.torrents.filter((e=>{if("all"===t)return!0;const r=e.upload||1===e.progress||e.isSeeding;return"upload"===t?!(!o&&e.isAutoUpload)&&r:!r}));if(!n.length)return void(shouldSendInfo=!0);let s=0;n.forEach((t=>{s++,info(t.infoHash),shouldDelete.push(t.infoHash),t.removeAllListeners();try{deleteTorrent(t.infoHash,r,(()=>{shouldDelete.includes(t.infoHash)&&shouldDelete.splice(shouldDelete.indexOf(t.infoHash),1),s--,0===s&&(shouldSendInfo=!0)}))}catch(e){}})),setTimeout((()=>{shouldSendInfo=!0}),2e3)})),ipcRenderer.on("seed-torrent",((e,t)=>{let{file:r,token:o,...n}=t;return r||(r=t.files.map((e=>e.path))),console.log(t),r.length?(o||(o=Math.random().toString().substr(2)),seedTorrent(o,r,n)):ipcRenderer.send("seed-error")})),ipcRenderer.on("seed-torrents",((e,t)=>{info(`Seed ${t.length} torrents`),t.forEach((e=>{let{file:t,token:r,...o}=e;t||(t=e.files.map((e=>e.path))),r||(r=Math.random().toString().substring(2)),seedTorrent(r,t,{...e})}))})),ipcRenderer.on("autoupload-files",(async(e,t)=>{info("autoupload files",t),Promise.all(t.map((e=>{if(info("Auto upload",e),!client.torrents.some((t=>t.files.some((t=>t.path===e))||t.file&&t.file.some&&t.file.some((t=>t===e))||t.file===e)))return new Promise((t=>{seedTorrent("autoupload-"+path.basename(e),[e],{path:path.dirname(e)},!0,t)}));info(`${e} is already uploaded, skipped`)}))).then((()=>{info("autoupload complete"),ipcRenderer.send("autoupload-complete")})).catch((e=>{ipcRenderer.send("autoupload-complete",e.message||e)}));const r=[];client.torrents.forEach((e=>{e.isAutoUpload&&e.ready&&(e.files.some((e=>t.includes(e.path)))?info(`${e.infoHash} is kept alive`):(info(`${e.infoHash} has been deleted. Destroy`,e.files.map((e=>e.path))),r.push(e)))})),r.forEach((e=>{e.destroy((()=>{ipcRenderer.send("webtorrent-delete",e.infoHash)}))}))})),ipcRenderer.on("start-server",((e,{infoHash:t,conf:r})=>(info("start server",t,r),startServer(t,r)))),ipcRenderer.on("stop-server",(()=>stopServer())),ipcRenderer.on("delete-torrent",((e,t,r)=>deleteTorrent(t,r))),ipcRenderer.on("pend-torrent",((e,t)=>{const r=client.get(t.infoHash);infoHashes.includes(t.infoHash)&&infoHashes.splice(infoHashes.indexOf(t.infoHash),1),info("Pend",t.infoHash,r),r&&(r.removeAllListeners(),r.destroy(),r.pending=!0,ipcRenderer.send("webtorrent-pending",torrentToJson(r)))})),ipcRenderer.on("set-throttle-group",((e,{infoHash:t,peerId:r,subId:o,level:n})=>{info(t,r,o,n),setThrottleGroup({infoHash:t,peerId:r,subId:o,level:n})})),ipcRenderer.on("save-torrent-file",((e,t,r)=>saveTorrentFile(t,r))),ipcRenderer.on("update-settings",((e,{uploadSpeed:t,downloadSpeed:r,maximumConnectionsNum:o,DHTlistenPort:n,BTlistenPort:s,payedUserShareRate:i,secureOption:a,libraryPreload:l,showPreload:d})=>{const c=parseInt(n),p=parseInt(s);if(info("Set client",{uploadSpeed:t,downloadSpeed:r,maximumConnectionsNum:o,dhtPort:c,torrentPort:p,payedUserShareRate:i,secureOption:a,libraryPreload:l,showPreload:d}),i){const e=Number(i)||.7;localStorage.setItem("payedUserShareRate",e.toString())}if(t){const e=speedLimit(t);localStorage.setItem("uploadSpeed",e.toString())}const f=Number(localStorage.getItem("payedUserShareRate"))||.7,u=parseInt(localStorage.getItem("uploadSpeed"));if(isNaN(f)||isNaN(u)||(-1===u?client.throttleUpload(-1):client.throttleUpload(u,f)),r){const e=speedLimit(r);client.throttleDownload(e),localStorage.setItem("downloadSpeed",e.toString())}o&&(client.maxConns=o,localStorage.setItem("maximumConnectionsNum",o.toString()));let h=!1;c&&c!==parseInt(localStorage.getItem("dhtPort"))&&(h=!0,localStorage.setItem("dhtPort",c.toString())),p&&p!==parseInt(localStorage.getItem("torrentPort"))&&(h=!0,localStorage.setItem("torrentPort",p.toString())),"string"===typeof a&&(localStorage.setItem("webtorrent-secure",a),setSecure(a),info("set secure",a)),h&&location.reload(),!0===l?preloader.enable():!1===l&&preloader.disable(),!0===d?(sendPreloadTasks=!0,localStorage.setItem("send-preload-tasks","1")):!1===d&&(sendPreloadTasks=!1,localStorage.setItem("send-preload-tasks","0"))})),ipcRenderer.on("reset-torrent",(()=>{info("reset"),shouldSendInfo=!1,Promise.all(client.torrents.map((e=>new Promise((t=>{e.removeAllListeners(),e.destroy({destroyStore:!0},t)}))))).then((()=>ipcRenderer.send("webtorrent-reset"))).catch((()=>ipcRenderer.send("webtorrent-reset-error"))).finally((()=>{info("resetted"),client.torrents.length=0,shouldSendInfo=!0}))})),ipcRenderer.on("add-tracker",((e,{infoHash:t,url:r})=>{info("add-tracker",t,r),addTracker(t,r)})),ipcRenderer.on("remove-tracker",((e,{infoHash:t,url:r})=>{info("remove-tracker",t,r),removeTracker(t,r)})),ipcRenderer.on("force-exit",(()=>process.exit(0))),setInterval((()=>{process.memoryUsage().rss/1e9>3.5&&(info("exit for memory reason"),process.exit(0))}),6e4),initClient(0),window.addEventListener("error",(e=>(info(e.message||e),!0))),ipcRenderer.on("before-quit",(()=>{natPorts.forEach((e=>{natTraversal.portUnMapping(e)}))})),"undefined"!==typeof window&&window.addEventListener("beforeunload",(()=>{natPorts.forEach((e=>{natTraversal.portUnMapping(e)}))}))})();