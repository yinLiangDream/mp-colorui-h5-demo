(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"31":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return a});var n=o(0),r=o(2),i=o(65),p=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),l=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=[{"title":"第一步"},{"title":"第二步"},{"title":"第三步"},{"title":"第四步"}],c=[{"title":"评审","icon":"edit"},{"title":"开发","icon":"musicfill"},{"title":"测试","icon":"settingsfill"},{"title":"上线","icon":"medalfill"}],a=function(e){function Steps(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Steps);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=o=_possibleConstructorReturn(this,(e=Steps.__proto__||Object.getPrototypeOf(Steps)).call.apply(e,[this].concat(r))),o.config={"navigationBarTitleText":"Steps 步骤条"},o.state={"stepShape":0},_possibleConstructorReturn(o,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Steps,r["a"].Component),p(Steps,[{"key":"next","value":function next(){var e=this.state.stepShape>3?0:this.state.stepShape+1;this.setState({"stepShape":e})}},{"key":"render","value":function render(){var e=this.state.stepShape;return n.k.createElement(i.q,null,n.k.createElement(i.K,{"title":"类型","textColor":"black","type":"icon","subTitle":"type","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.C,{"steps":s,"type":"arrow","step":e,"activeColor":"blue"})),n.k.createElement(i.e,null,n.k.createElement(i.C,{"steps":s,"type":"line","step":e,"activeColor":"brown"})),n.k.createElement(i.q,{"padding":"normal","paddingDirection":"around"},n.k.createElement(i.d,{"bgColor":"light-blue","long":!0,"onClick":this.next.bind(this)},"下一步")),n.k.createElement(i.K,{"title":"自定义图标","textColor":"black","type":"icon","subTitle":"custom","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.C,{"steps":c,"type":"arrow","stepIconType":"custom","step":e,"activeColor":"blue"})),n.k.createElement(i.e,null,n.k.createElement(i.C,{"steps":c,"type":"line","stepIconType":"custom","step":e,"activeColor":"brown"})),n.k.createElement(i.e,null,n.k.createElement(i.C,{"steps":c,"type":"arrow","stepIconType":"space","step":e,"activeColor":"blue"})),n.k.createElement(i.q,{"padding":"normal","paddingDirection":"around"},n.k.createElement(i.d,{"bgColor":"light-blue","long":!0,"onClick":this.next.bind(this)},"下一步")),n.k.createElement(i.K,{"title":"文字位置","textColor":"black","type":"icon","subTitle":"stepTitlePosition","subTitleColor":"shadow"}),n.k.createElement(i.e,null,n.k.createElement(i.C,{"steps":c,"stepTitlePosition":"bottom","type":"line","stepIconType":"custom","step":e,"activeColor":"blue"})),n.k.createElement(i.e,null,n.k.createElement(i.C,{"steps":c,"stepTitlePosition":"top","type":"line","stepIconType":"custom","step":e,"activeColor":"blue"})),n.k.createElement(i.q,{"padding":"normal","paddingDirection":"around"},n.k.createElement(i.d,{"bgColor":"light-blue","long":!0,"onClick":this.next.bind(this)},"下一步")))}},{"key":"componentDidMount","value":function componentDidMount(){l(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidMount",this)&&l(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){l(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidShow",this)&&l(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){l(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidHide",this)&&l(Steps.prototype.__proto__||Object.getPrototypeOf(Steps.prototype),"componentDidHide",this).call(this)}}]),Steps}()}}]);