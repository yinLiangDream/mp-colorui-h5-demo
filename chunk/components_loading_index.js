(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"38":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return p});var n=o(0),r=o(2),i=o(71),a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],n=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(r)throw i}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),c=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};var p=function(e){function Loading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Loading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Loading.__proto__||Object.getPrototypeOf(Loading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Loading,r["a"].Component),l(Loading,[{"key":"render","value":function render(){var e=r.a.useState(!1),t=a(e,2),o=t[0],l=t[1],c=r.a.useState(!1),p=a(c,2),u=p[0],f=p[1],d=r.a.useState(!1),s=a(d,2),y=s[0],g=s[1],m=r.a.useState(!1),h=a(m,2),b=h[0],_=h[1],v=r.a.useState(!1),w=a(v,2),O=w[0],E=w[1],C=r.a.useState(!1),L=a(C,2),P=L[0],k=L[1];return n.l.createElement(i.s,null,n.l.createElement(i.P,{"title":"bar加载","textColor":"black","type":"icon","subTitle":"bar"}),n.l.createElement(i.f,null,n.l.createElement(i.I,{"title":"bar加载","type":"form","checked":o,"onChange":function onChange(e){l(e)}})),n.l.createElement(i.t,{"type":"bar","show":o}),n.l.createElement(i.P,{"title":"line加载","textColor":"black","type":"icon","subTitle":"line"}),n.l.createElement(i.t,{"type":"line","show":u,"loadingError":y,"noMore":b}),n.l.createElement(i.f,null,n.l.createElement(i.I,{"title":"line加载","type":"form","checked":u,"onChange":function onChange(e){f(e),e||(g(!1),_(!1))}}),n.l.createElement(i.I,{"title":"line加载出错","type":"form","checked":y,"onChange":function onChange(e){e&&_(!1),g(e)}}),n.l.createElement(i.I,{"title":"line加载没有更多了","type":"form","checked":b,"onChange":function onChange(e){e&&g(!1),_(e)}})),n.l.createElement(i.P,{"title":"modal加载","textColor":"black","type":"icon","subTitle":"modal"}),n.l.createElement(i.t,{"type":"modal","show":O,"imgUrl":"https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"}),n.l.createElement(i.f,null,n.l.createElement(i.I,{"title":"modal加载","type":"form","checked":O,"onChange":function onChange(e){E(e)}})),n.l.createElement(i.P,{"title":"image加载","textColor":"black","type":"icon","subTitle":"image"}),n.l.createElement(i.t,{"type":"image","show":P,"imgUrl":"https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"}),n.l.createElement(i.f,null,n.l.createElement(i.I,{"title":"image加载","type":"form","checked":P,"onChange":function onChange(e){k(e),setTimeout(function(){k(!1)},3e3)}})))}},{"key":"componentDidMount","value":function componentDidMount(){c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidMount",this)&&c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidShow",this)&&c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidHide",this)&&c(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidHide",this).call(this)}}]),Loading}();p.config={"navigationBarTitleText":"Loading 加载"}}}]);