(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{aa3b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex justify-center items-stretch"},[s("VideoJsPlayer",{ref:"videoJsPlayer",staticClass:"full-width"})],1)},i=[],r=(s("ddb0"),s("2b3d"),s("9861"),s("5319"),s("77d8")),n=s("41ed"),o=s("0613");const l=s("ed08").isElectron();var c={name:"Player2",mixins:[u(),p(),h(),d(),y(),f()],activated(){console.tag("this.$route.params").log(this.$route.params)}};function u(){return{data(){return{player:null}},mounted(){this.player=this.$refs.videoJsPlayer.player},methods:{async setSource(t){await this.player.promiseReady,await this.player.setSource(t)},play(){this.player.play()},async stop(){this.player.states.isPiP&&this.player.setPiP(!1),this.player.states.isFullscreen&&this.player.setFullscreen(!1),await this.player.stop()},pause(t){t&&(this.player.states.isPiP&&this.player.setPiP(!1),this.player.states.isFullscreen&&this.player.setFullscreen(!1)),this.player.states.isPaused||this.player.pause()},setPiP(t){this.player.setPiP(t)},seek(t){this.player.seek(t)},getCurrentSourceData(){var t,e,s,a;const i=null!==(t=null===(e=this.player)||void 0===e||null===(s=e.states.currentSources)||void 0===s||null===(a=s[0])||void 0===a?void 0:a.src)&&void 0!==t?t:null,r=t=>Array.from(new URL(t).searchParams.entries()).reduce(((t,[e,s])=>({...t,[e]:s})),{});if(!i)return null;const n=this.player.states.currentSources[0];return{url:i,params:r(i),infoHash:n.infoHash}}}}}function p(){return{async activated(){var s,a;if("play_source"!==(null===(s=this.$route.params)||void 0===s||null===(a=s.action)||void 0===a?void 0:a.type))return;const i=this.$route.params.action.source;console.tag("mixinSourcePlay").log("src",i.src),i.filename=t(i),i.type=e(i),console.tag("mixinSourcePlay").log("filename",i.filename),console.tag("mixinSourcePlay").log("type",i.type),await this.setSource(i),this.play()}};function t(t){let e;return e=t.src.startsWith("play://")?decodeURI(new URL(t.src).pathname).slice(3):decodeURI(t.src),e}function e(t){return"video/mp4"}}function h(){return{async activated(){var t,e;if("play_file"!==(null===(t=this.$route.params)||void 0===t||null===(e=t.action)||void 0===e?void 0:e.type))return;const s=this.$route.params.action.file;console.tag("mixinFilePlay").log("file",s),await this.setSource({src:URL.createObjectURL(s),type:s.type,file:s}),this.play()}}}function d(){return l||Object(r["a"])()?{async activated(){var e,s;if("play_remote"!==(null===(e=this.$route.params)||void 0===e||null===(s=e.action)||void 0===s?void 0:s.type))return;const a=await t.call(this);a&&this.play()}}:{};async function t(){const t=await r.call(this);if(!t)return;const s=o["a"].state.video.currentVideo.infoHash,a=this.getCurrentSourceData();if(a&&a.infoHash===s)return;const i=l(t,{infoHash:s});try{return await this.setSource(i),await e.call(this,i),!0}catch(c){console.tag("Player","error").error(c)}async function r(){var t;const e=await new Promise((t=>{n["ipcRenderer"].once("stream-address",((e,s)=>t(s))),n["ipcRenderer"].send("get-stream-address")}));return null!==(t=e.filepath)&&void 0!==t||(e.filepath="win32"===process.platform?decodeURI(e.address).replace("play:///","").replace(/\//g,"\\"):decodeURI(e.address).replace("play://","")),console.tag("streamAddress").log(e),e}function l(t,{infoHash:e}){let s=t.address,a=t.filepath;return s.startsWith("play://")&&(s+=`?infoHash=${e}`,a||(a=decodeURI(new URL(s).pathname).slice(3))),"win32"===process.platform&&(a=a.replace(/\//g,"\\")),{src:s,type:"video/mp4",filename:a,infoHash:e}}}async function e(t){const{src:e}=t;if(e.startsWith("play://"))return;if(!/wait=0$/gm.test(e))return;const s=o["a"].state.setting.videoCacheTime;if(0===s)return;const a=60*s/this.player.states.duration,i=e.replace(/wait=.*/gm,`wait=${a}`),r=this.player.states.currentTime;await this.setSource(Object.assign(t,{src:i})),this.seek(r)}}function y(){return{beforeRouteLeave(e,s,a){t.call(this),a()},beforeRouteEnter(t,s,a){a((t=>e.call(t)))},mounted(){const t=()=>"Player2"===this.$route.name;this.$watch((()=>{var t;return null===(t=this.player)||void 0===t?void 0:t.states.isPiP}),(e=>{e||this.player.states.isPaused||t()||this.$router.push({name:"Player2"})}))}};function t(){var t,e;this.player&&0!==(null!==(t=null===(e=this.player.states.currentSources)||void 0===e?void 0:e.length)&&void 0!==t?t:0)&&(this.player.states.isPaused||this.player.states.isPiP||"object"!==typeof this.player.states.loadingState&&l&&this.setPiP(!0))}function e(){this.player&&this.player.states.isPiP&&this.setPiP(!1)}}function f(){return{inject:["rootApp","io"],mixins:[t(),e()],mounted(){this.$amplify.addOnAuthStateChangedListener((async t=>{console.log("PiP","signedOut").log({authState:t}),"signedOut"===t&&await this.pause(!0)}))}};function t(){return{created(){(l||Object(r["a"])())&&n["ipcRenderer"].on("pause-player",(()=>this.pause(!0)))}}}function e(){return{mounted(){this.io.on("server_progress",t.bind(this)),this.io.on("update_subtitleList",e.bind(this)),this.io.on("clear_player",s.bind(this))}};function t(t){var e,s,a,i,r,n;const o=()=>"Player2"===this.$route.name;if(!o())return;const l=null!==(e=null===(s=this.player)||void 0===s||null===(a=s.states.currentSources)||void 0===a||null===(i=a[0])||void 0===i?void 0:i.src)&&void 0!==e?e:null;if(!l)return;const c=null!==(r=null===(n=t.find((t=>l.includes(t.name))))||void 0===n?void 0:n.progress)&&void 0!==r?r:null;function u(t){const e=[],s=t.length;let a=t[0],i=1;for(let r=1;r<s;r++)if(t[r]===a&&r<s-1)i+=1;else{if(t[r+1]===a){i+=1;continue}r===s-1&&(i+=1),i&&e.push({color:1===a?"gold":"transparent",length:i/s*100}),a=t[r],i=1}console.tag("Player","updateProgress").log(e)}c&&u(c)}function e(t,e){console.tag("Player","io$update_subtitleList").log({infoHash:t,subtitleList:e})}async function s({status:t,infoHash:e}){var s,a,i,r;const n=null!==(s=null===(a=this.player)||void 0===a||null===(i=a.states.currentSources)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.src)&&void 0!==s?s:null,o=t=>Array.from(new URL(t).searchParams.entries()).reduce(((t,[e,s])=>({...t,[e]:s})),{});if(!n)return;const{infoHash:l}=o(n);async function c(){await this.stop()}l===e&&(/^play:\/\//gm.test(n)&&"paused"===t||(await c.call(this),await new Promise((t=>setTimeout(t,500))),await this.$router.push({name:"Player2"}),/^http/gm.test(n)&&this.$q.notify(this.$t("stop_stream_player")),/^play:\/\//gm.test(n)&&this.$q.notify(this.$t("stop_player"))))}}}var m=c,v=s("2877"),P=s("9989"),g=s("eebe"),w=s.n(g),$=Object(v["a"])(m,a,i,!1,null,null,null);e["default"]=$.exports;w()($,"components",{QPage:P["a"]})}}]);