(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"52":function(t,e,o){"use strict";o.r(e),o.d(e,"default",function(){return u});var r=o(0),n=o(2),a=o(67),i=function(){function defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t}}(),l=function get(t,e,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var n=Object.getPrototypeOf(t);return null===n?void 0:get(n,e,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0};var c=[{"badge":!0,"icon":"hot","title":"首页"},{"badge":!1,"icon":"info","title":"喵喵喵"},{"badge":99,"icon":"repeal","title":"嗷嗷嗷","action":!0},{"badge":8,"icon":"weunblock","title":"啾啾啾"},{"icon":"video","title":"丢丢丢"}],p=[{"badge":!0,"icon":"hot","title":"首页"},{"badge":!1,"icon":"info","title":"喵喵喵"},{"badge":99,"icon":"repeal","title":"嗷嗷嗷"}],b=JSON.parse(JSON.stringify(p)).map(function(t,e){return 0===e&&(t.action=!0),t}),u=function(t){function TabBar(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,TabBar),function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(TabBar.__proto__||Object.getPrototypeOf(TabBar)).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(TabBar,n["a"].Component),i(TabBar,[{"key":"render","value":function render(){return r.l.createElement(a.q,null,r.l.createElement(a.M,{"title":"默认","textColor":"black","type":"icon","subTitle":"default","subTitleColor":"shadow"}),r.l.createElement(a.e,null,r.l.createElement(a.G,{"active":1,"tabs":p})),r.l.createElement(a.M,{"title":"背景色","textColor":"black","type":"icon","subTitle":"bgColor","subTitleColor":"shadow"}),r.l.createElement(a.e,null,r.l.createElement(a.G,{"active":1,"bgColor":"light-cyan","tabs":p})),r.l.createElement(a.M,{"title":"激活色","textColor":"black","type":"icon","subTitle":"activeColor","subTitleColor":"shadow"}),r.l.createElement(a.e,null,r.l.createElement(a.G,{"active":1,"bgColor":"light-cyan","activeColor":"black","tabs":p})),r.l.createElement(a.M,{"title":"突出","textColor":"black","type":"icon","subTitle":"action","subTitleColor":"shadow"}),r.l.createElement(a.e,null,r.l.createElement(a.G,{"active":1,"bgColor":"light-cyan","activeColor":"black","tabs":b})),r.l.createElement(a.G,{"active":1,"bgColor":"black","activeColor":"gray","fix":!0,"tabs":c}))}},{"key":"componentDidMount","value":function componentDidMount(){l(TabBar.prototype.__proto__||Object.getPrototypeOf(TabBar.prototype),"componentDidMount",this)&&l(TabBar.prototype.__proto__||Object.getPrototypeOf(TabBar.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){l(TabBar.prototype.__proto__||Object.getPrototypeOf(TabBar.prototype),"componentDidShow",this)&&l(TabBar.prototype.__proto__||Object.getPrototypeOf(TabBar.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){l(TabBar.prototype.__proto__||Object.getPrototypeOf(TabBar.prototype),"componentDidHide",this)&&l(TabBar.prototype.__proto__||Object.getPrototypeOf(TabBar.prototype),"componentDidHide",this).call(this)}}]),TabBar}();u.config={"navigationBarTitleText":"TabBar 标签栏"}}}]);