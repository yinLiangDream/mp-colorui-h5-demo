(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"31":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return a});var n=o(0),l=o(2),r=o(66),i=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),p=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var l=Object.getPrototypeOf(e);return null===l?void 0:get(l,t,o)}if("value"in n)return n.value;var r=n.get;return void 0!==r?r.call(o):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=[{"title":"第一步"},{"title":"第二步"},{"title":"第三步"},{"title":"第四步"}],c=[{"title":"评审","icon":"edit"},{"title":"开发","icon":"musicfill"},{"title":"测试","icon":"settingsfill"},{"title":"上线","icon":"medalfill"}],a=function(e){function Steps(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Steps);for(var n=arguments.length,l=Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=o=_possibleConstructorReturn(this,(e=Steps.__proto__||Object.getPrototypeOf(Steps)).call.apply(e,[this].concat(l))),o.config={"navigationBarTitleText":"Steps 步骤条"},o.state={"stepShape":0},_possibleConstructorReturn(o,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Steps,l["a"].Component),i(Steps,[{"key":"next","value":function next(){var e=this.state.stepShape>3?0:this.state.stepShape+1;this.setState({"stepShape":e})}},{"key":"render","value":function render(){var e=this.state.stepShape;return n.l.createElement(r.q,null,n.l.createElement(r.L,{"title":"类型","textColor":"black","type":"icon","subTitle":"type","subTitleColor":"shadow"}),n.l.createElement(r.e,null,n.l.createElement(r.C,{"steps":s,"type":"arrow","step":e,"activeColor":"blue"})),n.l.createElement(r.e,null,n.l.createElement(r.C,{"steps":s,"type":"line","step":e,"activeColor":"brown"})),n.l.createElement(r.q,{"padding":"normal","paddingDirection":"around"},n.l.createElement(r.d,{"bgColor":"light-blue","long":!0,"onClick":this.next.bind(this)},"下一步")),n.l.createElement(r.L,{"title":"自定义图标","textColor":"black","type":"icon","subTitle":"custom","subTitleColor":"shadow"}),n.l.createElement(r.e,null,n.l.createElement(r.C,{"steps":c,"type":"arrow","stepIconType":"custom","step":e,"activeColor":"blue"})),n.l.createElement(r.e,null,n.l.createElement(r.C,{"steps":c,"type":"line","stepIconType":"custom","step":e,"activeColor":"brown"})),n.l.createElement(r.e,null,n.l.createElement(r.C,{"steps":c,"type":"arrow","stepIconType":"space","step":e,"activeColor":"blue"})),n.l.createElement(r.q,{"padding":"normal","paddingDirection":"around"},n.l.createElement(r.d,{"bgColor":"light-blue","long":!0,"onClick":this.next.bind(this)},"下一步")),n.l.createElement(r.L,{"title":"文字位置","textColor":"black","type":"icon","subTitle":"stepTitlePosition","subTitleColor":"shadow"}),n.l.createElement(r.e,null,n.l.createElement(r.C,{"steps":c,"stepTitlePosition":"bottom","type":"line","stepIconType":"custom","step":e,"activeColor":"blue"})),n.l.createElement(r.e,null,n.l.createElement(r.C,{"steps":c,"stepTitlePosition":"top","type":"line","stepIconType":"custom","step":e,"activeColor":"blue"})),n.l.createElement(r.q,{"padding":"normal","paddingDirection":"around"},n.l.createElement(r.d,{"bgColor":"light-blue","long":!0,"onClick":this.next.bind(this)},"下一步")))}},{"key":"componentDidMount","value":function componentDidMount(){p(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidMount",this)&&p(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){p(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidShow",this)&&p(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidHide",this)&&p(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidHide",this).call(this)}}]),Steps}()}}]);