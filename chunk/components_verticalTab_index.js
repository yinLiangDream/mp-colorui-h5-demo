(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"29":function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(2),i=n(69),a=n(261),c=n(70);n.d(t,"default",function(){return u});var l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),p=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0};var u=function(e){function VerticalTab(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,VerticalTab),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(VerticalTab.__proto__||Object.getPrototypeOf(VerticalTab)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(VerticalTab,o["a"].Component),l(VerticalTab,[{"key":"render","value":function render(){var e=[].concat(function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Array(50))).map(function(e,t){return{"name":"tab-"+t,"id":"id-"+t}});return r.l.createElement(a.a,null,r.l.createElement(i.P,{"tabs":e,"height":1e3},r.l.createElement(a.a,null,e.map(function(e){return r.l.createElement(a.a,{"id":e.id,"key":e.name},r.l.createElement(i.Q,null,e.name))}))),r.l.createElement(i.s,{"paddingDirection":"vertical","padding":"normal"},r.l.createElement(c.a,{"code":"\n```\nconst tabs = [...Array(50)].map((key, index) => ({name: 'tab-' + index, id: 'id-' + index}))\n\n<ClVerticalTab tabs={tabs} height={1000}>\n  <View>\n    {tabs.map((item) => (\n      <View id={item.id} key={item.name}>\n        <ClVerticalTabCell>{item.name}</ClVerticalTabCell>\n      </View>\n    ))}\n  </View>\n</ClVerticalTab>\n```\n"})))}},{"key":"componentDidMount","value":function componentDidMount(){p(VerticalTab.prototype.__proto__||Object.getPrototypeOf(VerticalTab.prototype),"componentDidMount",this)&&p(VerticalTab.prototype.__proto__||Object.getPrototypeOf(VerticalTab.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){p(VerticalTab.prototype.__proto__||Object.getPrototypeOf(VerticalTab.prototype),"componentDidShow",this)&&p(VerticalTab.prototype.__proto__||Object.getPrototypeOf(VerticalTab.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(VerticalTab.prototype.__proto__||Object.getPrototypeOf(VerticalTab.prototype),"componentDidHide",this)&&p(VerticalTab.prototype.__proto__||Object.getPrototypeOf(VerticalTab.prototype),"componentDidHide",this).call(this)}}]),VerticalTab}();u.config={"navigationBarTitleText":"垂直导航 VerticalTab"}},"70":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),o=n(2),i=n(69),a=n(72),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function GenerateCode(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GenerateCode),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GenerateCode.__proto__||Object.getPrototypeOf(GenerateCode)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GenerateCode,o["a"].Component),c(GenerateCode,[{"key":"render","value":function render(){var e=this.props;return r.l.createElement(i.s,{"padding":"normal","paddingDirection":"bottom"},r.l.createElement(i.a,{"title":"示例代码","card":!0},r.l.createElement(i.s,{"padding":"normal","paddingDirection":"around"},r.l.createElement(a.a,{"raw":!1,"richText":e.code,"type":"markdown"}))))}}]),GenerateCode}();l.defaultProps={"code":""}}}]);