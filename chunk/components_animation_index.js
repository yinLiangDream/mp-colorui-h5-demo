(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"54":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return p});var o=n(0),r=n(1),i=n(65),a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),l=function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0};var p=function(t){function Animation(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Animation),function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Animation.__proto__||Object.getPrototypeOf(Animation)).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Animation,r["a"].Component),c(Animation,[{"key":"render","value":function render(){var t=["fade","scale-up","scale-down","slide-top","slide-bottom","slide-left","slide-right","shake"],e=r.a.useState(""),n=a(e,2),c=n[0],l=n[1],p=r.a.useState(!1),u=a(p,2),m=u[0],f=u[1],s=function showAnimation(t){l(t);var e=null;e=setTimeout(function(){l(""),clearTimeout(e)},1e3)},y=t.map(function(t){return o.k.createElement(i.q,{"key":t,"margin":"normal","marginDirection":"around"},o.k.createElement(i.b,{"type":t===c?t:""},o.k.createElement(i.d,{"long":!0,"shape":"round","onClick":function onClick(){s(t)},"text":t})))}),d=t.map(function(t){return o.k.createElement(i.q,{"key":t,"margin":"normal","marginDirection":"around"},o.k.createElement(i.b,{"type":t+"s"===c?t:"","reverse":!0},o.k.createElement(i.d,{"long":!0,"shape":"round","bgColor":"light-blue","onClick":function onClick(){s(t+"s")},"text":t})))}),b=t.map(function(e,n){return o.k.createElement(i.q,{"key":e,"margin":"normal","marginDirection":"around"},o.k.createElement(i.b,{"type":m?"scale-up":"","delay":n/10},o.k.createElement(i.d,{"long":!0,"shape":"round","bgColor":"brown","onClick":function onClick(){!function beginAnimation(e){if(!(e>0)){f(!0);var n=null;n=setTimeout(function(){f(!1),clearTimeout(n)},200*t.length)}}(n)},"text":n?n/10+"s":"开始执行"})))});return o.k.createElement(i.q,null,o.k.createElement(i.K,{"type":"icon","title":"默认效果","iconColor":"red","textColor":"black"}),y,o.k.createElement(i.K,{"type":"icon","title":"反向效果","iconColor":"red","textColor":"black"}),d,o.k.createElement(i.K,{"type":"icon","title":"延迟执行","iconColor":"red","textColor":"black"}),b)}},{"key":"componentDidMount","value":function componentDidMount(){l(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidMount",this)&&l(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){l(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidShow",this)&&l(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){l(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidHide",this)&&l(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidHide",this).call(this)}}]),Animation}()}}]);