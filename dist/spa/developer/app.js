const APP="Alphabiz",app={name:APP,displayName:APP,fileName:APP,snapName:APP.toLowerCase(),author:`${APP} Team <dev@alpha.biz>`,developer:`${APP} Team`,appIdentifier:"org.zeeis.alphabiz",description:`${APP} Blockchain Cryptocurrency Application`,appxPackageIdentityName:APP,publisher:"CN=zeeis",homepage:"https://alpha.biz",webEditionUrl:"https://web.alpha.biz",upgradeCode:"4d8a65aa-fc5b-421c-94ab-cb722ef737e2",protocol:APP.toLowerCase(),shortProtocol:"ab",versionsUrl:"https://raw.githubusercontent.com/tanshuai/alphabiz/main/versions.json",twitterAccount:"@alphabiz_app",isShowInternalNotice:!0,register:{mode:"none",list:[]},update:require("./update"),takedown:require("./take-down"),theme:{color:{primary:"#d1994b",secondary:"#f3ce90",accent:"#fbbb4a"},cornerLogoStyle:{left:"-72px",top:"-92px",height:"245px"}},dynamicConfig:require("./dynamicConfig"),microsoftStoreProductId:"9PBCCV3MHK04"};console.log("INIT APP CONFIG"),global._app_config_=app,global.LIBDB_NAME=app.name,module.exports=app,require("./validateAppConfig")(app);