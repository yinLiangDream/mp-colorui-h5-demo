(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"53":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return b});var n=o(0),r=o(1),i=o(64),a=o(162),c=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),l=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};var p=[].concat(function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(new Array(10))).map(function gen(e,t){return{"text":"标签 "+(t+1),"id":"id-"+t}}),u=[{"text":"标签 1","id":"verb-1"},{"text":"标签 2","id":"verb-2"},{"text":"标签 3","id":"verb-3"}],s=[{"text":"标签 1","icon":"emoji","id":"icon-1"},{"text":"标签 2","icon":"addressbook","id":"icon-2"},{"text":"标签 3","icon":"discoverfill","id":"icon-3"}],b=function(e){function Tabs(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tabs),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Tabs.__proto__||Object.getPrototypeOf(Tabs)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Tabs,r["a"].Component),c(Tabs,[{"key":"render","value":function render(){return n.k.createElement(i.o,null,n.k.createElement(i.I,{"title":"默认","textColor":"black","type":"icon","subTitle":"default","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"tabs":p},p.map(function(e){return n.k.createElement(a.a,{"key":e.id,"id":e.id},e.text)}))),n.k.createElement(i.I,{"title":"可拖动","textColor":"black","type":"icon","subTitle":"default","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"tabs":p,"touchMove":!0},p.map(function(e){return n.k.createElement(a.a,{"key":e.id,"id":e.id},e.text)}))),n.k.createElement(i.I,{"title":"平分","textColor":"black","type":"icon","subTitle":"verb","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"tabs":u,"type":"verb"},u.map(function(e){return n.k.createElement(a.a,{"key":e.id,"id":e.id},e.text)}))),n.k.createElement(i.I,{"title":"居中","textColor":"black","type":"icon","subTitle":"center","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"tabs":u.map(function(e){return{"text":e.text,"id":e.id+"-1"}}),"type":"center"},u.map(function(e){return n.k.createElement(a.a,{"key":e.id,"id":e.id+"-1"},e.text)}))),n.k.createElement(i.I,{"title":"激活色&背景色","textColor":"black","type":"icon","subTitle":"activeColor&bgColor","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"tabs":u.map(function(e){return{"text":e.text,"id":e.id+"-2"}}),"type":"center","activeColor":"red","bgColor":"black"},u.map(function(e){return n.k.createElement(a.a,{"key":e.id,"id":e.id+"-2"},e.text)}))),n.k.createElement(i.I,{"title":"带图标","textColor":"black","type":"icon","subTitle":"icon","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.E,{"tabs":s,"type":"center"},s.map(function(e){return n.k.createElement(a.a,{"key":e.id,"id":e.id},e.text)}))))}},{"key":"componentDidMount","value":function componentDidMount(){l(Tabs.prototype.__proto__||Object.getPrototypeOf(Tabs.prototype),"componentDidMount",this)&&l(Tabs.prototype.__proto__||Object.getPrototypeOf(Tabs.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){l(Tabs.prototype.__proto__||Object.getPrototypeOf(Tabs.prototype),"componentDidShow",this)&&l(Tabs.prototype.__proto__||Object.getPrototypeOf(Tabs.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){l(Tabs.prototype.__proto__||Object.getPrototypeOf(Tabs.prototype),"componentDidHide",this)&&l(Tabs.prototype.__proto__||Object.getPrototypeOf(Tabs.prototype),"componentDidHide",this).call(this)}}]),Tabs}();b.config={"navigationBarTitleText":"Tabs 标签页"}}}]);