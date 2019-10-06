(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"30":function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(2),i=t(70),a=t(71);t.d(n,"default",function(){return p});var l=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}(),u=function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,n,t)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(t):void 0};var p=function(e){function Animation(){return function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Animation),function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(Animation.__proto__||Object.getPrototypeOf(Animation)).apply(this,arguments))}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Animation,r["a"].Component),c(Animation,[{"key":"render","value":function render(){var e=["fade","scale-up","scale-down","slide-top","slide-bottom","slide-left","slide-right","shake"],n=r.a.useState(""),t=l(n,2),c=t[0],u=t[1],p=r.a.useState(!1),m=l(p,2),s=m[0],d=m[1],f=function showAnimation(e){u(e);var n=null;n=setTimeout(function(){u(""),clearTimeout(n)},1e3)},y=e.map(function(e){return o.l.createElement(i.s,{"key":e,"margin":"normal","marginDirection":"around"},o.l.createElement(i.c,{"type":e===c?e:""},o.l.createElement(i.e,{"long":!0,"shape":"round","onClick":function onClick(){f(e)},"text":e})))}),b=e.map(function(e){return o.l.createElement(i.s,{"key":e,"margin":"normal","marginDirection":"around"},o.l.createElement(i.c,{"type":e+"s"===c?e:"","reverse":!0},o.l.createElement(i.e,{"long":!0,"shape":"round","bgColor":"light-blue","onClick":function onClick(){f(e+"s")},"text":e})))}),h=e.map(function(n,t){return o.l.createElement(i.s,{"key":n,"margin":"normal","marginDirection":"around"},o.l.createElement(i.c,{"type":s?"scale-up":"","delay":t/10},o.l.createElement(i.e,{"long":!0,"shape":"round","bgColor":"brown","onClick":function onClick(){!function beginAnimation(n){if(!(n>0)){d(!0);var t=null;t=setTimeout(function(){d(!1),clearTimeout(t)},200*e.length)}}(t)},"text":t?t/10+"s":"开始执行"})))});return o.l.createElement(i.s,null,o.l.createElement(i.O,{"type":"icon","title":"默认效果","iconColor":"red","textColor":"black"}),y,o.l.createElement(a.a,{"code":"\n```\nconst animationName = ['fade', 'scale-up', 'scale-down', 'slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'shake']\n\nanimationName.map(name => (\n  <ClLayout key={name} margin='normal' marginDirection='around'>\n    <ClAnimation type={name === nowName ? name : ''} >\n      <ClButton long shape='round' onClick={() => {showAnimation(name)}} text={name} />\n    </ClAnimation>\n  </ClLayout>\n))\n```\n"}),o.l.createElement(i.O,{"type":"icon","title":"反向效果","iconColor":"red","textColor":"black"}),b,o.l.createElement(a.a,{"code":"\n```\nconst animationName = ['fade', 'scale-up', 'scale-down', 'slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'shake']\n\nanimationName.map(name => (\n  <ClLayout key={name} margin='normal' marginDirection='around'>\n    <ClAnimation type={`${name}s` === nowName ? name : ''} reverse>\n      <ClButton long shape='round' bgColor='light-blue' onClick={() => {showAnimation(`${name}s`)}} text={name} />\n    </ClAnimation>\n  </ClLayout>\n))\n```\n"}),o.l.createElement(i.O,{"type":"icon","title":"延迟执行","iconColor":"red","textColor":"black"}),h,o.l.createElement(a.a,{"code":"\n```\nanimationName.map((name, index) => (\n  <ClLayout key={name} margin='normal' marginDirection='around'>\n    <ClAnimation type={`${begin ? \"scale-up\" : \"none\"}`} delay={index/10}>\n      <ClButton long shape='round' bgColor='brown' onClick={() => {beginAnimation(index)}} text={`${\n        index ? index / 10 + \"s\" : \"开始执行\"\n      }`} />\n    </ClAnimation>\n  </ClLayout>\n))\n```\n"}))}},{"key":"componentDidMount","value":function componentDidMount(){u(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidMount",this)&&u(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){u(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidShow",this)&&u(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){u(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidHide",this)&&u(Animation.prototype.__proto__||Object.getPrototypeOf(Animation.prototype),"componentDidHide",this).call(this)}}]),Animation}()},"71":function(e,n,t){"use strict";t.d(n,"a",function(){return u});var o=t(0),r=t(2),i=t(261),a=t(70),l=t(72),c=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}();var u=function(e){function GenerateCode(){return function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,GenerateCode),function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(GenerateCode.__proto__||Object.getPrototypeOf(GenerateCode)).apply(this,arguments))}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(GenerateCode,r["a"].Component),c(GenerateCode,[{"key":"render","value":function render(){var e=this.props;return o.l.createElement(i.a,null,r.a.getEnv()===r.a.ENV_TYPE.WEB?"":o.l.createElement(a.s,{"padding":"normal","paddingDirection":"bottom"},o.l.createElement(a.a,{"title":"示例代码","card":!0},o.l.createElement(a.s,{"padding":"normal","paddingDirection":"around"},o.l.createElement(l.a,{"raw":!1,"richText":e.code,"type":"markdown"})))))}}]),GenerateCode}();u.defaultProps={"code":""}}}]);