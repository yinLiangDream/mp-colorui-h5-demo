(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"19":function(t,e,o){"use strict";o.r(e),o.d(e,"default",function(){return f});var r=o(0),n=o(1),i=o(222),a=o(71),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},c=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var o=[],r=!0,n=!1,i=void 0;try{for(var a,p=t[Symbol.iterator]();!(r=(a=p.next()).done)&&(o.push(a.value),!e||o.length!==e);r=!0);}catch(t){n=!0,i=t}finally{try{!r&&p.return&&p.return()}finally{if(n)throw i}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t}}(),l=function get(t,e,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var n=Object.getPrototypeOf(t);return null===n?void 0:get(n,e,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0};function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var f=function(t){function Update(){var t,e,o;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Update);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=o=_possibleConstructorReturn(this,(t=Update.__proto__||Object.getPrototypeOf(Update)).call.apply(t,[this].concat(n))),o.config={"navigationBarTitleText":"更新日志"},_possibleConstructorReturn(o,e)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Update,n["a"].Component),u(Update,[{"key":"render","value":function render(){var t=n.a.useState(!1),e=c(t,2),o=e[0],u=e[1],l=n.a.useState([]),f=c(l,2),s=f[0],d=f[1];return n.a.useEffect(function(){u(!0),Object(i.a)({"url":"https://mp-colorui-1255362963.cos.ap-chengdu.myqcloud.com/update/update.json"}).then(function(t){var e=[],o="0",r=[];t.data.reverse().forEach(function(t){var n=t.title.split("."),i=n[0]+n[1],a=t.time.split("-");0===r.length?r=a:r[0]===a[0]&&r[1]===a[1]||(e.unshift({"node":r[0]+"-"+r[1]}),r=a),i!==o?(o=i,e.unshift(p({},t,{"bgColor":"gradualRed","iconColor":"red"}))):e.unshift(p({},t,{"bgColor":"gradualBlue","iconColor":"blue"}))}),d(e)}).finally(function(){u(!1)})},[]),r.l.createElement(a.f,{"type":"full"},r.l.createElement(a.t,{"show":o}),r.l.createElement(a.s,{"padding":"xlarge","paddingDirection":"bottom","margin":"xlarge","marginDirection":"bottom"},r.l.createElement(a.N,{"times":s})))}},{"key":"componentDidMount","value":function componentDidMount(){l(Update.prototype.__proto__||Object.getPrototypeOf(Update.prototype),"componentDidMount",this)&&l(Update.prototype.__proto__||Object.getPrototypeOf(Update.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){l(Update.prototype.__proto__||Object.getPrototypeOf(Update.prototype),"componentDidShow",this)&&l(Update.prototype.__proto__||Object.getPrototypeOf(Update.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){l(Update.prototype.__proto__||Object.getPrototypeOf(Update.prototype),"componentDidHide",this)&&l(Update.prototype.__proto__||Object.getPrototypeOf(Update.prototype),"componentDidHide",this).call(this)}}]),Update}();f.config={"navigationBarTitleText":"更新日志"}}}]);