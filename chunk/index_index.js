(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"214":function(e,t,n){},"70":function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(221),a=n(1),c=n(235),i=n(3),l=(Object(i.k)("onBackgroundAudioPlay"),Object(i.k)("onBackgroundAudioPause"),Object(i.k)("onBackgroundAudioStop"),Object(i.k)("onBluetoothAdapterStateChange"),Object(i.k)("onBluetoothDeviceFound"),Object(i.k)("onBLEConnectionStateChange"),Object(i.k)("onBLECharacteristicValueChange"),Object(i.k)("onBeaconUpdate"),Object(i.k)("onBeaconServiceChange"),Object(i.k)("onUserCaptureScreen"),Object(i.k)("onHCEMessage"),Object(i.k)("onGetWifiList"),Object(i.k)("onWifiConnected"),Object(i.k)("offWifiConnected"),Object(i.k)("offGetWifiList"),Object(i.k)("getExtConfigSync"),Object(i.k)("getLogManager"),Object(i.k)("onMemoryWarning"),Object(i.k)("reportAnalytics"),Object(i.k)("navigateToSmartGameProgram"),Object(i.k)("getFileSystemManager"),Object(i.k)("stopRecord"),Object(i.k)("getRecorderManager"),Object(i.k)("pauseVoice"),Object(i.k)("stopVoice"),Object(i.k)("pauseBackgroundAudio"),Object(i.k)("stopBackgroundAudio"),Object(i.k)("getBackgroundAudioManager"),Object(i.k)("createAudioContext"),Object(i.k)("createCameraContext"),Object(i.k)("createLivePlayerContext"),Object(i.k)("createLivePusherContext"),Object(i.k)("createMapContext"),Object(i.k)("canIUse")),s=(Object(i.k)("showNavigationBarLoading"),Object(i.k)("hideNavigationBarLoading"),Object(i.k)("drawCanvas"),Object(i.k)("hideKeyboard"),Object(i.k)("createIntersectionObserver"),Object(i.k)("getMenuButtonBoundingClientRect"),Object(i.k)("getAccountInfoSync"),Object(i.k)("getUpdateManager")),u=(Object(i.k)("createWorker"),Object(i.k)("saveImageToPhotosAlbum"),Object(i.k)("startRecord"),Object(i.k)("playVoice"),Object(i.k)("setInnerAudioOption"),Object(i.k)("getAvailableAudioSources"),Object(i.k)("getBackgroundAudioPlayerState"),Object(i.k)("playBackgroundAudio"),Object(i.k)("seekBackgroundAudio"),Object(i.k)("saveVideoToPhotosAlbum"),Object(i.k)("loadFontFace"),Object(i.k)("saveFile"),Object(i.k)("getFileInfo"),Object(i.k)("getSavedFileList"),Object(i.k)("getSavedFileInfo"),Object(i.k)("removeSavedFile"),Object(i.k)("openDocument"),Object(i.k)("openBluetoothAdapter"),Object(i.k)("closeBluetoothAdapter"),Object(i.k)("getBluetoothAdapterState"),Object(i.k)("startBluetoothDevicesDiscovery"),Object(i.k)("stopBluetoothDevicesDiscovery"),Object(i.k)("getBluetoothDevices"),Object(i.k)("getConnectedBluetoothDevices"),Object(i.k)("createBLEConnection"),Object(i.k)("closeBLEConnection"),Object(i.k)("getBLEDeviceServices"),Object(i.k)("getBLEDeviceCharacteristics"),Object(i.k)("readBLECharacteristicValue"),Object(i.k)("writeBLECharacteristicValue"),Object(i.k)("notifyBLECharacteristicValueChange"),Object(i.k)("startBeaconDiscovery"),Object(i.k)("stopBeaconDiscovery"),Object(i.k)("getBeacons"),Object(i.k)("setScreenBrightness"),Object(i.k)("getScreenBrightness"),Object(i.k)("setKeepScreenOn"),Object(i.k)("addPhoneContact"),Object(i.k)("getHCEState"),Object(i.k)("startHCE"),Object(i.k)("stopHCE"),Object(i.k)("sendHCEMessage"),Object(i.k)("startWifi"),Object(i.k)("stopWifi"),Object(i.k)("connectWifi"),Object(i.k)("getWifiList"),Object(i.k)("setWifiList"),Object(i.k)("getConnectedWifi"),Object(i.k)("setTopBarText"),Object(i.k)("setBackgroundColor"),Object(i.k)("setBackgroundTextStyle"),Object(i.k)("getExtConfig"),Object(i.k)("login"),Object(i.k)("checkSession"),Object(i.k)("authorize"),Object(i.k)("getUserInfo"),Object(i.k)("checkIsSupportFacialRecognition"),Object(i.k)("startFacialRecognitionVerify"),Object(i.k)("startFacialRecognitionVerifyAndUploadVideo"),Object(i.k)("faceVerifyForPay"),Object(i.k)("showShareMenu"),Object(i.k)("hideShareMenu"),Object(i.k)("updateShareMenu"),Object(i.k)("getShareInfo"),Object(i.k)("chooseAddress"),Object(i.k)("addCard"),Object(i.k)("openCard"),Object(i.k)("openSetting"),Object(i.k)("getSetting"),Object(i.k)("getWeRunData"),Object(i.k)("navigateToMiniProgram")),d=(Object(i.k)("navigateBackMiniProgram"),Object(i.k)("chooseInvoice"),Object(i.k)("chooseInvoiceTitle"),Object(i.k)("checkIsSupportSoterAuthentication"),Object(i.k)("startSoterAuthentication"),Object(i.k)("checkIsSoterEnrolledInDevice"),Object(i.k)("setEnableDebug"),Object(i.k)("ocrIdCard"),Object(i.k)("ocrBankCard"),Object(i.k)("ocrDrivingLicense"),Object(i.k)("ocrVehicleLicense"),Object(i.k)("textReview"),Object(i.k)("textToAudio"),Object(i.k)("imageAudit"),Object(i.k)("advancedGeneralIdentify"),Object(i.k)("objectDetectIdentify"),Object(i.k)("carClassify"),Object(i.k)("dishClassify"),Object(i.k)("logoClassify"),Object(i.k)("animalClassify"),Object(i.k)("plantClassify"),Object(i.k)("getSwanId"),Object(i.k)("requestPolymerPayment"),Object(i.k)("navigateToSmartProgram"),Object(i.k)("navigateBackSmartProgram"),Object(i.k)("preloadSubPackage"),n(239)),k=n(74),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function setStorage(e){var t=Object(i.j)(e);if(!t.res){var n={"errMsg":"setStorage"+t.msg};return console.error(n.errMsg),Promise.reject(n)}var o=e.key,r=e.data,a=e.success,c=e.fail,l=e.complete,s={"errMsg":"setStorage:ok"};return"string"!=typeof o?(s.errMsg=Object(i.d)({"name":"setStorage","para":"key","correct":"String","wrong":o}),console.error(s.errMsg),"function"==typeof c&&c(s),"function"==typeof l&&l(s),Promise.reject(s)):(function setStorageSync(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("string"!=typeof e)return void console.error(Object(i.d)({"name":"setStorage","correct":"String","wrong":e}));var n={};n="symbol"===(void 0===t?"undefined":p(t))?{"data":""}:{"data":t};localStorage.setItem(e,JSON.stringify(n))}(o,r),"function"==typeof a&&a(s),"function"==typeof l&&l(s),Promise.resolve(s))}document.addEventListener("copy",function(){setStorage({"key":"taro_clipboard","data":window.getSelection().toString()}).catch(function(e){console.error(e)})});var b=function setClipboardData(e){var t=e.data,n=e.success,o=e.fail,r=e.complete;return new Promise(function(e,a){setStorage({"key":"taro_clipboard","data":t}).then(function(){if("function"!=typeof document.execCommand)throw new Error("Unsupported Function: 'document.execCommand'.");var o=document.createElement("input");o.readOnly=!0,o.value=t,o.style.position="absolute",o.style.width="100px",o.style.left="-10000px",document.body.appendChild(o),o.select(),o.setSelectionRange(0,o.value.length),document.execCommand("copy"),document.body.removeChild(o);var a={"errMsg":"setClipboardData:ok","data":t};n&&n(a),r&&r(),e(a)}).catch(function(e){var t={"errMsg":"setClipboardData:fail "+e.message};o&&o(t),r&&r(),a(t)})})},m=n(236),y=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var f=function(e){function UserCenter(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserCenter),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserCenter.__proto__||Object.getPrototypeOf(UserCenter)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserCenter,a["a"].Component),y(UserCenter,[{"key":"render","value":function render(){return o.l.createElement(r.a,null,o.l.createElement(k.g,{"type":"full"},o.l.createElement(k.l,{"justify":"around","align":"center"},o.l.createElement(r.a,null,o.l.createElement(k.d,{"shape":"round","size":"xlarge","headerArray":[{"icon":"like"}]})),o.l.createElement(r.a,null,"如果你觉得不错，可以请作者喝杯茶"))),o.l.createElement(k.t,{"padding":"normal","paddingDirection":"vertical"},o.l.createElement(k.v,{"shortBorder":!0,"onClick":function clickMenu(e){switch(e){case 0:b({"data":"https://yinliangdream.github.io/mp-colorui-doc/#/"}).then(function(){Object(d.c)({"title":"复制成功"})});break;case 1:b({"data":"https://github.com/yinLiangDream/mp-colorui"}).then(function(){Object(d.c)({"title":"复制成功"})});break;case 2:a.a.navigateTo({"url":"/pages/update/index"});break;case 3:u({"appId":"wx8abaf00ee8c3202e","extraData":{"id":"74218"}});break;case 4:Object(m.a)({"urls":["https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/WechatIMG36738.jpeg"],"current":"https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/WechatIMG36738.jpeg"})}},"list":[{"icon":{"iconName":"form","size":"small","color":"grey"},"title":"文档地址","arrow":!0},{"icon":{"iconName":"github","size":"small"},"title":"Github","arrow":!0},{"icon":{"iconName":"creativefill","size":"small","color":"olive"},"title":"更新日志","arrow":!0},{"icon":{"iconName":"message","size":"small","color":"blue"},"title":"留言","arrow":!0},{"icon":{"iconName":"appreciatefill","size":"small","color":"red"},"title":"赞赏","arrow":!0}]})))}}]),UserCenter}(),g=n(77);n(214);n.d(t,"default",function(){return P});var O=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),j=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),h=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function index_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=[].concat(g.b,g.a,g.d,g.e,g.f,g.g),C=g.b.map(function(e){return e.key}),S=g.a.map(function(e){return e.key}),x=g.d.map(function(e){return e.key}),w=g.e.map(function(e){return e.key}),E=g.f.map(function(e){return e.key}),B=g.g.map(function(e){return e.key}),P=function(e){function Index(){var e,t,n;!function index_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=n=index_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"MP-ColorUI"},index_possibleConstructorReturn(n,t)}return function index_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a["a"].Component),j(Index,[{"key":"render","value":function render(){var e=["emoji","cascades","we","form","apps","taxi"],t=a.a.useState(null),n=O(t,2),i=n[0],u=n[1],p=a.a.useState(0),b=O(p,2),m=b[0],y=b[1],j=a.a.useState("none"),h=O(j,2),P=h[0],I=h[1],_=a.a.useState(!1),D=O(_,2),T=D[0],A=D[1],M=a.a.useState([]),L=O(M,2),U=L[0],R=L[1],F=a.a.useState(!1),N=O(F,2),W=N[0],V=N[1];a.a.useEffect(function(){var e=setTimeout(function(){I("scale-up"),A(!0)},800);if(Object(c.a)({"url":"https://mp-colorui-1255362963.cos.ap-chengdu.myqcloud.com/update/update.json"}).then(function(e){u(e.data[0]),V(!0)}),a.a.getEnv()!==a.a.ENV_TYPE.WEB&&l("getUpdateManager")){var t=s();t.onCheckForUpdate(function(e){e.hasUpdate&&(t.onUpdateReady(function(){Object(d.b)({"title":"更新提示","content":"有新版本，是否重启应用？","success":function success(e){if(e.confirm)t.applyUpdate();else if(e.cancel)return!1}})}),t.onUpdateFailed(function(){Object(d.a)(),Object(d.b)({"title":"更新失败","content":"新版本更新失败，请检查网络","showCancel":!1})}))})}return function(){clearTimeout(e)}},[]);var z=g.c.map(function(t,n){return o.l.createElement(r.a,{"key":"key-"+t.key,"onClick":function onClick(){a.a.navigateTo({"url":"/package/"+t.key+"Package/index/index"})}},o.l.createElement(k.c,{"type":P,"delay":n/10},o.l.createElement(k.g,{"bgColor":"white"},o.l.createElement(r.a,{"style":{"backgroundImage":"url(https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/home.png)","backgroundSize":"cover","backgroundPosition":"center"}},o.l.createElement(k.l,{"justify":"between","align":"center"},o.l.createElement(k.l,{"align":"center"},o.l.createElement(k.q,{"iconName":e[n],"color":"cyan"}),o.l.createElement(k.t,{"padding":"small","paddingDirection":"left"},o.l.createElement(k.N,{"size":"xlarge","text":t.name,"fontWeight":"bold"}),o.l.createElement(k.N,{"size":"xsmall","textColor":"gray","text":t.description}))),o.l.createElement(k.q,{"iconName":"roundrightfill","color":"blue"}))))))});return o.l.createElement(r.a,{"className":"index"},0===m?o.l.createElement(k.t,{"padding":"xlarge","paddingDirection":"vertical"},o.l.createElement(k.D,{"shape":"round","bgColor":"white","fix":!0,"searchType":"none","placeholder":"找不到组件在哪？来试试搜索组件吧！","showResult":!0,"result":U,"onTouchResult":function onTouchResult(e){a.a.navigateTo({"url":U[e].url})},"onInput":function onInput(e){R(""!==e?v.filter(function(t){return t.name.toLowerCase().includes(e.toLocaleLowerCase())}).map(function(e){var t="";return C.includes(e.key)?t="basePackage":S.includes(e.key)?t="actionPackage":x.includes(e.key)?t="formPackage":w.includes(e.key)?t="layoutPackage":E.includes(e.key)?t="navigatePackage":B.includes(e.key)&&(t="viewPackage"),{"arrow":!0,"title":e.name,"key":e.key,"url":"/package/"+t+"/"+e.key+"/index"}}):[])}})):"",0===m?o.l.createElement(k.t,{"padding":"xlarge","paddingDirection":"bottom","margin":"xlarge","marginDirection":"bottom"},T?z:""):"",1===m?o.l.createElement(f,null):"",o.l.createElement(k.K,{"tabs":[{"icon":"home","title":"主页","badge":!1},{"icon":"magic","title":"关于","badge":!1}],"fix":!0,"active":m,"onClick":function onClick(e){y(e)}}),o.l.createElement(k.x,{"show":W,"close":!0,"onClose":function onClose(){V(!1)},"closeWithShadow":!0,"onCancel":function onCancel(){V(!1)},"title":(i&&i.title)+" 版本"},o.l.createElement(k.l,{"direction":"column"},o.l.createElement(r.a,{"style":{"width":"100%"}},o.l.createElement(k.N,{"text":""+(i&&i.time),"textColor":"cyan","align":"right"})),i&&i.content.map(function(e){return o.l.createElement(r.a,{"key":"key-"+e},o.l.createElement(k.N,{"text":e,"size":"small","textColor":"grey"}))}))))}},{"key":"componentDidMount","value":function componentDidMount(){h(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&h(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){h(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&h(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){h(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&h(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();P.config={"navigationBarTitleText":"MP-ColorUI"}},"77":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r}),n.d(t,"g",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return l}),t.c=[{"key":"base","name":"基础","description":"包含颜色、文本、图标等"},{"key":"view","name":"视图","description":"包含标签、头像、时间轴等"},{"key":"action","name":"操作反馈","description":"包含模态框、进度条、加载等"},{"key":"form","name":"表单","description":"包含输入框、单选框、复选框等"},{"key":"layout","name":"布局","description":"包含列表、卡片、抽屉等"},{"key":"navigate","name":"导航","description":"包含导航栏、标签栏、标签页等"}];var o=[{"key":"color","name":"Color 颜色"},{"key":"icon","name":"Icon 图标"},{"key":"button","name":"Button 按钮"},{"key":"floatButton","name":"FloatButton 浮动按钮"},{"key":"text","name":"Text 文字"}],r=[{"key":"modal","name":"Modal 模态框"},{"key":"progress","name":"Progress 进度条"},{"key":"loading","name":"Loading 加载"},{"key":"animation","name":"Animation 动画"},{"key":"message","name":"Message 提示消息"},{"key":"tip","name":"Tip 提示"},{"key":"swiperAction","name":"SwiperAction 滑动操作"},{"key":"actionSheet","name":"ActionSheet 动作面板"}],a=[{"key":"avatar","name":"Avatar 头像"},{"key":"tag","name":"Tag 标签"},{"key":"timeline","name":"Timeline 时间轴"},{"key":"swiper","name":"Swiper 滑动视图"},{"key":"steps","name":"Steps 步骤条"},{"key":"searchBar","name":"SearchBar 搜索栏"},{"key":"shopBar","name":"ShopBar 购物栏"},{"key":"titleBar","name":"TitleBar 标题栏"},{"key":"divider","name":"Divider 分割线"},{"key":"curtain","name":"Curtain 幕帘"},{"key":"noticeBar","name":"NoticeBar 通告栏"},{"key":"calendar","name":"Calendar 日历"}],c=[{"key":"form","name":"Form 表单"},{"key":"input","name":"Input 输入框"},{"key":"radio","name":"Radio 单选按钮"},{"key":"checkbox","name":"Checkbox 多选按钮"},{"key":"switch","name":"Switch 开关"},{"key":"select","name":"Select 选择器"},{"key":"imagePicker","name":"ImagePicker 图片选择器"},{"key":"textarea","name":"Textarea 输入域"},{"key":"tree","name":"Tree 树形结构"}],i=[{"key":"layout","name":"Layout 基本布局"},{"key":"flex","name":"Flex 弹性布局"},{"key":"grid","name":"Grid 栅格布局"},{"key":"menuList","name":"MenuList 菜单列表"},{"key":"card","name":"Card 卡片"},{"key":"drawer","name":"Drawer 抽屉"},{"key":"screenDrawer","name":"ScreenDrawer 全屏抽屉"},{"key":"accordion","name":"Accordion 手风琴"}],l=[{"key":"navBar","name":"NavBar 导航栏"},{"key":"tabBar","name":"TabBar 标签栏"},{"key":"tabs","name":"Tabs 标签页"},{"key":"verticalTab","name":"VerticalTab 垂直导航"}]}}]);