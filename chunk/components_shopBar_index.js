(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"55":function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(279),i=n(2),c=n(69),l=n(70);n.d(e,"default",function(){return h});var a=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),u=function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0};function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var p=[{"icon":"emoji"},{"icon":"shop"}],b=[{"text":"放入购物车","bgColor":"orange"},{"text":"立即购买"}],s=[{"icon":"emoji","badge":!1},{"icon":"shop","badge":99},{"icon":"newfill"}],f=[{"text":"立即购买","bgColor":"light-blue"}],d=[{"text":"固定底部","bgColor":"light-blue"}],h=function(t){function ShopBar(){var t,e,n;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ShopBar);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=n=_possibleConstructorReturn(this,(t=ShopBar.__proto__||Object.getPrototypeOf(ShopBar)).call.apply(t,[this].concat(r))),n.config={"navigationBarTitleText":"ShopBar 购物栏"},_possibleConstructorReturn(n,e)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(ShopBar,i["a"].Component),a(ShopBar,[{"key":"clickIcon","value":function clickIcon(t){Object(r.c)({"title":"您点击了第"+(t+1)+"个图标","icon":"none"})}},{"key":"clickButton","value":function clickButton(t){Object(r.c)({"title":"您点击了第"+(t+1)+"个按钮","icon":"none"})}},{"key":"render","value":function render(){var t=this;return o.l.createElement(c.s,null,o.l.createElement(c.O,{"title":"背景色","textColor":"black","type":"icon","subTitle":"bgColor"}),o.l.createElement(c.f,null,o.l.createElement(c.D,{"onClickTab":function onClickTab(e){t.clickIcon(e)},"onClickButton":function onClickButton(e){t.clickButton(e)},"bgColor":"gray","tabs":p,"buttons":b})),o.l.createElement(c.f,null,o.l.createElement(c.D,{"onClickTab":function onClickTab(e){t.clickIcon(e)},"onClickButton":function onClickButton(e){t.clickButton(e)},"bgColor":"light-blue","tabs":p,"buttons":b})),o.l.createElement(c.f,null,o.l.createElement(c.D,{"onClickTab":function onClickTab(e){t.clickIcon(e)},"onClickButton":function onClickButton(e){t.clickButton(e)},"bgColor":"gradualGreen","tabs":p,"buttons":b})),o.l.createElement(l.a,{"code":"\n<ClShopBar \n  onClickTab={(index) => {this.clickIcon(index)}}\n  onClickButton={(index) => {this.clickButton(index)}} \n  bgColor='gray'\n  tabs={tabs}\n  buttons={buttons}\n/>\n\n<ClShopBar \n  onClickTab={(index) => {this.clickIcon(index)}}\n  onClickButton={(index) => {this.clickButton(index)}} \n  bgColor='light-blue' \n  tabs={tabs}\n  buttons={buttons}\n/>\n\n<ClShopBar \n  onClickTab={(index) => {this.clickIcon(index)}}\n  onClickButton={(index) => {this.clickButton(index)}} \n  bgColor='gradualGreen' \n  tabs={tabs}\n  buttons={buttons}\n/>\n"}),o.l.createElement(c.O,{"title":"分割线","textColor":"black","type":"icon","subTitle":"border"}),o.l.createElement(c.f,null,o.l.createElement(c.D,{"onClickTab":function onClickTab(e){t.clickIcon(e)},"onClickButton":function onClickButton(e){t.clickButton(e)},"bgColor":"gray","tabs":p,"border":!0,"buttons":b})),o.l.createElement(l.a,{"code":"\n```\n<ClShopBar \n  onClickTab={(index) => {this.clickIcon(index)}}\n  onClickButton={(index) => {this.clickButton(index)}} \n  bgColor='gray'\n  tabs={tabs}\n  border\n  buttons={buttons}\n/>\n```\n"}),o.l.createElement(c.O,{"title":"角标","textColor":"black","type":"icon","subTitle":"badge"}),o.l.createElement(c.s,{"padding":"xlarge","paddingDirection":"bottom","margin":"xlarge","marginDirection":"bottom"},o.l.createElement(c.f,null,o.l.createElement(c.D,{"onClickTab":function onClickTab(e){t.clickIcon(e)},"onClickButton":function onClickButton(e){t.clickButton(e)},"bgColor":"gray","tabs":s,"border":!0,"buttons":f})),o.l.createElement(l.a,{"code":"\n```\nconst tabsBorder = [\n  {\n    icon: 'emoji',\n    badge: false\n  }, {\n    icon: 'shop',\n    badge: 99\n  }, {\n    icon: 'newfill'\n  }\n]\n\n<ClShopBar \n  onClickTab={(index) => {this.clickIcon(index)}}\n  onClickButton={(index) => {this.clickButton(index)}}\n  bgColor='gray' \n  tabs={tabsBorder}\n  border\n  buttons={tabsBorderButton}\n/>\n```\n"})),o.l.createElement(c.D,{"onClickTab":function onClickTab(e){t.clickIcon(e)},"onClickButton":function onClickButton(e){t.clickButton(e)},"bgColor":"gray","fix":!0,"tabs":s,"border":!0,"buttons":d}))}},{"key":"componentDidMount","value":function componentDidMount(){u(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidMount",this)&&u(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){u(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidShow",this)&&u(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){u(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidHide",this)&&u(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidHide",this).call(this)}}]),ShopBar}()},"70":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n(0),r=n(2),i=n(69),c=n(72),l=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();var a=function(t){function GenerateCode(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,GenerateCode),function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(GenerateCode.__proto__||Object.getPrototypeOf(GenerateCode)).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(GenerateCode,r["a"].Component),l(GenerateCode,[{"key":"render","value":function render(){var t=this.props;return o.l.createElement(i.s,{"padding":"normal","paddingDirection":"bottom"},o.l.createElement(i.a,{"title":"示例代码","card":!0},o.l.createElement(i.s,{"padding":"normal","paddingDirection":"around"},o.l.createElement(c.a,{"raw":!1,"richText":t.code,"type":"markdown"}))))}}]),GenerateCode}();a.defaultProps={"code":""}}}]);