(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"34":function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(2),a=r(70),i=r(261),c=r(71);r.d(t,"default",function(){return f});var l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),p=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0};var f=function(e){function ScreenDrawer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ScreenDrawer),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ScreenDrawer.__proto__||Object.getPrototypeOf(ScreenDrawer)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ScreenDrawer,o["a"].Component),u(ScreenDrawer,[{"key":"render","value":function render(){var e=o.a.useState(!1),t=l(e,2),r=t[0],u=t[1],p=n.l.createElement(i.a,null,n.l.createElement(a.f,null,n.l.createElement(a.e,{"shape":"round","long":!0,"onClick":function onClick(){u(!0)}},"点我打开全屏抽屉")),n.l.createElement(c.a,{"code":"\n```\nconst mainPage =\n  <ClCard>\n    <ClButton shape='round' long onClick={() => {\n      setShow(true)\n    }}\n    >点我打开全屏抽屉</ClButton>\n  </ClCard>\n \nconst mainContent =\n  <ClLayout>\n    <ClCard>\n      我是内容\n    </ClCard>\n  </ClLayout>\n \nreturn (\n  <ClScreenDrawer show={show} renderPage={mainPage} renderDrawer={mainContent} onHide={() => {\n    setShow(false)\n  }}\n  />\n)\n```\n"})),f=n.l.createElement(a.s,null,n.l.createElement(a.f,null,"我是内容"));return n.l.createElement(a.A,{"show":r,"renderPage":p,"renderDrawer":f,"onHide":function onHide(){u(!1)}})}},{"key":"componentDidMount","value":function componentDidMount(){p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidMount",this)&&p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidShow",this)&&p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidHide",this)&&p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidHide",this).call(this)}}]),ScreenDrawer}();f.config={"navigationBarTitleText":"ScreenDrawer 全屏抽屉"}},"71":function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r(0),o=r(2),a=r(261),i=r(70),c=r(72),l=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();var u=function(e){function GenerateCode(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GenerateCode),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GenerateCode.__proto__||Object.getPrototypeOf(GenerateCode)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GenerateCode,o["a"].Component),l(GenerateCode,[{"key":"render","value":function render(){var e=this.props;return n.l.createElement(a.a,null,o.a.getEnv()===o.a.ENV_TYPE.WEB?"":n.l.createElement(i.s,{"padding":"normal","paddingDirection":"bottom"},n.l.createElement(i.a,{"title":"示例代码","card":!0},n.l.createElement(i.s,{"padding":"normal","paddingDirection":"around"},n.l.createElement(c.a,{"raw":!1,"richText":e.code,"type":"markdown"})))))}}]),GenerateCode}();u.defaultProps={"code":""}}}]);