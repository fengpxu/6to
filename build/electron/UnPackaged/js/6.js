(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"11ef":function(t,e,i){},"2fbb":function(t,e,i){"use strict";i("fbc3")},"477a":function(t,e,i){},"713b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"LHh Lpr lFf"}},[i("application-header",[i("template",{slot:"prepend"},[i("q-btn",{staticClass:"app-no-draggable",attrs:{flat:"",dense:"",round:"",icon:t.leftDrawerOpen?"menu_open":"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1),i("template",{slot:"append"},[i("q-badge",{staticClass:"app-no-draggable cursor-pointer q-mx-sm q-px-sm q-py-xs non-selectable",attrs:{color:"page","text-color":"page"},on:{click:t.showAboutDialog}},[i("div",{attrs:{id:"version"}},[t._v(t._s("v"+t.publicVersion))]),i("q-separator",{staticClass:"q-mx-sm",attrs:{vertical:""}}),i("div",{attrs:{id:"commit"}},[t._v(t._s(t.publicSourceCommit))])],1)],1)],2),i("left-drawer",{ref:"leftDrawer",model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}}),i("q-page-container",{staticClass:"bg-page text-page"},[i("keep-alive",{attrs:{include:"Player,Index"}},[i("router-view")],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-drawer",{ref:"qDrawer",attrs:{value:t.value,side:"left","show-if-above":"",width:280,breakpoint:t.breakpoint},on:{input:function(e){return t.$emit("input",e)}}},[i("div",{staticClass:"full-height column items-stretch"},[i("div",{staticClass:"left-drawer-header bg-primary text-primary"},[i("q-img",{staticClass:"ab-logo-background ab-logo absolute",attrs:{src:t.abLogo,contain:""}}),i("corner")],1),i("q-scroll-area",{staticClass:"left-drawer-menu bg-page text-page q-pt-md"},[i("q-list",{staticClass:"non-selectable "},t._l(t.essentialLinks,(function(e){return i("EssentialLink",t._b({key:e.id||e.title},"EssentialLink",e,!1))})),1)],1)],1)])},o=[],r=(i("ddb0"),i("ddc3")),c=i.n(r),l=i("c83d"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.children&&0!==t.children.length?t.children.length>0?i("div",[i("q-expansion-item",{attrs:{"expand-separator":"",icon:t.icon,label:t.titleString,caption:t.captionString,"default-opened":""}},t._l(t.children,(function(e){return i("EssentialLink",t._b({key:e.id||e.title,attrs:{level:.5}},"EssentialLink",e,!1))})),1)],1):t._e():i("q-item",{staticClass:"drawer-menu-item",attrs:{clickable:"",active:t.isActive,"inset-level":t.level,"active-class":"active-item"},on:{click:t.handleClick}},[t.icon?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.icon}})],1):t._e(),i("q-item-section",[i("q-item-label",[t._v(t._s(t.titleString))]),i("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.captionString))])],1)],1)},u=[],p={name:"EssentialLink",props:{title:{type:[String,Function],required:!0},caption:{type:[String,Function],default:void 0},icon:{type:String,default:""},link:{type:String,default:"#"},query:{type:Object,default:void 0},level:{type:Number,default:0},children:{type:Array,default(){return[]}}},data(){return{isActive:!1}},computed:{titleString(){return"string"===typeof this.title?this.title:this.title()},captionString(){if(this.caption)return"string"===typeof this.caption?this.caption:this.caption()}},mounted(){this.updateIsActive(this.$route)},watch:{$route(t){this.updateIsActive(t)}},methods:{updateIsActive(t){const e=t.path;let i=e===this.link;if(i&&this.query){const e=t.query;i=Object.entries(this.query).findIndex((([t,i])=>e[t]!==i))<0}this.isActive=i},handleClick(){this.query?this.$router.push({path:this.link,query:this.query}):this.$router.push(this.link)}}},h=p,g=(i("2fbb"),i("2877")),m=i("66e5"),v=i("4074"),b=i("0016"),f=i("0170"),_=i("3b73"),w=i("eebe"),$=i.n(w),k=Object(g["a"])(h,d,u,!1,null,"3fc7aef2",null),q=k.exports;$()(k,"components",{QItem:m["a"],QItemSection:v["a"],QIcon:b["a"],QItemLabel:f["a"],QExpansionItem:_["a"]});var C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"corner-account"},[t.$store.state.account.authState?"signedIn"===t.$store.state.account.authState?[i("div",{staticClass:"corner-account-info"},[i("div",{staticClass:"account-main"},[i("q-avatar",{staticClass:"account-avatar",attrs:{size:"64px"}},[i("q-icon",{staticStyle:{opacity:"0.8"},attrs:{size:"56px",name:"account_circle"}})],1),i("div",{staticClass:"account-info column justify-center"},[i("div",{staticClass:"account-name"},[i("div",[t._v(t._s(t.title))]),i("q-badge",{attrs:{color:"positive","text-color":"positive",label:t.caption}})],1)])],1),i("div",{staticClass:"account-info-more"},[i("alphabiz-button",{attrs:{icon:"more_horiz","button-type":"icon",color:"primary",size:"0.8rem"}},[i("corner-menu",{on:{signOut:t.signOut,invite:t.invite}})],1)],1)])]:[i("div",{staticClass:"row"},[i("q-avatar",{staticClass:"account-avatar",attrs:{size:"64px"}},[i("q-img",{staticClass:"logo",attrs:{src:t.abLogo,contain:"",width:"48px",height:"48px"}})],1),i("div",{staticClass:"column justify-center q-ml-md"},[i("alphabiz-button",{attrs:{label:t.caption,size:"0.8rem",color:"secondary"},on:{click:t.$amplify.showSignedOutDialog}})],1)],1)]:[i("div",{staticClass:"row"},[i("q-avatar",{staticClass:"account-avatar",attrs:{size:"64px"}},[i("q-spinner",{attrs:{size:"32px"}})],1),i("div",{staticClass:"column justify-center q-ml-md"},[i("div",{staticClass:"account-loading"},[t._v(t._s(t.$t("account_loading")))])])],1)]],2)},y=[],x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-menu",{attrs:{"auto-close":"","touch-position":"","transition-show":"jump-up","transition-hide":"jump-down"}},[i("q-list",{staticClass:"corner-menu__list",staticStyle:{"min-width":"160px"}},[i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$router.push("/account/settings")}}},[i("q-item-section",{attrs:{"data-cy":"account-settings-btn"}},[t._v("\n          "+t._s(t.$t("account_account_setting"))+"\n        ")])],1),i("q-separator"),i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("signOut")}}},[i("q-item-section",{attrs:{"data-cy":"sign-out-btn"}},[t._v(t._s(t.$t("account_sign_out"))+"\n        ")])],1)],1)],1)},S=[],L={name:"CornerMenu",computed:{showInvite(){return this.$store.state.account.invitationCode&&this.$store.state.account.invitationCode.findIndex((t=>0===t.invitation_state))>=0}}},Q=L,D=i("4e73"),O=i("1c1c"),I=i("eb85"),z=Object(g["a"])(Q,x,S,!1,null,null,null),j=z.exports;$()(z,"components",{QMenu:D["a"],QList:O["a"],QItem:m["a"],QItemSection:v["a"],QSeparator:I["a"]});var A=i("48f4"),E={name:"Corner",data(){return{abLogo:i("a4a1")}},components:{CornerMenu:j},computed:{info(){return"signedIn"===this.$store.state.account.authState?this.$store.getters.accountUserInfo:null},title(){return this.info?this.info.nickname?this.info.nickname:this.info.emailVerified?this.info.email.split("@")[0]:this.info.phoneNumberVerified?this.info.phoneNumber:"???":this.$t("account_want_to_join")},caption(){return this.info?`Lv. ${this.info.accountLevel}`:this.$t("account_sign_in_now")}},methods:{signOut(){A["b"].showPositive("signed_out"),A["a"].updateState("signedOut"),(this.$route.path.startsWith("/account")||this.$route.path.startsWith("/credits"))&&this.$router.push("/"),A["a"].signOut().catch((()=>{}))},invite(){this.$router.push({path:"/account/settings",query:{call:"invite"}})}}},V=E,U=(i("7a6e"),i("cb32")),B=i("0d59"),T=i("58a81"),P=i("068f"),N=Object(g["a"])(V,C,y,!1,null,"713f34d3",null),R=N.exports;$()(N,"components",{QAvatar:U["a"],QSpinner:B["a"],QIcon:b["a"],QBadge:T["a"],QImg:P["a"]});var M=i("0613");const F=!c.a.prerelease(Object(l["a"])("version"));var H={name:"LeftDrawer",components:{EssentialLink:q,Corner:R},props:{value:Boolean,currentTab:String},data(){return{abLogo:i("a4a1"),breakpoint:1080,currentBehavior:null,resizeListener:null}},computed:{indexItem(){const t=t=>{const e=M["a"].getters.taskCount[t]||0;return`${this.$t(t)} (${e})`},e={id:"downloading",title:t("downloading"),icon:"file_download",link:"/",query:{currentTab:"downloading"}},i={id:"uploading",title:t("uploading"),caption:M["a"].getters.isUploadingLoading?this.$t("loading"):null,icon:"file_upload",link:"/",query:{currentTab:"uploading"}},a={id:"downloaded",title:t("downloaded"),icon:"done",link:"/",query:{currentTab:"downloaded"}};return{title:this.$t("home"),caption:this.$t("home_caption"),icon:"home",children:[e,i,a]}},accountSettingItem(){const t=[];return"signedIn"===M["a"].state.account.authState&&t.push({title:this.$t("account_account_setting"),icon:"account_circle",link:"/account/settings",caption:this.$t("account_setting_caption")}),t},disableDevTools(){return M["a"].getters.settings.disableDevTools},developmentItem(){const t=[];try{F&&this.disableDevTools||t.push({title:this.$t("development"),caption:this.$t("development_caption"),icon:"developer_mode",link:"/development"})}catch(e){}return t},essentialLinks(){const t={title:this.$t("player"),caption:this.$t("player_caption"),icon:"play_circle_filled",link:"/player"},e={title:this.$t("credits"),caption:this.$t("credits_caption"),icon:"savings",link:"/credits"},i={title:this.$t("basic_setting"),icon:"assignment",link:"/basicSetting",caption:this.$t("basic_caption")},a={title:this.$t("advanced"),icon:"build",link:"/advanceSetting",caption:this.$t("advanced")},n={title:this.$t("settings"),caption:this.$t("settings_caption"),icon:"settings",children:[...this.accountSettingItem,i,a]};return[this.indexItem,t,e,n,...this.developmentItem]}},methods:{onWindowResize(){this.updateCurrentBehavior()},updateCurrentBehavior(){const t=window.innerWidth<=this.breakpoint-8?"mobile":"desktop";t!==this.currentBehavior&&(this.currentBehavior=t,this.$refs.qDrawer&&this.$refs.qDrawer.__updateLocal("belowBreakpoint","mobile"===t))}},created(){this.updateCurrentBehavior(),this.resizeListener=t=>this.onWindowResize(t),window.addEventListener("resize",this.resizeListener)},beforeDestroy(){window.removeEventListener("resize",this.resizeListener)}},W=H,J=(i("ea34"),i("9404")),G=i("2c91"),K=i("4983"),X=i("b498"),Y=Object(g["a"])(W,s,o,!1,null,"c34a5284",null),Z=Y.exports;$()(Y,"components",{QDrawer:J["a"],QImg:P["a"],QSpace:G["a"],QScrollArea:K["a"],QList:O["a"],QColor:X["a"]});var tt=i("7f32"),et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-header",{staticClass:"bg-primary text-primary",staticStyle:{"padding-top":"30px"}},[i("q-toolbar",{staticStyle:{height:"50px"}},[t._t("prepend"),i("q-toolbar-title",{staticClass:"toolbar-title",attrs:{shrink:""}},[t._v("\n      "+t._s(t.applicationTitle)+"\n    ")]),i("q-space"),t._t("append"),i("Updater",{directives:[{name:"show",rawName:"v-show",value:t.isElectron,expression:"isElectron"}]})],2)],1)},it=[],at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alphabiz-updater"},[i("q-btn",{attrs:{color:"primary",icon:"update",size:"sm",dense:"",flat:""},on:{click:t.onClick}},[i("q-tooltip",[t._v("\n      "+t._s(t.isUpdating?"Updating":t.hasNewVersion?t.$t("update_available"):t.$t("check_for_update"))+"\n    ")]),t.isUpdating?i("q-badge",{staticClass:"icon-badge",attrs:{rounded:"",floating:"",color:"transparent"}},[i("q-circular-progress",{attrs:{size:"16px",thickness:1,color:"green","center-color":"green","track-color":"white",value:t.totalProgress}})],1):t.hasNewVersion?i("q-badge",{attrs:{color:"yellow",rounded:"",floating:""}}):t._e()],1),i("q-dialog",{model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[i("q-card",{staticClass:"update-panel-card"},[i("q-card-section",{staticClass:"q-pb-sm"},[i("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("update_alphabiz")))])]),i("q-card-section",{staticClass:"q-pt-sm"},[i("div",{staticClass:"current-version"},[t._v(t._s(t.$t("current_version"))+": "),i("code",[t._v(t._s(t.currentVersion))])]),t.isUpdating?i("div",{staticClass:"update-status q-mt-sm"},[t._v("\n          "+t._s(t.$t("downloading_update"))+"\n          "),t._l(t.progressMessages,(function(e,a){return i("p",{key:a},[t._v(t._s(e))])}))],2):i("div",{staticClass:"release-infomation"},[i("div",{staticClass:"text-bold"},[t._v(t._s(t.newVersionHint))]),t.releaseLogs.length?i("div",{staticClass:"text"},[i("div",{staticClass:"text release-logs q-mt-sm"},[i("b",[t._v(t._s(t.$t("release_notes")))]),t._l(t.releaseLogs,(function(e,a){return i("p",{key:a,staticClass:"q-ml-sm"},[t._v(t._s(e))])}))],2)]):t._e()])]),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{attrs:{flat:"",color:t.isUpdating?"red":"",loading:t.loading,label:t.isUpdating?t.$t("cancel_update"):t.$t("close")},on:{click:t.onClose}}),i("q-btn",{attrs:{flat:"",color:"green",label:t.confirmLabel,loading:t.loading},on:{click:t.onConfirm}})],1)],1)],1)],1)},nt=[],st=i("ed08"),ot=i("f880"),rt={data(){return{hasNewVersion:!1,isLatest:!1,isUpdating:!1,isChecking:!1,showDialog:!1,currentVersion:Object(l["a"])("version"),newVersion:"",releaseLogs:[],downloadProgress:[],ipcRenderer:{send(){},on(){}}}},computed:{loading(){return this.isChecking},newVersionHint(){return this.newVersion?this.$t("new_version_hint",[this.newVersion]):this.isLatest?this.$t("current_is_latest"):this.$t("click_to_check_update")},confirmLabel(){return this.isUpdating?this.$t("close"):this.hasNewVersion?this.$t("update_now"):this.$t("check_for_update")},totalProgress(){if(!this.downloadProgress.length)return 0;const[t,e]=this.downloadProgress.reduce(((t,e)=>{const{downloaded:i,length:a}=e[1];return isNaN(i)||isNaN(a)||(t[0]+=i,t[1]+=a),t}),[0,0]);return Math.floor(t/e*100)},progressMessages(){return this.downloadProgress.map((([t,e])=>{const i=Object(ot["a"])(e.downloaded,{byte:!1,gb:!1}),a=Object(ot["a"])(e.length,{byte:!1,gb:!1});return`${t}: ${i} / ${a}`}))}},methods:{confirmUpdate(){this.ipcRenderer.send("confirm-update")},checkForUpdate(){this.ipcRenderer.send("check-for-update")},onClick(){this.showDialog=!0},onConfirm(){return this.isUpdating?this.close():(this.isChecking=!0,this.hasNewVersion?this.confirmUpdate():this.checkForUpdate())},onClose(){this.isUpdating?this.ipcRenderer.send("abort-update"):this.close()},close(){this.showDialog=!1}},async created(){if(!Object(st["isElectron"])())return;const{ipcRenderer:t}=await Promise.resolve().then(i.t.bind(null,"34bb",7));this.ipcRenderer=t,t.on("update-available",((t,e)=>{console.log(e),this.hasNewVersion=!0,this.newVersion=e.version,this.releaseLogs=(e.detail||"").split(/\r\n|\n/g),console.log("update available"),this.isChecking=!1})),t.on("update-not-available",((e,i)=>{if(this.isChecking=!1,this.isLatest=!0,!i||!i.reason)return t.send("dismiss-update");this.$q.dialog({class:"text-center",title:this.$t("no_update_available"),message:this.$t(i.reason,[this.currentVersion]),ok:this.$t("ok")}).onDismiss((()=>{t.send("dismiss-update")}))})),t.on("update-progress",((t,e)=>{this.isChecking=!1,this.isUpdating=!0,console.log(e),this.downloadProgress=Object.entries(e)})),t.on("update-failed",((e,i)=>{i.reason&&this.$q.dialog({title:this.$t("update_failed"),message:this.$t("update_failed_message")+this.$t(i.reason),ok:this.$t("ok")}).onDismiss((()=>{this.hasNewVersion=!1,this.isUpdating=!1,this.downloadProgress=[],this.releaseLogs=[],this.newVersion="",t.send("dismiss-update")}))})),t.on("update-aborted",(()=>{this.$q.dialog({message:this.$t("update_canceled"),ok:this.$t("ok")}).onDismiss((()=>{this.hasNewVersion=!0,this.isUpdating=!1,this.downloadProgress=[],t.send("dismiss-update")}))}))}},ct=rt,lt=(i("902c"),i("9c40")),dt=i("05c0"),ut=i("58ea"),pt=i("24e8"),ht=i("f09f"),gt=i("a370"),mt=i("4b7e"),vt=Object(g["a"])(ct,at,nt,!1,null,"3cd7a163",null),bt=vt.exports;$()(vt,"components",{QBtn:lt["a"],QTooltip:dt["a"],QBadge:T["a"],QCircularProgress:ut["a"],QDialog:pt["a"],QCard:ht["a"],QCardSection:gt["a"],QCardActions:mt["a"]});const ft=i("ed08").isElectron();var _t={name:"ApplicationHeader",components:{Updater:bt},props:{},data(){return{isElectron:ft,env:null}},created(){if(ft){Promise.resolve().then(i.t.bind(null,"34bb",7)).then((({ipcRenderer:t})=>{this.windowControl=e=>t.sendSync("app_window_control",e)}));const t=navigator.userAgent.toLowerCase(),e=/macintosh|mac os x/i.test(t);this.env=e?"mac":"win"}},computed:{applicationTitle(){const t={Index:this.$route.query.currentTab,Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSetting:"basic_setting",AdvanceSetting:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):"Alphabiz"}}},wt=_t,$t=i("e359"),kt=i("65c6"),qt=i("6ac5"),Ct=Object(g["a"])(wt,et,it,!1,null,"f3fa57ba",null),yt=Ct.exports;$()(Ct,"components",{QHeader:$t["a"],QToolbar:kt["a"],QToolbarTitle:qt["a"],QSpace:G["a"]});const xt=i("ed08").isElectron();var St={name:"MainLayout",components:{ApplicationHeader:yt,ApplicationBar:tt["a"],LeftDrawer:Z},data(){return{showAppBar:xt,currentTab:"downloading",leftDrawerOpen:!1}},computed:{leftDrawerBehavior(){return this.$refs.leftDrawer.currentBehavior},applicationTitle(){const t={Index:this.$route.query.currentTab,Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSettings:"basic_setting",AdvancedSettings:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):"Alphabiz"},publicVersion(){return Object(l["a"])("version")},publicSourceCommit(){return Object(l["a"])("sourceCommit")}},methods:{showAboutDialog(){const t=this.$root.$children[0];t.$refs.about.about_visible()}}},Lt=St,Qt=(i("89d3"),i("4d5a")),Dt=i("09e3"),Ot=i("7ff0"),It=Object(g["a"])(Lt,a,n,!1,null,null,null);e["default"]=It.exports;$()(It,"components",{QLayout:Qt["a"],QBtn:lt["a"],QBadge:T["a"],QSeparator:I["a"],QPageContainer:Dt["a"],QFooter:Ot["a"],QToolbar:kt["a"]})},"7a6e":function(t,e,i){"use strict";i("98c5")},"89d3":function(t,e,i){"use strict";i("e87e")},"902c":function(t,e,i){"use strict";i("477a")},"98c5":function(t,e,i){},e87e:function(t,e,i){},ea34:function(t,e,i){"use strict";i("11ef")},fbc3:function(t,e,i){}}]);