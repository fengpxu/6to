(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{aa3b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"bg-black overflow-hidden",staticStyle:{height:"calc(100vh - 50px - var(--appbar-height, 0px))!important",padding:"1px"}},[a("VideoJsPlayer",{ref:"videoJsPlayer",staticClass:"full-width full-height",on:{openFile:e.addSubtitles}})],1)},i=[],r=(a("ddb0"),a("2b3d"),a("9861"),a("5319"),a("77d8")),n=a("41ed"),o=a("0613"),l=(a("d9e2"),a("acf9")),c=a.n(l),u=a("1c37"),d=a.n(u);const h=a("9b0f"),p=a("a32b");var y=f;async function f(e){const t=p.dirname(e),a=p.extname(e);let s=p.basename(e);if(s=s.slice(0,s.length-a.length),console.tag("Player","getSubtitleFromFilename").log({dirname:t,basename:s,ext:a}),!h.existsSync(t))throw new Error("dirname not found: "+t);const i=[v(),m()];let r=[];try{const e=h.readdirSync(t);r=await Promise.all(e.map((async e=>{if(!e.startsWith(s))return;const a=i.find((t=>e.endsWith(`.${t.ext}`)));if(!a)return;const r=p.join(t,e),n=await h.promises.readFile(r),o=a.convert(n);return console.log("sub","converted",!!o),o?{filename:r,src:URL.createObjectURL(new Blob([o])),id:e}:void 0}))).then((e=>e.filter((e=>!!e))))}catch(n){console.log(n)}return r}function m(){return{ext:"vtt",convert(e){const t=c.a.decode(e,d.a.detect(e)).replace(/^{[\\0-9A-Za-z&]*}/gm,"");return t}}}function v(){return{ext:"srt",convert(t){const a=c.a.decode(t,d.a.detect(t)).replace(/^{[\\0-9A-Za-z&]*}/gm,"");return e(a)}};function e(e){var a=e.replace(/\r+/g,"");a=a.replace(/^\s+|\s+$/g,"");var s=a.split("\n\n"),i="";if(s.length>0){i+="WEBVTT\n\n";for(var r=0;r<s.length;r+=1)i+=t(s[r])}return i}function t(e){var t="",a=e.split(/\n/);while(a.length>3){for(var s=3;s<a.length;s++)a[2]+="\n"+a[s];a.splice(3,a.length-3)}var i=0;if(!a[0].match(/\d+:\d+:\d+/)&&a[1].match(/\d+:\d+:\d+/)&&(t+=a[0].match(/\w+/)+"\n",i+=1),!a[i].match(/\d+:\d+:\d+/))return"";var r=a[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);return r?(t+=r[1]+":"+r[2]+":"+r[3]+"."+r[4]+" --\x3e "+r[5]+":"+r[6]+":"+r[7]+"."+r[8]+"\n",i+=1,a[i]&&(t+=a[i]+"\n\n"),t):""}}var g=a("849b");const P=a("ed08").isElectron();var w={name:"Player",mixins:[b(),S(),$(),R(),x(),H()],created(){g["a"].on("clear_player",(e=>{console.log("IO: Clear Player",e),this.stop()}))},activated(){console.tag("Player","$route.params").log(this.$route.params)}};function b(){return{data(){return{player:null}},mounted(){this.player=this.$refs.videoJsPlayer.player},methods:{async setSource(e){console.tag("Player","setSource").log(e),await this.player.promiseReady,await this.player.setSource(e),P&&await this.addSubtitles()},play(){this.player.play()},async stop(){this.player.states.isPiP&&this.player.setPiP(!1),this.player.states.isFullscreen&&this.player.setFullscreen(!1),console.log("Dispatch remotePlay reset"),o["a"].dispatch("resetRemotePlay"),await this.player.stop()},async pause(e){e&&(this.player.states.isPiP&&this.player.setPiP(!1),this.player.states.isFullscreen&&this.player.setFullscreen(!1)),this.player.states.isPaused||await this.player.pause()},setPiP(e){this.player.setPiP(e)},seek(e){this.player.seek(e)},getCurrentSourceData(){var e,t,a,s;const i=null!==(e=null===(t=this.player)||void 0===t||null===(a=t.states.currentSources)||void 0===a||null===(s=a[0])||void 0===s?void 0:s.src)&&void 0!==e?e:null,r=e=>Array.from(new URL(e).searchParams.entries()).reduce(((e,[t,a])=>({...e,[t]:a})),{});if(!i)return null;const n=this.player.states.currentSources[0];return{url:i,params:r(i),infoHash:n.infoHash}},async addSubtitles(){const e=this.player.states.currentSources[0];let t;if(e.filename?t=e.filename:e.file&&(t=e.file.path),!t)return;const a=await y(t);console.tag("Player","subtitles").log(a),a&&a.forEach(((e,t)=>{this.player.addTrack(e),0===t&&this.player.enableTrack(e.id)}))}},activated(){const e=this.$refs.videoJsPlayer.$el.querySelector(".video-js-player>.video-js");e.focus()}}}function S(){return{mounted(){this.$watch((()=>{var e,t;if("play_source"===(null===(e=this.$route.params)||void 0===e||null===(t=e.action)||void 0===t?void 0:t.type))return this.$route.params.action.source}),(async a=>{if(!a)return console.log("no source");console.tag("Player","mixinSourcePlay").log("src",a.src),a.filename=e(a),a.type=t(a),console.tag("Player","mixinSourcePlay").log("filename",a.filename),console.tag("Player","mixinSourcePlay").log("type",a.type),await this.stop(),await this.setSource(a),this.play()}),{immediate:!0})}};function e(e){let t;return t=e.src.startsWith("play://")?decodeURI(new URL(e.src).pathname).slice(3):decodeURI(e.src),t}function t(e){return"video/mp4"}}function $(){return{mounted(){this.$watch((()=>{var e,t;if("play_file"===(null===(e=this.$route.params)||void 0===e||null===(t=e.action)||void 0===t?void 0:t.type))return this.$route.params.action.file}),(async e=>{if(!e)return console.log("no file");console.tag("Player","mixinFilePlay").log("file",e),await this.stop(),await this.setSource({src:URL.createObjectURL(e),type:e.type,file:e}),this.play()}),{immediate:!0})}}}function R(){return P||Object(r["a"])()?{mounted(){this.$watch((()=>{var e,t;if("play_remote"===(null===(e=this.$route.params)||void 0===e||null===(t=e.action)||void 0===t?void 0:t.type))return o["a"].state.video.currentVideo.remotePlay}),(async t=>{if(!t)return;console.log("remotePlay",t,o["a"].state.video.currentVideo.infoHash),await this.stop(),o["a"].state.video.currentVideo.infoHash&&this.$nextTick((()=>{console.log("Dispatch remote",o["a"].state.video.currentVideo.infoHash),o["a"].dispatch("remotePlay",o["a"].state.video.currentVideo.infoHash)})),this.player.loadingState=!0;const a=await e.call(this);a&&this.play(),this.player.loadingState=!0}),{immediate:!0})}}:{};async function e(){const e=o["a"].state.video.currentVideo.infoHash,a=this.getCurrentSourceData();if(a&&a.infoHash===e)return;await this.stop();const s=await r.call(this);if(!s)return;const i=l(s,{infoHash:e});try{return await this.setSource(i),i.src.startsWith("http://")&&await t.call(this,i),!0}catch(c){console.tag("Player","error").error(c)}async function r(){const e=e=>new Promise((t=>setTimeout((()=>t(null)),e))),t=await Promise.race([e(1e4),new Promise((e=>{n["ipcRenderer"].once("stream-address",((t,a)=>e(a))),n["ipcRenderer"].send("get-stream-address")}))]);var a;t?(null!==(a=t.filepath)&&void 0!==a||(t.filepath="win32"===process.platform?decodeURI(t.address).replace("play:///","").replace(/\//g,"\\"):decodeURI(t.address).replace("play://","")),console.tag("Player","streamAddress").log(t)):console.tag("Player","streamAddress").tag.red("timeout").log();return t}function l(e,{infoHash:t}){let a=e.address,s=e.filepath;return a.startsWith("play://")&&(a+=`?infoHash=${t}`,s||(s=decodeURI(new URL(a).pathname).slice(3))),"win32"===process.platform&&(s=s.replace(/\//g,"\\")),{src:a,type:null,filename:s,infoHash:t}}}async function t(e){const{src:t}=e;if(!/wait=0$/gm.test(t))return;const a=o["a"].state.setting.videoCacheTime;if(0===a)return;const s=60*a/this.player.states.duration,i=t.replace(/wait=.*/gm,`wait=${s}`),r=this.player.states.currentTime,n=e=>this.player.setSource(e);await n(Object.assign(e,{src:i})),this.seek(r)}}function x(){return{beforeRouteLeave(t,a,s){var i;if("signedIn"!==(null===(i=this.$store.state.account)||void 0===i?void 0:i.authState))return this.pause(),s();e.call(this),s()},beforeRouteEnter(e,a,s){s((e=>t.call(e)))},mounted(){const e=()=>"Player"===this.$route.name;this.$watch((()=>{var e;return null===(e=this.player)||void 0===e?void 0:e.states.isPiP}),(t=>{t||this.player.states.isPaused||e()||this.$router.push({name:"Player"})}))}};function e(){var e,t;this.player&&0!==(null!==(e=null===(t=this.player.states.currentSources)||void 0===t?void 0:t.length)&&void 0!==e?e:0)&&(this.player.states.isPaused||this.player.states.isPiP||"object"!==typeof this.player.states.loadingState&&P&&this.setPiP(!0))}function t(){this.player&&this.player.states.isPiP&&this.setPiP(!1)}}function H(){return{inject:["io"],mounted(){this.$amplify.addOnAuthStateChangedListener((async e=>{console.tag("Player","PiP","signedOut").log({authState:e}),"signedOut"===e&&await this.pause(!0)})),(P||Object(r["a"])())&&n["ipcRenderer"].on("pause-player",(()=>this.pause(!0))),this.io.on("server_progress",e.bind(this)),this.io.on("update_subtitleList",t.bind(this)),this.io.on("clear_player",a.bind(this))}};function e(e){var t,a,s,i,r,n;const o=()=>"Player"===this.$route.name;if(!o())return;const l=null!==(t=null===(a=this.player)||void 0===a||null===(s=a.states.currentSources)||void 0===s||null===(i=s[0])||void 0===i?void 0:i.src)&&void 0!==t?t:null;if(!l)return;const c=null!==(r=null===(n=e.find((e=>l.includes(e.name))))||void 0===n?void 0:n.progress)&&void 0!==r?r:null;function u(e){const t=[],a=e.length;let s=e[0],i=1;for(let r=1;r<a;r++)if(e[r]===s&&r<a-1)i+=1;else{if(e[r+1]===s){i+=1;continue}r===a-1&&(i+=1),i&&t.push({color:1===s?"gold":"transparent",length:i/a*100}),s=e[r],i=1}}c&&u(c)}function t(e,t){console.tag("Player","io$update_subtitleList").log({infoHash:e,subtitleList:t})}async function a({status:e,infoHash:t}){var a,s,i,r;const n=null!==(a=null===(s=this.player)||void 0===s||null===(i=s.states.currentSources)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.src)&&void 0!==a?a:null,o=e=>Array.from(new URL(e).searchParams.entries()).reduce(((e,[t,a])=>({...e,[t]:a})),{});if(!n)return;const{infoHash:l}=o(n);async function c(){await this.stop()}l===t&&(/^play:\/\//gm.test(n)&&"paused"===e||(await c.call(this),await new Promise((e=>setTimeout(e,500))),/^http/gm.test(n)&&this.$q.notify(this.$t("stop_stream_player")),/^play:\/\//gm.test(n)&&this.$q.notify(this.$t("stop_player"))))}}var L=w,U=a("2877"),_=a("9989"),j=a("eebe"),O=a.n(j),k=Object(U["a"])(L,s,i,!1,null,null,null);t["default"]=k.exports;O()(k,"components",{QPage:_["a"]})}}]);