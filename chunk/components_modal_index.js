(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"35":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return p});var n=o(0),r=o(2),l=o(68),i=o(191),c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw l}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),u=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var l=n.get;return void 0!==l?l.call(o):void 0};var p=function(e){function Modal(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Modal),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Modal.__proto__||Object.getPrototypeOf(Modal)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Modal,r["a"].Component),a(Modal,[{"key":"render","value":function render(){var e=r.a.useState(!1),t=c(e,2),o=t[0],a=t[1],u=r.a.useState(!1),p=c(u,2),s=p[0],f=p[1];return n.l.createElement(l.r,null,n.l.createElement(l.N,{"title":"类型","textColor":"black","type":"icon","subTitle":"type","subTitleColor":"shadow"}),n.l.createElement(l.f,null,n.l.createElement(l.e,{"text":"普通","long":!0,"onClick":function onClick(){a(!0)}})),n.l.createElement(l.v,{"show":o,"closeWithShadow":!0,"title":"我是标题","close":!0,"actions":[{"text":"我是按钮1","color":"blue"},{"text":"我是按钮2","color":"red"}],"onCancel":function onCancel(){a(!1)}},"我是内容"),n.l.createElement(l.N,{"title":"自定义","textColor":"black","type":"icon","subTitle":"custom","subTitleColor":"shadow"}),n.l.createElement(l.f,null,n.l.createElement(l.e,{"text":"自定义","bgColor":"light-cyan","long":!0,"onClick":function onClick(){f(!0)}})),n.l.createElement(l.v,{"show":s,"closeWithShadow":!0,"custom":!0,"close":!0,"renderTitle":n.l.createElement(l.N,{"title":"我是自定义的标题","textColor":"black","type":"icon","subTitle":"custom","subTitleColor":"shadow"}),"onCancel":function onCancel(){f(!1)},"renderAction":n.l.createElement(l.r,null,n.l.createElement(l.j,{"justify":"around"},n.l.createElement(i.a,{"className":"flex-sub"},n.l.createElement(l.e,{"bgColor":"light-red","long":!0,"onClick":function onClick(){f(!1)}},"点我关闭")),n.l.createElement(i.a,{"className":"flex-sub"},n.l.createElement(l.e,{"bgColor":"light-blue","long":!0,"onClick":function onClick(){f(!1)}},"点我也是关闭"))))},"我是内容"))}},{"key":"componentDidMount","value":function componentDidMount(){u(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidMount",this)&&u(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){u(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidShow",this)&&u(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){u(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidHide",this)&&u(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidHide",this).call(this)}}]),Modal}();p.config={"navigationBarTitleText":"Modal 模态框"}}}]);