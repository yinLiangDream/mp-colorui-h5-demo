(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"50":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return u});var n=r(0),o=r(2),i=r(69),c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),p=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0};var u=function(e){function ScreenDrawer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ScreenDrawer),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ScreenDrawer.__proto__||Object.getPrototypeOf(ScreenDrawer)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ScreenDrawer,o["a"].Component),a(ScreenDrawer,[{"key":"render","value":function render(){var e=o.a.useState(!1),t=c(e,2),r=t[0],a=t[1],p=n.l.createElement(i.f,null,n.l.createElement(i.e,{"shape":"round","long":!0,"onClick":function onClick(){a(!0)}},"点我打开全屏抽屉")),u=n.l.createElement(i.s,null,n.l.createElement(i.f,null,"我是内容"));return n.l.createElement(i.A,{"show":r,"renderPage":p,"renderDrawer":u,"onHide":function onHide(){a(!1)}})}},{"key":"componentDidMount","value":function componentDidMount(){p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidMount",this)&&p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidShow",this)&&p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidHide",this)&&p(ScreenDrawer.prototype.__proto__||Object.getPrototypeOf(ScreenDrawer.prototype),"componentDidHide",this).call(this)}}]),ScreenDrawer}();u.config={"navigationBarTitleText":"ScreenDrawer 全屏抽屉"}}}]);