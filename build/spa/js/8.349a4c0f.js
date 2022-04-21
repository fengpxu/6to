(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{3042:function(e,t,n){"use strict";n("55d8")},"55d8":function(e,t,n){},"65c5":function(e,t,n){},a180:function(e,t,n){"use strict";n("65c5")},b006:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[n("q-card-section",{staticClass:"panel"},e._l([{color:"positive",icon:"bug_report",label:"Open WebTorrent DevTools",handleClick:e.openWebtorrentDevTools},{color:"negative",icon:"delete_forever",label:"Clear Application Config",handleClick:e.delete_config},{color:"general",icon:"translate",label:"Get User Language",handleClick:e.getUsersLanguage},{color:"general",icon:"language",label:"Get Vue Locale",handleClick:e.getVueLocale},{color:"general",icon:"flag",label:"Get Quasar Locale",handleClick:e.getLocale}],(function(e,t){return n("alphabiz-button",{key:t,attrs:{color:e.color,icon:e.icon,label:e.label},on:{click:e.handleClick}})})),1)],1),n("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[n("q-tabs",{attrs:{align:"left","no-caps":"","narrow-indicator":""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},e._l([{name:"accountInfo",icon:"account_circle",label:"Account Info"},{name:"amplify",icon:"developer_board",label:"Amplify"},{name:"devInfo",icon:"info",label:"Dev Info"},{name:"urlConvert",icon:"link",label:"Alphabiz URL Convert"}],(function(t){return n("q-tab",e._b({key:t.name},"q-tab",t,!1))})),1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[n("q-tab-panel",{attrs:{name:"accountInfo"}},[n("account-tab-panel")],1),n("q-tab-panel",{attrs:{name:"amplify"}},[n("amplify-tab-panel")],1),n("q-tab-panel",{attrs:{name:"devInfo"}},[n("dev-info-tab-panel")],1),n("q-tab-panel",{attrs:{name:"urlConvert"}},[n("url-convert")],1)],1)],1)],1)},o=[],s=n("ed08"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"q-ma-sm"},[n("q-checkbox",{attrs:{label:"isTestEnv"},model:{value:e.isTest,callback:function(t){e.isTest=t},expression:"isTest"}})],1),n("h4",[e._v(e._s(e.$store.state.account.authState))]),"signedIn"===e.$store.state.account.authState?n("div",{staticClass:"row",staticStyle:{margin:"-4px"}},[e._l(e.$store.getters.accountUserInfo,(function(t,a){return[Array.isArray(t)?[n("div",{key:a,staticClass:"col-12 col-lg-6 q-pa-xs"},[n("q-card",{staticClass:"overflow-hidden",attrs:{flat:"",bordered:""}},[Array.isArray(t)?n("q-expansion-item",{attrs:{"content-inset-level":.4,label:a}},e._l(t,(function(t,a){return n("div",{key:a},[e._v(e._s(t)+"\n              ")])})),0):e._e()],1)],1)]:[n("div",{key:a,staticClass:"col-6 col-sm-3 col-lg-2 q-pa-xs"},[n("q-card",{staticClass:"overflow-hidden q-px-md q-py-sm",staticStyle:{"min-height":"66px"},attrs:{flat:"",bordered:""}},[n("div",{staticClass:"text-capitalize",staticStyle:{"font-size":"0.8rem",opacity:"0.8"}},[e._v(e._s(a)+"\n            ")]),n("div",{staticClass:"text-weight-bold text-no-wrap ellipsis"},[e._v(e._s(t))])])],1)]]}))],2):e._e(),"signedIn"===e.$store.state.account.authState?[n("q-separator",{staticStyle:{margin:"16px -16px"}}),n("div",{staticClass:"q-mb-sm"},[n("q-input",{staticStyle:{"max-width":"300px"},attrs:{label:"TestToken",dense:"",outlined:""},model:{value:e.testToken,callback:function(t){e.testToken=t},expression:"testToken"}})],1),n("div",[n("alphabiz-button",{attrs:{label:"Add Credits 100","on-click":e.addCredits}})],1)]:e._e()],2)},i=[],l=(n("e9c4"),n("0d1c")),c={name:"AccountTabPanel",inject:["isTestEnv"],data(){return{testToken:""}},computed:{isTest:{get(){return this.isTestEnv.getValue()},set(e){this.isTestEnv.setValue(e)}}},methods:{async addCredits(){const e=this.$store.state.account.sub;try{await Object(l["testCommand"])("bonus",{testToken:this.testToken,amount:1e5,targetSub:e,meta:JSON.stringify({description:"from development panel"})})}catch(t){this.$q.notify({message:t.message,type:"negative",position:"bottom-right",timeout:5e3})}}}},d=c,u=n("2877"),v=n("8f8e"),f=n("f09f"),b=n("3b73"),p=n("eb85"),m=n("27f9"),h=n("eebe"),g=n.n(h),_=Object(u["a"])(d,r,i,!1,null,"4697b4eb",null),C=_.exports;g()(_,"components",{QCheckbox:v["a"],QCard:f["a"],QExpansionItem:b["a"],QSeparator:p["a"],QInput:m["a"]});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.$amplify.amplifyTest,(function(e,t){return n("amplify-button",{key:t,staticClass:"q-mr-sm",attrs:{label:t,"on-click":function(){return e()}}})})),n("amplify-button",{attrs:{label:"addToTestGroup","on-click":e.addToTestGroup}})],2)},T=[],q=n("3eaf");const k=new q["a"].Rest("ABDevRest");var I={name:"AmplifyTabPanel",mounted(){},methods:{async addToTestGroup(){const e=await k.post("/admin/deleteAccount");console.log(e,typeof e)}}},S=I,x=Object(u["a"])(S,y,T,!1,null,"4bd14183",null),$=x.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.devInfo.torrentStore?n("div",{staticClass:"full-width"},[e._v("Torrent Config Store:\n    "),n("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.torrentStore)}}}),n("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetTorrent}}),n("pre",[e._v(e._s(e.devInfo.torrentStore))])],1):e._e(),e.devInfo.settingStore?n("div",{staticClass:"full-width"},[e._v("Setting Config Store:\n    "),n("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.settingStore)}}}),n("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetSetting}}),n("pre",[e._v(e._s(e.devInfo.settingStore))])],1):e._e(),e._v("\n  We are using\n  "),e.devInfo.electronVer?n("div",{staticClass:"full-width"},[e._v("Electron "+e._s(e.devInfo.electronVer)+"\n  ")]):e._e(),e.devInfo.chromeVer?n("div",{staticClass:"full-width"},[e._v("Chrome "+e._s(e.devInfo.chromeVer)+"\n  ")]):e._e(),e.devInfo.nodeVer?n("div",{staticClass:"full-width"},[e._v("Node "+e._s(e.devInfo.nodeVer)+"\n  ")]):e._e(),n("div",[e._v("Quasar "+e._s(e.$q.version))]),n("div",[e._v("Vue "+e._s(e.vueVersion))]),n("div",[e._v(" "+e._s(e.$q.platform))]),e.devInfo.processArgv?n("div",{staticClass:"full-width"},[e._v("Process Argv "+e._s(e.devInfo.processArgv))]):e._e()])},V=[],A=n("2b0e");const Q=n("ed08").isElectron(),E=Q?n("bdb9").ipcRenderer:null;var L={name:"DevInfoTabPanel",inject:["io"],data(){return{devInfo:{torrentStore:"",settingStore:""}}},methods:{open(e){this.io.emit("show_torrent_file",e)},resetTorrent(){Q&&E.send("reset-torrent")},resetSetting(){this.$store.dispatch("resetSettings").then((e=>{this.$i18n.locale=e.language,this.$q.notify("Reset success")}))}},mounted(){Q&&(E.on("dev-info",((e,t)=>{t.torrentStore&&(this.devInfo.torrentStore=t.torrentStore),t.settingStore&&(this.devInfo.settingStore=t.settingStore),t.electronVer&&(this.devInfo.electronVer=t.electronVer),t.chromeVer&&(this.devInfo.chromeVer=t.chromeVer),t.nodeVer&&(this.devInfo.nodeVer=t.nodeVer),t.argv&&(this.devInfo.processArgv=t.argv)})),E.send("dev-info")),this.io.off("notify",this.notify),this.io.on("notify",this.notify)},computed:{vueVersion(){return A["a"].version}}},P=L,O=(n("3042"),Object(u["a"])(P,w,V,!1,null,"5f269e2f",null)),R=O.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  Alphabiz URL Convert\n  "),n("q-input",{staticClass:"q-my-md",attrs:{type:"text",label:"source url"},nativeOn:{paste:function(e){e.stopPropagation()}},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),n("q-btn",{attrs:{color:"primary",icon:"check",label:"Convert"},on:{click:e.convert}})],1)},j=[];const D=n("ed08").isElectron(),U=D?n("bdb9").ipcRenderer:null;var G={name:"DevInfoTabPanel",inject:["io"],data(){return{url:""}},methods:{convert(){this.url&&D&&(U.once("convert-url",((e,t)=>{this.url=t})),U.send("convert-url",this.url))}}},W=G,J=n("9c40"),B=Object(u["a"])(W,z,j,!1,null,"4cb3b9fe",null),N=B.exports;g()(B,"components",{QInput:m["a"],QBtn:J["a"]});const F=n("ed08").isElectron();var H={name:"Development",components:{AccountTabPanel:C,AmplifyTabPanel:$,DevInfoTabPanel:R,UrlConvert:N},data(){return{currentTab:"accountInfo"}},methods:{delete_config(){this.$q.electron.ipcRenderer.invoke("deleteConfig").then((e=>{this.$q.notify(e)}))},getLocale(){this.$q.notify(this.$q.lang.getLocale())},getVueLocale(){this.$q.notify(this.$i18n.locale)},getUsersLanguage(){s["localConfigs"].getSettingsItem("language").then((e=>{this.$q.notify({message:e,position:"bottom-right",type:"positive",timeout:3e3})})).catch((()=>{this.$q.notify({message:"未获取到数据项",position:"bottom-right",type:"negative",timeout:3e3})}))},openWebtorrentDevTools(){if(F)return n("bdb9").ipcRenderer.send("open-webtorrent-devtools")}}},K=H,M=(n("a180"),n("9989")),X=n("a370"),Y=n("429b"),Z=n("7460"),ee=n("adad"),te=n("823b"),ne=Object(u["a"])(K,a,o,!1,null,"1c1567da",null);t["default"]=ne.exports;g()(ne,"components",{QPage:M["a"],QCard:f["a"],QCardSection:X["a"],QTabs:Y["a"],QTab:Z["a"],QSeparator:p["a"],QTabPanels:ee["a"],QTabPanel:te["a"]})}}]);