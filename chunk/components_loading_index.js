(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"59":function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2),i=n(69),a=n(70);n.d(t,"default",function(){return u});var l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),p=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0};var u=function(e){function Loading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Loading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Loading.__proto__||Object.getPrototypeOf(Loading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Loading,r["a"].Component),c(Loading,[{"key":"render","value":function render(){var e=r.a.useState(!1),t=l(e,2),n=t[0],c=t[1],p=r.a.useState(!1),u=l(p,2),d=u[0],f=u[1],s=r.a.useState(!1),y=l(s,2),g=y[0],m=y[1],h=r.a.useState(!1),b=l(h,2),_=b[0],w=b[1],E=r.a.useState(!1),C=l(E,2),O=C[0],v=C[1],L=r.a.useState(!1),P=l(L,2),k=P[0],j=P[1];return o.l.createElement(i.s,null,o.l.createElement(i.O,{"title":"bar加载","textColor":"black","type":"icon","subTitle":"bar"}),o.l.createElement(i.f,null,o.l.createElement(i.H,{"title":"bar加载","type":"form","checked":n,"onChange":function onChange(e){c(e)}})),o.l.createElement(a.a,{"code":"\n```\n<ClLoading type='bar' show={barLoading} />\n```\n"}),o.l.createElement(i.t,{"type":"bar","show":n}),o.l.createElement(i.O,{"title":"line加载","textColor":"black","type":"icon","subTitle":"line"}),o.l.createElement(i.t,{"type":"line","show":d,"loadingError":g,"noMore":_}),o.l.createElement(i.f,null,o.l.createElement(i.H,{"title":"line加载","type":"form","checked":d,"onChange":function onChange(e){f(e),e||(m(!1),w(!1))}}),o.l.createElement(i.H,{"title":"line加载出错","type":"form","checked":g,"onChange":function onChange(e){e&&w(!1),m(e)}}),o.l.createElement(i.H,{"title":"line加载没有更多了","type":"form","checked":_,"onChange":function onChange(e){e&&m(!1),w(e)}})),o.l.createElement(a.a,{"code":'\n```\n<ClLoading\n  type="line"\n  show={lineLoading}\n  loadingError={lineLoadingErr}\n  noMore={lineLoadingEnd}\n/>\n```\n'}),o.l.createElement(i.O,{"title":"modal加载","textColor":"black","type":"icon","subTitle":"modal"}),o.l.createElement(i.t,{"type":"modal","show":O,"imgUrl":"https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"}),o.l.createElement(i.f,null,o.l.createElement(i.H,{"title":"modal加载","type":"form","checked":O,"onChange":function onChange(e){v(e)}})),o.l.createElement(a.a,{"code":'\n```\n<ClLoading\n  type="modal"\n  show={modalLoading}\n  imgUrl="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"\n/>\n```\n'}),o.l.createElement(i.O,{"title":"image加载","textColor":"black","type":"icon","subTitle":"image"}),o.l.createElement(i.t,{"type":"image","show":k,"imgUrl":"https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"}),o.l.createElement(i.f,null,o.l.createElement(i.H,{"title":"image加载","type":"form","checked":k,"onChange":function onChange(e){j(e),setTimeout(function(){j(!1)},3e3)}})),o.l.createElement(a.a,{"code":'\n```\n<ClLoading\n  type="image"\n  show={imageLoading}\n  imgUrl="https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/loading.gif"\n/>\n```\n'}))}},{"key":"componentDidMount","value":function componentDidMount(){p(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidMount",this)&&p(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){p(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidShow",this)&&p(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidHide",this)&&p(Loading.prototype.__proto__||Object.getPrototypeOf(Loading.prototype),"componentDidHide",this).call(this)}}]),Loading}();u.config={"navigationBarTitleText":"Loading 加载"}},"70":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(0),r=n(2),i=n(69),a=n(72),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var c=function(e){function GenerateCode(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GenerateCode),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GenerateCode.__proto__||Object.getPrototypeOf(GenerateCode)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GenerateCode,r["a"].Component),l(GenerateCode,[{"key":"render","value":function render(){var e=this.props;return o.l.createElement(i.s,{"padding":"normal","paddingDirection":"bottom"},o.l.createElement(i.a,{"title":"示例代码","card":!0},o.l.createElement(i.s,{"padding":"normal","paddingDirection":"around"},o.l.createElement(a.a,{"raw":!1,"richText":e.code,"type":"markdown"}))))}}]),GenerateCode}();c.defaultProps={"code":""}}}]);