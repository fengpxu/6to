(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"26ab":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"oauth-redirect-page"},[r("h4",{staticClass:"text-weight-bolder q-mb-md"},[t._v("Success!")]),r("p",[t._v("Authorization was successful. You will be redirected back to App")]),r("div",{staticClass:"bg-general q-pa-xl rounded-borders text-center",staticStyle:{"max-width":"1080px",overflow:"hidden"}},[r("h6",{staticClass:"text-weight-bolder q-my-md"},[t._v("Didn't work?")]),r("p",[t._v("If your aren't redirected, you can add the token manually.")]),r("h6",{staticClass:"q-mb-md q-mt-lg"},[t._v("Your authorization token:")]),r("div",{staticClass:"q-pa-md rounded-borders app-redirect-url"},[t._v(t._s(t.appRedirectUrl))]),r("q-btn",{staticClass:"q-mt-md",attrs:{color:"primary","text-color":"primary",label:"Redirect"},on:{click:t.handleRedirect}})],1)])},i=[],o={name:"OAuthRedirectPage",computed:{appRedirectUrl(){const{app_name:t,redirect_to:e}=this.$route.params,r="/oauth_redirect/"+t+"/"+encodeURIComponent(e),a=this.$route.fullPath.slice(r.length);if("app"===e)return`${t}://$oauth${a}`;{const t=`${e}/oauth${a}`;return t}}},methods:{handleRedirect(){location.href=this.appRedirectUrl}},mounted(){setTimeout((()=>this.handleRedirect()),1e3)}},c=o,s=(r("fdf4"),r("2877")),d=r("9c40"),n=r("eebe"),l=r.n(n),u=Object(s["a"])(c,a,i,!1,null,"7fc0d980",null);e["default"]=u.exports;l()(u,"components",{QBtn:d["a"]})},"651b":function(t,e,r){},fdf4:function(t,e,r){"use strict";r("651b")}}]);