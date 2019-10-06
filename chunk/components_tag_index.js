(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"50":function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(279),a=n(2),l=n(70),i=n(71);n.d(t,"default",function(){return u});var c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),s=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=[{"text":"文明","color":"light-blue"},{"text":"和谐","color":"brown"},{"text":"民主","color":"brown","plain":!0}],u=function(e){function Tag(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tag);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=Tag.__proto__||Object.getPrototypeOf(Tag)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"Tag 标签"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Tag,a["a"].Component),c(Tag,[{"key":"render","value":function render(){return o.l.createElement(l.s,null,o.l.createElement(l.O,{"title":"形状","textColor":"black","type":"icon","subTitle":"shape"}),o.l.createElement(l.f,null,o.l.createElement(l.k,{"justify":"between"},o.l.createElement(l.K,{"tags":p.slice(0,1),"shape":"radius"}),o.l.createElement(l.K,{"tags":p.slice(0,1),"shape":"normal"}),o.l.createElement(l.K,{"tags":p.slice(0,1),"shape":"round"}))),o.l.createElement(i.a,{"code":"\n```\nconst tags = [\n  {\n    text: '文明',\n    color: 'light-blue'\n  }, {\n    text: '和谐',\n    color: 'brown'\n  }, {\n    text: '民主',\n    color: 'brown',\n    plain: true\n  }\n]\n\n<ClTag tags={tags.slice(0, 1)} shape='radius' />\n\n<ClTag tags={tags.slice(0, 1)} shape='normal' />\n\n<ClTag tags={tags.slice(0, 1)} shape='round' />\n```\n"}),o.l.createElement(l.O,{"title":"大小","textColor":"black","type":"icon","subTitle":"size"}),o.l.createElement(l.f,null,o.l.createElement(l.k,{"justify":"around"},o.l.createElement(l.K,{"tags":p.slice(0,1),"shape":"radius","size":"small"}),o.l.createElement(l.K,{"tags":p.slice(0,1),"shape":"radius","size":"normal"}))),o.l.createElement(i.a,{"code":"\n```\n<ClTag tags={tags.slice(0, 1)} shape='radius' size='small' />\n\n<ClTag tags={tags.slice(0, 1)} shape='radius' size='normal' />\n```\n"}),o.l.createElement(l.O,{"title":"Tag 数组","textColor":"black","type":"icon","subTitle":"array"}),o.l.createElement(l.f,null,o.l.createElement(l.s,{"padding":"normal","paddingDirection":"bottom"},o.l.createElement(l.k,{"justify":"center"},o.l.createElement(l.K,{"tags":p,"shape":"radius","size":"normal"}))),o.l.createElement(l.s,{"padding":"normal","paddingDirection":"bottom"},o.l.createElement(l.k,{"justify":"center"},o.l.createElement(l.K,{"tags":p,"shape":"normal","size":"normal"}))),o.l.createElement(l.k,{"justify":"center"},o.l.createElement(l.K,{"tags":p,"shape":"round","size":"normal"}))),o.l.createElement(i.a,{"code":"\n```\n<ClTag tags={tags} shape='round' size='normal' />\n```\n"}),o.l.createElement(l.O,{"title":"点击事件","textColor":"black","type":"icon","subTitle":"array"}),o.l.createElement(l.f,null,o.l.createElement(l.k,{"justify":"center","align":"center"},o.l.createElement(l.K,{"tags":p,"shape":"round","size":"normal","onClick":function onClick(e){Object(r.c)({"title":p[e].text,"icon":"none"})}}))),o.l.createElement(i.a,{"code":"\n```\n<ClTag\n  tags={tags}\n  shape='round'\n  size='normal'\n  onClick={(index) => {\n    Taro.showToast({\n      title: tags[index].text,\n      icon: 'none'\n    })\n  }}\n/>\n```\n"}))}},{"key":"componentDidMount","value":function componentDidMount(){s(Tag.prototype.__proto__||Object.getPrototypeOf(Tag.prototype),"componentDidMount",this)&&s(Tag.prototype.__proto__||Object.getPrototypeOf(Tag.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){s(Tag.prototype.__proto__||Object.getPrototypeOf(Tag.prototype),"componentDidShow",this)&&s(Tag.prototype.__proto__||Object.getPrototypeOf(Tag.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){s(Tag.prototype.__proto__||Object.getPrototypeOf(Tag.prototype),"componentDidHide",this)&&s(Tag.prototype.__proto__||Object.getPrototypeOf(Tag.prototype),"componentDidHide",this).call(this)}}]),Tag}()},"71":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(0),r=n(2),a=n(261),l=n(70),i=n(72),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var s=function(e){function GenerateCode(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GenerateCode),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GenerateCode.__proto__||Object.getPrototypeOf(GenerateCode)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GenerateCode,r["a"].Component),c(GenerateCode,[{"key":"render","value":function render(){var e=this.props;return o.l.createElement(a.a,null,r.a.getEnv()===r.a.ENV_TYPE.WEB?"":o.l.createElement(l.s,{"padding":"normal","paddingDirection":"bottom"},o.l.createElement(l.a,{"title":"示例代码","card":!0},o.l.createElement(l.s,{"padding":"normal","paddingDirection":"around"},o.l.createElement(i.a,{"raw":!1,"richText":e.code,"type":"markdown"})))))}}]),GenerateCode}();s.defaultProps={"code":""}}}]);