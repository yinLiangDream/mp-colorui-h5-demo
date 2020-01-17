(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"23":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var r=n(0),o=n(1),l=n(67),i=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,l=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,l=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),c=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var l=r.get;return void 0!==l?l.call(n):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function Tip(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tip);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return t=n=_possibleConstructorReturn(this,(e=Tip.__proto__||Object.getPrototypeOf(Tip)).call.apply(e,[this].concat(o))),n.config={"navigationBarTitleText":"Tip 提示"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Tip,o["a"].Component),a(Tip,[{"key":"render","value":function render(){var e=r.l.createElement(l.t,null,r.l.createElement(l.a,{"title":"我是手风琴组件"},r.l.createElement(l.t,{"padding":"normal","paddingDirection":"around"},r.l.createElement(l.g,{"type":"full"},r.l.createElement(l.N,{"text":"道可道，非常道。名可名，非常名。无名天地之始。有名万物之母。","textColor":"blue"})),r.l.createElement(l.g,{"type":"full"},r.l.createElement(l.N,{"text":"有无相生，难易相成，长短相形，高下相盈，音声相和，前后相随。恒也。","textColor":"brown"})),r.l.createElement(l.g,{"type":"full"},r.l.createElement(l.N,{"text":"上善若水。水善利万物而不争，处众人之所恶，故几于道。","textColor":"red"})),r.l.createElement(l.g,{"type":"full"},r.l.createElement(l.N,{"text":"道生一，一生二，二生三，三生万物。万物负阴而抱阳，冲气以为和。"}))))),t=o.a.useState(!1),n=i(t,2),a=n[0],c=n[1];return r.l.createElement(l.t,null,r.l.createElement(l.R,{"title":"方向","type":"icon"}),r.l.createElement(l.t,{"padding":"normal","paddingDirection":"around"},r.l.createElement(l.l,{"justify":"between"},r.l.createElement(l.Q,{"message":"我是上方提示","direction":"top"},r.l.createElement(l.e,{"text":"上方","shape":"round"})),r.l.createElement(l.Q,{"message":"我是右方提示","direction":"right"},r.l.createElement(l.e,{"text":"右方","shape":"round"})),r.l.createElement(l.Q,{"message":"我是左方提示","direction":"left"},r.l.createElement(l.e,{"text":"左方","shape":"round"})),r.l.createElement(l.Q,{"message":"我是下方提示","direction":"bottom"},r.l.createElement(l.e,{"text":"下方","shape":"round"})))),r.l.createElement(l.R,{"title":"触发方式","type":"icon"}),r.l.createElement(l.t,{"padding":"normal","paddingDirection":"around"},r.l.createElement(l.l,{"justify":"around"},r.l.createElement(l.Q,{"message":"我是点击触发","direction":"top","mode":"click","show":a,"onChange":function onChange(e){c(e)}},r.l.createElement(l.e,{"text":"点击触发","shape":"round"})),r.l.createElement(l.Q,{"message":"我是触摸触发","direction":"right"},r.l.createElement(l.e,{"text":"触摸触发","shape":"round"})))),r.l.createElement(l.R,{"title":"自适应","type":"icon"}),r.l.createElement(l.t,{"padding":"normal","paddingDirection":"around"},r.l.createElement(l.l,{"justify":"around"},r.l.createElement(l.Q,{"message":"我本应该左侧出现，但是自动检测到左侧距离不够，所以自动转换成右侧触发，上下亦是如此","direction":"left"},r.l.createElement(l.e,{"text":"左侧出现","shape":"round"})),r.l.createElement(l.Q,{"message":"我本应该右侧出现，但是自动检测到右侧距离不够，所以自动转换成左侧触发，上下亦是如此","direction":"right"},r.l.createElement(l.e,{"text":"右侧出现","shape":"round"})))),r.l.createElement(l.R,{"title":"背景色","type":"icon"}),r.l.createElement(l.t,{"padding":"normal","paddingDirection":"around"},r.l.createElement(l.l,{"justify":"between"},r.l.createElement(l.Q,{"message":"我是上方提示","direction":"top","bgColor":"gradualBlue"},r.l.createElement(l.e,{"text":"上方","shape":"round"})),r.l.createElement(l.Q,{"message":"我是右方提示","direction":"right","bgColor":"black"},r.l.createElement(l.e,{"text":"右方","shape":"round"})),r.l.createElement(l.Q,{"message":"我是左方提示","direction":"left","bgColor":"gradualRed"},r.l.createElement(l.e,{"text":"左方","shape":"round"})),r.l.createElement(l.Q,{"message":"我是下方提示","direction":"bottom","bgColor":"light-olive"},r.l.createElement(l.e,{"text":"下方","shape":"round"})))),r.l.createElement(l.R,{"title":"自定义渲染","type":"icon"}),r.l.createElement(l.t,{"padding":"normal","paddingDirection":"around"},r.l.createElement(l.l,{"justify":"between"},r.l.createElement(l.Q,{"renderMessage":e,"direction":"top","bgColor":"gradualBlue","mode":"click","width":350,"onChange":function onChange(e){c(!1)}},r.l.createElement(l.e,{"text":"渲染的内容","shape":"round"})))),r.l.createElement(l.R,{"title":"长度","type":"icon"}),r.l.createElement(l.t,{"padding":"normal","paddingDirection":"around"},r.l.createElement(l.l,{"justify":"between"},r.l.createElement(l.Q,{"message":"是时候表演真正的技术了","direction":"right"},r.l.createElement(l.e,{"text":"默认长度","shape":"round"})),r.l.createElement(l.Q,{"message":"是时候表演真正的技术了","direction":"left","width":200},r.l.createElement(l.e,{"text":"长度200","shape":"round"})))))}},{"key":"componentDidMount","value":function componentDidMount(){c(Tip.prototype.__proto__||Object.getPrototypeOf(Tip.prototype),"componentDidMount",this)&&c(Tip.prototype.__proto__||Object.getPrototypeOf(Tip.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){c(Tip.prototype.__proto__||Object.getPrototypeOf(Tip.prototype),"componentDidShow",this)&&c(Tip.prototype.__proto__||Object.getPrototypeOf(Tip.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){c(Tip.prototype.__proto__||Object.getPrototypeOf(Tip.prototype),"componentDidHide",this)&&c(Tip.prototype.__proto__||Object.getPrototypeOf(Tip.prototype),"componentDidHide",this).call(this)}}]),Tip}();p.config={"navigationBarTitleText":"Tip 提示"}}}]);