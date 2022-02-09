(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0155":function(t,e,n){"use strict";n("8d22")},"516e":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[n("q-card-section",{staticClass:"panel"},[n("q-btn",{attrs:{unelevated:"",color:"red",icon:"delete_forever",label:"Clear Application Config"},on:{click:function(e){return t.delete_config()}}}),n("q-btn",{attrs:{unelevated:"",color:"black",icon:"translate",label:"Get User Language"},on:{click:function(e){return t.getUsersLanguage()}}}),n("q-btn",{attrs:{unelevated:"",color:"black",icon:"flag",label:"Get Locale"},on:{click:function(e){return t.getLocale()}}}),n("q-btn",{attrs:{unelevated:"",color:"purple",icon:"build",label:"About Dialog"},on:{click:function(e){return t.getAboutDialog()}}}),n("q-btn",{attrs:{unelevated:"",color:"green",icon:"bug_report",label:"Open WebTorrent DevTools"},on:{click:t.openWebtorrentDevTools}})],1)],1),n("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[n("q-tabs",{attrs:{align:"left","no-caps":"","narrow-indicator":""},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[n("q-tab",{attrs:{name:"accountInfo",icon:"account_circle",label:"Account Info ("+t.$store.state.account.authState+")"}}),n("q-tab",{attrs:{name:"amplify",icon:"developer_board",label:"Amplify Test Cases"}}),n("q-tab",{attrs:{name:"devInfo",icon:"info",label:"Dev Info"}})],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[n("q-tab-panel",{attrs:{name:"accountInfo"}},[n("q-list",{attrs:{separator:""}},[t._l(t.$store.getters.accountUserInfo,(function(e,o){return[Array.isArray(e)?n("q-expansion-item",{key:o,attrs:{"content-inset-level":.4,label:o}},t._l(e,(function(e,o){return n("div",{key:o},[t._v(t._s(e))])})),0):n("q-item",{key:o},[n("q-item-section",[n("q-item-label",{attrs:{overline:""}},[t._v(t._s(o))]),n("q-item-label",[t._v(t._s(e))])],1)],1)]}))],2)],1),n("q-tab-panel",{attrs:{name:"amplify"}},t._l(t.$amplify.amplifyTest,(function(t,e){return n("amplify-button",{key:e,staticClass:"q-mr-sm",attrs:{label:e,"on-click":function(){return t()}}})})),1),n("q-tab-panel",{attrs:{name:"devInfo"}},[t.devInfo.torrentStore?n("div",{staticClass:"full-width"},[t._v("Torrent Config Store:\n          "),n("q-btn",{staticClass:"dev-info-action",attrs:{flat:""},on:{click:function(e){return t.open(t.devInfo.torrentStore)}}},[t._v("Open")]),n("q-btn",{staticClass:"dev-info-action",attrs:{flat:""},on:{click:t.resetTorrent}},[t._v("Reset")]),n("pre",[t._v(t._s(t.devInfo.torrentStore))])],1):t._e(),t.devInfo.settingStore?n("div",{staticClass:"full-width"},[t._v("Setting Config Store:\n          "),n("q-btn",{staticClass:"dev-info-action",attrs:{flat:""},on:{click:function(e){return t.open(t.devInfo.settingStore)}}},[t._v("Open")]),n("q-btn",{staticClass:"dev-info-action",attrs:{flat:""},on:{click:t.resetSetting}},[t._v("Reset")]),n("pre",[t._v(t._s(t.devInfo.settingStore))])],1):t._e()])],1)],1)],1)},a=[],r=n("ed08");const i=n("ed08").isElectron(),s=i?n("34bb").ipcRenderer:null;var l={name:"Development",inject:["io"],data(){return{currentTab:"accountInfo",devInfo:{torrentStore:"",settingStore:""}}},methods:{notify(t){this.$q.notify({message:t})},delete_config(){this.$q.electron.ipcRenderer.invoke("deleteConfig").then((t=>{this.$q.notify(t)}))},getLocale(){this.$q.notify(this.$q.lang.getLocale())},getUsersLanguage(){r["localConfigs"].getSettingsItem("language").then((t=>{this.$q.notify({message:t,position:"bottom-right",type:"positive",timeout:3e3})})).catch((()=>{this.$q.notify({message:"未获取到数据项",position:"bottom-right",type:"negative",timeout:3e3})}))},getAboutDialog(){const t=this.$root.$children[0];t.$refs.about.about_visible()},resetSetting(){this.$store.dispatch("resetSettings").then((t=>{this.$i18n.locale=t.language,this.$q.notify("Reset success")}))},resetTorrent(){i&&s.send("reset-torrent")},openWebtorrentDevTools(){if(i)return n("34bb").ipcRenderer.send("open-webtorrent-devtools")},open(t){this.io.emit("show_torrent_file",t)}},mounted(){i&&(s.on("dev-info",((t,e)=>{e.torrentStore&&(this.devInfo.torrentStore=e.torrentStore),e.settingStore&&(this.devInfo.settingStore=e.settingStore)})),s.send("dev-info")),this.io.off("notify",this.notify),this.io.on("notify",this.notify)}},c=l,f=(n("0155"),n("2877")),b=n("9989"),u=n("f09f"),d=n("a370"),g=n("9c40"),p=n("429b"),v=n("7460"),m=n("eb85"),q=n("adad"),h=n("823b"),_=n("1c1c"),y=n("3b73"),S=n("66e5"),I=n("4074"),k=n("0170"),T=n("eebe"),C=n.n(T),$=Object(f["a"])(c,o,a,!1,null,"09b46f1e",null);e["default"]=$.exports;C()($,"components",{QPage:b["a"],QCard:u["a"],QCardSection:d["a"],QBtn:g["a"],QTabs:p["a"],QTab:v["a"],QSeparator:m["a"],QTabPanels:q["a"],QTabPanel:h["a"],QList:_["a"],QExpansionItem:y["a"],QItem:S["a"],QItemSection:I["a"],QItemLabel:k["a"]})},"8d22":function(t,e,n){}}]);