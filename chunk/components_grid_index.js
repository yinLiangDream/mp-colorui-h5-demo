(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"46":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return p});var o=r(0),n=r(2),i=r(67),l=r(186),c=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=function get(e,t,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function Grid(){var e,t,r;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Grid);for(var o=arguments.length,n=Array(o),i=0;i<o;i++)n[i]=arguments[i];return t=r=_possibleConstructorReturn(this,(e=Grid.__proto__||Object.getPrototypeOf(Grid)).call.apply(e,[this].concat(n))),r.config={"navigationBarTitleText":"Grid 栅格布局"},_possibleConstructorReturn(r,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Grid,n["a"].Component),c(Grid,[{"key":"renderComponent","value":function renderComponent(e){return function generatorArr(e){for(var t=0,r=[];t<2*e;)r.push(""),t++;return r}(e).map(function(e,t){return o.l.createElement(l.a,{"key":Math.random()},o.l.createElement(i.e,{"type":"full","bgColor":t%2==0?"light-blue":"light-brown"},t+1))})}},{"key":"renderCards","value":function renderCards(e){return o.l.createElement(i.e,null,o.l.createElement(i.m,{"col":e},this.renderComponent(e)))}},{"key":"render","value":function render(){return o.l.createElement(i.q,null,o.l.createElement(i.M,{"title":"等分列","textColor":"black","type":"icon","subTitle":"grid","subTitleColor":"shadow"}),this.renderCards(1),this.renderCards(2),this.renderCards(3),this.renderCards(4),this.renderCards(5),o.l.createElement(i.M,{"title":"等高","textColor":"black","type":"icon","subTitle":"square","subTitleColor":"shadow"}),o.l.createElement(i.e,null,o.l.createElement(i.m,{"mode":"square","col":3},o.l.createElement(l.a,{"className":"bg-blue light"},"1"),o.l.createElement(l.a,{"className":"bg-brown light"},"2"),o.l.createElement(l.a,{"className":"bg-blue light"},"3"))))}},{"key":"componentDidMount","value":function componentDidMount(){a(Grid.prototype.__proto__||Object.getPrototypeOf(Grid.prototype),"componentDidMount",this)&&a(Grid.prototype.__proto__||Object.getPrototypeOf(Grid.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){a(Grid.prototype.__proto__||Object.getPrototypeOf(Grid.prototype),"componentDidShow",this)&&a(Grid.prototype.__proto__||Object.getPrototypeOf(Grid.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){a(Grid.prototype.__proto__||Object.getPrototypeOf(Grid.prototype),"componentDidHide",this)&&a(Grid.prototype.__proto__||Object.getPrototypeOf(Grid.prototype),"componentDidHide",this).call(this)}}]),Grid}()}}]);