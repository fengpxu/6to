(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"28b2":function(t,e,s){"use strict";s("ea55")},"2e33":function(t,e,s){},"6bad":function(t,e,s){"use strict";s("8adb")},"6bf8":function(t,e,s){"use strict";s("b643")},"8adb":function(t,e,s){},"8e9b":function(t,e,s){},a6d9:function(t,e,s){"use strict";s("8e9b")},acf94:function(t,e,s){"use strict";s("2e33")},b643:function(t,e,s){},ba12:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings-container"},[s("q-page",{staticClass:"advance-settings",class:{changed:t.changed,large:t.isElectron},staticStyle:{"min-height":"unset"},attrs:{padding:""}},[s("SettingBlock",{directives:[{name:"show",rawName:"v-show",value:t.showDevOption,expression:"showDevOption"}],attrs:{label:"DevTools"}},[s("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.devTools,!1))],1),s("SettingBlock",{attrs:{label:t.t("autoUpdate"),electronOnly:""}},[s("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.autoUpdate,!1)),s("small",{staticClass:"col-12"},[t._v(t._s(t.t("last_check_at"))+": "+t._s(t.lastUpdateCheckTime))])],1),s("SettingBlock",{attrs:{label:t.t("update_channel"),electronOnly:""}},[s("SettingSelect",{attrs:{options:t.chanelOptions},model:{value:t.versionChannel,callback:function(e){t.versionChannel=e},expression:"versionChannel"}}),s("SettingText",t._b({directives:[{name:"show",rawName:"v-show",value:"internal"===t.versionChannel,expression:"versionChannel === 'internal'"}],on:{change:t.storeChange}},"SettingText",t.patConfig,!1))],1),s("SettingBlock",{attrs:{label:t.t("trackerService"),electronOnly:""}},[s("SettingMultiSelect",{attrs:{keyName:"trackerSource",value:t.settings.trackerSource,options:t.trackerOptions},on:{change:t.storeChange}}),s("SettingTextarea",{attrs:{keyName:"trackerList",value:t.settings.trackerList,label:"Trackers"},on:{change:t.storeChange}}),s("div",{staticClass:"col-12 tracker-links text-page q-mt-sm"},[s("span",[t._v(t._s(t.t("recommendUse"))+":")]),s("a",{attrs:{href:"https://github.com/ngosang/trackerslist",target:"_blank"}},[t._v("ngosang/trackerslist")]),s("a",{attrs:{href:"https://github.com/XIU2/TrackersListCollection",target:"_blank"}},[t._v("XIU2/TrackersListCollection")])]),s("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.autoUpdateTrackers,!1)),s("alphabiz-button",{staticClass:"q-mt-sm",attrs:{color:"primary",label:t.t("manualUpdateTracker")},on:{click:t.updateTrackers}}),s("small",{staticClass:"col-12 q-mt-sm"},[t._v(t._s(t.t("last_check_at"))+": "+t._s(t.lastUpdateTrackerTime))])],1),s("SettingBlock",{attrs:{label:t.t("listenPort"),electronOnly:""}},[s("SettingNumber",t._b({on:{change:t.storeChange}},"SettingNumber",t.ports.BTListenPort,!1)),s("SettingNumber",t._b({on:{change:t.storeChange}},"SettingNumber",t.ports.DHTListenPort,!1))],1),s("SettingBlock",{attrs:{label:t.t("encrypt_connection")}},[s("SettingSelect",{attrs:{options:t.secureOptions},model:{value:t.secureOption,callback:function(e){t.secureOption=e},expression:"secureOption"}})],1),t.isMas?t._e():s("SettingBlock",{attrs:{label:t.t("protocols"),electronOnly:""}},[s("div",{staticClass:"col-12 q-mt-sm"},[t._v(t._s(t.t("setDefaultClientForFollowingProtocols")))]),s("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.magnetUrl,!1))],1),t.isWindows?s("SettingBlock",{attrs:{label:t.t("torrent_file"),electronOnly:""}},[s("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.torrentFile,!1))],1):t._e(),t.isWindows?s("SettingBlock",{attrs:{label:t.t("video_file"),electronOnly:""}},[s("div",{staticClass:"col-6 row",attrs:{id:"bind-ports"}},t._l(t.fileExt.video,(function(e){return s("SettingCheckbox",t._b({key:e.label,on:{change:function(e,s){return t.storeExtChange("video",e,s)}}},"SettingCheckbox",e,!1))})),1)]):t._e(),t.isWindows?s("SettingBlock",{attrs:{label:t.t("audio_file"),electronOnly:""}},[s("div",{staticClass:"col-6 row"},t._l(t.fileExt.audio,(function(e){return s("SettingCheckbox",t._b({key:e.label,on:{change:function(e,s){return t.storeExtChange("audio",e,s)}}},"SettingCheckbox",e,!1))})),1)]):t._e(),s("SettingBlock",{attrs:{label:t.t("library_recommend")}},[s("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.showAllChannels,!1))],1),s("SettingBlock",{attrs:{id:"custom-nodes",label:t.$t("custom_nodes")}},[s("SettingTextarea",{attrs:{keyName:"gunPeers",value:t.gunPeers},on:{change:t.setGunPeers}}),s("a",{staticClass:"open-link",attrs:{href:"https://alpha.biz/blog/how-to-deploy-a-gun-server/",target:"_blank"}},[s("span",{staticClass:"open-link-text"},[t._v(t._s(t.$t("learn_how_to_deploy_gun")))]),s("q-icon",{staticClass:"q-ml-xs",attrs:{name:"open_in_new"}})],1)],1),s("SettingBlock",{attrs:{label:t.$t("library_preload"),electronOly:""}},[s("SettingCheckbox",t._b({on:{change:t.storeChange}},"SettingCheckbox",t.checkboxes.libraryPreload,!1))],1)],1),s("SettingFooter",{attrs:{disable:!t.changed,loading:t.loading},on:{submit:t.submit,discard:t.onDiscard,reset:t.onReset}})],1)},a=[],i=s("1b40"),o=s("2d04"),l=s("0613"),r=s("8847");const c="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt",h="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best_ip.txt",u="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt",g="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_ip.txt",d="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best.txt",b="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best_ip.txt",p="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all.txt",m="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all_ip.txt",v="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/best.txt",k="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/all.txt",_="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/http.txt",x="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/best.txt",C="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/all.txt",f="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/http.txt",S=[{label:"ngosang/trackerslist",options:[{value:c,label:"ngosang_best",cdn:!1},{value:h,label:"ngosang_best_ip",cdn:!1},{value:u,label:"ngosang_all",cdn:!1},{value:g,label:"ngosang_all_ip",cdn:!1},{value:d,label:"ngosang_best",cdn:!0},{value:b,label:"ngosang_best_ip",cdn:!0},{value:p,label:"ngosang_all",cdn:!0},{value:m,label:"ngosang_all_ip",cdn:!0}]},{label:"XIU2/TrackersListCollection",options:[{value:v,label:"xiu2_best",cdn:!1},{value:k,label:"xiu2_all",cdn:!1},{value:_,label:"xiu2_http",cdn:!1},{value:x,label:"xiu2_best",cdn:!0},{value:C,label:"xiu2_all",cdn:!0},{value:f,label:"xiu2_http",cdn:!0}]}];var y=s("0967"),T=(s("ddb0"),s("ed08"));let w={on:()=>{},send:()=>{}};w=s("34bb").ipcRenderer;const O={};w.on("send_result",((t,{eventName:e,data:s})=>{O[e][0](s)})),w.on("send_error",((t,{eventName:e,data:s})=>{O[e][1](s)})),w.on("about-dialog",(()=>{T["Bus"].$emit("CALL_ABOUT")}));var U=(t,...e)=>new Promise(((s,n)=>{e.length?w.send(t,...e):w.send(t),O[t]=[s,n]})),P=s("d8ad"),N=s("69d1"),L=s("e061"),E=s("cdb1"),$=s("9384"),B=s("2e92"),I=s("284d"),q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 row"},[s("q-input",{staticClass:"setting-text-input q-mt-sm",attrs:{hint:t.label,type:"text",dense:"",outlined:""},nativeOn:{paste:function(t){t.stopPropagation()}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},D=[],A={props:{value:String,keyName:String,label:String},computed:{text:{get(){return this.value},set(t){this.onChange(t)}}},methods:{onChange(t){this.$emit("change",this.keyName,t)}}},j=A,F=(s("28b2"),s("2877")),V=s("27f9"),Q=s("eebe"),X=s.n(Q),M=Object(F["a"])(j,q,D,!1,null,"188fdf7a",null),R=M.exports;X()(M,"components",{QInput:V["a"]});var H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 row q-mt-sm"},[s("div",{staticClass:"col-12 q-ml-sm"},[t._v(t._s(t.label))]),s("q-input",{staticClass:"setting-textarea-input",attrs:{outlined:"",type:"textarea",rows:"5"},nativeOn:{paste:function(t){t.stopPropagation()}},model:{value:t.texts,callback:function(e){t.texts=e},expression:"texts"}})],1)},W=[],J={props:{value:Array,label:String,keyName:String},computed:{texts:{get(){return this.value.join("\n")},set(t){this.onChange(t.split("\n"))}}},methods:{onChange(t){this.$emit("change",this.keyName,t)}}},z=J,G=(s("acf94"),s("6bad"),s("8572")),K=Object(F["a"])(z,H,W,!1,null,"2ab947b8",null),Y=K.exports;X()(K,"components",{QInput:V["a"],QField:G["a"]});var Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 q-mt-sm"},[s("q-select",{staticClass:"select-multi-input q-px-none",attrs:{outlined:"",dense:"",multiple:"","use-chips":"","use-input":"",value:t.selected,options:t.options},on:{input:t.onChange},nativeOn:{paste:function(t){t.stopPropagation()}},scopedSlots:t._u([{key:"selected-item",fn:function(e){return[s("q-chip",{staticClass:"q-py-md q-px-md",attrs:{removable:"",dense:"",tabindex:e.tabindex,color:"general","text-color":"general"},on:{remove:function(t){return e.removeAtIndex(e.index)}}},[t._v("\n        "+t._s(e.opt.label)+"\n      ")])]}}])})],1)},tt=[],et={props:{value:Array,options:Array,keyName:String},computed:{selected:{get(){return this.value},set(t){this.onChange(t)}}},methods:{onChange(t){this.$emit("change",this.keyName,t)}}},st=et,nt=(s("6bf8"),s("ddd8")),at=s("b047"),it=Object(F["a"])(st,Z,tt,!1,null,null,null),ot=it.exports;X()(it,"components",{QSelect:nt["a"],QChip:at["a"],QField:G["a"]});var lt=function(t,e,s,n){var a,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(o=(i<3?a(o):i>3?a(e,s,o):a(e,s))||o);return i>3&&o&&Object.defineProperty(e,s,o),o},rt=function(t,e,s,n){function a(t){return t instanceof s?t:new s((function(e){e(t)}))}return new(s||(s=Promise))((function(s,i){function o(t){try{r(n.next(t))}catch(e){i(e)}}function l(t){try{r(n["throw"](t))}catch(e){i(e)}}function r(t){t.done?s(t.value):a(t.value).then(o,l)}r((n=n.apply(t,e||[])).next())}))};const ct=!!y["b"].is.electron,ht=S.reduce(((t,e)=>{const s=e.options;return t.push(...s),t}),[]);let ut=class extends o["a"]{constructor(){super(...arguments),this.trackerOptions=ht,this.isWindows=!!y["b"].is.win,this.isElectron=ct,this.chanelOptions=[{label:"stable",value:"stable"},{label:"nightly",value:"nightly"},{label:"internal",value:"internal"}],this.secureOptions=[{label:this.t("auto"),value:"auto"},{label:this.t("enable"),value:"enable"},{label:this.t("disable"),value:"disable"}],this.gunPeers=JSON.parse(localStorage.getItem("gun-custom-peers")||"[]")||[]}mounted(){this.$route.fullPath.includes("highlight")&&setTimeout((()=>{const t=this.$route.query.highlight;if(!t||"string"!==typeof t)return;const e=document.getElementById(t);console.log("high light target",t,e),e&&(console.log(e.scrollIntoView),e.scrollIntoView({behavior:"smooth",block:"center"}),e.classList.add("highlight"),setTimeout((()=>{e.classList.remove("highlight")}),2500))}),500)}get isMas(){return y["b"].is.mac&&Object(N["a"])()}get showDevOption(){return!l["a"].getters.settings.disableDevTools}onDevOptionsChange(t){this.settings.disableDevTools=!t}get lastUpdateCheckTime(){return new Date(l["a"].getters.settings.lastUpdateCheckTime).toLocaleString(r["b"].locale)}get lastUpdateTrackerTime(){return"string"===typeof l["a"].getters.settings.trackerLastUpdateTime?l["a"].getters.settings.trackerLastUpdateTime:new Date(l["a"].getters.settings.trackerLastUpdateTime).toLocaleString(r["b"].locale||"en_US")}get versionChannel(){return this.settings.versionChannel}set versionChannel(t){this.storeChange("versionChannel",t)}get patConfig(){return{label:"Github PAT (internal)",value:this.settings.githubPAT,keyName:"githubPAT"}}get secureOption(){return this.settings.secureOption}set secureOption(t){this.storeChange("secureOption",t)}get checkboxes(){return{devTools:{label:this.t("disable"),value:this.settings.disableDevTools,keyName:"disableDevTools"},autoUpdate:{label:this.t("autoCheckUpdate"),value:this.settings.autoCheckUpdate,keyName:"autoCheckUpdate"},autoUpdateTrackers:{label:this.t("autoUpdateTrackerServiceList"),value:this.settings.autoUpdateTrackerServiceList,keyName:"autoUpdateTrackerServiceList"},magnetUrl:{label:this.t("magnetUrl")+" [ magnet: ]",value:this.settings.bindMagnetUrl,keyName:"bindMagnetUrl"},torrentFile:{label:".torrent",value:this.settings.bindTorrentFile,keyName:"bindTorrentFile"},videoFile:{label:this.t("video_file"),value:this.settings.bindVideoFile,keyName:"bindVideoFile"},audioFile:{label:this.t("audio_file"),value:this.settings.bindAudioFile,keyName:"bindAudioFile"},showAllChannels:{label:this.t("show_all_channels"),value:this.settings.libraryShowAllChannels,keyName:"libraryShowAllChannels"},libraryPreload:{label:this.$t("enable"),value:this.settings.libraryPreload,keyName:"libraryPreload"}}}get fileExt(){const t=["mp4","mkv","avi","mov","wmv","rmvb","flv","webm"],e=["mp3","wav","aac","flac","m4a","wma"];return{video:t.map((t=>(this.settings.bindVideoExts[t]||this.$set(this.settings.bindVideoExts,t,!1),{label:"."+t,value:this.settings.bindVideoExts[t],keyName:t,dense:!0}))),audio:e.map((t=>(this.settings.bindAudioExts[t]||this.$set(this.settings.bindAudioExts,t,!1),{label:"."+t,value:this.settings.bindAudioExts[t],keyName:t,dense:!0})))}}storeExtChange(t,e,s){const n="video"===t?this.settings.bindVideoExts:this.settings.bindAudioExts;n[e]=s,this.storeChange("video"===t?"bindVideoExts":"bindAudioExts",n)}get ports(){const t=t=>!(isNaN(t)||t<17e3||t>22e3)||this.t("range_error",[17e3,22e3]);return{BTListenPort:{label:this.t("BTlistenPort"),value:this.settings.BTlistenPort,keyName:"BTlistenPort",rules:[t],dice:[17e3,22e3]},DHTListenPort:{label:this.t("DHTlistenPort"),value:this.settings.DHTlistenPort,keyName:"DHTlistenPort",rules:[t],dice:[17e3,22e3]}}}updateTrackers(){return rt(this,void 0,void 0,(function*(){const t=yield U("update_tracker",this.settings.trackerSource);if(t&&t.data){const e=t.data;e.length?(this.storeChange("trackerList",e),t.time&&this.storeChange("trackerLastUpdateTime",t.time),this.notify(this.t("manualUpdateSuccess"))):this.notify(this.t("update_failed"))}}))}setGunPeers(t,e){return this.gunPeers=e,this.storeChange(t,e)}beforeRouteEnter(t,e,s){if(t.hash){const e=t.hash;s((()=>{setTimeout((()=>{const t=document.querySelector(e);t?t.scrollIntoView():console.log(e)}),100)}))}else s(!0)}submit(){return rt(this,void 0,void 0,(function*(){if(this.changes.has("gunPeers")){const t=()=>rt(this,void 0,void 0,(function*(){const t=this.changes.get("gunPeers");if(t){const e=t.filter((t=>t)).map((t=>{const e=t.trim();return e.startsWith("http")?e:e.match(/^\s+:\/\//)?e.replace(/^\s\/\//,"https://"):"https://"+e}));localStorage.setItem("gun-custom-peers",JSON.stringify(e)),this.gunPeers=e}this.changes.delete("gunPeers"),yield this.submit()})),e=t=>rt(this,void 0,void 0,(function*(){let e=null;const s=t=>this.$t("wait_for_reboot",{seconds:Math.round(t)}),n=yield new Promise((n=>{const a=t=>{e&&(clearInterval(e),e=null,i(),n(t))},i=this.$q.notify({group:!1,progress:!0,timeout:0,message:s(t),icon:"error",position:"bottom-right",actions:[{label:this.$t("cancel"),handler:()=>a(!1)}]});e=setInterval((()=>{if(t-=1,t<=0)return a(!0);i({message:s(t)})}),1e3)})),a=()=>rt(this,void 0,void 0,(function*(){yield this.$router.push({name:"Index"}),location.reload()}));n&&(yield a())}));yield this.$alphabiz.dialog({title:this.t("edit_cache_node"),message:this.t("custom_nodes_hint"),ok:{label:this.t("reboot_now"),handler:s=>rt(this,void 0,void 0,(function*(){yield t(),e(10),s.hide()}))},cancel:{label:this.t("reboot_later"),handler:e=>rt(this,void 0,void 0,(function*(){yield t(),e.hide()}))}}).promise()}else yield this.onSubmit(),this.changes.get("versionChannel")&&ct&&setTimeout((()=>{P["a"].$emit("updater$recheckUpdate")}),1e3)}))}};lt([Object(i["b"])("showDevOption")],ut.prototype,"onDevOptionsChange",null),ut=lt([Object(i["a"])({components:{SettingBlock:L["a"],SettingCheckbox:$["a"],SettingSelect:B["a"],SettingNumber:I["a"],SettingText:R,SettingTextarea:Y,SettingMultiSelect:ot,SettingFooter:E["a"]}})],ut);var gt=ut,dt=gt,bt=(s("a6d9"),s("9989")),pt=s("0016"),mt=s("b498"),vt=Object(F["a"])(dt,n,a,!1,null,"5cfbe7d8",null);e["default"]=vt.exports;X()(vt,"components",{QPage:bt["a"],QIcon:pt["a"],QColor:mt["a"]})},ea55:function(t,e,s){}}]);