(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"58":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return s});var n=o(0),r=o(2),i=o(69),l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],n=!0,r=!1,i=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done)&&(o.push(l.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),c=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};var s=function(e){function Message(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Message),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Message.__proto__||Object.getPrototypeOf(Message)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Message,r["a"].Component),a(Message,[{"key":"render","value":function render(){var e=r.a.useState(""),t=l(e,2),o=t[0],a=t[1],c=r.a.useState(!1),s=l(c,2),u=s[0],p=s[1],f=r.a.useState("info"),y=l(f,2),d=y[0],b=y[1],g=r.a.useState(3),h=l(g,2),m=h[0],_=h[1],C=r.a.useState(""),k=l(C,2),w=k[0],O=k[1];return n.l.createElement(i.s,null,n.l.createElement(i.v,{"message":o,"show":u,"type":d,"duration":m,"bgColor":w}),n.l.createElement(i.O,{"title":"类型","textColor":"black","type":"icon","subTitle":"type","subTitleColor":"shadow"}),n.l.createElement(i.f,null,n.l.createElement(i.k,{"justify":"between"},n.l.createElement(i.e,{"shape":"round","bgColor":"light-grey","onClick":function onClick(){a("这是一条提示的消息"),b("info"),p(!0),_(3)}},"提示"),n.l.createElement(i.e,{"shape":"round","bgColor":"light-green","onClick":function onClick(){a("这是一条成功的消息"),b("success"),p(!0),_(3)}},"成功"),n.l.createElement(i.e,{"shape":"round","bgColor":"light-red","onClick":function onClick(){a("这是一条失败的消息"),b("error"),p(!0),_(3)}},"失败"),n.l.createElement(i.e,{"shape":"round","bgColor":"light-yellow","onClick":function onClick(){a("这是一条警告的消息"),b("warn"),p(!0),_(3)}},"警告"))),n.l.createElement(i.O,{"title":"持续时间","textColor":"black","type":"icon","subTitle":"type","subTitleColor":"shadow"}),n.l.createElement(i.f,null,"注意：若引用该组件后 duration 发生变化，请自己手动设置 duration，由于单一实例问题，会默认使用前一个状态的 duration。"),n.l.createElement(i.f,null,n.l.createElement(i.k,{"justify":"between"},n.l.createElement(i.e,{"shape":"round","onClick":function onClick(){a("默认持续 3s"),b("info"),p(!0),_(3)}},"默认持续 3s"),n.l.createElement(i.e,{"shape":"round","onClick":function onClick(){a("持续 1s"),b("info"),p(!0),_(1)}},"持续 1s"),n.l.createElement(i.e,{"shape":"round","onClick":function onClick(){a("永久保持"),b("info"),p(!0),_(0)}},"永久保持"))),n.l.createElement(i.O,{"title":"自定义背景色","textColor":"black","type":"icon","subTitle":"type","subTitleColor":"shadow"}),n.l.createElement(i.f,null,n.l.createElement(i.k,{"justify":"between"},n.l.createElement(i.e,{"shape":"round","bgColor":"black","onClick":function onClick(){a("黑色的提示消息"),b("custom"),O("black"),_(3),p(!0)}},"我是黑色的"))))}},{"key":"componentDidMount","value":function componentDidMount(){c(Message.prototype.__proto__||Object.getPrototypeOf(Message.prototype),"componentDidMount",this)&&c(Message.prototype.__proto__||Object.getPrototypeOf(Message.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){c(Message.prototype.__proto__||Object.getPrototypeOf(Message.prototype),"componentDidShow",this)&&c(Message.prototype.__proto__||Object.getPrototypeOf(Message.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){c(Message.prototype.__proto__||Object.getPrototypeOf(Message.prototype),"componentDidHide",this)&&c(Message.prototype.__proto__||Object.getPrototypeOf(Message.prototype),"componentDidHide",this).call(this)}}]),Message}();s.config={"navigationBarTitleText":"Message 提示消息"}}}]);