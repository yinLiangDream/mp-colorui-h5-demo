(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"40":function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2),a=n(70),i=n(261),l=n(71);n.d(t,"default",function(){return p});var c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),u=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};var p=function(e){function Layout(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Layout),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Layout.__proto__||Object.getPrototypeOf(Layout)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Layout,r["a"].Component),c(Layout,[{"key":"render","value":function render(){return o.l.createElement(a.s,null,o.l.createElement(a.O,{"title":"padding&margin","textColor":"black","type":"icon","subTitle":"padding&margin","subTitleColor":"shadow"}),o.l.createElement(a.f,null,o.l.createElement(a.s,null,o.l.createElement(i.a,{"className":"bg-blue","style":{"height":"100%","width":"100%"}},"默认无任何修改"))),o.l.createElement(l.a,{"code":'\n```\n<ClLayout>\n  <View className="bg-blue" style={{ height: "100%", width: "100%" }}>\n    默认无任何修改\n  </View>\n</ClLayout>\n```\n'}),o.l.createElement(a.f,null,o.l.createElement(i.a,{"className":"bg-black"},o.l.createElement(a.s,{"padding":"normal","paddingDirection":"around"},o.l.createElement(i.a,{"className":"bg-cyan","style":{"height":"100%","width":"100%"}},"上下左右黑色的内容是 padding 的距离")))),o.l.createElement(l.a,{"code":'\n```\n<View className="bg-black">\n  <ClLayout padding="normal" paddingDirection="around">\n    <View className="bg-cyan" style={{ height: "100%", width: "100%" }}>\n      上下左右黑色的内容是 padding 的距离\n    </View>\n  </ClLayout>\n</View>\n```\n'}),o.l.createElement(a.f,null,o.l.createElement(i.a,{"className":"bg-black"},o.l.createElement(a.s,{"margin":"normal","marginDirection":"around"},o.l.createElement(i.a,{"className":"bg-red","style":{"height":"100%","width":"100%"}},"上下左右内容是 margin 的距离，由于没有 padding，所以内部整体并没有撑开")))),o.l.createElement(l.a,{"code":'\n```\n<View className="bg-black">\n  <ClLayout margin="normal" marginDirection="around">\n    <View className="bg-red" style={{ height: "100%", width: "100%" }}>\n      上下左右内容是 margin 的距离，由于没有\n      padding，所以内部整体并没有撑开\n    </View>\n  </ClLayout>\n</View>\n```\n'}),o.l.createElement(a.O,{"title":"浮动","textColor":"black","type":"icon","subTitle":"float"}),o.l.createElement(a.f,null,o.l.createElement(a.s,{"float":"right"},"我是一块内容，我是右浮动"),o.l.createElement(a.s,{"float":"left"},"我是一块内容，我是左浮动")),o.l.createElement(l.a,{"code":'\n```\n<ClLayout float="right">我是一块内容，我是右浮动</ClLayout>\n\n<ClLayout float="left">我是一块内容，我是左浮动</ClLayout>\n```\n'}))}},{"key":"componentDidMount","value":function componentDidMount(){u(Layout.prototype.__proto__||Object.getPrototypeOf(Layout.prototype),"componentDidMount",this)&&u(Layout.prototype.__proto__||Object.getPrototypeOf(Layout.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){u(Layout.prototype.__proto__||Object.getPrototypeOf(Layout.prototype),"componentDidShow",this)&&u(Layout.prototype.__proto__||Object.getPrototypeOf(Layout.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){u(Layout.prototype.__proto__||Object.getPrototypeOf(Layout.prototype),"componentDidHide",this)&&u(Layout.prototype.__proto__||Object.getPrototypeOf(Layout.prototype),"componentDidHide",this).call(this)}}]),Layout}();p.config={"navigationBarTitleText":"Layout 基本布局"}},"71":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n(0),r=n(2),a=n(261),i=n(70),l=n(72),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var u=function(e){function GenerateCode(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GenerateCode),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GenerateCode.__proto__||Object.getPrototypeOf(GenerateCode)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GenerateCode,r["a"].Component),c(GenerateCode,[{"key":"render","value":function render(){var e=this.props;return o.l.createElement(a.a,null,r.a.getEnv()===r.a.ENV_TYPE.WEB?"":o.l.createElement(i.s,{"padding":"normal","paddingDirection":"bottom"},o.l.createElement(i.a,{"title":"示例代码","card":!0},o.l.createElement(i.s,{"padding":"normal","paddingDirection":"around"},o.l.createElement(l.a,{"raw":!1,"richText":e.code,"type":"markdown"})))))}}]),GenerateCode}();u.defaultProps={"code":""}}}]);