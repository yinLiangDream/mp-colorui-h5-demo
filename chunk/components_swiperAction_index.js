(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"44":function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(279),i=n(2),l=n(261),c=n(69),a=n(70);n.d(t,"default",function(){return u});var p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),d=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0};var u=function(e){function SwiperAction(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SwiperAction),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SwiperAction.__proto__||Object.getPrototypeOf(SwiperAction)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SwiperAction,i["a"].Component),p(SwiperAction,[{"key":"render","value":function render(){var e=[{"text":"亚古兽进化","bgColor":"gradualBlue"},{"text":"恶灵退散","bgColor":"gradualRed"}];return o.l.createElement(l.a,null,o.l.createElement(c.O,{"title":"方向","type":"icon"}),o.l.createElement(c.G,{"direction":"right","options":e},o.l.createElement(c.f,{"bgColor":"black","type":"full"},"我是内容嘤嘤嘤，向左滑动")),o.l.createElement(c.G,{"direction":"left","options":e},o.l.createElement(c.f,{"bgColor":"black","type":"full"},"我是内容嘤嘤嘤，向右滑动")),o.l.createElement(c.s,{"padding":"normal","paddingDirection":"vertical"},o.l.createElement(a.a,{"code":'\n```\n<ClSwiperAction direction="right" options={list}>\n  <ClCard bgColor="black" type="full">\n    我是内容嘤嘤嘤，向左滑动\n  </ClCard>\n</ClSwiperAction>\n\n<ClSwiperAction direction="left" options={list}>\n  <ClCard bgColor="black" type="full">\n    我是内容嘤嘤嘤，向右滑动\n  </ClCard>\n</ClSwiperAction>\n```\n'})),o.l.createElement(c.O,{"title":"开启","type":"icon"}),o.l.createElement(c.G,{"direction":"right","options":e,"show":!0},o.l.createElement(c.f,{"bgColor":"black","type":"full"},"我是内容嘤嘤嘤，向左滑动，默认开启")),o.l.createElement(c.s,{"padding":"normal","paddingDirection":"vertical"},o.l.createElement(a.a,{"code":'\n```\n<ClSwiperAction direction="right" options={list} show>\n  <ClCard bgColor="black" type="full">\n    我是内容嘤嘤嘤，向左滑动，默认开启\n  </ClCard>\n</ClSwiperAction>\n```\n'})),o.l.createElement(c.O,{"title":"禁止滑动","type":"icon"}),o.l.createElement(c.G,{"direction":"right","options":e,"disabled":!0},o.l.createElement(c.f,{"bgColor":"black","type":"full"},"我是内容嘤嘤嘤，向左滑动，禁止滑动")),o.l.createElement(c.s,{"padding":"normal","paddingDirection":"vertical"},o.l.createElement(a.a,{"code":'\n```\n<ClSwiperAction direction="right" options={list} disabled>\n  <ClCard bgColor="black" type="full">\n    我是内容嘤嘤嘤，向左滑动，禁止滑动\n  </ClCard>\n</ClSwiperAction>\n```\n'})),o.l.createElement(c.O,{"title":"自动关闭","type":"icon"}),o.l.createElement(c.G,{"direction":"right","options":e,"autoClose":!0},o.l.createElement(c.f,{"bgColor":"black","type":"full"},"我是内容嘤嘤嘤，向左滑动，自动关闭")),o.l.createElement(c.s,{"padding":"normal","paddingDirection":"vertical"},o.l.createElement(a.a,{"code":'\n```\n<ClSwiperAction direction="right" options={list} autoClose>\n  <ClCard bgColor="black" type="full">\n    我是内容嘤嘤嘤，向左滑动，自动关闭\n  </ClCard>\n</ClSwiperAction>\n```\n'})),o.l.createElement(c.O,{"title":"点击触发事件","type":"icon"}),o.l.createElement(c.G,{"direction":"right","options":e,"onClick":function onClick(e){Object(r.c)({"title":"您点击了第"+(e+1)+"个按钮","icon":"none"})}},o.l.createElement(c.f,{"bgColor":"black","type":"full"},"我是内容嘤嘤嘤，向左滑动，自动关闭")),o.l.createElement(c.s,{"padding":"normal","paddingDirection":"vertical"},o.l.createElement(a.a,{"code":'\n```\n<ClSwiperAction\n  direction="right"\n  options={list}\n  onClick={index => {\n    Taro.showToast({\n      title: `您点击了第${index + 1}个按钮`,\n      icon: "none"\n    });\n  }}\n>\n  <ClCard bgColor="black" type="full">\n    我是内容嘤嘤嘤，向左滑动，自动关闭\n  </ClCard>\n</ClSwiperAction>\n```\n'})),o.l.createElement(c.O,{"title":"开启或关闭触发","type":"icon"}),o.l.createElement(c.G,{"direction":"right","options":e,"onOpened":function onOpened(){Object(r.c)({"title":"打开","icon":"none"})},"onClose":function onClose(){Object(r.c)({"title":"关闭","icon":"none"})}},o.l.createElement(c.f,{"bgColor":"black","type":"full"},"我是内容嘤嘤嘤，向左滑动，自动关闭")),o.l.createElement(c.s,{"padding":"normal","paddingDirection":"vertical"},o.l.createElement(a.a,{"code":'\n```\n<ClSwiperAction\n  direction="right"\n  options={list}\n  onOpened={() => {\n    Taro.showToast({\n      title: "打开",\n      icon: "none"\n    });\n  }}\n  onClose={() => {\n    Taro.showToast({\n      title: "关闭",\n      icon: "none"\n    });\n  }}\n>\n  <ClCard bgColor="black" type="full">\n    我是内容嘤嘤嘤，向左滑动，自动关闭\n  </ClCard>\n</ClSwiperAction>\n```\n'})))}},{"key":"componentDidMount","value":function componentDidMount(){d(SwiperAction.prototype.__proto__||Object.getPrototypeOf(SwiperAction.prototype),"componentDidMount",this)&&d(SwiperAction.prototype.__proto__||Object.getPrototypeOf(SwiperAction.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){d(SwiperAction.prototype.__proto__||Object.getPrototypeOf(SwiperAction.prototype),"componentDidShow",this)&&d(SwiperAction.prototype.__proto__||Object.getPrototypeOf(SwiperAction.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){d(SwiperAction.prototype.__proto__||Object.getPrototypeOf(SwiperAction.prototype),"componentDidHide",this)&&d(SwiperAction.prototype.__proto__||Object.getPrototypeOf(SwiperAction.prototype),"componentDidHide",this).call(this)}}]),SwiperAction}();u.config={"navigationBarTitleText":"SwiperAction 滑动操作"}},"70":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(0),r=n(2),i=n(69),l=n(72),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var a=function(e){function GenerateCode(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GenerateCode),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GenerateCode.__proto__||Object.getPrototypeOf(GenerateCode)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GenerateCode,r["a"].Component),c(GenerateCode,[{"key":"render","value":function render(){var e=this.props;return o.l.createElement(i.s,{"padding":"normal","paddingDirection":"bottom"},o.l.createElement(i.a,{"title":"示例代码","card":!0},o.l.createElement(i.s,{"padding":"normal","paddingDirection":"around"},o.l.createElement(l.a,{"raw":!1,"richText":e.code,"type":"markdown"}))))}}]),GenerateCode}();a.defaultProps={"code":""}}}]);