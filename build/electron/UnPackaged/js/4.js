(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"206a":function(t,e,a){"use strict";a("ff65")},4896:function(t,e,a){},5437:function(t,e,a){"use strict";a("6679")},"56e6":function(t,e,a){"use strict";a("b2ea")},"619c":function(t,e,a){"use strict";a("eec6")},6679:function(t,e,a){},"713b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"LHh Lpr lFf"}},[a("application-header",{scopedSlots:t._u([{key:"append",fn:function(){return[a("q-badge",{staticClass:"app-badge app-no-draggable cursor-pointer q-mx-sm non-selectable",attrs:{color:"page","text-color":"page"},on:{click:t.showAboutDialog}},[a("div",{attrs:{id:"version"}},[t._v(t._s("v"+t.publicVersion))]),a("q-separator",{staticClass:"version-separator",attrs:{vertical:""}}),a("div",{attrs:{id:"commit"}},[t._v(t._s(t.publicSourceCommit))])],1)]},proxy:!0}])},[a("template",{slot:"prepend"},[a("q-btn",{staticClass:"app-no-draggable",attrs:{flat:"","fab-mini":"",icon:t.leftDrawerOpen?"menu_open":"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1)],2),a("left-drawer",{ref:"leftDrawer",model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}}),a("q-page-container",{staticClass:"bg-page text-page"},[a("keep-alive",{attrs:{include:"Player,Downloader,Library"}},[a("router-view")],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-drawer",{ref:"qDrawer",attrs:{value:t.value,side:"left","show-if-above":"",width:280,breakpoint:t.breakpoint},on:{input:function(e){return t.$emit("input",e)}}},[a("div",{staticClass:"full-height column items-stretch overflow-hidden"},[a("div",{staticClass:"left-drawer-header bg-primary text-primary"},[a("q-img",{staticClass:"ab-logo-background ab-logo absolute",staticStyle:{"z-index":"0"},style:t.abLogoStyle,attrs:{src:t.abLogo,contain:""}}),a("corner",{staticClass:"relative-position",staticStyle:{"z-index":"1"}})],1),a("q-scroll-area",{staticClass:"left-drawer-menu bg-page text-page",attrs:{visible:!1,"bar-style":{width:"0"},"thumb-style":{width:"0"}}},[a("q-list",{staticClass:"non-selectable"},t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.id||e.title},"EssentialLink",e,!1))})),1)],1)],1)])},o=[],r=(a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return!t.children||0===t.children.length&&!t.hide?a("q-item",{staticClass:"drawer-menu-item text-page",attrs:{clickable:"",active:t.isActive,"inset-level":t.level,"active-class":"active-item"},on:{click:t.handleClick}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v("\n      "+t._s(t.titleString)+"\n    ")])],1),t.badge?[a("q-item-section",{attrs:{side:""}},[a("q-badge",{attrs:{color:"positive","text-color":"positive"}},[t._v(t._s(t.badge))])],1)]:t._e()],2):t.children.length>0&&!t.hide?a("div",[a("q-expansion-item",{staticClass:"text-page",class:{"expansion-menu-item":!0,"active-item":t.isActive},attrs:{"expand-separator":"",icon:t.icon,label:t.titleString,"default-opened":""},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[t.label?a("div",{staticClass:"item-label q-pl-lg q-py-xs text-grey-8"},[t._v(t._s(t.label)+"\n    ")]):t._e(),t._l(t.children,(function(e){return a("EssentialLink",t._b({key:e.id||e.title,attrs:{level:.5}},"EssentialLink",e,!1))}))],2)],1):t._e()}),c=[];function l(t){if(!t)return null;const e="string"===typeof t?{name:t}:t;return e}function d(t,e){if(!e)return!1;const a=t.name===e.name;if(!a)return!1;if(e.query){const a=Object.entries(e.query).some((([e,a])=>t.query[e]!==a));return!a}return!0}var u={name:"EssentialLink",props:{title:{type:[String,Function],required:!0},caption:{type:[String,Function],default:void 0},label:{type:String,default:""},icon:{type:String,default:""},badge:{type:String,default:void 0},route:{type:[String,Object],default:"Index"},query:{type:Object,default:void 0},level:{type:Number,default:0},children:{type:Array,default(){return[]}},hide:Boolean},data(){return{open:!0}},computed:{titleString(){return"string"===typeof this.title?this.title:this.title()},captionString(){if(this.caption)return"string"===typeof this.caption?this.caption:this.caption()},isSelfActive(){const t=l(this.route);return d(this.$route,t)},isChildrenActive(){return this.children.map((t=>t.route)).some((t=>{const e=l(t);return d(this.$route,e)}))},isActive(){return this.open?this.isSelfActive:this.isChildrenActive}},methods:{handleClick(){if(this.isSelfActive&&0===this.children.length)return;const t=l(this.route);t&&this.$router.push(t)}}},h=u,p=(a("206a"),a("2877")),m=a("66e5"),f=a("4074"),g=a("0016"),b=a("0170"),v=a("58a8"),_=a("3b73"),w=a("b498"),y=a("eebe"),$=a.n(y),C=Object(p["a"])(h,r,c,!1,null,null,null),S=C.exports;$()(C,"components",{QItem:m["a"],QItemSection:f["a"],QIcon:g["a"],QItemLabel:b["a"],QBadge:v["a"],QExpansionItem:_["a"],QColor:w["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"corner-account"},[t.$store.state.account.authState?"signedIn"===t.$store.state.account.authState?[a("div",{staticClass:"corner-account-info"},[a("div",{staticClass:"account-main"},[a("q-avatar",{staticClass:"account-avatar",attrs:{size:"64px"}},[a("q-img",{staticClass:"logo",attrs:{src:t.abLogo,contain:"",width:"48px",height:"48px"}})],1),a("div",{staticClass:"account-info column justify-center"},[a("div",{staticClass:"account-name"},[a("div",[a("span",[t._v(t._s(t.title)+" ")]),a("q-tooltip",{attrs:{"content-style":{fontSize:"0.8rem",padding:"2px 8px"},"transition-show":"scale","transition-hide":"scale",anchor:"bottom middle",self:"center start",delay:1e3}},[t._v(t._s(t.title)+"\n              ")])],1),a("q-badge",{attrs:{color:"positive","text-color":"positive",label:t.caption}})],1)])],1),a("div",{staticClass:"account-info-more"},[a("alphabiz-button",{attrs:{icon:"more_horiz","button-type":"icon",color:"primary",size:"0.8rem"}},[a("corner-menu",{on:{signOut:t.requestSignOut,invite:t.invite}})],1)],1)])]:[a("div",{staticClass:"row"},[a("q-avatar",{staticClass:"account-avatar",attrs:{size:"64px"}},[a("q-img",{staticClass:"logo",attrs:{src:t.abLogo,contain:"",width:"48px",height:"48px"}})],1),a("div",{staticClass:"column justify-center q-ml-md"},[a("alphabiz-button",{attrs:{label:t.caption,size:"0.8rem",color:"secondary"},on:{click:function(){return t.$amplify.showSignedOutDialog()}}})],1)],1)]:[a("div",{staticClass:"row"},[a("q-avatar",{staticClass:"account-avatar",attrs:{size:"64px"}},[a("q-spinner",{attrs:{size:"32px"}})],1),a("div",{staticClass:"column justify-center q-ml-md"},[a("div",{staticClass:"account-loading"},[t._v(t._s(t.$t("account_loading")))])])],1)]],2)},q=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-menu",{attrs:{"auto-close":"","touch-position":"","transition-show":"jump-up","transition-hide":"jump-down"}},[a("q-list",{staticClass:"corner-menu__list",staticStyle:{"min-width":"160px"}},[a("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$router.push("/account/settings")}}},[a("q-item-section",{attrs:{"data-cy":"account-settings-btn"}},[t._v("\n          "+t._s(t.$t("account_account_setting"))+"\n        ")])],1),a("q-separator"),a("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("signOut")}}},[a("q-item-section",{attrs:{"data-cy":"sign-out-btn"}},[t._v(t._s(t.$t("account_sign_out"))+"\n        ")])],1)],1)],1)},Q=[],D={name:"CornerMenu",computed:{showInvite(){return this.$store.state.account.invitationCode&&this.$store.state.account.invitationCode.findIndex((t=>0===t.invitation_state))>=0}}},U=D,I=a("4e73"),L=a("1c1c"),O=a("eb85"),P=Object(p["a"])(U,x,Q,!1,null,null,null),z=P.exports;$()(P,"components",{QMenu:I["a"],QList:L["a"],QItem:m["a"],QItemSection:f["a"],QSeparator:O["a"]});var E=a("48f4"),j=a("d8ad"),B={name:"Corner",data(){return{abLogo:"developer/assets/icon-256.png"}},components:{CornerMenu:z},computed:{info(){return"signedIn"===this.$store.state.account.authState?this.$store.getters.accountUserInfo:null},title(){return this.info?this.info.nickname?this.info.nickname:this.info.emailVerified?this.info.email.split("@")[0]:this.info.phoneNumberVerified?this.info.phoneNumber:"???":this.$t("account_want_to_join")},caption(){return this.info?`Lv. ${this.info.accountLevel}`:this.$t("account_sign_in_now")}},methods:{requestSignOut(){j["a"].$emit("request-sign-out")},async signOut(){E["a"].showPositive("signed_out"),this.$store.commit("ACCOUNT_UPDATE_STATE","signedOut"),(this.$route.path.startsWith("/account")||this.$route.path.startsWith("/credits"))&&this.$router.push("/"),await this.$store.dispatch("ACCOUNT_SIGN_OUT")},invite(){this.$router.push({path:"/account/settings",query:{call:"invite"}})}},created(){j["a"].$on("confirm-sign-out",(()=>this.signOut()))}},T=B,A=(a("5437"),a("cb32")),V=a("0d59"),N=a("068f"),F=a("05c0"),M=Object(p["a"])(T,k,q,!1,null,"6f6517c2",null),R=M.exports;$()(M,"components",{QAvatar:A["a"],QSpinner:V["a"],QImg:N["a"],QTooltip:F["a"],QBadge:v["a"]});var W=a("0613"),H=a("4aad"),J=a("ed08"),G=a("708e"),K=a.n(G),X={name:"LeftDrawer",components:{EssentialLink:S,Corner:R},props:{value:Boolean,currentTab:String},data(){return{abLogo:"developer/assets/icon-256.png",abLogoStyle:G["theme"].cornerLogoStyle,breakpoint:1080,currentBehavior:null,resizeListener:null,showCreditPage:!1,showBlockchainPage:!1,isElectron:Object(J["isElectron"])()}},created(){var t;this.updateCurrentBehavior(),this.resizeListener=t=>this.onWindowResize(t),window.addEventListener("resize",this.resizeListener);const e=null!==(t=localStorage.getItem("dataPaymentMixin.mode"))&&void 0!==t?t:"amplify";this.showCreditPage="amplify"===e,this.showBlockchainPage="blockchain"===e},computed:{indexItem(){if(!Object(J["isElectron"])())return{id:"task-management",title:this.$t("task_manage"),icon:"file_download",route:"Downloader"};const t=t=>{const e=W["a"].getters.taskCount[t];if(e)return e.toString()},e={id:"downloading",title:this.$t("downloading"),icon:"file_download",route:{name:"Downloader",query:{currentTab:"downloading"}},badge:t("downloading")},a={id:"uploading",title:this.$t("uploading"),caption:W["a"].getters.isUploadingLoading?this.$t("loading"):null,icon:"file_upload",route:{name:"Downloader",query:{currentTab:"uploading"}},badge:t("uploading")},i={id:"downloaded",title:this.$t("downloaded"),icon:"done",route:{name:"Downloader",query:{currentTab:"downloaded"}},badge:t("downloaded")};return{title:this.$t("download")+"/"+this.$t("upload"),caption:this.$t("home_caption"),icon:"import_export",children:[e,a,i]}},accountSettingItem(){const t=[];return"signedIn"===W["a"].state.account.authState&&t.push({title:this.$t("account_account_setting"),icon:"account_circle",route:"AccountSettings",caption:this.$t("account_setting_caption")}),t},disableDevTools(){return W["a"].getters.settings.disableDevTools},paymentItems(){const t={title:this.$t("credits"),caption:this.$t("credits_caption"),icon:"savings",route:"Credits"},e={title:this.$t("blockchain"),caption:this.$t("blockchain_caption"),icon:"account_balance_wallet",route:"Blockchain"},a=[];return this.showCreditPage&&a.push(t),this.showBlockchainPage&&a.push(e),a},developmentItem(){const t=[];try{W["a"].getters.isDevMode&&t.push({title:this.$t("development"),caption:this.$t("development_caption"),icon:"developer_mode",route:"Development"})}catch(e){}return t},essentialLinks(){const t=!H["a"].isLoggedIn||!H["a"].nonBlockFollowingChannels.length,e={title:this.$t("library"),caption:this.$t("library_caption"),icon:"video_library",children:[{title:this.$t("lib_index"),icon:"home",route:"LibraryIndex"},{title:this.$t("lib_following"),hide:t,icon:"collections_bookmark",route:"LibraryFollowing"},{title:this.$t("lib_local_favorites"),hide:t,icon:"star",route:"LibraryFavorites"},{title:this.$t("lib_edit"),icon:"edit_note",route:"LibraryEdit"}]};H["a"].isLibAdmin&&e.children.push({title:this.$t("take_down"),icon:"block",route:"LibraryTakeDown"}),W["a"].getters.settings.libraryShowExplore&&e.children.splice(3,0,{title:this.$t("lib_explore"),hide:t,icon:"travel_explore",route:"LibraryExplore"});const a={id:"drawer-player",title:this.$t("player"),caption:this.$t("player_caption"),icon:"play_circle_filled",route:"Player"},i={title:this.$t("basic_setting"),icon:"assignment",route:"BasicSetting",caption:this.$t("basic_caption")},s={title:this.$t("advanced"),icon:"build",route:"AdvanceSetting",caption:this.$t("advanced")},n={title:this.$t("settings"),caption:this.$t("settings_caption"),icon:"settings",children:[...this.accountSettingItem,i,s]};return[e,this.indexItem,a,...this.paymentItems,n,...this.developmentItem]}},methods:{onWindowResize(){this.updateCurrentBehavior()},updateCurrentBehavior(){const t=window.innerWidth<=this.breakpoint-8?"mobile":"desktop";t!==this.currentBehavior&&(this.currentBehavior=t,this.$refs.qDrawer&&this.$refs.qDrawer.__updateLocal("belowBreakpoint","mobile"===t))}},beforeDestroy(){window.removeEventListener("resize",this.resizeListener)}},Y=X,Z=(a("d040"),a("9404")),tt=a("4983"),et=Object(p["a"])(Y,n,o,!1,null,"9ab173a2",null),at=et.exports;$()(et,"components",{QDrawer:Z["a"],QImg:N["a"],QScrollArea:tt["a"],QList:L["a"],QColor:w["a"]});var it=a("7f32"),st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-header",{staticClass:"bg-primary text-primary"},[a("q-toolbar",{staticClass:"header-toolbar"},[t._t("prepend"),a("Breadcrumbs"),a("q-space"),t._t("append"),t.isElectron&&t.d$cfg.update.enable?a("AppUpdater",{attrs:{source:t.isMicrosoftApp?"microsoft_store":"github"}}):t._e()],2)],1)},nt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"breadcrumbs q-ml-md"},[a("q-breadcrumbs",{staticClass:"text-primary bread-nowrap",attrs:{gutter:"none"},scopedSlots:t._u([{key:"separator",fn:function(){return[a("q-icon",{staticClass:"breadcrumb-separator",attrs:{name:"chevron_right"}})]},proxy:!0}])},[a("q-breadcrumbs-el",{staticClass:"crumb current-route nowrap",class:{normal:!t.historyPaths.length},on:{click:function(e){t.historyPaths.length&&t.goTo(t.currentPath,0)}}},[a("span",{staticClass:"crumb-label nowrap"},[t._v(t._s(t.currentPath.label))]),a("q-icon",{staticClass:"q-ml-xs breadcrumb-icon",attrs:{name:t.currentPath.icon,size:"1.1em"}})],1),t._l(t.historyPaths,(function(e,i){return a("q-breadcrumbs-el",{key:i,staticClass:"crumb nowrap",class:i===t.history.length-1?"last-crumb":"normal-crumb",attrs:{disable:i===t.history.length-1},on:{click:function(a){return t.goTo(e,i+1)}}},[a("span",{staticClass:"crumb-label nowrap",attrs:{title:e.label}},[t._v("\n        "+t._s(e.label.length>12?e.label.substring(0,11)+"...":e.label)+"\n      ")]),a("q-icon",{staticClass:"q-ml-xs breadcrumb-icon",attrs:{name:e.icon,size:"1.1em"}})],1)}))],2)],1)},rt=[],ct=(a("d9e2"),{data(){return{history:[]}},computed:{currentPath(){const t=this.$route.path.split("/")[1],e="downloader"===t?this.$route.query.currentTab:t,a=this.getPathTitle(e),i=this.getPathIcon(e);return{path:"/"+t,label:a,icon:i}},historyPaths(){return this.history.map(((t="")=>{const[e,a]=t.split("?"),i=e.split("/").splice(2);if(!i.length)return null;i.length>1&&console.warn(`The path "${t}" does not have a parser and may update header with something wrong.`);const s=i[0];return s?{path:t,label:this.getPathTitle(s,a),icon:this.getPathIcon(s,a)}:null})).filter((t=>t))}},methods:{parseQS(t=""){const e=Object.create(null);if(!t)return e;for(const a of t.split("&"))if(a.includes("=")){const[t,i]=a.split("=").map((t=>decodeURIComponent(t)));e[t]=i}else e[a]=!0;return e},getPathTitle(t,e=""){var a,i;switch(t){case"downloading":return this.$t("downloading");case"uploading":return this.$t("uploading");case"downloaded":return this.$t("downloaded");case"library":return this.$t("library");case"player":return this.$t("player");case"credits":return this.$t("credits");case"blockchain":return this.$t("blockchain");case"account":return this.$t("account_account_setting");case"basicSetting":return this.$t("basic_setting");case"advanceSetting":return this.$t("advancedSettings");case"development":return this.$t("development");case"creator":return(null===(a=this.parseQS(e))||void 0===a?void 0:a.name)||this.$t("creator");case"channel":return(null===(i=this.parseQS(e))||void 0===i?void 0:i.title)||this.$t("channel");case"following":return this.$t("lib_following");case"edit":return this.$t("lib_edit");case"explore":return this.$t("lib_explore");case"favorite":return this.$t("lib_favorite");case"takedown":return this.$t("take_down");default:return G["appName"]}},getPathIcon(t){switch(t){case"downloading":return"file_download";case"uploading":return"file_upload";case"downloaded":return"done";case"library":return"video_library";case"player":return"play_circle_filled";case"credits":return"savings";case"blockchain":return"account_balance_wallet";case"account":return"account_circle";case"basicSetting":return"assignment";case"advanceSetting":return"build";case"development":return"developer_mode";case"creator":return"account_circle";case"channel":return"subscriptions";case"following":return"star";case"edit":return"edit_note";case"explore":return"travel_explore";case"favorite":return"folder_special";default:return""}},goTo(t,e){console.log("goto",e,t),e!==this.history.length&&this.$router.push(t.path).then((t=>{t instanceof Error||this.history.splice(e)}))}},watch:{"currentPath.path"(t,e){t!==e&&this.history.splice(0)}},mounted(){this.$root.$on("navigate-to",(t=>{if(!t)return this.history.splice(0);this.history.push(t),this.history.length>2&&this.history.splice(0,this.history.length-2)})),this.$root.$on("update-path",(t=>{var e;console.log("update path",t);const a=null===(e=t.split("?"))||void 0===e?void 0:e[0];for(const i in this.history){const e=parseInt(i);if(isNaN(e))continue;const s=this.history[e];s.startsWith(a+"?")&&this.$set(this.history,e,t)}}))}}),lt=ct,dt=(a("af13"),a("56e6"),a("ead5")),ut=a("079e"),ht=Object(p["a"])(lt,ot,rt,!1,null,"680c2f6f",null),pt=ht.exports;$()(ht,"components",{QBreadcrumbs:dt["a"],QIcon:g["a"],QBreadcrumbsEl:ut["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alphabiz-updater"},[a("q-btn",{attrs:{color:"primary","fab-mini":"",flat:""},on:{click:function(){return t.showDialog=!0}}},[t.downloadState?a("div",{staticClass:"absolute-center text-grey-9",staticStyle:{"z-index":"-1"}},[a("q-circular-progress",{attrs:{size:"1.7rem",thickness:.3,"center-color":"white","track-color":"white",value:t.downloadState.total?Math.floor(t.downloadState.downloaded/t.downloadState.total*100):0}}),a("div",{staticClass:"absolute-center text-bold text-black",staticStyle:{"font-size":"0.6rem"}},[t._v("\n        "+t._s(t.downloadState.total?Math.floor(t.downloadState.downloaded/t.downloadState.total*100):0)+"\n      ")]),a("q-tooltip",[t._v(t._s(t.$t("downloading_update")))])],1):[a("q-icon",{attrs:{name:"update"}},[a("q-tooltip",[t._v(t._s(t.$t("check_for_update")))])],1),a("q-badge",{directives:[{name:"show",rawName:"v-show",value:t.latestVersion&&t.latestVersion!==t.currentVersion,expression:"latestVersion && latestVersion !== currentVersion"}],staticClass:"q-mr-xs q-mt-xs",attrs:{color:"yellow",rounded:"",floating:""}})]],2),a("q-dialog",{attrs:{persistent:!t.cancellable,position:t.screen$xs?"bottom":"standard","content-class":"fullscreen-dialog"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("q-card",{staticClass:"update-panel-card"},[a("q-card-section",{staticClass:"q-pa-md row no-wrap items-center"},[a("div",{staticClass:"text-h6 text-weight-bold"},[t._v(t._s(t.$t("update_alphabiz")))]),a("q-space")],1),a("CurrentInformation",{staticClass:"q-pt-none q-pb-xs",attrs:{version:t.currentVersion,source:t.source}}),t.downloadState?a("DownloadState",{staticClass:"q-pt-none q-pb-xs",attrs:{downloaded:t.downloadState.downloaded,total:t.downloadState.total}}):t._e(),a("q-card-section",{staticClass:"q-py-none"},[a("div",{staticClass:"updater-state"},[a("div",{staticClass:"q-px-md q-py-sm row items-center no-wrap",staticStyle:{"min-height":"48px"}},["sniffer$checkUpdate"===t.loadingState?[a("div",{staticClass:"q-pa-xs q-mr-md"},[a("q-spinner-ios",{attrs:{size:"1.1rem"}})],1)]:[a("q-icon",{staticClass:"q-mr-md",attrs:{name:"update",size:"1.7rem"}})],a("div",{staticClass:"full-width"},[["sniffer$checkUpdate","sniffer$checkForceUpdate"].includes(t.loadingState)?[a("div",[t._v(t._s(t.$t("checking_for_update")))])]:t.forceUpdate?[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("version_out_of_date")))]),t.latestVersion?a("div",[t._v(t._s(t.latestVersion))]):a("div",{staticStyle:{"font-size":"0.7rem"}},[t._v(t._s(t.$t("have_to_update")))])]:t.latestVersion===t.currentVersion?[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("current_is_latest")))]),a("div",[t._v(t._s(t.latestVersion))])]:t.latestVersion?[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("new_version_hint")))]),a("div",[t._v(t._s(t.latestVersion))])]:[a("div",[t._v(" "+t._s(t.$t("click_to_check_update")))])]],2)],2),t.release&&t.release.info?a("ReleaseInfomation",{staticClass:"q-pt-none",attrs:{info:t.release.info}}):t._e()],1)]),a("q-card-section",{staticClass:"column"},[t.primaryBtn?a("q-btn",t._b({attrs:{unelevated:"",color:"primary","text-color":"primary","no-caps":""},on:{click:t.primaryBtn.click}},"q-btn",t.primaryBtn,!1)):t._e(),t.cancellable||t.isDev?a("q-btn",{staticClass:"q-mt-sm",attrs:{unelevated:"",color:"general","text-color":"general","no-caps":"",label:t.$t("close")+(!t.cancellable&&t.isDev?" (dev_only)":"")},on:{click:function(){return t.showDialog=!1}}}):t._e()],1)],1)],1)],1)},ft=[],gt=(a("a79d"),a("ddc3")),bt=a.n(gt);async function vt({currentVersion:t,channel:e}){var a;const i=t=>[t.split("-").shift(),t.split("-").pop()].filter((t=>!!t)).join("-");let s=await(async()=>{try{const t=await(await fetch(K.a.versionsUrl)).json();return t.min[e]}catch(t){return null}})();if(s=i(null!==(a=s)&&void 0!==a?a:t),t=i(t),bt.a.gt(s,t))return s}async function _t(){const{ipcRenderer:t}=await Promise.resolve().then(a.t.bind(null,"34bb",7)),{message:e,release:i}=await new Promise((e=>{const a={message:"version_not_found",release:null};t.once("update-available",((t,{version:i,detail:s})=>{a.message="version_found",a.release={version:i,info:null!==s&&void 0!==s?s:""},e(a)})),t.once("update-not-available",((i,{reason:s,showDialog:n}={})=>{s&&n&&(a.message=s),t.send("dismiss-update"),e(a)})),t.send("check-for-update")}));return{message:e,release:i}}async function wt({onStart:t,onProgress:e,onDownloaded:i,onCancelled:s}){const{ipcRenderer:n}=await Promise.resolve().then(a.t.bind(null,"34bb",7));await new Promise(((a,i)=>{n.once("update-downloading",(()=>{t();const s=(t,a)=>e(a);n.on("update-progress",s),n.once("update-not-available",(()=>i("update-not-available"))),n.once("update-failed",((t,{reason:e})=>i(e))),n.once("ready-to-restart",(()=>a()))})),n.send("confirm-update")})).then((async()=>{await i()}),(async t=>{t&&"update-not-available"!==t&&(await this.$alphabiz.dialog({title:this.$t("update_failed"),message:this.$t("update_failed_message")+this.$t(t),ok:this.$t("ok")}).promise(),await s()),n.send("dismiss-update")})).finally((()=>{n.removeAllListeners("update-progress")}))}const yt=async t=>{const e=`${K.a.homepage}/app/release/${t}.json`;return await fetch(e).then((t=>t.json())).catch((()=>null))};async function $t({currentVersion:t,channel:e}){var a,i;const s=await yt("microsoft_store"),n=t=>[t.split("-").shift(),t.split("-").pop()].filter((t=>!!t)).join("-");t=n(t);const o=null!==(a=null===s||void 0===s||null===(i=s.min)||void 0===i?void 0:i.version)&&void 0!==a?a:t;if(bt.a.gt(o,t))return o}async function Ct(t){const e=await yt("microsoft_store"),a={message:"version_not_found"};if(e){const{version:i,information:s}=e.latest;Object.assign(a,{message:bt.a.gt(i,t)?"version_found":"already_latest",release:{version:i,info:null!==s&&void 0!==s?s:""}})}return a}async function St(){const t=K.a.microsoftStoreProductId,e=`ms-windows-store://pdp/?ProductId=${t}`;window.open(e,"_blank")}var kt={methods:{async sniffer$checkForceUpdate(t){try{this.loadingState="sniffer$checkForceUpdate";const e={microsoft_store:$t,github:vt}[t],a=await e.call(this,{currentVersion:this.currentVersion,channel:W["a"].getters.settings.versionChannel});return a}finally{this.loadingState=null}},async sniffer$checkUpdate(t){try{this.loadingState="sniffer$checkUpdate";const e={microsoft_store:Ct,github:_t}[t],{message:a,release:i}=await e.call(this,this.currentVersion),s="version_found"===a;return"already_latest"===a?(this.latestVersion=this.currentVersion,this.release=null):s?(this.latestVersion=i.version,this.release=i):(this.latestVersion=this.currentVersion,this.release=null),{available:s,message:a,release:i}}finally{this.loadingState=null}},async sniffer$startUpdate(t,e){const a={microsoft_store:St,github:wt}[t];await a.call(this,e)}}},qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card-section",[a("div",{staticClass:"q-px-md q-py-sm bg-general rounded-borders"},[a("div",{staticClass:"q-mr-sm row no-wrap items-center"},[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("current_version")))]),t.sourceTag?a("div",{staticClass:"rounded-borders q-ml-sm q-px-sm bg-positive text-positive",staticStyle:{"font-size":"0.7rem"}},[t._v("\n        "+t._s(t.sourceTag)+"\n      ")]):t._e()]),a("div",[t._v(t._s(t.version))])])])},xt=[],Qt={name:"CurrentInformation",props:{version:String,source:String},computed:{sourceTag(){return"github"===this.source?null:{microsoft_store:"Microsoft Store"}[this.source]}}},Dt=Qt,Ut=a("a370"),It=Object(p["a"])(Dt,qt,xt,!1,null,null,null),Lt=It.exports;$()(It,"components",{QCardSection:Ut["a"]});var Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card-section",[a("div",{staticClass:"q-px-md q-py-sm bg-general rounded-borders row no-wrap items-center"},[a("div",{staticClass:"relative-position q-mr-md"},[a("q-circular-progress",{attrs:{size:"1.7rem",thickness:.3,"track-color":"grey","center-color":"transparent",value:t.progress}}),a("div",{staticClass:"absolute-center text-bold",staticStyle:{"font-size":"0.6rem"}},[t._v(t._s(t.progress))])],1),a("div",[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("downloading_update")))]),a("div",[t._v(t._s(t.progressMessage))])])])])},Pt=[],zt=a("f248"),Et=a.n(zt),jt={name:"DownloadState",props:{downloaded:Number,total:Number},computed:{progress(){return this.total?Math.floor(this.downloaded/this.total*100):0},progressMessage(){return`${Et()(this.downloaded)} / ${Et()(this.total)}`}}},Bt=jt,Tt=(a("84d3"),a("58ea")),At=Object(p["a"])(Bt,Ot,Pt,!1,null,"8d9069a4",null),Vt=At.exports;$()(At,"components",{QCardSection:Ut["a"],QCircularProgress:Tt["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"release-information",on:{click:t.handleClick}},[a("q-separator"),a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("release_notes"))+":")]),a("div",{staticClass:"overflow-hidden ellipsis-3-lines",staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.info))])])],1)},Ft=[],Mt={name:"ReleaseInfomation",props:{info:String},methods:{handleClick(){this.$alphabiz.dialog({title:this.$t("release_notes"),message:this.info,ok:this.$t("cancel")})}}},Rt=Mt,Wt=(a("619c"),Object(p["a"])(Rt,Nt,Ft,!1,null,"1c23cf1c",null)),Ht=Wt.exports;$()(Wt,"components",{QSeparator:O["a"]});var Jt=a("c83d"),Gt={name:"AppUpdater",mixins:[kt],components:{ReleaseInfomation:Ht,DownloadState:Vt,CurrentInformation:Lt},props:{source:String},data(){return{isDev:!1,showDialog:!1,currentVersion:Object(Jt["a"])("version"),latestVersion:null,loadingState:null,release:null,forceUpdate:!1,downloadState:null}},computed:{cancellable(){return!this.forceUpdate},primaryBtn(){return this.downloadState?{label:this.$t("cancel_update"),loading:"cancelUpdate"===this.loadingState,disable:!1,click:async()=>{await this.cancelUpdate(this.source)}}:this.forceUpdate?{label:this.$t("update_now"),disable:!!this.loadingState,click:async()=>{await this.startForceUpdate(this.source)}}:this.latestVersion&&this.latestVersion!==this.currentVersion?{label:this.$t("update_now"),disable:!!this.loadingState,click:async()=>{await this.startUpdate(this.source)}}:{label:this.$t("check_for_update"),disable:!!this.loadingState,click:async()=>{await this.checkUpdate(this.source)}}}},methods:{async checkUpdate(t,e="manual"){const{available:a,message:i}=await this.sniffer$checkUpdate(t);async function s({message:t}){"version_not_found"!==t&&await this.$alphabiz.dialog({title:this.$t("no_update_available"),message:this.$t(t,[this.currentVersion]),ok:this.$t("ok"),cancel:!1}).promise()}"silent"!==e&&"manual"===e&&(a||await s.call(this,{message:i}))},async startUpdate(t){const e=(t,e)=>{const a=setInterval((()=>{t(e),e--,e<0&&clearInterval(a)}),1e3);return()=>clearInterval(a)};try{this.loadingState="startUpdate",await this.sniffer$startUpdate(t,{onStart:()=>this.downloadState={downloaded:0,total:0},onProgress:t=>{const e=t=>{const e={downloaded:0,total:0};return t?(Object.values(t).filter((t=>!isNaN(t.downloaded)&&!isNaN(t.length))).forEach((t=>{e.downloaded+=t.downloaded,e.total+=t.length})),e):e};this.downloadState=Object.assign({},this.downloadState,e(t))},onDownloaded:async()=>{const a=this.$alphabiz.dialog({title:this.$t("ready_to_update"),banner:this.$t("restart_to_update"),cancel:this.$t("cancel_update"),ok:!1}),i=e((t=>{a.update({cancel:`${this.$t("cancel_update")} (${Math.max(t,0)}s)`})}),10);await a.promise("cancel").then((e=>{e&&(i(),this.cancelUpdate(t))}))},onCancelled:async()=>{this.downloadState=null}})}finally{this.loadingState=null}},async cancelUpdate(t){const e=async()=>{const{ipcRenderer:t}=await Promise.resolve().then(a.t.bind(null,"34bb",7)),e=await new Promise((e=>{t.once("install-aborted",(()=>e("install-aborted"))),t.once("update-aborted",(()=>e("update-aborted"))),t.send("abort-update")}));"install-aborted"===e||(await new Promise((t=>setTimeout(t,3e3))),t.send("dismiss-update"))};try{this.loadingState="cancelUpdate","github"===t&&await e(),this.downloadState=null}finally{this.loadingState=null}},async checkForceUpdate(t,e){const i=!1,s=Object(J["isElectron"])()?a("34bb").ipcRenderer:null,n=await this.sniffer$checkForceUpdate(t);if(!n)return await c.call(this,!1);this.forceUpdate=!0;const o=await r.call(this);if(!o)return await c.call(this,!i);async function r(){const t=this.$alphabiz.dialog({title:this.$t("version_out_of_date"),message:this.$t("have_to_update"),ok:this.$t("update_now"),cancel:i?`${this.$t("cancel")} (dev_only)`:this.$t("exit_alphabiz")});return!await t.promise("cancel")}async function c(t){return t?Object(J["isElectron"])()?(s.send("exit-app"),void setTimeout((()=>process.exit(0)),3e3)):location.reload():W["a"].commit("changeDisableTasks",!1)}e&&await e(n)},async startForceUpdate(t){const{available:e,message:i}=await this.sniffer$checkUpdate();if(!e)return await s.call(this,{message:i});async function s({message:t}){if("version_not_found"===t)return;const e={message:this.$t("download_latest_version_from_website"),cancel:this.$t("cancel"),ok:{label:this.$t("to_the_website"),handler:()=>{if(!Object(J["isElectron"])())return;const t=a("34bb").ipcRenderer,e=K.a.homepage;t.send("to_browserurl",e)}}};await this.$alphabiz.dialog({title:this.$t("no_update_available"),...e}).promise()}await this.startUpdate(t)},async recheckUpdate(t){let e=!1;const a=async()=>{if("github"===t)return!0;if("microsoft_store"===t){var e;const i=await yt("microsoft_store");if(null!==i&&void 0!==i&&null!==(e=i.force_update)&&void 0!==e&&e.enable)return!0;var a;if(i&&i.force_update)return t=null!==(a=i.force_update.source)&&void 0!==a?a:t,i.force_update.enable}};if(await a()&&await this.checkForceUpdate(t,(async()=>{e=!0,this.showDialog=!0,await this.startForceUpdate(t)})),e)return;const i=!!this.latestVersion;i?await this.checkUpdate(t,"silent"):await this.checkUpdate(t,"auto")}},created(){this.recheckUpdate(this.source),J["Bus"].$on("updater$recheckUpdate",(()=>{this.recheckUpdate(this.source)}))}},Kt=Gt,Xt=(a("f69a"),a("9c40")),Yt=a("24e8"),Zt=a("f09f"),te=a("2c91"),ee=a("d9b2"),ae=Object(p["a"])(Kt,mt,ft,!1,null,"48979f00",null),ie=ae.exports;$()(ae,"components",{QBtn:Xt["a"],QCircularProgress:Tt["a"],QTooltip:F["a"],QIcon:g["a"],QBadge:v["a"],QDialog:Yt["a"],QCard:Zt["a"],QCardSection:Ut["a"],QSpace:te["a"],QSpinnerIos:ee["a"],QColor:w["a"]});var se=a("aa2c"),ne=a.n(se);const oe=a("ed08").isElectron();var re={name:"ApplicationHeader",components:{AppUpdater:ie,Breadcrumbs:pt},props:{},data(){return{isElectron:oe,isMicrosoftApp:ne.a.windowsStore(),env:null}},created(){if(oe){Promise.resolve().then(a.t.bind(null,"34bb",7)).then((({ipcRenderer:t})=>{this.windowControl=e=>t.sendSync("app_window_control",e)}));const t=navigator.userAgent.toLowerCase(),e=/macintosh|mac os x/i.test(t);this.env=e?"mac":"win"}},computed:{applicationTitle(){const t={Downloader:this.$route.query.currentTab,Library:"library",Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSetting:"basic_setting",AdvanceSetting:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):G["appName"]}}},ce=re,le=(a("a5fc"),a("e359")),de=a("65c6"),ue=Object(p["a"])(ce,st,nt,!1,null,"4fe3d8d2",null),he=ue.exports;$()(ue,"components",{QHeader:le["a"],QToolbar:de["a"],QSpace:te["a"]});const pe=a("ed08").isElectron();var me={name:"MainLayout",components:{ApplicationHeader:he,ApplicationBar:it["a"],LeftDrawer:at},data(){return{showAppBar:pe,currentTab:"downloading",leftDrawerOpen:!1}},computed:{leftDrawerBehavior(){return this.$refs.leftDrawer.currentBehavior},applicationTitle(){const t={Index:this.$route.query.currentTab,Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSettings:"basic_setting",AdvancedSettings:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):G["appName"]},publicVersion(){return Object(Jt["a"])("version")},publicSourceCommit(){return Object(Jt["a"])("sourceCommit")}},methods:{showAboutDialog(){const t=this.$root.$children[0];t.$refs.about.about_visible()}}},fe=me,ge=(a("89d3"),a("4d5a")),be=a("09e3"),ve=a("7ff0"),_e=Object(p["a"])(fe,i,s,!1,null,null,null);e["default"]=_e.exports;$()(_e,"components",{QLayout:ge["a"],QBtn:Xt["a"],QBadge:v["a"],QSeparator:O["a"],QPageContainer:be["a"],QFooter:ve["a"],QToolbar:de["a"]})},"84d3":function(t,e,a){"use strict";a("efa3")},"89d3":function(t,e,a){"use strict";a("e87e")},"8ca3":function(t,e,a){},a5fc:function(t,e,a){"use strict";a("fc61")},af13:function(t,e,a){"use strict";a("4896")},b2ea:function(t,e,a){},d040:function(t,e,a){"use strict";a("ec4a")},e87e:function(t,e,a){},ec4a:function(t,e,a){},eec6:function(t,e,a){},efa3:function(t,e,a){},f69a:function(t,e,a){"use strict";a("8ca3")},fc61:function(t,e,a){},ff65:function(t,e,a){}}]);