(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"46":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return b});var n=o(0),l=o(2),r=o(71),i=o(201),a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),c=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var l=Object.getPrototypeOf(e);return null===l?void 0:get(l,t,o)}if("value"in n)return n.value;var r=n.get;return void 0!==r?r.call(o):void 0};var p=["xs","sm","df","lg","xl"],u=["sub","twice","treble"],s=["blue","red","green"],f=["start","end","center","between","around"],y=["start","end","center","stretch"],b=function(e){function Flex(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Flex),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Flex.__proto__||Object.getPrototypeOf(Flex)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Flex,l["a"].Component),a(Flex,[{"key":"render","value":function render(){var e=p.map(function(e){return n.l.createElement(r.f,{"key":e},n.l.createElement(r.k,null,n.l.createElement(i.a,{"className":"basis-"+e},n.l.createElement(r.f,{"bgColor":"light-blue","type":"full","shadow":!1},e))))}),t=u.map(function(e,t){return n.l.createElement(i.a,{"key":e,"className":"flex-"+e},n.l.createElement(r.f,{"type":"full","bgColor":"light-"+s[t]},e,"(",t+1,")"))}),o=f.map(function(e){return n.l.createElement(r.f,{"key":e},n.l.createElement(r.k,{"justify":e},n.l.createElement(r.f,{"bgColor":"light-blue","shadow":!1},e),n.l.createElement(r.f,{"bgColor":"light-blue","shadow":!1},e)))}),l=y.map(function(e){return n.l.createElement(r.f,{"key":e},n.l.createElement(r.k,{"align":e},n.l.createElement(i.a,{"className":"bg-gradual-blue padding margin"},n.l.createElement(i.a,null,e),n.l.createElement(i.a,null,e)),n.l.createElement(i.a,{"className":"bg-gradual-blue padding margin"},n.l.createElement(i.a,{"style":{"height":"100%"}},e))))});return n.l.createElement(r.s,null,n.l.createElement(r.P,{"title":"固定尺寸","textColor":"black","type":"icon","subTitle":"basis"}),e,n.l.createElement(r.P,{"title":"比例布局","textColor":"black","type":"icon","subTitle":"flex"}),n.l.createElement(r.f,null,n.l.createElement(r.k,null,t)),n.l.createElement(r.P,{"title":"水平对齐","textColor":"black","type":"icon","subTitle":"justify"}),o,n.l.createElement(r.P,{"title":"垂直对齐","textColor":"black","type":"icon","subTitle":"align"}),l)}},{"key":"componentDidMount","value":function componentDidMount(){c(Flex.prototype.__proto__||Object.getPrototypeOf(Flex.prototype),"componentDidMount",this)&&c(Flex.prototype.__proto__||Object.getPrototypeOf(Flex.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){c(Flex.prototype.__proto__||Object.getPrototypeOf(Flex.prototype),"componentDidShow",this)&&c(Flex.prototype.__proto__||Object.getPrototypeOf(Flex.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){c(Flex.prototype.__proto__||Object.getPrototypeOf(Flex.prototype),"componentDidHide",this)&&c(Flex.prototype.__proto__||Object.getPrototypeOf(Flex.prototype),"componentDidHide",this).call(this)}}]),Flex}();b.config={"navigationBarTitleText":"Flex 弹性布局"}}}]);