(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"13cb":function(t,e,a){},"32ee":function(t,e,a){},"647e":function(t,e,a){"use strict";a("ab64")},"67e3":function(t,e,a){"use strict";a("ce87")},7290:function(t,e,a){},"88b4":function(t,e,a){"use strict";a("13cb")},ab64:function(t,e,a){},b99f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"credit-container q-pa-sm"},["signedIn"===t.currentState?[a("actions",{staticStyle:{width:"100%","max-width":"960px",margin:"4px 4px"}}),a("task",{staticStyle:{width:"100%","max-width":"960px",margin:"4px 4px"}}),a("income",{staticStyle:{width:"100%","max-width":"960px",margin:"4px 4px"}}),a("expense",{staticStyle:{width:"100%","max-width":"960px",margin:"4px 4px"}})]:t._e()],2)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{attrs:{bordered:"",flat:""}},[a("q-card-section",{staticClass:"row items-center overflow-hidden non-selectable"},[a("div",{staticClass:"text-h6 text-weight-bold ellipsis"},[t._v(t._s(t.$t("credits")))]),a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",round:"",size:"0.7rem"},on:{click:function(){return t.openBrowser("https://alpha.biz/blog/how-to-get-more-ab-credits/")}}},[a("q-icon",{attrs:{name:"help_outline"}}),a("q-tooltip",[t._v(t._s(t.$t("credit_get_more")))])],1)],1),a("q-separator"),a("q-card-section",{staticClass:"column items-center non-selectable"},[a("div",{staticStyle:{"font-size":"0.8rem"}},[t._v(t._s(t.$t("your_credits")))]),a("div",{staticClass:"text-h4 text-weight-bolder",attrs:{"data-cy":"currentCredit"}},[t._v(t._s(t.currentCredit))])]),a("q-card-section",{staticClass:"row justify-start credit-actions q-pt-none overflow-hidden"},[a("q-btn",{attrs:{unelevated:"",color:"general","text-color":"general","no-wrap":"","no-caps":"",disable:!!t.currentLoadingState,loading:"transfer"===t.currentLoadingState,label:t.$t("transfer")},on:{click:t.transfer}}),a("q-btn",{attrs:{unelevated:"",color:"general","text-color":"general","no-wrap":"","no-caps":"",disable:!!t.currentLoadingState,loading:"receive"===t.currentLoadingState,label:t.$t("receive")},on:{click:t.receive}}),a("q-btn",{attrs:{unelevated:"",color:"general","text-color":"general","no-wrap":"","no-caps":"",disable:!!t.currentLoadingState||!t.showWithdraw,loading:"withdraw_fund"===t.currentLoadingState,label:t.$t("withdraw_fund")},on:{click:t.withdrawFund}},[t.showWithdraw?a("q-badge",{attrs:{color:"positive",floating:"",label:t.providentFundValue}}):t._e()],1),t.$store.getters.isDevMode?t._l(t.testHandlers,(function(e,n){return a("q-btn",{key:n,attrs:{unelevated:"",color:"general","text-color":"general","no-wrap":"","no-caps":"",disable:!!t.currentLoadingState,loading:t.currentLoadingState===n,label:n},on:{click:e}})})):t._e(),a("i"),a("i"),a("i"),a("i"),a("i"),a("i"),a("i"),a("i")],2)],1)},r=[],o=(a("d9e2"),a("0d1c")),c={data(){return{txn$fetcher:Object(o["c"])(),txn$data:{},txn$hasNext:void 0}},methods:{async txn$query(t,e){return t&&this.txn$fetcher.reset({query_type:t,query_params:e}),!!this.txn$fetcher.hasNext()&&(await this.txn$fetcher.fetch(),this.txn$data=this.txn$fetcher.getData().reduce(((t,e)=>(t[e.id]=e,t)),{}),this.txn$hasNext=this.txn$fetcher.hasNext(),!0)}}};const l={"payer credit amount is not enough":["Not enough credits","积分不足","积分不足"],"payee does not exist":["Payee does not exist","收款人不存在","收款人不存在"]},d={"en-US":{},"zh-CN":{},"zh-TW":{}},u=Object.keys(d);Object.keys(l).forEach((t=>{l[t].forEach(((e,a)=>{d[u[a]][t]=e}))}));var h={messages:d},p=a("05e4"),g=a("f71e"),m={name:"Actions",i18n:h,mixins:[c],data(){return{currentLoadingState:null}},computed:{currentState(){return this.$store.state.account.authState?"signedIn"!==this.$store.state.account.authState?"signedOut":"signedIn":"loading"},currentCredit(){return"signedIn"===this.currentState&&this.$store.state.credits.credit?this.$store.state.credits.credit/1e3:0},showWithdraw(){var t;return"signedIn"===this.currentState&&!(null===(t=this.$store.state.credits.providentFund)||void 0===t||!t.value)},providentFundValue(){if(!this.$store.state.credits.providentFund)return 0;const t=this.$store.state.credits.providentFund.value/1e3;return t>999?"999+":t>99?"99+":t},testHandlers(){const t=(t,e)=>async()=>{try{this.currentLoadingState=t,await e()}finally{this.currentLoadingState=null}},e=e=>Object.keys(e).reduce(((a,n)=>(a[n]=t(n,e[n]),a)),{});return e({pf$deposit_10:async()=>{await this.$store.dispatch("CREDIT_PF_DEPOSIT",{amount:1e4,meta:{testInfoHash:"foobar"}})},query$income:async()=>{await this.txn$query("income")},query$next:async()=>{await this.txn$query()},gql$query:async()=>{const t=global.gqlAPI.AwsApiGraphQL.injectAllOperations({}),e=await t.getUser(this.$store.state.account.sub);console.log(e)}})}},watch:{txn$data(t){console.log(Object.keys(t).length,t)}},methods:{async transfer(){const t=async t=>{const e={required:t=>!!t||this.$t("account_is_required")},a={receiver:{type:"text",model:"",icon:"qr_code",label:this.$t("receipt_code"),rules:[e.required,p["g"].bind(this)]},amount:{type:"text",model:"",icon:"paid",label:this.$t("transfer_amount"),rules:[e.required,p["f"].bind(this)]}},n=this.$alphabiz.dialog({title:this.$t("transfer"),message:this.$t("fill_the_receipt_code"),prompts:a,cancel:!0,ok:{color:"primary",textColor:"primary",label:this.$t("transfer"),handler:()=>n.vm.dialog$useLoadingState("ok",(async e=>{const{prompts:a}=e.dialog$arguments();await t(e,a.receiver,a.amount)}))}});await n.promise()};try{this.currentLoadingState="transfer",await t((async(t,e,a)=>{try{if(a=1e3*parseFloat(a),a<=0)throw new Error("Invalid amount");if(a>this.$store.state.credits.credit)throw new Error("credit_amount_not_enough");if(e===this.$store.state.account.sub)throw new Error("credit_can_not_transfer_to_yourself");await this.$store.dispatch("CREDIT_TRANSFER",{receiverSub:e,amount:a,meta:void 0}),t.hide()}catch(n){this.$q.notify({message:this.$t(n.message),type:"negative",position:"bottom-right",timeout:5e3})}}))}finally{this.currentLoadingState=null}},async receive(){try{this.currentLoadingState="receive";const t=this.$alphabiz.dialog({title:this.$t("receive"),message:this.$t("code_the_receipt_code"),banner:this.$store.state.account.sub,cancel:!0,ok:{color:"primary",textColor:"primary",label:this.$t("copy"),handler:async t=>{await Object(g["b"])(this.$store.state.account.sub),this.$q.notify({message:this.$t("copied"),type:"positive",position:"bottom-right",timeout:5e3}),t.hide()}}});await t.promise()}finally{this.currentLoadingState=null}},async withdrawFund(){try{this.currentLoadingState="withdraw_fund",await this.$store.dispatch("CREDIT_PF_WITHDRAW")}finally{this.currentLoadingState=null}},openBrowser(t){window.open(t,"_blank")}}},b=m,y=(a("647e"),a("2877")),_=a("f09f"),f=a("a370"),x=a("9c40"),w=a("0016"),$=a("05c0"),v=a("eb85"),D=a("58a8"),C=a("eebe"),S=a.n(C),q=Object(y["a"])(b,s,r,!1,null,"4ae4d570",null),k=q.exports;S()(q,"components",{QCard:_["a"],QCardSection:f["a"],QBtn:x["a"],QIcon:w["a"],QTooltip:$["a"],QSeparator:v["a"],QBadge:D["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"full-width",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-weight-bold non-selectable"},[t._v(t._s(t.$t("account_task_page")))])]),a("TaskCard",{staticStyle:{"margin-top":"-16px","min-height":"72px !important"}})],1)},E=[],I={name:"Task"},N=I,O=Object(y["a"])(N,T,E,!1,null,null,null),A=O.exports;S()(O,"components",{QCard:_["a"],QCardSection:f["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"overflow-hidden",staticStyle:{height:"fit-content","min-height":"240px"},attrs:{bordered:"",flat:""}},[a("q-card-section",{staticClass:"q-pb-none"},[a("div",{staticClass:"text-h6 text-bold non-selectable"},[t._v(t._s(t.$t("income")))])]),a("q-card-section",{staticClass:"q-pb-none"},[a("q-table",{staticStyle:{"margin-top":"-16px"},attrs:{loading:t.loading,"no-data-label":t.$t("credit_no_data"),"loading-label":t.$t("credit_loading"),grid:"","hide-header":"","hide-pagination":"",data:t.tableData,pagination:t.pagination,"row-key":"id"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"transaction-header"},[a("div",{staticClass:"full-height full-width relative-position"},[a("alphabiz-button",{attrs:{label:t.$d(t.queryButtonLabel,"YM")}},[a("year-month-picker",{model:{value:t.currentQueryDate,callback:function(e){t.currentQueryDate=e},expression:"currentQueryDate"}})],1)],1)])]},proxy:!0},{key:"item",fn:function(e){return[a("transaction-item",{attrs:{data:e.row},on:{click:t.showDialog}})]}},{key:"bottom",fn:function(){return[a("div",{staticClass:"flex flex-center q-pt-sm q-pb-md full-width"},[a("q-pagination",{attrs:{unelevated:"",color:"general","text-color":"general",max:t.pagesNumber,"max-pages":5,ellipses:!1,"boundary-numbers":!1,"direction-links":"","boundary-links":"",size:"md"},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)]},proxy:!0}])})],1)],1)},P=[],L=a("9523"),R=a.n(L),F=(a("5319"),a("2a19")),M=a("8847");class j{static showRaw(t,e){F["a"].create({message:t,type:e,position:"bottom-right",timeout:5e3})}static show(t,e){const a="credit_",n=M["b"].t(a+t.replace(/ /g,"_"));F["a"].create({message:n,type:e,position:"bottom-right",timeout:5e3})}static showPositive(t){this.show(t,"positive")}static showNegative(t){const e=!Object.keys(this.ERROR_EVENTS).includes(t);if(e&&(console.log("======================================================"),console.log("negative::message::raw",t),console.log("======================================================"),t.toString().indexOf("TransactionConflict")>=0))return this.showRaw(M["b"].t("account_error_network"),"negative");e?this.showRaw(t,"negative"):this.show(this.ERROR_EVENTS[t],"negative")}}R()(j,"ERROR_EVENTS",{"Network error":"error_network","Network Error":"error_network","timeout of 0ms exceeded":"error_network","payer credit amount is not enough":"not_enough_amount","User does not exist.":"payee_not_exist","payee does not exist":"payee_not_exist","Invalid amount":"invalid_amount","can not transfer to yourself":"can_not_transfer_to_yourself"});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-popup-proxy",{attrs:{"before-show":t.updateProxyDate,"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{ref:"picker",attrs:{minimal:"",value:t.proxyDate,locale:t.locale,"navigation-max-year-month":t.maxYearMonth,"default-year-month":t.maxYearMonth,mask:"YYYY-MM-DD","default-view":"Months","emit-immediately":!0,"years-in-month-view":!0,color:"general","text-color":"general"},on:{input:t.handleInput}},[a("div",{staticClass:"row items-center justify-end"},t._l([{color:"general",label:t.$t("credit_latest"),handleClick:t.handleLatest},{color:"general",label:t.$t("cancel"),handleClick:function(){}},{color:"primary",label:t.$t("ok"),handleClick:t.handleClick}],(function(t,e){return a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,staticClass:"q-mx-xs",attrs:{buttonType:t.buttonType,flat:"primary"!==t.color,unelevated:!0,color:t.color,"text-color":t.color,label:t.label},on:{click:t.handleClick}})})),1)])],1)},B=[],U={name:"YearMonthPicker",props:{value:{type:Date}},data(){const t={proxyDate:null};t.locale={days:"Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),daysShort:"Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),firstDayOfWeek:1};const e=new Date,a=e.getFullYear(),n=e.getMonth()+1;return t.maxYearMonth=`${a}/${n<10?"0":""}${n}`,t},created(){this.updateProxyDate()},methods:{updateProxyDate(){var t;const e=null!==(t=this.value)&&void 0!==t?t:new Date;this.proxyDate=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},handleInput(t){this.$refs.picker.setView("Months"),this.proxyDate=t},handleClick(){this.$emit("input",new Date(this.proxyDate))},handleLatest(){const t=new Date,e=`${t.getFullYear()}-${t.getMonth()+1}-2`;this.handleInput(e,"latest"),this.handleClick()}}},z=U,H=a("7cbe"),G=a("52ee"),J=a("7f67"),V=Object(y["a"])(z,Y,B,!1,null,null,null),W=V.exports;S()(V,"components",{QPopupProxy:H["a"],QDate:G["a"],QBtn:x["a"]}),S()(V,"directives",{ClosePopup:J["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"transaction-item col-xs-12 col-sm-6 col-md-4 non-selectable",attrs:{clickable:""},on:{click:t.handleClick}},[a("q-item-section",{staticClass:"avatar",attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.getTransactionIcon(t.data.category,t.data.isIncome),left:"",size:"2rem"}})],1),a("q-item-section",{staticClass:"main"},[a("q-item-label",{staticClass:"text-weight-bolder text-no-wrap overflow-hidden"},[t._v(t._s(t.$t(t.getCategoryField(t.data.category,t.data.isIncome))))]),a("q-item-label",{staticClass:"text-no-wrap overflow-hidden",attrs:{caption:""}},[t._v(t._s(t.$d(new Date(t.data.time),"MDHms")))])],1),a("q-item-section",{staticClass:"side",attrs:{side:"",top:""}},[a("q-item-label",{staticClass:"amount text-body1 text-weight-bolder",class:t.data.isIncome?"text-positive":"text-general",attrs:{header:""}},[t._v("\n      "+t._s(t.data.amount/1e3)+"\n    ")]),a("q-badge",t._b({staticClass:"status"},"q-badge",t.getBadgeBound(t.data.status),!1))],1)],1)},X=[],Z={name:"TransactionItem",props:{data:Object},methods:{handleClick(){this.$emit("click",this.data.id)},getTransactionIcon(t,e){return{TRANSFER:"paid",PAYDATA:e?"cloud_upload":"cloud_download",BONUS:"card_giftcard",RECHARGE:"account_balance_wallet"}[t]},getCategoryField(t,e){return{PAYDATA:e?"category_paydata_payee":"category_paydata_payer",TRANSFER:"category_transfer",BONUS:"category_bonus",RECHARGE:"category_recharge"}[t]},getBadgeBound(t){const e={FINISH:{color:"positive",textColor:"positive",label:this.$t("status_finish")},FAILED:{color:"accent",textColor:"accent",label:this.$t("status_failed")},COMPLETED:{color:"blue",textColor:"white",label:this.$t("status_completed")},PENDING:{color:"general",textColor:"general",label:this.$t("status_pending")}};return e[t]}}},tt=Z,et=(a("67e3"),a("66e5")),at=a("4074"),nt=a("0170"),it=a("714f"),st=Object(y["a"])(tt,K,X,!1,null,"db95a810",null),rt=st.exports;S()(st,"components",{QItem:et["a"],QItemSection:at["a"],QIcon:w["a"],QItemLabel:nt["a"],QBadge:D["a"]}),S()(st,"directives",{Ripple:it["a"]});a("ddb0");var ot=a("3eaf"),ct={data(){return{sync$listener:lt.bind(this)}},methods:{sync$isInRange(t,e){const a=t=>{const e=new Date(t.getUTCFullYear(),t.getUTCMonth(),1),a=new Date(t.getUTCFullYear(),t.getUTCMonth()+1,1);return[e,a]},[n,i]=a(t);return n.getTime()<=e.getTime()&&e.getTime()<=i.getTime()}},created(){ot["a"].GQL.addUserListener("credits",this.sync$listener)},beforeDestroy(){ot["a"].GQL.removeUserListener("credits",this.sync$listener)}};function lt(t){const e=t=>!!this.currentQueryDate&&this.sync$isInRange(this.currentQueryDate,"string"===typeof t?new Date(t):t);if(t.dp_expense_txn){const a=t.dp_expense_txn;if(this.expensesTransactions&&e(a.createdAt)){const t=this.expensesTransactions[a.id];t?Object.keys(t).filter((t=>void 0!==a[t])).forEach((e=>t[e]=a[e])):this.expensesTransactions[a.id]=a,this.expensesTransactions=Object.assign({},this.expensesTransactions)}}if(t.dp_income_txn){const a=t.dp_income_txn;if(this.incomeTransactions&&e(a.createdAt)){const t=this.incomeTransactions[a.id];t?Object.keys(t).filter((t=>void 0!==a[t])).forEach((e=>t[e]=a[e])):this.incomeTransactions[a.id]=a,this.incomeTransactions=Object.assign({},this.incomeTransactions)}}if(t.pf_deposit_txn){const a=t.pf_deposit_txn;this.expensesTransactions&&e(a.createdAt)&&(this.expensesTransactions[a.id]=a,this.expensesTransactions=Object.assign({},this.expensesTransactions))}if(t.pf_withdraw_txn){const a=t.pf_withdraw_txn;this.incomeTransactions&&e(a.createdAt)&&(this.incomeTransactions[a.id]=a,this.incomeTransactions=Object.assign({},this.incomeTransactions))}}var dt={name:"Income",mixins:[ct,c],components:{YearMonthPicker:W,TransactionItem:rt},data(){return{incomeTransactions:{},currentQueryDate:null,loading:!0,pagination:{sortBy:"time",descending:!0,page:1,rowsPerPage:9}}},methods:{showDialog(t){const e=this.tableData.find((e=>e.id===t));this.$alphabiz.dialog({title:this.$t("transaction_details"),list:{items:[{label:this.$t("transaction_id"),caption:e.id},{label:this.$t("transaction_payer"),caption:e.target},{label:this.$t("transaction_category"),caption:this.$t(this.getCategoryField(e.category))},{label:this.$t("transaction_changed_amount"),caption:e.amount/1e3},{label:this.$t("transaction_status"),caption:this.$t(this.getStatus(e.status))},{label:this.$t("transaction_creation_time"),caption:this.$d(new Date(e.time),"YMDHms")},{label:this.$t("transaction_meta"),caption:e.meta}]}})},getCategoryField(t){return{PAYDATA:"category_paydata_payee",TRANSFER:"category_transfer",BONUS:"category_bonus",RECHARGE:"category_recharge"}[t]},getStatus(t){const e={FINISH:"status_finish",FAILED:"status_failed",COMPLETED:"status_completed",PENDING:"status_pending"};return e[t]}},computed:{tableData(){const t=Object.values(this.incomeTransactions);t.sort(((t,e)=>Date.parse(e.createdAt)-Date.parse(t.createdAt)));const e=t=>{const e={};e.time=Date.parse(t.createdAt),e.id=t.id,e.category=t.category,e.amount=`+${t.amount}`,e.status=t.status,e.target=t.payerId,e.isIncome=!0;try{e.meta=JSON.parse(t.meta)}catch(n){var a;e.meta=null!==(a=t.meta)&&void 0!==a?a:null}return e.meta&&"object"===typeof e.meta&&0===Object.keys(e.meta).length&&(e.meta=null),e};return t.map(e)},currentPageNumber(){return this.pagination.page},queryButtonLabel(){return this.currentQueryDate},pagesNumber(){return Math.ceil(this.tableData.length/this.pagination.rowsPerPage)}},mounted(){this.currentQueryDate=new Date},watch:{txn$data(t){this.incomeTransactions=t},async currentPageNumber(t){if(t===this.pagesNumber)try{this.loading=!0,await this.txn$query()}catch(e){j.showNegative(e.message)}finally{this.loading=!1}},async currentQueryDate(t,e){if(!t)return;const a=t=>(t=new Date(t),new Date(t.getUTCFullYear(),t.getUTCMonth()+1,1).toISOString()),n=t=>(t=new Date(t),new Date(t.getUTCFullYear(),t.getUTCMonth(),1).toISOString()),i=e?a(e):null,s=a(t),r=n(t);if(e&&s===i)this.pagination.page=1;else try{this.loading=!0,await this.txn$query("income",{createdAt:{oldest:r,latest:s}})}catch(o){j.showNegative(o.message)}finally{this.loading=!1}}}},ut=dt,ht=(a("88b4"),a("eaac")),pt=a("3b16"),gt=Object(y["a"])(ut,Q,P,!1,null,"cf7c42e8",null),mt=gt.exports;S()(gt,"components",{QCard:_["a"],QCardSection:f["a"],QTable:ht["a"],QPagination:pt["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"overflow-hidden",staticStyle:{height:"fit-content","min-height":"240px"},attrs:{bordered:"",flat:""}},[a("q-card-section",{staticClass:"q-pb-none"},[a("div",{staticClass:"text-h6 text-bold non-selectable"},[t._v(t._s(t.$t("expense")))])]),a("q-card-section",{staticClass:"q-pb-none"},[a("q-table",{staticStyle:{"margin-top":"-16px"},attrs:{loading:t.loading,"no-data-label":t.$t("credit_no_data"),"loading-label":t.$t("credit_loading"),grid:"","hide-header":"","hide-pagination":"",data:t.tableData,pagination:t.pagination,"row-key":"id"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"transaction-header"},[a("div",{staticClass:"full-height full-width relative-position"},[a("alphabiz-button",{attrs:{label:t.$d(t.queryButtonLabel,"YM")}},[a("year-month-picker",{model:{value:t.currentQueryDate,callback:function(e){t.currentQueryDate=e},expression:"currentQueryDate"}})],1)],1)])]},proxy:!0},{key:"item",fn:function(e){return[a("transaction-item",{attrs:{data:e.row},on:{click:t.showDialog}})]}},{key:"bottom",fn:function(){return[a("div",{staticClass:"flex flex-center q-pt-sm q-pb-md full-width"},[a("q-pagination",{attrs:{unelevated:"",color:"general","text-color":"general",max:t.pagesNumber,"max-pages":5,ellipses:!1,"boundary-numbers":!1,"direction-links":"","boundary-links":"",size:"md"},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)]},proxy:!0}])})],1)],1)},yt=[],_t={name:"Expense",mixins:[ct,c],components:{YearMonthPicker:W,TransactionItem:rt},data(){return{expensesTransactions:{},currentQueryDate:null,loading:!0,pagination:{sortBy:"time",descending:!0,page:1,rowsPerPage:9}}},methods:{showDialog(t){const e=this.tableData.find((e=>e.id===t));this.$alphabiz.dialog({title:this.$t("transaction_details"),list:{items:[{label:this.$t("transaction_id"),caption:e.id},{label:this.$t("transaction_payee"),caption:e.target},{label:this.$t("transaction_category"),caption:this.$t(this.getCategoryField(e.category))},{label:this.$t("transaction_changed_amount"),caption:e.amount/1e3},{label:this.$t("transaction_status"),caption:this.$t(this.getStatus(e.status))},{label:this.$t("transaction_creation_time"),caption:this.$d(new Date(e.time),"YMDHms")},{label:this.$t("transaction_meta"),caption:e.meta}]}})},getCategoryField(t){return{PAYDATA:"category_paydata_payer",TRANSFER:"category_transfer",BONUS:"category_bonus",RECHARGE:"category_recharge"}[t]},getStatus(t){const e={FINISH:"status_finish",FAILED:"status_failed",COMPLETED:"status_completed",PENDING:"status_pending"};return e[t]}},computed:{tableData(){const t=Object.values(this.expensesTransactions);t.sort(((t,e)=>Date.parse(e.createdAt)-Date.parse(t.createdAt)));const e=t=>{const e={};e.time=Date.parse(t.createdAt),e.id=t.id,e.category=t.category,e.amount=`-${t.amount}`,e.status=t.status,e.target=t.payeeId;try{e.meta=JSON.parse(t.meta)}catch(n){var a;e.meta=null!==(a=t.meta)&&void 0!==a?a:null}return e.meta&&"object"===typeof e.meta&&0===Object.keys(e.meta).length&&(e.meta=null),e};return t.map(e)},currentPageNumber(){return this.pagination.page},queryButtonLabel(){return this.currentQueryDate},pagesNumber(){return Math.ceil(this.tableData.length/this.pagination.rowsPerPage)}},mounted(){this.currentQueryDate=new Date},watch:{txn$data(t){this.expensesTransactions=t},async currentPageNumber(t){if(t===this.pagesNumber)try{this.loading=!0,await this.txn$query()}catch(e){j.showNegative(e.message)}finally{this.loading=!1}},async currentQueryDate(t,e){if(!t)return;const a=t=>(t=new Date(t),new Date(t.getUTCFullYear(),t.getUTCMonth()+1,1).toISOString()),n=t=>(t=new Date(t),new Date(t.getUTCFullYear(),t.getUTCMonth(),1).toISOString()),i=e?a(e):null,s=a(t),r=n(t);if(e&&s===i)this.pagination.page=1;else try{this.loading=!0,await this.txn$query("expense",{createdAt:{oldest:r,latest:s}})}catch(o){j.showNegative(o.message)}finally{this.loading=!1}}}},ft=_t,xt=(a("b9cc"),Object(y["a"])(ft,bt,yt,!1,null,"eb735b66",null)),wt=xt.exports;S()(xt,"components",{QCard:_["a"],QCardSection:f["a"],QTable:ht["a"],QPagination:pt["a"]});const $t={beforeRouteEnter(t,e,a){a()}};var vt={name:"Credits",mixins:[$t],components:{Expense:wt,Income:mt,Actions:k,Task:A},computed:{currentState(){return this.$store.state.account.authState?"signedIn"!==this.$store.state.account.authState?"signedOut":"signedIn":"loading"},currentCredit(){return"signedIn"===this.currentState&&this.$store.state.credits.credit?this.$store.state.credits.credit/1e3:0}},methods:{openBrowser(t){window.open(t,"_blank")}}},Dt=vt,Ct=(a("e1e5"),a("9989")),St=Object(y["a"])(Dt,n,i,!1,null,"f9df5308",null);e["default"]=St.exports;S()(St,"components",{QPage:Ct["a"]})},b9cc:function(t,e,a){"use strict";a("32ee")},ce87:function(t,e,a){},e1e5:function(t,e,a){"use strict";a("7290")}}]);