(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0e78":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("article",{staticClass:"q-pb-lg"},[s("div",[s("div",{staticClass:"configuration-variable q-pt-sm row "},[s("div",{staticClass:"col-4 m-t-4 "},[s("span",{staticClass:"label-name"},[t._v(t._s(this.$t("autoUpdate")))])]),s("div",{staticClass:"col-8 row"},[s("div",{staticClass:"col-12"},[s("q-checkbox",{staticClass:"rox-font",attrs:{dense:"",label:t.$t("autoCheckUpdate")},model:{value:t.settings.autoCheckUpdate,callback:function(e){t.$set(t.settings,"autoCheckUpdate",e)},expression:"settings.autoCheckUpdate"}})],1),s("div",{staticClass:"col-12"},[s("small",[t._v(t._s(t.$t("last_check_at"))+": "+t._s(t.lastUpdateCheckTimeString))])])])]),s("div",{staticClass:"configuration-variable q-bt-sm row"},[s("div",{staticClass:"col-4 q-mt-sm"},[s("span",{staticClass:"label-name"},[t._v(t._s(t.$t("update_channel")))])]),s("div",{staticClass:"col-3 column"},[s("q-select",{attrs:{"clear-icon":"col-12",options:t.availableVersions,outlined:"",dense:"",autocomplete:"stable","emit-value":""},model:{value:t.settings.versionChannel,callback:function(e){t.$set(t.settings,"versionChannel",e)},expression:"settings.versionChannel"}})],1)]),s("div",{staticClass:"configuration-variable q-mt-sm row"},[s("div",{staticClass:"col-4 m-t-8"},[s("span",{staticClass:"label-name col"},[t._v(t._s(t.$t("trackerService")))])]),s("div",{staticClass:"col-6 column"},[s("div",{staticClass:"q-mt-sm"},[s("q-select",{attrs:{outlined:"","use-input":"","use-chips":"",multiple:"","input-debounce":"0",options:t.trackerSourceOptions[0].options,dense:""},model:{value:t.settings.trackerSource,callback:function(e){t.$set(t.settings,"trackerSource",e)},expression:"settings.trackerSource"}})],1),s("div",{staticClass:"q-mt-sm trackerArea"},[s("q-input",{attrs:{rows:"3","auto-complete":"off",placeholder:"Tracker Sources",outlined:"",type:"textarea"},model:{value:t.settings.trackerBt,callback:function(e){t.$set(t.settings,"trackerBt",e)},expression:"settings.trackerBt"}})],1),s("div",{staticClass:"q-mt-sm row lookUp"},[s("div",{staticClass:"col-5 m-t-4 checkOutGroup"},[s("span",{staticClass:"wd"},[t._v(t._s(this.$t("recommendUse"))+"：")]),s("a",{staticClass:"checkDocument q-ml-sm text-page",attrs:{target:"_blank",href:"https://github.com/ngosang/trackerslist"}},[t._v("ngosang/trackerslist\n                  "),s("q-icon",{attrs:{size:"12",name:"flag"}})],1),s("a",{staticClass:"checkDocument q-ml-sm text-page",attrs:{target:"_blank",href:"https://github.com/XIU2/TrackersListCollection"}},[t._v("XIU2/TrackersListCollection\n                  "),s("q-icon",{attrs:{size:"12",name:"flag"}})],1)])]),s("div",{staticClass:"q-mt-md "},[s("q-checkbox",{attrs:{dense:"",label:t.$t("autoUpdateTrackerServiceList")},model:{value:t.settings.autoUpdateTrackerServiceList,callback:function(e){t.$set(t.settings,"autoUpdateTrackerServiceList",e)},expression:"settings.autoUpdateTrackerServiceList"}})],1),s("div",{staticClass:"q-mt-md manual-update"},[s("alphabiz-button",{attrs:{color:"primary",label:t.$t("manualUpdateTracker"),"on-click":t.updateTracker},model:{value:t.disable,callback:function(e){t.disable=e},expression:"disable"}})],1),s("div",{staticClass:"q-mt-md updatedate"},[t._v("\n              "+t._s(t.$t("last_check_at"))+": "+t._s(t.lastTrackerUpdateTime)+"\n            ")])])]),s("div",{staticClass:"configuration-variable q-pt-sm row",attrs:{id:"bind-ports"}},[s("div",{staticClass:"col-4 m-t-8"},[s("span",{staticClass:"label-name col"},[t._v(t._s(this.$t("listenPort")))])]),s("div",{staticClass:"col-3 column"},[s("q-input",{staticClass:"q-mt-sm",attrs:{outlined:"",dense:"",hint:t.$t("BTlistenPort")},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{outline:"",name:"casino"},on:{click:function(){return t.settings.BTlistenPort=t.randomPort()}}})]},proxy:!0}]),model:{value:t.settings.BTlistenPort,callback:function(e){t.$set(t.settings,"BTlistenPort",t._n(e))},expression:"settings.BTlistenPort"}}),s("q-input",{staticClass:"q-mt-sm",attrs:{outlined:"",dense:"",hint:t.$t("DHTlistenPort")},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{outline:"",name:"casino"},on:{click:function(){return t.settings.DHTlistenPort=t.randomPort()}}})]},proxy:!0}]),model:{value:t.settings.DHTlistenPort,callback:function(e){t.$set(t.settings,"DHTlistenPort",t._n(e))},expression:"settings.DHTlistenPort"}})],1)]),s("div",{staticClass:"configuration-variable q-pt-sm row",attrs:{id:"associations"}},[s("div",{staticClass:"col-4 m-b-8"},[s("span",{staticClass:"label-name col"},[t._v(t._s(this.$t("downloadAgreement")))])]),s("div",{staticClass:"col-8 row"},[s("div",{staticClass:"col-12 m-b-4"},[t._v("\n              "+t._s(this.$t("setDefaultClientForFollowingProtocols"))+"\n            ")]),s("div",{staticClass:"col-12 "},[s("q-toggle",{attrs:{label:this.$t("magnetUrl")+"[ magnet:// ]"},model:{value:t.settings.bindMagnetUrl,callback:function(e){t.$set(t.settings,"bindMagnetUrl",e)},expression:"settings.bindMagnetUrl"}})],1),t.isWindows?[s("div",{staticClass:"col-12"},[s("q-toggle",{attrs:{label:this.$t("torrent_file")+"[ .torrent ]"},model:{value:t.settings.bindTorrentFile,callback:function(e){t.$set(t.settings,"bindTorrentFile",e)},expression:"settings.bindTorrentFile"}})],1),s("div",{staticClass:"col-12"},[s("q-toggle",{attrs:{label:this.$t("video_file")+"[ .mkv .avi ... ]"},model:{value:t.settings.bindVideoFile,callback:function(e){t.$set(t.settings,"bindVideoFile",e)},expression:"settings.bindVideoFile"}})],1),s("div",{staticClass:"col-12"},[s("q-toggle",{attrs:{label:this.$t("audio_file")+"[ .mp3 .wav ... ]"},model:{value:t.settings.bindAudioFile,callback:function(e){t.$set(t.settings,"bindAudioFile",e)},expression:"settings.bindAudioFile"}})],1)]:t._e()],2)])])]),s("q-footer",{attrs:{bordered:""}},[s("div",{staticClass:"row q-py-sm q-px-sm"},[s("alphabiz-button",{staticClass:"q-mx-xs",attrs:{color:"primary",label:t.$t("submit"),"on-click":t.submit},model:{value:t.disable,callback:function(e){t.disable=e},expression:"disable"}}),s("alphabiz-button",{staticClass:"q-mx-xs",attrs:{color:"general",label:t.$t("discard")},on:{click:t.discard},model:{value:t.disable,callback:function(e){t.disable=e},expression:"disable"}}),s("q-space"),s("alphabiz-button",{staticClass:"q-mx-xs",attrs:{color:"negative",label:t.$t("reset")},on:{click:t.resetSettings},model:{value:t.disable,callback:function(e){t.disable=e},expression:"disable"}})],1)])],1)},i=[],n=(s("a79d"),s("0c6d"));const l={aria2:"aria2/1.35.0",transmission:"Transmission/2.94",chrome:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",du:"netdisk;6.0.0.12;PC;PC-Windows;10.0.16299;WindowsBaiduYunGuanJia"},o="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt",r="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best_ip.txt",c="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt",d="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_ip.txt",u="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best.txt",g="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best_ip.txt",h="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all.txt",p="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all_ip.txt",b="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/best.txt",m="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/all.txt",v="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/http.txt",k="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/best.txt",_="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/all.txt",C="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/http.txt",f=[{label:"ngosang/trackerslist",options:[{value:o,label:"ngosang_best",cdn:!1},{value:r,label:"ngosang_best_ip",cdn:!1},{value:c,label:"ngosang_all",cdn:!1},{value:d,label:"ngosang_all_ip",cdn:!1},{value:u,label:"ngosang_best",cdn:!0},{value:g,label:"ngosang_best_ip",cdn:!0},{value:h,label:"ngosang_all",cdn:!0},{value:p,label:"ngosang_all_ip",cdn:!0}]},{label:"XIU2/TrackersListCollection",options:[{value:b,label:"xiu2_best",cdn:!1},{value:m,label:"xiu2_all",cdn:!1},{value:v,label:"xiu2_http",cdn:!1},{value:k,label:"xiu2_best",cdn:!0},{value:_,label:"xiu2_all",cdn:!0},{value:C,label:"xiu2_http",cdn:!0}]}];var $=s("2ef0"),T=s("849b");const x=t=>{const{autoCheckUpdate:e,useProxyService:s,trackerSource:a,trackerBt:i,autoUpdateTrackerServiceList:n,listenPort:l,BTlistenPort:o,DHTlistenPort:r,bindMagnetUrl:c,bindTorrentFile:d,bindVideoFile:u,bindAudioFile:g,userAgent:h,RPCauthorizationkey:p,downloadDirectory:b,versionChannel:m}=t,v={autoCheckUpdate:e,useProxyService:s,trackerSource:a,trackerBt:i,autoUpdateTrackerServiceList:n,listenPort:l,BTlistenPort:o,DHTlistenPort:r,bindMagnetUrl:c,bindTorrentFile:d,bindVideoFile:u,bindAudioFile:g,userAgent:h,RPCauthorizationkey:p,downloadDirectory:b,versionChannel:m};return v};var q={name:"Settings",data(){const t=x(this.$store.state.setting.settings),e=Object($["cloneDeep"])(t);return{isWindows:navigator.userAgent.includes("Windows NT"),settings:t,settingsOriginal:e,trackerSourceOptions:f,isPwd:!0,availableVersions:["stable","nightly"],disable:!1}},computed:{lastUpdateCheckTimeString(){return new Date(this.$store.getters.getSettings.lastUpdateCheckTime).toLocaleString(this.$i18n.locale)},lastTrackerUpdateTime(){return new Date(this.$store.getters.getSettings.trackerLastUpdateTime).toLocaleString(this.$i18n.locale)}},methods:{async clear_select_directory(){await Object(n["a"])("set_setting",this.settings)},async select_directory(){const t=await Object(n["a"])("select_directory");t.filePaths.length>1?this.$q.notify(this.$t("not_length")):this.settings.downloadDirectory=t.filePaths[0]},selectUserAgent(t){const e=l[t];e&&(this.settings.userAgent=e)},syncSettingsConfig(){this.$store.dispatch("fetchSettings",this.settings).then((t=>{this.settings=x(t),this.settingsOriginal=Object($["cloneDeep"])(this.settings)}))},async submit(){this.loading=!0,this.$store.dispatch("set",this.settings).then((()=>{this.syncSettingsConfig(),this.$q.notify({message:this.$t("preferences_set_successfully"),position:"bottom-right",type:"positive",timeout:3e3})})).catch((()=>{this.$q.notify({message:this.$t("preferences_set_fail"),position:"bottom-right",type:"negative",timeout:3e3})})).finally((()=>{T["a"].emit("update_torrent_settings",{dhtPort:this.settings.DHTlistenPort,torrentPort:this.settings.BTlistenPort}),this.loading=!1}))},async updateTracker(){const t=await Object(n["a"])("update_tracker",this.settings.trackerSource);t&&t.data&&(t.data.length&&(this.settings.trackerBt=t.data.join("\n")),t.failure.length?this.$q.notify({message:this.$t("manualUpdateFail"),caption:t.failure.join("\n")}):this.$q.notify({message:this.$t("manualUpdateSuccess")}),t.success.length&&(this.updateTime=t.time))},discard(){this.syncSettingsConfig()},resetSettings(){this.$q.dialog({title:this.$t("reset"),message:this.$t("reset_all_settings"),ok:{textColor:"red",color:"unset",flat:!0,label:this.$t("reset")},cancel:{textColor:"unset",color:"unset",flat:!0,label:this.$t("not_now")}}).onOk((()=>{this.$store.dispatch("resetSettings").then((t=>{this.$i18n.locale=t.language,this.$q.notify({message:this.$t("preferences_resetted"),position:"bottom-right",type:"positive",timeout:3e3})}))}))},randomPort(){const t=[this.settings.BTlistenPort,this.settings.DHTlistenPort];let e=t[0];while(t.includes(e))e=Math.floor(5e3*Math.random())+17e3;return e},simulateProgress(t){this[`loading${t}`]=!0,setTimeout((()=>{this[`loading${t}`]=!1}),3e3)}},destroyed(){this.discard()},mounted(){if(this.syncSettingsConfig(),this.$router.currentRoute.hash){const t=document.querySelector(this.$router.currentRoute.hash);t&&t.scrollIntoView()}}},w=q,S=(s("24fb"),s("2877")),y=s("9989"),U=s("8f8e"),P=s("ddd8"),F=s("9564"),D=s("9c40"),L=s("05c0"),B=s("27f9"),j=s("0016"),A=s("7ff0"),I=s("2c91"),O=s("8572"),M=s("eebe"),Q=s.n(M),H=Object(S["a"])(w,a,i,!1,null,"508c81e4",null);e["default"]=H.exports;Q()(H,"components",{QPage:y["a"],QCheckbox:U["a"],QSelect:P["a"],QToggle:F["a"],QBtn:D["a"],QTooltip:L["a"],QInput:B["a"],QIcon:j["a"],QFooter:A["a"],QSpace:I["a"],QField:O["a"]})},"24fb":function(t,e,s){"use strict";s("e67f")},e67f:function(t,e,s){}}]);