(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"174":function(e,t,o){},"62":function(e,t,o){"use strict";o.r(t);var n=o(0),i=o(177),c=o(2),r=o(5),a=(Object(r.g)("onBackgroundAudioPlay"),Object(r.g)("onBackgroundAudioPause"),Object(r.g)("onBackgroundAudioStop"),Object(r.g)("onBluetoothAdapterStateChange"),Object(r.g)("onBluetoothDeviceFound"),Object(r.g)("onBLEConnectionStateChange"),Object(r.g)("onBLECharacteristicValueChange"),Object(r.g)("onBeaconUpdate"),Object(r.g)("onBeaconServiceChange"),Object(r.g)("onUserCaptureScreen"),Object(r.g)("onHCEMessage"),Object(r.g)("onGetWifiList"),Object(r.g)("onWifiConnected"),Object(r.g)("getExtConfigSync"),Object(r.g)("getLogManager"),Object(r.g)("onMemoryWarning"),Object(r.g)("reportAnalytics"),Object(r.g)("navigateToSmartGameProgram"),Object(r.g)("getFileSystemManager"),Object(r.g)("stopRecord"),Object(r.g)("getRecorderManager"),Object(r.g)("pauseVoice"),Object(r.g)("stopVoice"),Object(r.g)("pauseBackgroundAudio"),Object(r.g)("stopBackgroundAudio"),Object(r.g)("getBackgroundAudioManager"),Object(r.g)("createAudioContext"),Object(r.g)("createCameraContext"),Object(r.g)("createLivePlayerContext"),Object(r.g)("createLivePusherContext"),Object(r.g)("createMapContext"),Object(r.g)("canIUse")),g=(Object(r.g)("showNavigationBarLoading"),Object(r.g)("hideNavigationBarLoading"),Object(r.g)("drawCanvas"),Object(r.g)("hideKeyboard"),Object(r.g)("createIntersectionObserver"),Object(r.g)("getMenuButtonBoundingClientRect"),Object(r.g)("getAccountInfoSync"),Object(r.g)("getUpdateManager")),l=(Object(r.g)("createWorker"),Object(r.g)("saveImageToPhotosAlbum"),Object(r.g)("startRecord"),Object(r.g)("playVoice"),Object(r.g)("setInnerAudioOption"),Object(r.g)("getAvailableAudioSources"),Object(r.g)("getBackgroundAudioPlayerState"),Object(r.g)("playBackgroundAudio"),Object(r.g)("seekBackgroundAudio"),Object(r.g)("saveVideoToPhotosAlbum"),Object(r.g)("loadFontFace"),Object(r.g)("saveFile"),Object(r.g)("getFileInfo"),Object(r.g)("getSavedFileList"),Object(r.g)("getSavedFileInfo"),Object(r.g)("removeSavedFile"),Object(r.g)("openDocument"),Object(r.g)("openBluetoothAdapter"),Object(r.g)("closeBluetoothAdapter"),Object(r.g)("getBluetoothAdapterState"),Object(r.g)("startBluetoothDevicesDiscovery"),Object(r.g)("stopBluetoothDevicesDiscovery"),Object(r.g)("getBluetoothDevices"),Object(r.g)("getConnectedBluetoothDevices"),Object(r.g)("createBLEConnection"),Object(r.g)("closeBLEConnection"),Object(r.g)("getBLEDeviceServices"),Object(r.g)("getBLEDeviceCharacteristics"),Object(r.g)("readBLECharacteristicValue"),Object(r.g)("writeBLECharacteristicValue"),Object(r.g)("notifyBLECharacteristicValueChange"),Object(r.g)("startBeaconDiscovery"),Object(r.g)("stopBeaconDiscovery"),Object(r.g)("getBeacons"),Object(r.g)("setScreenBrightness"),Object(r.g)("getScreenBrightness"),Object(r.g)("setKeepScreenOn"),Object(r.g)("addPhoneContact"),Object(r.g)("getHCEState"),Object(r.g)("startHCE"),Object(r.g)("stopHCE"),Object(r.g)("sendHCEMessage"),Object(r.g)("startWifi"),Object(r.g)("stopWifi"),Object(r.g)("connectWifi"),Object(r.g)("getWifiList"),Object(r.g)("setWifiList"),Object(r.g)("getConnectedWifi"),Object(r.g)("setTopBarText"),Object(r.g)("setBackgroundColor"),Object(r.g)("setBackgroundTextStyle"),Object(r.g)("getExtConfig"),Object(r.g)("login"),Object(r.g)("checkSession"),Object(r.g)("authorize"),Object(r.g)("getUserInfo"),Object(r.g)("checkIsSupportFacialRecognition"),Object(r.g)("startFacialRecognitionVerify"),Object(r.g)("startFacialRecognitionVerifyAndUploadVideo"),Object(r.g)("faceVerifyForPay"),Object(r.g)("showShareMenu"),Object(r.g)("hideShareMenu"),Object(r.g)("updateShareMenu"),Object(r.g)("getShareInfo"),Object(r.g)("chooseAddress"),Object(r.g)("addCard"),Object(r.g)("openCard"),Object(r.g)("openSetting"),Object(r.g)("getSetting"),Object(r.g)("getWeRunData"),Object(r.g)("navigateToMiniProgram")),s=(Object(r.g)("navigateBackMiniProgram"),Object(r.g)("chooseInvoice"),Object(r.g)("chooseInvoiceTitle"),Object(r.g)("checkIsSupportSoterAuthentication"),Object(r.g)("startSoterAuthentication"),Object(r.g)("checkIsSoterEnrolledInDevice"),Object(r.g)("setEnableDebug"),Object(r.g)("ocrIdCard"),Object(r.g)("ocrBankCard"),Object(r.g)("ocrDrivingLicense"),Object(r.g)("ocrVehicleLicense"),Object(r.g)("textReview"),Object(r.g)("textToAudio"),Object(r.g)("imageAudit"),Object(r.g)("advancedGeneralIdentify"),Object(r.g)("objectDetectIdentify"),Object(r.g)("carClassify"),Object(r.g)("dishClassify"),Object(r.g)("logoClassify"),Object(r.g)("animalClassify"),Object(r.g)("plantClassify"),Object(r.g)("getSwanId"),Object(r.g)("requestPolymerPayment"),Object(r.g)("navigateToSmartProgram"),Object(r.g)("navigateBackSmartProgram"),Object(r.g)("preloadSubPackage"),o(195)),b=o(66),d=o(68),u=[{"node":"2019-08"},{"title":"0.4.4","time":"2019-08-28","bgColor":"olive","iconColor":"olive","content":["🎉FEATURE","组件 Input 新增 titleWidth、align、pattern 属性","🐞BUG","修复 Form 组件校验的一些问题","修复 FormItem required属性，红点显示的位置","取消 Message 组件的阴影","修复 Button 组件 disabled 下仍然有点击效果的问题","修复 Button 组件 disabled 下的颜色一直为白色问题"]},{"title":"0.4.2","time":"2019-08-27","bgColor":"olive","iconColor":"olive","content":["FEATURE","组件 Avatar 可自定义大小","组件 Flex 新增属性 direction，用于控制浮动布局的方向","BUG","修复 MenuList 组件 list 属性下的 disabled 属性声明为必输项问题","修复无法自定义主题颜色问题","修复组件 Form,FormItem 不设置规则直接会出现err问题","修复组件 FormItem 初始化时就进行数据校验问题"]},{"title":"0.4.1","time":"2019-08-22","bgColor":"olive","iconColor":"olive","content":["FEATURE","Icon 组件支持第三方图标"]},{"title":"0.4.0","time":"2019-08-22","bgColor":"gradualBlue","iconColor":"blue","content":["FEATURE","🎉🎉新增 Tip 组件","BUG","修复 Text 组件不换行问题","修复 Area 类型声明错误","修复 Accordion 组件在某些情况下（父级属性 color 为 white）标题颜色为白色问题"]},{"title":"0.3.7","time":"2019-08-15","bgColor":"grey","iconColor":"grey","content":["ADAPTATION","- Select mode=region 模块重构，并且适配 H5，H5 能直接选择地址"]},,{"title":"0.3.6","time":"2019-08-06","bgColor":"grey","iconColor":"grey","content":["ADAPTATION","- Swiper Card 模式 H5 适配","- 祝大家明天七夕快乐~"]},{"title":"0.3.5","time":"2019-08-04","bgColor":"grey","iconColor":"grey","content":["ADAPTATION","- VerticalTab 组件 H5 适配"]},{"title":"0.3.4","time":"2019-08-03","bgColor":"grey","iconColor":"grey","content":["BUG","- 修复 FloatButton 不展开仍然有阴影 bug"]},{"node":"2019-07"},{"title":"0.3.3","time":"2019-07-31","bgColor":"grey","iconColor":"grey","content":["BUG","- 修复H5 Switch color 为红色不显示问题","- 修复小程序 Switch 引入报错问题"]},{"title":"0.3.2","time":"2019-07-31","bgColor":"grey","iconColor":"grey","content":["ADAPTATION","- Switch H5 适配"]},{"title":"0.3.1","time":"2019-07-30","bgColor":"grey","iconColor":"grey","content":["ADAPTATION","- Checkbox H5 适配"]},{"title":"0.3.0","time":"2019-07-28","bgColor":"grey","iconColor":"grey","content":["COMPONENT","- 新增 Form, FormItem 组件","API","- 新增内置校验函数","BUG","- 修复 Message 代码不提示问题","- 修复文档引入组件错误","- 修复 Input 组件 H5 下由于 value 绑定而无法输入的 bug（Taro 的 bug）"]},{"title":"0.2.7","time":"2019-07-23","bgColor":"grey","iconColor":"grey","content":["COMPONENT","- 新增 Divider 分割线组件","BUG","- 修复 Timeline H5 适配问题","- 修复 Timeline node 节点展示不正确问题"]},{"title":"0.2.6","time":"2019-07-19","bgColor":"grey","iconColor":"grey","content":["API","- Card 组件新增 shadow 属性","BUG","- 修复 Message 的一些小问题"]},{"title":"0.2.5","time":"2019-07-18","bgColor":"grey","iconColor":"grey","content":["BUG","- 修复 Message 重复提示文字消失问题","- 补全 Message 代码提示"]},{"title":"0.2.4","time":"2019-07-18","bgColor":"grey","iconColor":"grey","content":["COMPONENT","- 新增 Message 消息提示组件","API","- 新增 Animation 组件 duration 属性","BUG","- 修复 FloatButton 组件拖动穿透事件，拖动卡顿问题，提升动画速度，并新增收拢动画"]},{"title":"0.2.3","time":"2019-07-15","bgColor":"grey","iconColor":"grey","content":["COMPONENT","- 新增 FloatButton 浮动按钮组件"]},{"title":"0.2.2","time":"2019-07-13","bgColor":"grey","iconColor":"grey","content":["COMPONENT","- 新增 Accordion 手风琴组件"]},{"title":"0.2.1","time":"2019-07-11","bgColor":"grey","iconColor":"grey","content":["API","- Animation 组件","- - 新增 onAnimationStart、onAnimationEnd 事件","- Tabs 组件","- - 新增 tabs 属性下的 id 属性","- - 新增 touchMove 可滑动属性","- VerticalTab 组件","- - 新增 backTop 属性","BUG","- Card 组件","- - 修复插入 children 内容时的异常提醒（不影响使用）"]},{"title":"0.2.0","time":"2019-07-09","bgColor":"grey","iconColor":"grey","content":["COMPONENT","- 新增 ClVertivalTab, ClVerticalTabCell 组件"]},{"title":"0.1.7","time":"2019-07-07","bgColor":"grey","iconColor":"grey","content":["API","- 新增 titleBar 组件 renderRight 属性","BUG","- 解决 浅色 light-pink 失效问题"]},{"title":"0.1.6","time":"2019-07-05","iconColor":"grey","bgColor":"grey","content":["API","- 新增 MenuList list 下 disabled 属性","BUG","- MenuList 点击失效问题"]},{"title":"0.1.5","time":"2019-07-05","iconColor":"grey","bgColor":"grey","content":["API","- 新增 Radio 组件 type 属性下的 list 属性"]},{"title":"0.1.4","iconColor":"grey","time":"2019-07-04","bgColor":"grey","content":["COMPONENT","- 新增 Animation 动画组件","API","- 修改 Timeline 组件 times 属性下 content 格式(String --\x3e String[])","- 新增 Timeline 组件 times 属性下 title 属性(String)","- 新增 Timeline 组件 times 属性下 node 属性(String)"]},{"title":"0.1.3","iconColor":"grey","time":"2019-07-02","bgColor":"grey","content":["BUG","- 修复 H5 Button 无动效问题","- 修复 H5 Timeline 线条过细问题","- 修复 H5 Swiper 未铺满问题","- 修复 H5 MenuList 图片过大问题"]},{"title":"0.1.1","iconColor":"grey","time":"2019-07-01","bgColor":"grey","content":["BUG","- 修复 H5 适配的部分问题","- 修复 H5 Radio 样式问题"]},{"node":"2019-06"},{"title":"0.1.0","iconColor":"grey","time":"2019-06-25","bgColor":"grey","content":["FATURE","- MP ColorUI 测试版上线"]}];o(174);o.d(t,"default",function(){return y});var m=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}();function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var O=[].concat(d.b,d.a,d.d,d.e,d.f,d.g),y=function(e){function Index(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var n=arguments.length,i=Array(n),c=0;c<n;c++)i[c]=arguments[c];return t=o=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(i))),o.config={"navigationBarTitleText":"MP-ColorUI"},o.state={"active":0,"animate":"","show":!1,"tempfilter":[]},_possibleConstructorReturn(o,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,c["a"].Component),m(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){var e=this;if(setTimeout(function(){e.setState({"animate":"scale-up","show":!0})},200),c.a.getEnv()!==c.a.ENV_TYPE.WEB&&a("getUpdateManager")){var t=g();t.onCheckForUpdate(function(e){console.log(e),e.hasUpdate&&(t.onUpdateReady(function(){Object(s.b)({"title":"更新提示","content":"有新版本，是否重启应用？","success":function success(e){if(e.confirm)t.applyUpdate();else if(e.cancel)return!1}})}),t.onUpdateFailed(function(){Object(s.a)(),Object(s.b)({"title":"更新失败","content":"新版本更新失败，请检查网络","showCancel":!1})}))})}}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this,t=this.state,o=t.active,r=t.animate,a=t.show,g=t.tempfilter,s=["emoji","cascades","we","form","apps","taxi"],m=["cyan","blue","pink","red","orange","yellow"],y=c.a.getEnv()===c.a.ENV_TYPE.WEAPP,p=d.c.map(function(e,t){return n.l.createElement(i.a,{"key":e.key,"onClick":function onClick(){c.a.navigateTo({"url":"/pages/"+e.key+"/index"})}},n.l.createElement(b.b,{"type":r,"delay":t/10},n.l.createElement(b.e,{"bgColor":m[t]},n.l.createElement(i.a,{"style":{"backgroundImage":"url(https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/home.png)","backgroundSize":"cover","backgroundPosition":"center"}},n.l.createElement(b.i,{"justify":"between","align":"center"},n.l.createElement(b.i,{"align":"center"},n.l.createElement(b.n,{"iconName":s[t],"color":"white"}),n.l.createElement(b.q,{"padding":"small","paddingDirection":"left"},n.l.createElement(b.I,{"size":"large","textColor":"white"},e.name),n.l.createElement(b.I,{"size":"small","textColor":"white"},e.description))),n.l.createElement(b.n,{"iconName":"roundrightfill","color":"white"}))))))}),j=n.l.createElement(b.q,{"padding":"xlarge","paddingDirection":"bottom","margin":"xlarge","marginDirection":"bottom"},n.l.createElement(b.e,{"type":"full"},n.l.createElement(b.J,{"times":u})));return n.l.createElement(i.a,{"className":"index"},0===o?n.l.createElement(b.q,{"padding":"xlarge","paddingDirection":"vertical"},n.l.createElement(b.z,{"shape":"round","bgColor":"white","fix":!0,"searchType":"none","onInput":function onInput(t){e.setState({"show":!t,"tempfilter":O.filter(function(e){return e.name.toLowerCase().includes(t.toLocaleLowerCase())}).map(function(e){return{"arrow":!0,"title":e.name,"key":e.key,"url":"/pages/components/"+e.key+"/index"}})})}})):"",0===o&&a?n.l.createElement(b.q,{"padding":"xlarge","paddingDirection":"bottom","margin":"xlarge","marginDirection":"bottom"},p):0===o?n.l.createElement(b.q,{"margin":"xlarge","marginDirection":"vertical","padding":"xlarge","paddingDirection":"bottom"},n.l.createElement(b.s,{"card":!0,"list":g,"onClick":function onClick(e){c.a.navigateTo({"url":g[e].url})}})):"",1===o?j:"",n.l.createElement(b.F,{"tabs":[{"icon":"home","title":"主页","badge":!1},{"icon":"magic","title":"更新","badge":!1}],"fix":!0,"active":o,"onClick":function onClick(t){e.setState({"active":t})}}),y?n.l.createElement(b.j,{"open":!1,"icon":"comment","size":"large","bgColor":"green","onClick":function onClick(){l({"appId":"wx8abaf00ee8c3202e","extraData":{"id":"74218"}})}}):"")}}]),Index}()},"68":function(e,t,o){"use strict";o.d(t,"b",function(){return n}),o.d(t,"a",function(){return i}),o.d(t,"g",function(){return c}),o.d(t,"d",function(){return r}),o.d(t,"e",function(){return a}),o.d(t,"f",function(){return g}),t.c=[{"key":"base","name":"基础","description":"包含颜色、文本、图标等"},{"key":"view","name":"视图","description":"包含标签、头像、时间轴等"},{"key":"action","name":"操作反馈","description":"包含模态框、进度条、加载等"},{"key":"form","name":"表单","description":"包含输入框、单选框、复选框等"},{"key":"layout","name":"布局","description":"包含列表、卡片、抽屉等"},{"key":"navigate","name":"导航","description":"包含导航栏、标签栏、标签页等"}];var n=[{"key":"color","name":"Color 颜色"},{"key":"icon","name":"Icon 图标"},{"key":"button","name":"Button 按钮"},{"key":"floatButton","name":"FloatButton 浮动按钮"},{"key":"text","name":"Text 文字"}],i=[{"key":"modal","name":"Modal 模态框"},{"key":"progress","name":"Progress 进度条"},{"key":"loading","name":"Loading 加载"},{"key":"animation","name":"Animation 动画"},{"key":"message","name":"Message 提示消息"},{"key":"tip","name":"Tip 提示"}],c=[{"key":"avatar","name":"Avatar 头像"},{"key":"tag","name":"Tag 标签"},{"key":"timeline","name":"Timeline 时间轴"},{"key":"swiper","name":"Swiper 滑动视图"},{"key":"steps","name":"Steps 步骤条"},{"key":"searchBar","name":"SearchBar 搜索栏"},{"key":"shopBar","name":"ShopBar 购物栏"},{"key":"titleBar","name":"TitleBar 标题栏"},{"key":"divider","name":"Divider 分割线"}],r=[{"key":"form","name":"Form 表单"},{"key":"input","name":"Input 输入框"},{"key":"radio","name":"Radio 单选按钮"},{"key":"checkbox","name":"Checkbox 多选按钮"},{"key":"switch","name":"Switch 开关"},{"key":"select","name":"Select 选择器"},{"key":"imagePicker","name":"ImagePicker 图片选择器"}],a=[{"key":"layout","name":"Layout 基本布局"},{"key":"flex","name":"Flex 弹性布局"},{"key":"grid","name":"Grid 栅格布局"},{"key":"menuList","name":"MenuList 菜单列表"},{"key":"card","name":"Card 卡片"},{"key":"drawer","name":"Drawer 抽屉"},{"key":"screenDrawer","name":"ScreenDrawer 全屏抽屉"},{"key":"accordion","name":"Accordion 手风琴"}],g=[{"key":"navBar","name":"NavBar 导航栏"},{"key":"tabBar","name":"TabBar 标签栏"},{"key":"tabs","name":"Tabs 标签页"},{"key":"verticalTab","name":"VerticalTab 垂直导航"}]}}]);