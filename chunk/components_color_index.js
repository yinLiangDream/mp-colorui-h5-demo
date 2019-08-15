(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"25":function(o,t,e){"use strict";e.r(t),e.d(t,"default",function(){return d});var r=e(0),l=e(2),n=e(177),f=e(170),i=e(65),c=e(82),a=e(76),u=function(){function defineProperties(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}return function(o,t,e){return t&&defineProperties(o.prototype,t),e&&defineProperties(o,e),o}}(),p=function get(o,t,e){null===o&&(o=Function.prototype);var r=Object.getOwnPropertyDescriptor(o,t);if(void 0===r){var l=Object.getPrototypeOf(o);return null===l?void 0:get(l,t,e)}if("value"in r)return r.value;var n=r.get;return void 0!==n?n.call(e):void 0};var d=function(o){function Color(o){!function _classCallCheck(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Color);var t=function _possibleConstructorReturn(o,t){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?o:t}(this,(Color.__proto__||Object.getPrototypeOf(Color)).call(this,o));return t.state={"showAnimation":!1},t}return function _inherits(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);o.prototype=Object.create(t&&t.prototype,{"constructor":{"value":o,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(o,t):o.__proto__=t)}(Color,l["a"].Component),u(Color,[{"key":"renderCard","value":function renderCard(o,t){return r.k.createElement(i.b,{"type":"slide-top","delay":t/10},r.k.createElement(i.e,{"bgColor":o.title.includes("Light")?Object(c.a)(o.title):o.title},r.k.createElement(i.i,{"justify":"around"},r.k.createElement(i.I,null,o.title),r.k.createElement(i.I,{"special":"upper"},o.color))))}},{"key":"componentDidMount","value":function componentDidMount(){var o=this,t=null;t=setTimeout(function(){o.setState({"showAnimation":!0}),clearTimeout(t)},100)}},{"key":"render","value":function render(){var o=this,t=this.state.showAnimation,e=a.a.normalColor.map(function(t,e){return r.k.createElement(n.a,{"key":t.title},o.renderCard(t,e))}),l=a.a.lightColor.map(function(t,e){return r.k.createElement(n.a,{"key":t.title},o.renderCard(t,e))}),c=a.a.gradualColor.map(function(t,e){return r.k.createElement(n.a,{"key":t.title},o.renderCard(t,e))});return r.k.createElement(f.a,null,r.k.createElement(i.K,{"title":"标准色","type":"icon","textColor":"black","iconColor":"blue"}),t?e:"",r.k.createElement(i.K,{"title":"浅色","type":"icon","textColor":"black","iconColor":"blue"}),t?l:"",r.k.createElement(i.K,{"title":"渐变色","type":"icon","textColor":"black","iconColor":"blue"}),t?c:"")}},{"key":"componentDidShow","value":function componentDidShow(){p(Color.prototype.__proto__||Object.getPrototypeOf(Color.prototype),"componentDidShow",this)&&p(Color.prototype.__proto__||Object.getPrototypeOf(Color.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(Color.prototype.__proto__||Object.getPrototypeOf(Color.prototype),"componentDidHide",this)&&p(Color.prototype.__proto__||Object.getPrototypeOf(Color.prototype),"componentDidHide",this).call(this)}}]),Color}();d.config={"navigationBarTitleText":"Color 颜色"}},"76":function(o,t,e){"use strict";t.a={"normalColor":[{"title":"red","color":"#e54d42","fontColor":"#ffffff"},{"title":"orange","color":"#f37b1d","fontColor":"#ffffff"},{"title":"yellow","color":"#fbbd08","fontColor":"#ffffff"},{"title":"olive","color":"#8dc63f","fontColor":"#ffffff"},{"title":"green","color":"#39b54a","fontColor":"#ffffff"},{"title":"cyan","color":"#1cbbb4","fontColor":"#ffffff"},{"title":"blue","color":"#0081ff","fontColor":"#ffffff"},{"title":"purple","color":"#6739b6","fontColor":"#ffffff"},{"title":"mauve","color":"#9c26b0","fontColor":"#ffffff"},{"title":"pink","color":"#e03997","fontColor":"#ffffff"},{"title":"brown","color":"#a5673f","fontColor":"#ffffff"},{"title":"grey","color":"#8799a3","fontColor":"#ffffff"},{"title":"black","color":"#333333","fontColor":"#ffffff"},{"title":"gray","color":"#aaaaaa","fontColor":"#ffffff"},{"title":"white","color":"#ffffff","fontColor":"#000000"}],"lightColor":[{"title":"redLight","color":"#fadbd9","fontColor":"#e54d42"},{"title":"orangeLight","color":"#fde6d2","fontColor":"#f37b1d"},{"title":"yellowLight","color":"#fef2ce","fontColor":"#fbbd08"},{"title":"oliveLight","color":"#e8f4d9","fontColor":"#8dc63f"},{"title":"greenLight","color":"#d7f0db","fontColor":"#39b54a"},{"title":"cyanLight","color":"#d2f1f0","fontColor":"#1cbbb4"},{"title":"blueLight","color":"#cce6ff","fontColor":"#0081ff"},{"title":"purpleLight","color":"#e1d7f0","fontColor":"#6739b6"},{"title":"mauveLight","color":"#ebd4ef","fontColor":"#9c26b0"},{"title":"pinkLight","color":"#f9d7ea","fontColor":"#e03997"},{"title":"brownLight","color":"#ede1d9","fontColor":"#a5673f"},{"title":"greyLight","color":"#e7ebed","fontColor":"#8799a3"}],"gradualColor":[{"title":"gradualRed","color":["#f43f3b","#ec008c"]},{"title":"gradualOrange","color":["#ff9700","#ed1c24"]},{"title":"gradualGreen","color":["#39b54a","#8dc63f"]},{"title":"gradualPurple","color":["#9000ff","#5e00ff"]},{"title":"gradualPink","color":["#ec008c","#6739b6"]},{"title":"gradualBlue","color":["#0081ff","#1cbbb4"]}]}},"82":function(o,t,e){"use strict";e.d(t,"a",function(){return l});var r=function toMidLine(o){return o.replace(/[A-Z]/g,function(o){return"-"+o.toLowerCase()})},l=function convertLightColor(o){return r(o).split("-").reverse().join("-")}}}]);