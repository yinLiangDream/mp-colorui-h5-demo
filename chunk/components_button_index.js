(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"26":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return d});var l=o(0),r=o(2),n=o(186),i=o(67),a=o(78),f=o(84),c=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),u=function get(e,t,o){null===e&&(e=Function.prototype);var l=Object.getOwnPropertyDescriptor(e,t);if(void 0===l){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in l)return l.value;var n=l.get;return void 0!==n?n.call(o):void 0};var d=function(e){function ButtonView(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ButtonView);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ButtonView.__proto__||Object.getPrototypeOf(ButtonView)).call(this,e));return t.config={"navigationBarTitleText":"Button 按钮"},t.state={"showLines":!1},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ButtonView,r["a"].Component),c(ButtonView,[{"key":"render","value":function render(){var e=this,t=this.state.showLines,o=l.l.createElement(i.F,{"onChange":function onChange(t){e.setState({"showLines":t})}});return l.l.createElement(i.q,null,l.l.createElement(i.M,{"title":"形状","textColor":"black","type":"icon","subTitle":"shape","subTitleColor":"shadow"}),l.l.createElement(i.i,{"justify":"around","wrap":!0},l.l.createElement(n.a,{"style":{"flex":1}},l.l.createElement(i.e,null,l.l.createElement(i.i,{"justify":"around"},l.l.createElement(i.d,{"shape":"radius","bgColor":"blue"},"默认(radius)"),l.l.createElement(i.d,{"shape":"round","bgColor":"blue"},"圆角(round)"))))),l.l.createElement(i.M,{"title":"尺寸","textColor":"black","type":"icon","subTitle":"size","subTitleColor":"shadow"}),l.l.createElement(i.i,{"justify":"around","wrap":!0},l.l.createElement(n.a,{"style":{"flex":1}},l.l.createElement(i.e,null,l.l.createElement(i.i,{"justify":"around","align":"center"},l.l.createElement(i.d,{"shape":"round","bgColor":"blue","size":"small"},"small"),l.l.createElement(i.d,{"shape":"round","bgColor":"blue","size":"normal"},"normal"),l.l.createElement(i.d,{"shape":"round","bgColor":"blue","size":"large"},"large"))))),l.l.createElement(i.M,{"title":"按钮颜色","textColor":"black","type":"icon","subTitle":"bgColor","subTitleColor":"shadow"}),l.l.createElement(i.i,{"justify":"between","wrap":!0},l.l.createElement(n.a,{"style":{"flex":1}},l.l.createElement(i.e,null,l.l.createElement(i.m,{"col":3},a.a.normalColor.map(function(e){return l.l.createElement(n.a,{"key":e.title},l.l.createElement(i.q,{"padding":"small","paddingDirection":"around"},l.l.createElement(i.d,{"shape":"round","bgColor":e.title,"long":!0},e.title)))}))),l.l.createElement(i.e,null,l.l.createElement(i.m,{"col":2},a.a.lightColor.map(function(e){return l.l.createElement(n.a,{"key":e.title},l.l.createElement(i.q,{"padding":"small","paddingDirection":"around"},l.l.createElement(i.d,{"long":!0,"shape":"round","bgColor":Object(f.a)(e.title)},Object(f.a)(e.title))))}))),l.l.createElement(i.e,null,l.l.createElement(i.m,{"col":2},a.a.gradualColor.map(function(e){return l.l.createElement(n.a,{"key":e.title},l.l.createElement(i.q,{"padding":"small","paddingDirection":"around"},l.l.createElement(i.d,{"shape":"round","long":!0,"bgColor":e.title},e.title)))}))))),l.l.createElement(i.M,{"title":"按钮镂空","textColor":"black","type":"icon","subTitle":"plain","subTitleColor":"shadow","renderRight":o}),l.l.createElement(i.i,{"justify":"between","wrap":!0},l.l.createElement(i.e,null,l.l.createElement(i.m,{"col":2},a.a.normalColor.filter(function(e){return"white"!==e.title}).map(function(e){return l.l.createElement(n.a,{"key":e.title},l.l.createElement(i.q,{"padding":"small","paddingDirection":"around"},l.l.createElement(i.d,{"long":!0,"plain":!0,"plainSize":t?"bold":"default","shape":"round","bgColor":e.title},e.title)))})))),l.l.createElement(i.M,{"title":"块状按钮","textColor":"black","type":"icon","subTitle":"long","subTitleColor":"shadow"}),l.l.createElement(i.i,{"justify":"between","wrap":!0},l.l.createElement(n.a,{"style":{"flex":1}},l.l.createElement(i.e,null,l.l.createElement(i.d,{"shape":"round","bgColor":"blue","long":!0},"块状按钮")))),l.l.createElement(i.M,{"title":"失效按钮","textColor":"black","type":"icon","subTitle":"disabled","subTitleColor":"shadow"}),l.l.createElement(i.e,null,l.l.createElement(i.d,{"shape":"round","bgColor":"blue","long":!0,"disabled":!0},"禁止按钮")),l.l.createElement(i.M,{"title":"加载中","textColor":"black","type":"icon","subTitle":"loading","subTitleColor":"shadow"}),l.l.createElement(i.e,null,l.l.createElement(i.d,{"shape":"round","bgColor":"blue","long":!0,"loading":!0},"加载中")))}},{"key":"componentDidMount","value":function componentDidMount(){u(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidMount",this)&&u(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){u(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidShow",this)&&u(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){u(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidHide",this)&&u(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidHide",this).call(this)}}]),ButtonView}()},"78":function(e,t,o){"use strict";t.a={"normalColor":[{"title":"red","color":"#e54d42","fontColor":"#ffffff"},{"title":"orange","color":"#f37b1d","fontColor":"#ffffff"},{"title":"yellow","color":"#fbbd08","fontColor":"#ffffff"},{"title":"olive","color":"#8dc63f","fontColor":"#ffffff"},{"title":"green","color":"#39b54a","fontColor":"#ffffff"},{"title":"cyan","color":"#1cbbb4","fontColor":"#ffffff"},{"title":"blue","color":"#0081ff","fontColor":"#ffffff"},{"title":"purple","color":"#6739b6","fontColor":"#ffffff"},{"title":"mauve","color":"#9c26b0","fontColor":"#ffffff"},{"title":"pink","color":"#e03997","fontColor":"#ffffff"},{"title":"brown","color":"#a5673f","fontColor":"#ffffff"},{"title":"grey","color":"#8799a3","fontColor":"#ffffff"},{"title":"black","color":"#333333","fontColor":"#ffffff"},{"title":"gray","color":"#aaaaaa","fontColor":"#ffffff"},{"title":"white","color":"#ffffff","fontColor":"#000000"}],"lightColor":[{"title":"redLight","color":"#fadbd9","fontColor":"#e54d42"},{"title":"orangeLight","color":"#fde6d2","fontColor":"#f37b1d"},{"title":"yellowLight","color":"#fef2ce","fontColor":"#fbbd08"},{"title":"oliveLight","color":"#e8f4d9","fontColor":"#8dc63f"},{"title":"greenLight","color":"#d7f0db","fontColor":"#39b54a"},{"title":"cyanLight","color":"#d2f1f0","fontColor":"#1cbbb4"},{"title":"blueLight","color":"#cce6ff","fontColor":"#0081ff"},{"title":"purpleLight","color":"#e1d7f0","fontColor":"#6739b6"},{"title":"mauveLight","color":"#ebd4ef","fontColor":"#9c26b0"},{"title":"pinkLight","color":"#f9d7ea","fontColor":"#e03997"},{"title":"brownLight","color":"#ede1d9","fontColor":"#a5673f"},{"title":"greyLight","color":"#e7ebed","fontColor":"#8799a3"}],"gradualColor":[{"title":"gradualRed","color":["#f43f3b","#ec008c"]},{"title":"gradualOrange","color":["#ff9700","#ed1c24"]},{"title":"gradualGreen","color":["#39b54a","#8dc63f"]},{"title":"gradualPurple","color":["#9000ff","#5e00ff"]},{"title":"gradualPink","color":["#ec008c","#6739b6"]},{"title":"gradualBlue","color":["#0081ff","#1cbbb4"]}]}},"84":function(e,t,o){"use strict";o.d(t,"a",function(){return r});var l=function toMidLine(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})},r=function convertLightColor(e){return l(e).split("-").reverse().join("-")}}}]);