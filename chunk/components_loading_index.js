(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"37":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return p});var n=o(0),r=o(2),i=o(65),a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],n=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(r)throw i}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),c=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};var p=function(e){function Loading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Loading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Loading.__proto__||Object.getPrototypeOf(Loading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Loading,r["a"].Component),l(Loading,[{"key":"render","value":function render(){var e=r.a.useState(!1),t=a(e,2),o=t[0],l=t[1],c=r.a.useState(!1),p=a(c,2),u=p[0],d=p[1],s=r.a.useState(!1),f=a(s,2),y=f[0],g=f[1],h=r.a.useState(!1),m=a(h,2),b=m[0],k=m[1],_=r.a.useState(!1),w=a(_,2),E=w[0],v=w[1],C=r.a.useState(!1),O=a(C,2),L=O[0],j=O[1];return n.k.createElement(i.q,null,n.k.createElement(i.K,{"title":"bar加载","textColor":"black","type":"icon","subTitle":"bar","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"title":"bar加载","type":"form","checked":o,"onChange":function onChange(e){l(e)}})),n.k.createElement(i.r,{"type":"bar","show":o}),n.k.createElement(i.K,{"title":"line加载","textColor":"black","type":"icon","subTitle":"line","subTitleColor":"shadow"}),n.k.createElement(i.r,{"type":"line","show":u,"loadingError":y,"noMore":b}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"title":"line加载","type":"form","checked":u,"onChange":function onChange(e){d(e),e||(g(!1),k(!1))}}),n.k.createElement(i.E,{"title":"line加载出错","type":"form","checked":y,"onChange":function onChange(e){e&&k(!1),g(e)}}),n.k.createElement(i.E,{"title":"line加载没有更多了","type":"form","checked":b,"onChange":function onChange(e){e&&g(!1),k(e)}})),n.k.createElement(i.K,{"title":"modal加载","textColor":"black","type":"icon","subTitle":"modal","subTitleColor":"shadow"}),n.k.createElement(i.r,{"type":"modal","show":E,"imgUrl":"https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"title":"modal加载","type":"form","checked":E,"onChange":function onChange(e){v(e)}})),n.k.createElement(i.K,{"title":"image加载","textColor":"black","type":"icon","subTitle":"image","subTitleColor":"shadow"}),n.k.createElement(i.r,{"type":"image","show":L,"imgUrl":"https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"title":"image加载","type":"form","checked":L,"onChange":function onChange(e){j(e),setTimeout(function(){j(!1)},3e3)}})))}},{"key":"componentDidMount","value":function componentDidMount(){c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidMount",this)&&c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidShow",this)&&c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidHide",this)&&c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidHide",this).call(this)}}]),Loading}();p.config={"navigationBarTitleText":"Loading 加载"}}}]);