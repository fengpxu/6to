(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1b07":function(e,t,n){},"28b2":function(e,t,n){"use strict";n("ea55")},"2e33":function(e,t,n){},"6bad":function(e,t,n){"use strict";n("8adb")},"6bf8":function(e,t,n){"use strict";n("b643")},"8adb":function(e,t,n){},acf94:function(e,t,n){"use strict";n("2e33")},b643:function(e,t,n){},b94f:function(e,t,n){"use strict";n("1b07")},ba12:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"advance-settings",class:{changed:e.changed},attrs:{padding:""}},[n("SettingBlock",{directives:[{name:"show",rawName:"v-show",value:e.showDevOption,expression:"showDevOption"}],attrs:{label:"DevTools"}},[n("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.devTools,!1))],1),n("SettingBlock",{attrs:{label:e.t("autoUpdate"),electronOnly:""}},[n("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.autoUpdate,!1)),n("small",{staticClass:"col-12"},[e._v(e._s(e.t("last_check_at"))+": "+e._s(e.lastUpdateCheckTime))])],1),n("SettingBlock",{attrs:{label:e.t("update_channel"),electronOnly:""}},[n("SettingSelect",{attrs:{options:e.chanelOptions},model:{value:e.versionChannel,callback:function(t){e.versionChannel=t},expression:"versionChannel"}}),n("SettingText",e._b({directives:[{name:"show",rawName:"v-show",value:"internal"===e.versionChannel,expression:"versionChannel === 'internal'"}],on:{change:e.storeChange}},"SettingText",e.patConfig,!1))],1),n("SettingBlock",{attrs:{label:e.t("trackerService"),electronOnly:""}},[n("SettingMultiSelect",{attrs:{keyName:"trackerSource",value:e.settings.trackerSource,options:e.trackerOptions},on:{change:e.storeChange}}),n("SettingTextarea",{attrs:{keyName:"trackerList",value:e.settings.trackerList,label:"Trackers"},on:{change:e.storeChange}}),n("div",{staticClass:"col-12 tracker-links text-page q-mt-sm"},[n("span",[e._v(e._s(e.t("recommendUse"))+":")]),n("a",{attrs:{href:"https://github.com/ngosang/trackerslist",target:"_blank"}},[e._v("ngosang/trackerslist")]),n("a",{attrs:{href:"https://github.com/XIU2/TrackersListCollection",target:"_blank"}},[e._v("XIU2/TrackersListCollection")])]),n("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.autoUpdateTrackers,!1)),n("alphabiz-button",{staticClass:"q-mt-sm",attrs:{color:"primary",label:e.t("manualUpdateTracker")},on:{click:e.updateTrackers}}),n("small",{staticClass:"col-12 q-mt-sm"},[e._v(e._s(e.t("last_check_at"))+": "+e._s(e.lastUpdateTrackerTime))])],1),n("SettingBlock",{attrs:{label:e.t("listenPort"),electronOnly:""}},[n("SettingNumber",e._b({on:{change:e.storeChange}},"SettingNumber",e.ports.BTListenPort,!1)),n("SettingNumber",e._b({on:{change:e.storeChange}},"SettingNumber",e.ports.DHTListenPort,!1))],1),n("SettingBlock",{attrs:{label:e.t("encrypt_connection")}},[n("SettingSelect",{attrs:{options:e.secureOptions},model:{value:e.secureOption,callback:function(t){e.secureOption=t},expression:"secureOption"}})],1),e.isMas?e._e():n("SettingBlock",{attrs:{label:e.t("protocols"),electronOnly:""}},[n("div",{staticClass:"col-12 q-mt-sm"},[e._v(e._s(e.t("setDefaultClientForFollowingProtocols")))]),n("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.magnetUrl,!1))],1),e.isWindows?n("SettingBlock",{attrs:{label:e.t("torrent_file"),electronOnly:""}},[n("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.torrentFile,!1))],1):e._e(),e.isWindows?n("SettingBlock",{attrs:{label:e.t("video_file"),electronOnly:""}},[n("div",{staticClass:"col-6 row",attrs:{id:"bind-ports"}},e._l(e.fileExt.video,(function(t){return n("SettingCheckbox",e._b({key:t.label,on:{change:function(t,n){return e.storeExtChange("video",t,n)}}},"SettingCheckbox",t,!1))})),1)]):e._e(),e.isWindows?n("SettingBlock",{attrs:{label:e.t("audio_file"),electronOnly:""}},[n("div",{staticClass:"col-6 row"},e._l(e.fileExt.audio,(function(t){return n("SettingCheckbox",e._b({key:t.label,on:{change:function(t,n){return e.storeExtChange("audio",t,n)}}},"SettingCheckbox",t,!1))})),1)]):e._e(),n("SettingBlock",{attrs:{label:e.t("library_recommend")}},[n("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.showAllChannels,!1))],1),n("SettingBlock",{attrs:{label:e.$t("custom_nodes")}},[n("SettingTextarea",{attrs:{keyName:"gunPeers",value:e.gunPeers},on:{change:e.setGunPeers}})],1),n("SettingBlock",{attrs:{label:e.$t("library_preload"),electronOly:""}},[n("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.libraryPreload,!1))],1),n("SettingFooter",{attrs:{disable:!e.changed,loading:e.loading},on:{submit:e.submit,discard:e.onDiscard,reset:e.onReset}})],1)},a=[],i=n("1b40"),l=n("2d04"),o=n("0613"),r=n("8847");const c="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt",u="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best_ip.txt",g="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt",h="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_ip.txt",b="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best.txt",d="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best_ip.txt",p="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all.txt",m="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all_ip.txt",v="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/best.txt",k="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/all.txt",x="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/http.txt",C="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/best.txt",_="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/all.txt",f="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/http.txt",S=[{label:"ngosang/trackerslist",options:[{value:c,label:"ngosang_best",cdn:!1},{value:u,label:"ngosang_best_ip",cdn:!1},{value:g,label:"ngosang_all",cdn:!1},{value:h,label:"ngosang_all_ip",cdn:!1},{value:b,label:"ngosang_best",cdn:!0},{value:d,label:"ngosang_best_ip",cdn:!0},{value:p,label:"ngosang_all",cdn:!0},{value:m,label:"ngosang_all_ip",cdn:!0}]},{label:"XIU2/TrackersListCollection",options:[{value:v,label:"xiu2_best",cdn:!1},{value:k,label:"xiu2_all",cdn:!1},{value:x,label:"xiu2_http",cdn:!1},{value:C,label:"xiu2_best",cdn:!0},{value:_,label:"xiu2_all",cdn:!0},{value:f,label:"xiu2_http",cdn:!0}]}];var y=n("436b"),T=n("0967"),w=(n("ddb0"),n("ed08"));let O={on:()=>{},send:()=>{}};O=n("34bb").ipcRenderer;const U={};O.on("send_result",((e,{eventName:t,data:n})=>{U[t][0](n)})),O.on("send_error",((e,{eventName:t,data:n})=>{U[t][1](n)})),O.on("about-dialog",(()=>{w["Bus"].$emit("CALL_ABOUT")}));var P=(e,...t)=>new Promise(((n,s)=>{t.length?O.send(e,...t):O.send(e),U[e]=[n,s]})),N=n("d8ad"),L=n("69d1"),B=n("e061"),D=n("cdb1"),E=n("9384"),A=n("2e92"),j=n("284d"),q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-12 row"},[n("q-input",{staticClass:"setting-text-input q-mt-sm",attrs:{hint:e.label,type:"text",dense:"",outlined:""},nativeOn:{paste:function(e){e.stopPropagation()}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},F=[],I={props:{value:String,keyName:String,label:String},computed:{text:{get(){return this.value},set(e){this.onChange(e)}}},methods:{onChange(e){this.$emit("change",this.keyName,e)}}},$=I,X=(n("28b2"),n("2877")),Q=n("27f9"),V=n("eebe"),M=n.n(V),R=Object(X["a"])($,q,F,!1,null,"188fdf7a",null),H=R.exports;M()(R,"components",{QInput:Q["a"]});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-12 row q-mt-sm"},[n("div",{staticClass:"col-12 q-ml-sm"},[e._v(e._s(e.label))]),n("q-input",{staticClass:"setting-textarea-input",attrs:{outlined:"",type:"textarea",rows:"5"},nativeOn:{paste:function(e){e.stopPropagation()}},model:{value:e.texts,callback:function(t){e.texts=t},expression:"texts"}})],1)},W=[],G={props:{value:Array,label:String,keyName:String},computed:{texts:{get(){return this.value.join("\n")},set(e){this.onChange(e.split("\n"))}}},methods:{onChange(e){this.$emit("change",this.keyName,e)}}},z=G,K=(n("acf94"),n("6bad"),n("8572")),Y=Object(X["a"])(z,J,W,!1,null,"2ab947b8",null),Z=Y.exports;M()(Y,"components",{QInput:Q["a"],QField:K["a"]});var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-12 q-mt-sm"},[n("q-select",{staticClass:"select-multi-input q-px-none",attrs:{outlined:"",dense:"",multiple:"","use-chips":"","use-input":"",value:e.selected,options:e.options},on:{input:e.onChange},nativeOn:{paste:function(e){e.stopPropagation()}},scopedSlots:e._u([{key:"selected-item",fn:function(t){return[n("q-chip",{staticClass:"q-py-md q-px-md",attrs:{removable:"",dense:"",tabindex:t.tabindex,color:"general","text-color":"general"},on:{remove:function(e){return t.removeAtIndex(t.index)}}},[e._v("\n        "+e._s(t.opt.label)+"\n      ")])]}}])})],1)},te=[],ne={props:{value:Array,options:Array,keyName:String},computed:{selected:{get(){return this.value},set(e){this.onChange(e)}}},methods:{onChange(e){this.$emit("change",this.keyName,e)}}},se=ne,ae=(n("6bf8"),n("ddd8")),ie=n("b047"),le=Object(X["a"])(se,ee,te,!1,null,null,null),oe=le.exports;M()(le,"components",{QSelect:ae["a"],QChip:ie["a"],QField:K["a"]});var re=function(e,t,n,s){var a,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(i<3?a(l):i>3?a(t,n,l):a(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},ce=function(e,t,n,s){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function l(e){try{r(s.next(e))}catch(t){i(t)}}function o(e){try{r(s["throw"](e))}catch(t){i(t)}}function r(e){e.done?n(e.value):a(e.value).then(l,o)}r((s=s.apply(e,t||[])).next())}))};const ue=!!T["b"].is.electron,ge=S.reduce(((e,t)=>{const n=t.options;return e.push(...n),e}),[]);let he=class extends l["a"]{constructor(){super(...arguments),this.trackerOptions=ge,this.isWindows=!!T["b"].is.win,this.chanelOptions=[{label:"stable",value:"stable"},{label:"nightly",value:"nightly"},{label:"internal",value:"internal"}],this.secureOptions=[{label:this.t("auto"),value:"auto"},{label:this.t("enable"),value:"enable"},{label:this.t("disable"),value:"disable"}],this.gunPeers=JSON.parse(localStorage.getItem("gun-custom-peers")||"[]")||[]}get isMas(){return T["b"].is.mac&&Object(L["a"])()}get showDevOption(){return!o["a"].getters.settings.disableDevTools}onDevOptionsChange(e){this.settings.disableDevTools=!e}get lastUpdateCheckTime(){return new Date(o["a"].getters.settings.lastUpdateCheckTime).toLocaleString(r["b"].locale)}get lastUpdateTrackerTime(){return"string"===typeof o["a"].getters.settings.trackerLastUpdateTime?o["a"].getters.settings.trackerLastUpdateTime:new Date(o["a"].getters.settings.trackerLastUpdateTime).toLocaleString(r["b"].locale||"en_US")}get versionChannel(){return this.settings.versionChannel}set versionChannel(e){this.storeChange("versionChannel",e)}get patConfig(){return{label:"Github PAT (internal)",value:this.settings.githubPAT,keyName:"githubPAT"}}get secureOption(){return this.settings.secureOption}set secureOption(e){this.storeChange("secureOption",e)}get checkboxes(){return{devTools:{label:this.t("disable"),value:this.settings.disableDevTools,keyName:"disableDevTools"},autoUpdate:{label:this.t("autoCheckUpdate"),value:this.settings.autoCheckUpdate,keyName:"autoCheckUpdate"},autoUpdateTrackers:{label:this.t("autoUpdateTrackerServiceList"),value:this.settings.autoUpdateTrackerServiceList,keyName:"autoUpdateTrackerServiceList"},magnetUrl:{label:this.t("magnetUrl")+" [ magnet: ]",value:this.settings.bindMagnetUrl,keyName:"bindMagnetUrl"},torrentFile:{label:".torrent",value:this.settings.bindTorrentFile,keyName:"bindTorrentFile"},videoFile:{label:this.t("video_file"),value:this.settings.bindVideoFile,keyName:"bindVideoFile"},audioFile:{label:this.t("audio_file"),value:this.settings.bindAudioFile,keyName:"bindAudioFile"},showAllChannels:{label:this.t("show_all_channels"),value:this.settings.libraryShowAllChannels,keyName:"libraryShowAllChannels"},libraryPreload:{label:this.$t("enable"),value:this.settings.libraryPreload,keyName:"libraryPreload"}}}get fileExt(){const e=["mp4","mkv","avi","mov","wmv","rmvb","flv","webm"],t=["mp3","wav","aac","flac","m4a","wma"];return{video:e.map((e=>(this.settings.bindVideoExts[e]||this.$set(this.settings.bindVideoExts,e,!1),{label:"."+e,value:this.settings.bindVideoExts[e],keyName:e,dense:!0}))),audio:t.map((e=>(this.settings.bindAudioExts[e]||this.$set(this.settings.bindAudioExts,e,!1),{label:"."+e,value:this.settings.bindAudioExts[e],keyName:e,dense:!0})))}}storeExtChange(e,t,n){const s="video"===e?this.settings.bindVideoExts:this.settings.bindAudioExts;s[t]=n,this.storeChange("video"===e?"bindVideoExts":"bindAudioExts",s)}get ports(){const e=e=>!(isNaN(e)||e<17e3||e>22e3)||this.t("range_error",[17e3,22e3]);return{BTListenPort:{label:this.t("BTlistenPort"),value:this.settings.BTlistenPort,keyName:"BTlistenPort",rules:[e],dice:[17e3,22e3]},DHTListenPort:{label:this.t("DHTlistenPort"),value:this.settings.DHTlistenPort,keyName:"DHTlistenPort",rules:[e],dice:[17e3,22e3]}}}updateTrackers(){return ce(this,void 0,void 0,(function*(){const e=yield P("update_tracker",this.settings.trackerSource);if(e&&e.data){const t=e.data;t.length?(this.storeChange("trackerList",t),e.time&&this.storeChange("trackerLastUpdateTime",e.time),this.notify(this.t("manualUpdateSuccess"))):this.notify(this.t("update_failed"))}}))}setGunPeers(e,t){return this.gunPeers=t,this.storeChange(e,t)}beforeRouteEnter(e,t,n){if(e.hash){const t=e.hash;n((()=>{setTimeout((()=>{const e=document.querySelector(t);e?e.scrollIntoView():console.log(t)}),100)}))}else n(!0)}submit(){return ce(this,void 0,void 0,(function*(){if(this.changes.has("gunPeers"))return y["a"].create({message:this.t("custom_nodes_hint"),ok:this.t("ok")}).onOk((()=>{const e=this.changes.get("gunPeers");if(e){const t=e.filter((e=>e));localStorage.setItem("gun-custom-peers",JSON.stringify(t)),this.gunPeers=t}this.changes.delete("gunPeers"),this.submit()}));this.onSubmit(),this.changes.get("versionChannel")&&ue&&setTimeout((()=>{N["a"].$emit("updater$recheckUpdate")}),1e3)}))}};re([Object(i["b"])("showDevOption")],he.prototype,"onDevOptionsChange",null),he=re([Object(i["a"])({components:{SettingBlock:B["a"],SettingCheckbox:E["a"],SettingSelect:A["a"],SettingNumber:j["a"],SettingText:H,SettingTextarea:Z,SettingMultiSelect:oe,SettingFooter:D["a"]}})],he);var be=he,de=be,pe=(n("b94f"),n("9989")),me=n("b498"),ve=Object(X["a"])(de,s,a,!1,null,"f4763b7c",null);t["default"]=ve.exports;M()(ve,"components",{QPage:pe["a"],QColor:me["a"]})},ea55:function(e,t,n){}}]);