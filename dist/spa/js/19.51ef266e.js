(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{aa3b:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"relative-position"},[t("VideoJsPlayer",{ref:"videoJsPlayer",staticStyle:{width:"100%",height:"600px"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"fixed-center q-pa-md rounded-borders bg-page shadow-2 overflow-hidden",staticStyle:{"z-index":"9999","white-space":"pre-wrap","max-width":"80vw"}},[e._v("\n    "+e._s(JSON.stringify(e.$store.state.video,null,2))+"\n  ")])],1)},i=[],r=t("aed2"),d=r["a"],n=t("2877"),o=Object(n["a"])(d,s,i,!1,null,"17aea2b2",null);a["default"]=o.exports},aed2:function(e,a,t){"use strict";(function(e){t("ddb0"),t("2b3d"),t("9861"),t("5319");var s=t("77d8"),i=t("41ed"),r=t("0613");const d=t("ed08").isElectron();function n(){return{data(){return{isActive:!1}},activated(){this.isActive=!0},deactivated(){this.isActive=!1}}}function o(){return d||Object(s["a"])()?{async activated(){r["a"].state.video.currentVideo.remotePlay&&(await this.setSourceByStreamAddress(),this.play(),await r["a"].dispatch("resetRemotePlay"))},deactivated(){},methods:{async setSourceByStreamAddress(){const a=await s.call(this);function t(a){let t=a.address;t.startsWith("play://")&&(t+=`?infoHash=${r["a"].state.video.currentVideo.infoHash}`);let s=decodeURI(new URL(decodeURI(t)).pathname);return"win32"===e.platform&&(s=s.slice(3).replace(/\//g,"\\")),{src:t,type:"video/mp4",filename:s}}async function s(){var a;const t=await new Promise((e=>{i["ipcRenderer"].once("stream-address",((a,t)=>e(t))),i["ipcRenderer"].send("get-stream-address")}));return null!==(a=t.filepath)&&void 0!==a||(t.filepath="win32"===e.platform?decodeURI(t.address).replace("play:///","").replace(/\//g,"\\"):decodeURI(t.address).replace("play://","")),t}console.tag("streamAddress").log(a),a&&await this.setSource(t.call(this,a))}}}:{}}a["a"]={name:"Player2",mixins:[n(),o()],mounted(){},beforeDestroy(){},methods:{async setSource(e){const a=this.$refs.videoJsPlayer.player;await a.promiseReady,await a.setSource(e)},play(){const e=this.$refs.videoJsPlayer.player;e.play()},clear(){},loadPlayer(){}}}}).call(this,t("4362"))}}]);