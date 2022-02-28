(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"3c3e":function(t,e,a){},4610:function(t,e,a){"use strict";a("ca63")},6871:function(t,e,a){"use strict";a("3c3e")},b99f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row justify-evenly content-start q-gutter-md"},[a("amplify-card",{staticClass:"col-5 col-grow",attrs:{bordered:"",cancelable:!1,title:t.$t("credits")},scopedSlots:t._u([{key:"description",fn:function(){return[a("div",{staticClass:"text-body"},[t._v(t._s(t.$t("your_credits"))+": "+t._s(t.$store.state.credits.credit))])]},proxy:!0},{key:"default",fn:function(){return[a("div",{staticClass:"text-right text-h1 text-weight-bolder",staticStyle:{opacity:"0.2"}},[a("div",[t._v(t._s(t.$store.state.credits.credit))])])]},proxy:!0}])}),a("actions"),a("transaction")],1)])},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"col-3 col-grow items-start",staticStyle:{"min-width":"320px"},attrs:{bordered:"",flat:""}},[a("q-card-section",{staticClass:"row justify-evenly content-center q-gutter-md"},[a("alphabiz-button",{staticClass:"col-5 col-grow",attrs:{label:t.$t("transfer")},on:{click:function(){return t.showTransferDialog=!0}}}),a("alphabiz-button",{staticClass:"col-5 col-grow",attrs:{label:t.$t("receive")},on:{click:function(){return t.showReceiveDialog=!0}}})],1),a("amplify-dialog",{attrs:{title:t.$t("transfer"),"submit-label":t.$t("transfer"),"on-submit":t.transfer,"on-clear":function(){return t.form.clearData()},"max-width":"360px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.disable;return t._l(t.form.items,(function(e,n){return a("amplify-input",t._b({key:n,attrs:{label:t.$t(e.bound.label),readonly:i,required:"",range:"amount"===n?[0,1e3]:void 0},model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"item.model"}},"amplify-input",e.bound,!1))}))}}]),model:{value:t.showTransferDialog,callback:function(e){t.showTransferDialog=e},expression:"showTransferDialog"}},[a("template",{slot:"description"},[t._v("\n        "+t._s(t.$t("fill_the_receipt_code"))+"\n      ")])],2),a("amplify-dialog",{attrs:{title:t.$t("receive"),"submit-label":t.$t("copy"),"on-submit":t.copyCode,"max-width":"360px"},scopedSlots:t._u([{key:"default",fn:function(){return[a("q-input",{attrs:{type:"text",value:t.$store.state.account.sub,readonly:""}})]},proxy:!0}]),model:{value:t.showReceiveDialog,callback:function(e){t.showReceiveDialog=e},expression:"showReceiveDialog"}},[a("template",{slot:"description"},[t._v("\n        "+t._s(t.$t("code_the_receipt_code"))+"\n      ")])],2)],1)},o=[],r=(a("d9e2"),a("9523")),l=a.n(r),c=(a("5319"),a("ed08"));class d{static _dispatch(t,e){return Object(c["getContext"])().$store.dispatch(t,e)}static setCurrentCredit(t){return this._dispatch(this.Actions.CREDIT_SET_CURRENT_CREDIT,t)}static transfer(t,e,a,i){return this._dispatch(this.Actions.CREDIT_TRANSFER,{receiver:t,amount:e,category:a,meta:i})}}l()(d,"Actions",{CREDIT_TRANSFER:"CREDIT_TRANSFER",CREDIT_INIT_DATA:"CREDIT_INIT_DATA",CREDIT_CLEAR_DATA:"CREDIT_CLEAR_DATA",CREDIT_FETCH_TRANSACTION:"CREDIT_FETCH_TRANSACTION",CREDIT_CLEAR_TRANSACTION:"CREDIT_CLEAR_TRANSACTION",CREDIT_SET_CURRENT_CREDIT:"CREDIT_SET_CURRENT_CREDIT"});class u{static showRaw(t,e){Object(c["ctx$notify"])({message:t,type:e,position:"bottom-right",timeout:5e3})}static show(t,e){const a="credit_",i=Object(c["ctx$t"])(a+t.replace(/ /g,"_"));Object(c["ctx$notify"])({message:i,type:e,position:"bottom-right",timeout:5e3})}static showPositive(t){this.show(t,"positive")}static showNegative(t){const e=!Object.keys(this.ERROR_EVENTS).includes(t);e?this.showRaw(t,"negative"):this.show(this.ERROR_EVENTS[t],"negative")}}l()(u,"ERROR_EVENTS",{"payer credit amount is not enough":"not_enough_amount","User does not exist.":"payee_not_exist","payee does not exist":"payee_not_exist","Invalid amount":"invalid_amount","can not transfer to yourself":"can_not_transfer_to_yourself"});var p=a("ac0b"),m={name:"Actions",data(){return{showTransferDialog:!1,showReceiveDialog:!1,form:new p["a"]({receiver:new p["b"]("",{type:"text",icon:"qr_code",label:"receipt_code",rules:p["e"].TransferReceiver}),amount:new p["b"]("",{type:"number",icon:"paid",label:"transfer_amount",rules:p["e"].TransferAmount})})}},methods:{async transfer(){try{const t=this.form.formData;if(Math.floor(t.amount)<=0)throw new Error("Invalid amount");if(t.amount>this.$store.state.credits.credit)throw new Error("payer credit amount is not enough");await d.transfer(t.receiver,t.amount,"TRANSFER")}catch(t){u.showNegative(t.message)}return!0},async copyCode(){return await navigator.clipboard.writeText(this.$store.state.account.sub),this.$q.notify({message:this.$t("copied"),type:"positive",position:"bottom-right",timeout:5e3}),!0}}},h=m,_=a("2877"),g=a("f09f"),b=a("a370"),y=a("eb85"),f=a("27f9"),v=a("eebe"),w=a.n(v),D=Object(_["a"])(h,s,o,!1,null,null,null),C=D.exports;w()(D,"components",{QCard:g["a"],QCardSection:b["a"],QSeparator:y["a"],QInput:f["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("amplify-card",{staticClass:"col-11 col-grow items-start",staticStyle:{height:"fit-content","min-height":"240px","min-width":"320px"},attrs:{bordered:"",cancelable:!1,title:t.$t("transaction_details")}},[a("q-table",{attrs:{loading:t.loading,grid:"","hide-header":"","hide-pagination":"",data:t.tableData,pagination:t.pagination,"row-key":"id"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"transaction-header"},[a("div",{staticClass:"full-height full-width relative-position"},[a("alphabiz-button",{attrs:{label:t.$d(t.queryButtonLabel,"YM")}},[a("year-month-picker",{model:{value:t.currentQueryDate,callback:function(e){t.currentQueryDate=e},expression:"currentQueryDate"}})],1)],1)])]},proxy:!0},{key:"item",fn:function(e){return[a("transaction-item",{attrs:{data:e.row},on:{click:function(e){return t.selectedId=e}}})]}},{key:"bottom",fn:function(){return[a("div",{staticClass:"flex flex-center q-pt-md full-width"},[a("q-pagination",{attrs:{color:"general","text-color":"general",max:t.pagesNumber,"max-pages":5,ellipses:!1,"boundary-numbers":!1,"direction-links":"","boundary-links":"",size:"md"},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)]},proxy:!0}])}),a("amplify-dialog",{attrs:{title:t.$t("transaction_details")},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[t.showDialog?a("q-list",{staticClass:"rounded-borders",attrs:{bordered:"",separator:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("transaction_id")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.selectedItem.id))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t(t.selectedItem.isIncome?"transaction_payer":"transaction_payee")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.selectedItem.target))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("transaction_category")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t(t.getCategoryField(t.selectedItem.category,t.selectedItem.isIncome))))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("transaction_changed_amount")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.selectedItem.amount))])],1)],1),t.selectedItem.meta?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("transaction_meta")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.selectedItem.meta))])],1)],1):t._e(),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("transaction_status")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t(t.getStatus(t.selectedItem.status))))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("transaction_creation_time")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$d(new Date(t.selectedItem.time),"YMDHms")))])],1)],1)],1):t._e()],1)],1)},x=[],I=(a("ddb0"),a("0d1c")),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-popup-proxy",{attrs:{"before-show":t.updateProxyDate,"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{ref:"picker",attrs:{value:t.proxyDate,minimal:"",landscape:"",locale:t.locale,"navigation-max-year-month":t.maxYearMonth,"default-year-month":t.maxYearMonth,mask:"YYYY-MM-DD","default-view":"Months","emit-immediately":!0,"years-in-month-view":!0},on:{input:t.handleInput}},[a("div",{staticClass:"row items-center justify-end q-gutter-sm"},t._l([{buttonType:"text",color:"general",label:"Latest",handleClick:t.handleLatest},{buttonType:"text",color:"general",label:"Cancel",handleClick:function(){}},{buttonType:"filled",color:"primary",label:"OK",handleClick:t.handleClick}],(function(t,e){return a("alphabiz-button",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{buttonType:t.buttonType,color:t.color,label:t.label},on:{click:t.handleClick}})})),1)])],1)},E=[],$={name:"YearMonthPicker",props:{value:{type:Date}},data(){const t=this,e={proxyDate:null};e.locale={days:"Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),daysShort:"Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),firstDayOfWeek:1,monthsShort:Array.from({length:12},((e,a)=>t.$d(new Date(`2000-${a+1}-1`),"M")))};const a=new Date,i=a.getFullYear(),n=a.getMonth()+1;return e.maxYearMonth=`${i}/${n<10?"0":""}${n}`,e},created(){this.updateProxyDate()},methods:{updateProxyDate(){var t;const e=null!==(t=this.value)&&void 0!==t?t:new Date;this.proxyDate=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},handleInput(t,e){this.$refs.picker.setView("Months"),this.proxyDate=t},handleClick(){console.log("[Proxy Date]",this.proxyDate),this.$emit("input",new Date(this.proxyDate))},handleLatest(){const t=new Date,e=`${t.getFullYear()}-${t.getMonth()+1}-2`;this.handleInput(e,"latest"),this.handleClick()}}},q=$,N=a("7cbe"),A=a("52ee"),k=a("7f67"),S=Object(_["a"])(q,R,E,!1,null,null,null),O=S.exports;w()(S,"components",{QPopupProxy:N["a"],QDate:A["a"]}),w()(S,"directives",{ClosePopup:k["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"transaction-item col-xs-12 col-sm-6 col-md-4",attrs:{clickable:""},on:{click:t.handleClick}},[a("q-item-section",{staticClass:"avatar",attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.getTransactionIcon(t.data.category,t.data.isIncome),left:"",size:"2rem"}})],1),a("q-item-section",{staticClass:"main"},[a("q-item-label",{staticClass:"text-weight-bolder text-no-wrap overflow-hidden"},[t._v(t._s(t.$t(t.getCategoryField(t.data.category,t.data.isIncome))))]),a("q-item-label",{staticClass:"text-no-wrap overflow-hidden",attrs:{caption:""}},[t._v(t._s(t.$d(new Date(t.data.time),"MDHms")))])],1),a("q-item-section",{staticClass:"side",attrs:{side:"",top:""}},[a("q-item-label",{staticClass:"amount text-body1 text-weight-bolder",class:t.data.isIncome?"text-positive":"text-general",attrs:{header:""}},[t._v("\n      "+t._s(t.data.amount)+"\n    ")]),a("q-badge",t._b({staticClass:"status"},"q-badge",t.getBadgeBound(t.data.status),!1))],1)],1)},P=[],Q={name:"TransactionItem",props:{data:Object},methods:{handleClick(){this.$emit("click",this.data.id)},getTransactionIcon(t,e){return{TRANSFER:"paid",PAYDATA:e?"cloud_upload":"cloud_download",BONUS:"card_giftcard",RECHARGE:"account_balance_wallet"}[t]},getCategoryField(t,e){return{PAYDATA:e?"category_paydata_payee":"category_paydata_payer",TRANSFER:"category_transfer",BONUS:"category_bonus",RECHARGE:"category_recharge"}[t]},getBadgeBound(t){const e={FINISH:{color:"positive",textColor:"positive",label:this.$t("status_finish")},FAILED:{color:"accent",textColor:"accent",label:this.$t("status_failed")},COMPLETED:{color:"blue",textColor:"white",label:this.$t("status_completed")},PENDING:{color:"general",textColor:"general",label:this.$t("status_pending")}};return e[t]}}},F=Q,L=(a("6871"),a("66e5")),Y=a("4074"),j=a("0016"),B=a("0170"),U=a("58a81"),H=a("714f"),z=Object(_["a"])(F,M,P,!1,null,"374b0006",null),J=z.exports;w()(z,"components",{QItem:L["a"],QItemSection:Y["a"],QIcon:j["a"],QItemLabel:B["a"],QBadge:U["a"]}),w()(z,"directives",{Ripple:H["a"]});const{expensesWithDateLiveData:G,incomeWithDateLiveData:V}=I;async function W(t,e,[a,i]){G.disable(),V.disable(),G.addOnChangedListener(a),V.addOnChangedListener(i),console.log("[[Transaction::Get]]",t,e),await Promise.all([await G.enable(t,e),await V.enable(t,e)])}async function K(){await Promise.all([await G.fetchNext(),await V.fetchNext()])}function X(){G.disable(),V.disable()}var Z={name:"Transaction",components:{YearMonthPicker:O,TransactionItem:J},data(){return{expensesTransaction:[],incomeTransaction:[],currentQueryDate:null,loading:!0,selectedId:null,pagination:{sortBy:"time",descending:!0,page:1,rowsPerPage:9}}},methods:{getCategoryField(t,e){return{PAYDATA:e?"category_paydata_payee":"category_paydata_payer",TRANSFER:"category_transfer",BONUS:"category_bonus",RECHARGE:"category_recharge"}[t]},getStatus(t){const e={FINISH:"status_finish",FAILED:"status_failed",COMPLETED:"status_completed",PENDING:"status_pending"};return e[t]}},computed:{tableData(){const t=[...this.expensesTransaction,...this.incomeTransaction];t.sort(((t,e)=>Date.parse(e.createdAt)-Date.parse(t.createdAt)));const e=t=>{const e=t=>this.$store.state.account.sub===t.payeeId,a={};return a.time=Date.parse(t.createdAt),a.isIncome=e(t),a.id=t.id,a.category=t.category,a.amount=`${e(t)?"+":"-"}${t.amount}`,a.status=t.status,a.target=e(t)?t.payerId:t.payeeId,a.meta=t.meta?JSON.parse(t.meta):null,a};return t.map(e)},selectedItem(){return this.selectedId?this.tableData.find((t=>t.id===this.selectedId)):null},currentPageNumber(){return this.pagination.page},queryButtonLabel(){return this.currentQueryDate},pagesNumber(){return Math.ceil(this.tableData.length/this.pagination.rowsPerPage)},showDialog:{get(){return null!==this.selectedId},set(t){this.selectedId=t||null}}},mounted(){this.currentQueryDate=new Date},watch:{async currentPageNumber(t){if(t===this.pagesNumber)try{this.loading=!0,await K()}catch(e){u.showNegative(e.message)}finally{this.loading=!1}},async currentQueryDate(t,e){if(!t)return;const a=t=>(t=new Date(t),new Date(t.getUTCFullYear(),t.getUTCMonth()+1,1).toISOString()),i=t=>(t=new Date(t),new Date(t.getUTCFullYear(),t.getUTCMonth(),1).toISOString()),n=e?a(e):null,s=a(t),o=i(t);if(e&&s===n)this.pagination.page=1;else try{this.loading=!0,await W(s,o,[t=>this.expensesTransaction=t,t=>this.incomeTransaction=t])}catch(r){u.showNegative(r.message)}finally{this.loading=!1}}},beforeDestroy(){X(),this.expensesTransaction=[],this.incomeTransaction=[]}},tt=Z,et=(a("4610"),a("eaac")),at=a("3b16"),it=a("1c1c"),nt=Object(_["a"])(tt,T,x,!1,null,"f2ee5736",null),st=nt.exports;w()(nt,"components",{QTable:et["a"],QPagination:at["a"],QList:it["a"],QItem:L["a"],QItemSection:Y["a"],QItemLabel:B["a"]}),w()(nt,"directives",{Ripple:H["a"]});var ot={name:"Credits",components:{Actions:C,Transaction:st}},rt=ot,lt=a("9989"),ct=Object(_["a"])(rt,i,n,!1,null,null,null);e["default"]=ct.exports;w()(ct,"components",{QPage:lt["a"]})},ca63:function(t,e,a){}}]);