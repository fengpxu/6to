(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"1dc1":function(e,t,a){"use strict";a("e7cf")},"3a45":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex"},[a("q-scroll-area",{staticStyle:{"min-height":"100%","min-width":"100%"}},[a("div",{staticClass:"q-my-lg q-mx-md"},[a("q-input",{staticClass:"resource-search-bar",attrs:{loading:e.searchBarLoading,disable:e.searchBarLoading,clearable:"",outlined:"",dense:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"after",fn:function(){return[a("q-btn",{staticClass:"bg-general text-general",attrs:{label:e.$t(e.searching?"lib_search_stop":"lib_search"),disable:!e.searchText||0===e.searchText.length,size:"0.9rem",flat:""},on:{click:function(){return e.searching?e.cancelSearch():e.handleSearch()}}})]},proxy:!0}]),model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),a("q-separator",{staticClass:"q-mb-md"}),a("div",{staticClass:"resource-layout"},e._l(e.resources,(function(t,s){return a("div",{key:s},[t?a("ResourceCard",{attrs:{data:t}}):e._e()],1)})),0)],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"resource-card",attrs:{flat:"",bordered:""}},[a("q-dialog",{model:{value:e.showDetailDialog,callback:function(t){e.showDetailDialog=t},expression:"showDetailDialog"}},[e.data.title&&e.data.source?a("q-card",{staticClass:"q-pa-md",staticStyle:{"min-width":"600px"},attrs:{flat:"",bordered:""}},[a("div",{staticClass:"text-weight-bold",staticStyle:{"font-size":"1.4rem"}},[e._v(e._s(e.data.title["en-us"]))]),a("div",{staticClass:"text-caption non-selectable"},[e._v(e._s(e.data.id))]),a("div",{staticClass:"q-py-sm",staticStyle:{margin:"0 -8px"}},[e._l(e.data.source,(function(t,s){return[t?a("div",{key:s,staticClass:"q-pa-md source-item",on:{click:function(t){return e.handleSourceClick(s)}}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticClass:"q-mr-md",staticStyle:{"font-weight":"bold","font-size":"1rem"}},[e._v(e._s(e.$t("lib_resource_rating"))+": ")]),a("span",{staticClass:"q-mr-sm"},[e._v(e._s(parseFloat(t.rating)/20))]),a("q-rating",{attrs:{value:parseFloat(t.rating)/20,size:"1.4rem",icon:"star_border","icon-selected":"star","icon-half":"star_half",max:5,color:"primary"}})],1),a("div",{staticClass:"q-my-sm"},[a("span",{staticClass:"q-mr-md",staticStyle:{"font-weight":"bold","font-size":"1rem"}},[e._v(e._s(e.$t("lib_resource_link"))+":")]),a("span",{staticStyle:{"font-weight":"bold","font-size":"1rem"}},[e._v(e._s(t.link))])]),a("div",[a("div",{staticStyle:{"font-weight":"bold","font-size":"1rem"}},[e._v(e._s(e.$t("lib_resource_comments"))+":")]),a("div",[e._v(e._s(t.comments))])])]):e._e()]}))],2)]):e._e()],1),a("div",{staticClass:"resource-button"},[a("alphabiz-button",{attrs:{"button-type":"icon",size:"xl",icon:"play_arrow"},on:{click:function(t){e.showDetailDialog=!0}}})],1),a("div",{staticClass:"resource-bottom"},[a("div",{staticClass:"resource-info"},[e.data.title&&e.data.title["en-us"]?[a("div",{staticClass:"text-weight-bold",staticStyle:{"font-size":"1.4rem"}},[e._v(e._s(e.data.title["en-us"]))]),a("div",{staticClass:"text-caption non-selectable"},[e._v(e._s(e.data.id))])]:[a("q-skeleton",{staticStyle:{"font-size":"1.4rem"},attrs:{type:"text"}}),a("q-skeleton",{attrs:{type:"text"}})]],2)]),a("div",{staticClass:"resource-mask"}),a("div",{staticClass:"resource-cover"},[e.coverLoaded?e._e():a("q-skeleton",{staticClass:"full-height",attrs:{type:"rect"}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.coverLoaded,expression:"coverLoaded"}],attrs:{src:e.coverSrc,alt:e.data.title["en-us"],referrer:"no-referrer",referrerpolicy:"no-referrer"},on:{load:e.onCoverLoad,error:e.onCoverError}})],1)],1)},o=[],n={name:"ResourceCard",props:{data:Object},data(){return{coverLoaded:!1,showDetailDialog:!1}},computed:{coverSrc(){if(!this.data.cover)return null;const e=Object.values(this.data.cover).filter((e=>!!e));return e[0]}},methods:{onCoverLoad(){this.coverLoaded=!0},onCoverError(){console.log("cover load err"),this.coverLoaded=!1},async handleSourceClick(e){await navigator.clipboard.writeText(this.data.source[e].link),this.$q.notify({message:this.$t("lib_resource_link_copied"),type:"positive",position:"bottom-right",timeout:5e3})}}},c=n,l=(a("1dc1"),a("2877")),u=a("f09f"),d=a("24e8"),h=a("daf4"),p=a("293e"),m=a("eebe"),g=a.n(m),v=Object(l["a"])(c,i,o,!1,null,"32b0465e",null),f=v.exports;g()(v,"components",{QCard:u["a"],QDialog:d["a"],QRating:h["a"],QSkeleton:p["a"]});var b={name:"Library",components:{ResourceCard:f},data(){return{searching:!1,searchText:null,searchInterval:null,resources:[],idList:[]}},watch:{searching(e){var t;null===(t=this.searchInterval)||void 0===t||t[e?"resume":"pause"]()}},computed:{searchBarLoading(){return!!this.searchText&&this.searching},searchHint(){return this.searching?this.$t("lib_searching"):this.$t("lib_search")}},created(){this.$GunDB.gun||this.$GunDB.enable({peers:["http://gun-manhattan.herokuapp.com/gun","https://fire-gun.herokuapp.com/gun","https://gunmeetingserver.herokuapp.com/gun","https://relay.peer.ooo/gun","https://gun-sashimi.herokuapp.com/gun","https://gunjs.herokuapp.com/gun","https://gun-ams1.maddiex.wtf/gun","https://shockblox-gun-server.herokuapp.com/gun","https://myriad-gundb-relay-peer.herokuapp.com/gun","https://mg-gun-manhattan.herokuapp.com/gun","https://gun-sjc1.maddiex.wtf/gun"],localStorage:!0});const e=e=>this.isMatched(e),t=e=>{this.resources=e};this.searchInterval=this.$GunDB.lib.openMatchedResourcesByTitles(e,t),this.searchInterval.pause()},beforeDestroy(){var e;null===(e=this.searchInterval)||void 0===e||e.clear()},methods:{isMatched(e){if(!this.searchText)return!1;const t=this.searchText,a=Object.values(e).filter((e=>!!e&&e.toLowerCase().indexOf(t.toLowerCase())>=0));return a.length>0},cancelSearch(){this.searching=!1},async handleSearch(){this.searchText&&(this.searching=!0)}}},_=b,y=(a("b385"),a("9989")),x=a("4983"),C=a("27f9"),k=a("0016"),w=a("9c40"),q=a("eb85"),S=Object(l["a"])(_,s,r,!1,null,"7e5190c2",null);t["default"]=S.exports;g()(S,"components",{QPage:y["a"],QScrollArea:x["a"],QInput:C["a"],QIcon:k["a"],QBtn:w["a"],QSeparator:q["a"]})},94042:function(e,t,a){},b385:function(e,t,a){"use strict";a("94042")},e7cf:function(e,t,a){}}]);