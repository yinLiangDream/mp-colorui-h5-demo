(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"34":function(t,o,e){"use strict";e.r(o),e.d(o,"default",function(){return h});var n=e(0),r=e(227),c=e(1),i=e(71),l=function(){function defineProperties(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,o,e){return o&&defineProperties(t.prototype,o),e&&defineProperties(t,e),t}}(),a=function get(t,o,e){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,o);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,o,e)}if("value"in n)return n.value;var c=n.get;return void 0!==c?c.call(e):void 0};function _possibleConstructorReturn(t,o){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?t:o}var u=[{"icon":"emoji"},{"icon":"shop"}],p=[{"text":"放入购物车","bgColor":"orange"},{"text":"立即购买"}],b=[{"icon":"emoji","badge":!1},{"icon":"shop","badge":99},{"icon":"newfill"}],f=[{"text":"立即购买","bgColor":"light-blue"}],s=[{"text":"固定底部","bgColor":"light-blue"}],k=[{"icon":"friendfamous","title":"用户","moreAction":{"openType":"getUserInfo","onGetUserInfo":function onGetUserInfo(t){t.detail.userInfo&&Object(r.c)({"title":t.detail.userInfo.nickName,"icon":"none"})}}},{"icon":"share","title":"分享","moreAction":{"openType":"share"}}],h=function(t){function ShopBar(){var t,o,e;!function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,ShopBar);for(var n=arguments.length,r=Array(n),c=0;c<n;c++)r[c]=arguments[c];return o=e=_possibleConstructorReturn(this,(t=ShopBar.__proto__||Object.getPrototypeOf(ShopBar)).call.apply(t,[this].concat(r))),e.config={"navigationBarTitleText":"ShopBar 购物栏"},_possibleConstructorReturn(e,o)}return function _inherits(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);t.prototype=Object.create(o&&o.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(t,o):t.__proto__=o)}(ShopBar,c["a"].Component),l(ShopBar,[{"key":"clickIcon","value":function clickIcon(t){Object(r.c)({"title":"您点击了第"+(t+1)+"个图标","icon":"none"})}},{"key":"clickButton","value":function clickButton(t){Object(r.c)({"title":"您点击了第"+(t+1)+"个按钮","icon":"none"})}},{"key":"render","value":function render(){var t=this;return n.l.createElement(i.s,null,n.l.createElement(i.P,{"title":"背景色","textColor":"black","type":"icon","subTitle":"bgColor"}),n.l.createElement(i.f,null,n.l.createElement(i.E,{"onClickTab":function onClickTab(o){t.clickIcon(o)},"onClickButton":function onClickButton(o){t.clickButton(o)},"bgColor":"gray","tabs":u,"buttons":p})),n.l.createElement(i.f,null,n.l.createElement(i.E,{"onClickTab":function onClickTab(o){t.clickIcon(o)},"onClickButton":function onClickButton(o){t.clickButton(o)},"bgColor":"light-blue","tabs":u,"buttons":p})),n.l.createElement(i.f,null,n.l.createElement(i.E,{"onClickTab":function onClickTab(o){t.clickIcon(o)},"onClickButton":function onClickButton(o){t.clickButton(o)},"bgColor":"gradualGreen","tabs":u,"buttons":p})),n.l.createElement(i.P,{"title":"openType 能力","textColor":"black","type":"icon"}),n.l.createElement(i.E,{"onClickButton":function onClickButton(o){t.clickButton(o)},"bgColor":"gradualGreen","tabs":k,"buttons":p}),n.l.createElement(i.P,{"title":"分割线","textColor":"black","type":"icon","subTitle":"border"}),n.l.createElement(i.f,null,n.l.createElement(i.E,{"onClickTab":function onClickTab(o){t.clickIcon(o)},"onClickButton":function onClickButton(o){t.clickButton(o)},"bgColor":"gray","tabs":u,"border":!0,"buttons":p})),n.l.createElement(i.P,{"title":"角标","textColor":"black","type":"icon","subTitle":"badge"}),n.l.createElement(i.s,{"padding":"xlarge","paddingDirection":"bottom","margin":"xlarge","marginDirection":"bottom"},n.l.createElement(i.f,null,n.l.createElement(i.E,{"onClickTab":function onClickTab(o){t.clickIcon(o)},"onClickButton":function onClickButton(o){t.clickButton(o)},"bgColor":"gray","tabs":b,"border":!0,"buttons":f}))),n.l.createElement(i.E,{"onClickTab":function onClickTab(o){t.clickIcon(o)},"onClickButton":function onClickButton(o){t.clickButton(o)},"bgColor":"gray","fix":!0,"tabs":b,"border":!0,"buttons":s}))}},{"key":"componentDidMount","value":function componentDidMount(){a(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidMount",this)&&a(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){a(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidShow",this)&&a(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){a(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidHide",this)&&a(ShopBar.prototype.__proto__||Object.getPrototypeOf(ShopBar.prototype),"componentDidHide",this).call(this)}}]),ShopBar}()}}]);