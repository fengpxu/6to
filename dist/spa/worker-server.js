const portTimeoutDuration=5e3;module.exports=e=>{const{request:t}=e,{url:o,method:s,headers:n,destination:r}=t;return o.includes(self.registration.scope+"webtorrent/")?o.includes(self.registration.scope+"webtorrent/keepalive/")?new Response:clients.matchAll({type:"window",includeUncontrolled:!0}).then((e=>new Promise((t=>{for(const a of e){const e=new MessageChannel,{port1:l,port2:i}=e;l.onmessage=o=>{t([o.data,e])},a.postMessage({url:o,method:s,headers:Object.fromEntries(n.entries()),scope:self.registration.scope,destination:r,type:"webtorrent"},[i])}})))).then((([e,t])=>{if("STREAM"===e.body||"DOWNLOAD"===e.body){let o=null;return new Response(new ReadableStream({pull(s){return new Promise((n=>{t.port1.onmessage=e=>{e.data?s.enqueue(e.data):(clearTimeout(o),s.close(),t.port1.onmessage=null),n()},clearTimeout(o),"STREAM"===e.body&&(o=setTimeout((()=>{s.close(),t.port1.postMessage(!1),t.port1.onmessage=null,n()}),portTimeoutDuration)),t.port1.postMessage(!0)}))},cancel(){t.port1.postMessage(!1)}}),e)}return new Response(e.body,e)})).catch(console.error):null};