(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"43":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return p});var r=o(0),n=o(167),i=o(1),c=o(65),a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),l=function get(e,t,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0};var p=function(e){function ImagePicker(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ImagePicker),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ImagePicker.__proto__||Object.getPrototypeOf(ImagePicker)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ImagePicker,i["a"].Component),a(ImagePicker,[{"key":"render","value":function render(){var e=this;return r.k.createElement(c.q,null,r.k.createElement(c.K,{"title":"默认","textColor":"black","type":"icon","subTitle":"default","subTitleColor":"shadow"}),r.k.createElement(c.e,null,r.k.createElement(c.o,null)),r.k.createElement(c.K,{"title":"最多选择 3 张图片","textColor":"black","type":"icon","subTitle":"most","subTitleColor":"shadow"}),r.k.createElement(c.e,null,r.k.createElement(c.o,{"chooseImgObj":{"count":3}})),r.k.createElement(c.K,{"title":"删除图片确认操作","textColor":"black","type":"icon","subTitle":"beforeDelete","subTitleColor":"shadow"}),r.k.createElement(c.e,null,r.k.createElement(c.o,{"chooseImgObj":{"count":3},"beforeDel":function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){return function step(r,n){try{var i=t[r](n),c=i.value}catch(e){return void o(e)}if(!i.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}(regeneratorRuntime.mark(function _callee(){var t;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.b)({"title":"您确认要删除吗"});case 2:if(t=e.sent,console.log(t),!t.confirm){e.next=6;break}return e.abrupt("return",!0);case 6:if(!t.cancel){e.next=8;break}return e.abrupt("return",!1);case 8:case"end":return e.stop()}},_callee,e)}))})))}},{"key":"componentDidMount","value":function componentDidMount(){l(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidMount",this)&&l(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){l(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidShow",this)&&l(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){l(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidHide",this)&&l(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidHide",this).call(this)}}]),ImagePicker}();p.config={"navigationBarTitleText":"ImagePicker 图片选择器"}}}]);