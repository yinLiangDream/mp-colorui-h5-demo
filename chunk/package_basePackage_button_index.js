(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"15":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return b});var l=o(0),n=o(1),r=o(236),i=o(215),a=o(67),f=o(78),c=o(85),u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],l=!0,n=!1,r=void 0;try{for(var i,a=e[Symbol.iterator]();!(l=(i=a.next()).done)&&(o.push(i.value),!t||o.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{!l&&a.return&&a.return()}finally{if(n)throw r}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),d=function get(e,t,o){null===e&&(e=Function.prototype);var l=Object.getOwnPropertyDescriptor(e,t);if(void 0===l){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,o)}if("value"in l)return l.value;var r=l.get;return void 0!==r?r.call(o):void 0};var b=function(e){function ButtonView(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ButtonView),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ButtonView.__proto__||Object.getPrototypeOf(ButtonView)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ButtonView,n["a"].Component),p(ButtonView,[{"key":"render","value":function render(){this.config={"navigationBarTitleText":"Button 按钮"};var e=n.a.useState(!1),t=u(e,2),o=t[0],p=t[1],d=l.l.createElement(a.l,{"align":"center","justify":"center"},l.l.createElement(a.t,{"padding":"small","paddingDirection":"right"},l.l.createElement(a.N,{"text":"粗细"})),l.l.createElement(a.J,{"onChange":function onChange(e){p(e)}}));return l.l.createElement(a.t,null,l.l.createElement(a.R,{"title":"形状","textColor":"black","type":"icon","subTitle":"shape"}),l.l.createElement(a.l,{"justify":"around","wrap":!0},l.l.createElement(i.a,{"style":{"flex":1}},l.l.createElement(a.g,null,l.l.createElement(a.l,{"justify":"around"},l.l.createElement(a.e,{"shape":"radius","bgColor":"blue"},"默认(radius)"),l.l.createElement(a.e,{"shape":"round","bgColor":"blue"},"圆角(round)"))))),l.l.createElement(a.R,{"title":"尺寸","textColor":"black","type":"icon","subTitle":"size"}),l.l.createElement(a.l,{"justify":"around","wrap":!0},l.l.createElement(i.a,{"style":{"flex":1}},l.l.createElement(a.g,null,l.l.createElement(a.l,{"justify":"around","align":"center"},l.l.createElement(a.e,{"shape":"round","bgColor":"blue","size":"small"},"small"),l.l.createElement(a.e,{"shape":"round","bgColor":"blue","size":"normal"},"normal"),l.l.createElement(a.e,{"shape":"round","bgColor":"blue","size":"large"},"large"))))),l.l.createElement(a.R,{"title":"按钮颜色","textColor":"black","type":"icon","subTitle":"bgColor"}),l.l.createElement(a.l,{"justify":"between","wrap":!0},l.l.createElement(i.a,{"style":{"flex":1}},l.l.createElement(a.g,null,l.l.createElement(a.p,{"col":3},f.a.normalColor.map(function(e){return l.l.createElement(i.a,{"key":e.title},l.l.createElement(a.t,{"padding":"small","paddingDirection":"around"},l.l.createElement(a.e,{"shape":"round","bgColor":e.title,"long":!0},e.title)))}))),l.l.createElement(a.g,null,l.l.createElement(a.p,{"col":2},f.a.lightColor.map(function(e){return l.l.createElement(i.a,{"key":e.title},l.l.createElement(a.t,{"padding":"small","paddingDirection":"around"},l.l.createElement(a.e,{"long":!0,"shape":"round","bgColor":Object(c.a)(e.title)},Object(c.a)(e.title))))}))),l.l.createElement(a.g,null,l.l.createElement(a.p,{"col":2},f.a.gradualColor.map(function(e){return l.l.createElement(i.a,{"key":e.title},l.l.createElement(a.t,{"padding":"small","paddingDirection":"around"},l.l.createElement(a.e,{"shape":"round","long":!0,"bgColor":e.title},e.title)))}))))),l.l.createElement(a.R,{"title":"按钮镂空","textColor":"black","type":"icon","subTitle":"plain","renderRight":d}),l.l.createElement(a.l,{"justify":"between","wrap":!0},l.l.createElement(a.g,null,l.l.createElement(a.p,{"col":2},f.a.normalColor.filter(function(e){return"white"!==e.title}).map(function(e){return l.l.createElement(i.a,{"key":e.title},l.l.createElement(a.t,{"padding":"small","paddingDirection":"around"},l.l.createElement(a.e,{"long":!0,"plain":!0,"plainSize":o?"bold":"default","shape":"round","bgColor":e.title},e.title)))})))),l.l.createElement(a.R,{"title":"块状按钮","textColor":"black","type":"icon","subTitle":"long"}),l.l.createElement(a.l,{"justify":"between","wrap":!0},l.l.createElement(i.a,{"style":{"flex":1}},l.l.createElement(a.g,null,l.l.createElement(a.e,{"shape":"round","bgColor":"blue","long":!0},"块状按钮")))),l.l.createElement(a.R,{"title":"失效按钮","textColor":"black","type":"icon","subTitle":"disabled"}),l.l.createElement(a.g,null,l.l.createElement(a.e,{"shape":"round","bgColor":"blue","long":!0,"disabled":!0},"禁止按钮")),l.l.createElement(a.R,{"title":"加载中","textColor":"black","type":"icon","subTitle":"loading"}),l.l.createElement(a.g,null,l.l.createElement(a.e,{"shape":"round","bgColor":"blue","long":!0,"loading":!0},"加载中")),l.l.createElement(a.R,{"title":"开放能力","textColor":"black","type":"icon"}),l.l.createElement(a.g,null,l.l.createElement(a.e,{"shape":"round","bgColor":"blue","long":!0,"openType":"getUserInfo","onGetUserInfo":function onGetUserInfo(e){e.detail.userInfo&&Object(r.c)({"title":e.detail.userInfo.nickName,"icon":"none"})}},"获取用户信息")))}},{"key":"componentDidMount","value":function componentDidMount(){d(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidMount",this)&&d(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){d(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidShow",this)&&d(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){d(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidHide",this)&&d(ButtonView.prototype.__proto__||Object.getPrototypeOf(ButtonView.prototype),"componentDidHide",this).call(this)}}]),ButtonView}()},"78":function(e,t,o){"use strict";t.a={"normalColor":[{"title":"red","color":"#e54d42","fontColor":"#ffffff"},{"title":"orange","color":"#f37b1d","fontColor":"#ffffff"},{"title":"yellow","color":"#fbbd08","fontColor":"#ffffff"},{"title":"olive","color":"#8dc63f","fontColor":"#ffffff"},{"title":"green","color":"#39b54a","fontColor":"#ffffff"},{"title":"cyan","color":"#1cbbb4","fontColor":"#ffffff"},{"title":"blue","color":"#0081ff","fontColor":"#ffffff"},{"title":"purple","color":"#6739b6","fontColor":"#ffffff"},{"title":"mauve","color":"#9c26b0","fontColor":"#ffffff"},{"title":"pink","color":"#e03997","fontColor":"#ffffff"},{"title":"brown","color":"#a5673f","fontColor":"#ffffff"},{"title":"grey","color":"#8799a3","fontColor":"#ffffff"},{"title":"black","color":"#333333","fontColor":"#ffffff"},{"title":"gray","color":"#aaaaaa","fontColor":"#ffffff"},{"title":"white","color":"#ffffff","fontColor":"#000000"}],"lightColor":[{"title":"redLight","color":"#fadbd9","fontColor":"#e54d42"},{"title":"orangeLight","color":"#fde6d2","fontColor":"#f37b1d"},{"title":"yellowLight","color":"#fef2ce","fontColor":"#fbbd08"},{"title":"oliveLight","color":"#e8f4d9","fontColor":"#8dc63f"},{"title":"greenLight","color":"#d7f0db","fontColor":"#39b54a"},{"title":"cyanLight","color":"#d2f1f0","fontColor":"#1cbbb4"},{"title":"blueLight","color":"#cce6ff","fontColor":"#0081ff"},{"title":"purpleLight","color":"#e1d7f0","fontColor":"#6739b6"},{"title":"mauveLight","color":"#ebd4ef","fontColor":"#9c26b0"},{"title":"pinkLight","color":"#f9d7ea","fontColor":"#e03997"},{"title":"brownLight","color":"#ede1d9","fontColor":"#a5673f"},{"title":"greyLight","color":"#e7ebed","fontColor":"#8799a3"}],"gradualColor":[{"title":"gradualRed","color":["#f43f3b","#ec008c"]},{"title":"gradualOrange","color":["#ff9700","#ed1c24"]},{"title":"gradualGreen","color":["#39b54a","#8dc63f"]},{"title":"gradualPurple","color":["#9000ff","#5e00ff"]},{"title":"gradualPink","color":["#ec008c","#6739b6"]},{"title":"gradualBlue","color":["#0081ff","#1cbbb4"]}]}},"85":function(e,t,o){"use strict";o.d(t,"a",function(){return n});var l=function toMidLine(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})},n=function convertLightColor(e){return l(e).split("-").reverse().join("-")}}}]);