(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"62":function(e,t,o){"use strict";o.r(t);var r=o(0),l=o(1),n=o(65),i=o(165),f={"fontSize":["xsmall","small","normal","large","xlarge","xxlarge","slarge","xslarge"]},c=o(76);o.d(t,"default",function(){return b});var a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),p=function get(e,t,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var l=Object.getPrototypeOf(e);return null===l?void 0:get(l,t,o)}if("value"in r)return r.value;var n=r.get;return void 0!==n?n.call(o):void 0};var u=["说明文本，标签等关注度低的文字","页面辅助信息，次级内容等","页面默认字体","页面小标题，第一层级内容显示","页面大标题，用于结果页的提示信息","用于金额数字等","用于图标或者大数字","用于特大提示"],b=function(e){function TextView(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TextView),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TextView.__proto__||Object.getPrototypeOf(TextView)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TextView,l["a"].Component),a(TextView,[{"key":"render","value":function render(){var e=f.fontSize.map(function(e,t){return r.k.createElement(n.e,{"key":e,"bgColor":"grey"},r.k.createElement(n.i,{"align":"center","justify":"center"},r.k.createElement(n.I,{"text":e,"size":e})),r.k.createElement(n.i,{"align":"center","justify":"center"},u[t]))}),t=c.a.normalColor.map(function(e){return r.k.createElement(n.e,{"key":e.title,"bgColor":"light-gray"},r.k.createElement(i.a,{"style":{"width":l.a.pxTransform(60)}},r.k.createElement(n.i,{"justify":"center","align":"center"},r.k.createElement(n.I,{"textColor":e.title},e.title))))});return r.k.createElement(n.q,null,r.k.createElement(n.K,{"title":"文字大小","textColor":"black","type":"icon","subTitle":"size","subTitleColor":"shadow"}),r.k.createElement(n.q,{"padding":"normal","paddingDirection":"around"},e),r.k.createElement(n.K,{"title":"文字颜色","textColor":"black","type":"icon","subTitle":"color","subTitleColor":"shadow"}),r.k.createElement(n.i,{"justify":"around","align":"center","wrap":!0},t),r.k.createElement(n.K,{"title":"文字截断","textColor":"black","type":"icon","subTitle":"cut","subTitleColor":"shadow"}),r.k.createElement(n.i,null,r.k.createElement(n.e,{"bgColor":"grey"},r.k.createElement(i.a,{"style":{"width":l.a.pxTransform(300)}},r.k.createElement(n.I,{"cut":!0,"align":"left"},"泰国、新加坡、印度尼西亚~ ")))),r.k.createElement(n.K,{"title":"文字对齐","textColor":"black","type":"icon","subTitle":"align","subTitleColor":"shadow"}),r.k.createElement(n.i,{"wrap":!0},r.k.createElement(i.a,{"style":{"flex":1}},r.k.createElement(n.e,null,r.k.createElement(n.I,{"cut":!0,"align":"left"},"泰国、新加坡、印度尼西亚~ ")),r.k.createElement(n.e,null,r.k.createElement(n.I,{"cut":!0,"align":"center"},"泰国、新加坡、印度尼西亚~ ")),r.k.createElement(n.e,null,r.k.createElement(n.I,{"cut":!0,"align":"right"},"泰国、新加坡、印度尼西亚~ ")))),r.k.createElement(n.K,{"title":"特殊","textColor":"black","type":"icon","subTitle":"special","subTitleColor":"shadow"}),r.k.createElement(n.i,{"wrap":!0},r.k.createElement(i.a,{"style":{"flex":1}},r.k.createElement(n.e,null,r.k.createElement(n.I,{"align":"center","special":"firstUpper"},"abc 首字母大写")),r.k.createElement(n.e,null,r.k.createElement(n.I,{"align":"center","special":"upper"},"abc 全部大写")),r.k.createElement(n.e,null,r.k.createElement(n.I,{"align":"center","special":"lower"},"abc 全部小写")))))}},{"key":"componentDidMount","value":function componentDidMount(){p(TextView.prototype.__proto__||Object.getPrototypeOf(TextView.prototype),"componentDidMount",this)&&p(TextView.prototype.__proto__||Object.getPrototypeOf(TextView.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){p(TextView.prototype.__proto__||Object.getPrototypeOf(TextView.prototype),"componentDidShow",this)&&p(TextView.prototype.__proto__||Object.getPrototypeOf(TextView.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(TextView.prototype.__proto__||Object.getPrototypeOf(TextView.prototype),"componentDidHide",this)&&p(TextView.prototype.__proto__||Object.getPrototypeOf(TextView.prototype),"componentDidHide",this).call(this)}}]),TextView}();b.config={"navigationBarTitleText":"Text 文字"}},"76":function(e,t,o){"use strict";t.a={"normalColor":[{"title":"red","color":"#e54d42","fontColor":"#ffffff"},{"title":"orange","color":"#f37b1d","fontColor":"#ffffff"},{"title":"yellow","color":"#fbbd08","fontColor":"#ffffff"},{"title":"olive","color":"#8dc63f","fontColor":"#ffffff"},{"title":"green","color":"#39b54a","fontColor":"#ffffff"},{"title":"cyan","color":"#1cbbb4","fontColor":"#ffffff"},{"title":"blue","color":"#0081ff","fontColor":"#ffffff"},{"title":"purple","color":"#6739b6","fontColor":"#ffffff"},{"title":"mauve","color":"#9c26b0","fontColor":"#ffffff"},{"title":"pink","color":"#e03997","fontColor":"#ffffff"},{"title":"brown","color":"#a5673f","fontColor":"#ffffff"},{"title":"grey","color":"#8799a3","fontColor":"#ffffff"},{"title":"black","color":"#333333","fontColor":"#ffffff"},{"title":"gray","color":"#aaaaaa","fontColor":"#ffffff"},{"title":"white","color":"#ffffff","fontColor":"#000000"}],"lightColor":[{"title":"redLight","color":"#fadbd9","fontColor":"#e54d42"},{"title":"orangeLight","color":"#fde6d2","fontColor":"#f37b1d"},{"title":"yellowLight","color":"#fef2ce","fontColor":"#fbbd08"},{"title":"oliveLight","color":"#e8f4d9","fontColor":"#8dc63f"},{"title":"greenLight","color":"#d7f0db","fontColor":"#39b54a"},{"title":"cyanLight","color":"#d2f1f0","fontColor":"#1cbbb4"},{"title":"blueLight","color":"#cce6ff","fontColor":"#0081ff"},{"title":"purpleLight","color":"#e1d7f0","fontColor":"#6739b6"},{"title":"mauveLight","color":"#ebd4ef","fontColor":"#9c26b0"},{"title":"pinkLight","color":"#f9d7ea","fontColor":"#e03997"},{"title":"brownLight","color":"#ede1d9","fontColor":"#a5673f"},{"title":"greyLight","color":"#e7ebed","fontColor":"#8799a3"}],"gradualColor":[{"title":"gradualRed","color":["#f43f3b","#ec008c"]},{"title":"gradualOrange","color":["#ff9700","#ed1c24"]},{"title":"gradualGreen","color":["#39b54a","#8dc63f"]},{"title":"gradualPurple","color":["#9000ff","#5e00ff"]},{"title":"gradualPink","color":["#ec008c","#6739b6"]},{"title":"gradualBlue","color":["#0081ff","#1cbbb4"]}]}}}]);