(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"36":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return s});var n=o(0),r=o(2),l=o(217),i=o(71),c=o(199),a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw l}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),p=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var l=n.get;return void 0!==l?l.call(o):void 0};var s=function(e){function Modal(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Modal),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Modal.__proto__||Object.getPrototypeOf(Modal)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Modal,r["a"].Component),u(Modal,[{"key":"render","value":function render(){var e=r.a.useState(!1),t=a(e,2),o=t[0],u=t[1],p=r.a.useState(!1),s=a(p,2),f=s[0],d=s[1];return n.l.createElement(i.s,null,n.l.createElement(i.P,{"title":"类型","textColor":"black","type":"icon","subTitle":"type"}),n.l.createElement(i.f,null,n.l.createElement(i.e,{"text":"普通","long":!0,"onClick":function onClick(){u(!0)}})),n.l.createElement(i.w,{"show":o,"closeWithShadow":!0,"title":"我是标题","close":!0,"actions":[{"text":"取消","color":"red"},{"text":"确认","color":"blue"}],"onCancel":function onCancel(){u(!1)},"onClose":function onClose(){u(!1)},"onClick":function onClick(e){Object(l.c)({"title":0===e?"取消":"确认","icon":"none"})}},"我是内容，我可以插入任何内容，点击阴影也可以关闭"),n.l.createElement(i.P,{"title":"自定义头部和操作按钮组","textColor":"black","type":"icon","subTitle":"custom"}),n.l.createElement(i.f,null,n.l.createElement(i.e,{"text":"自定义","bgColor":"light-cyan","long":!0,"onClick":function onClick(){d(!0)}})),n.l.createElement(i.w,{"show":f,"closeWithShadow":!0,"custom":!0,"close":!0,"renderTitle":n.l.createElement(i.P,{"title":"我是自定义的标题","textColor":"black","type":"sub-title","subTitle":"custom","subTitleColor":"shadow"}),"onCancel":function onCancel(){d(!1)},"renderAction":n.l.createElement(i.s,null,n.l.createElement(i.k,{"justify":"around"},n.l.createElement(c.a,{"className":"flex-sub"},n.l.createElement(i.e,{"bgColor":"light-red","long":!0,"onClick":function onClick(){Object(l.c)({"title":"取消","icon":"none"})}},"取消")),n.l.createElement(c.a,{"className":"flex-sub"},n.l.createElement(i.e,{"bgColor":"light-blue","long":!0,"onClick":function onClick(){Object(l.c)({"title":"确认","icon":"none"})}},"确认"))))},n.l.createElement(i.M,{"text":"我是内容，我可以插入任何内容，点击阴影也可以关闭，头部自定义，使用了组件 TitleBar，脚部 actions 使用了两个 button"}),n.l.createElement(i.s,{"padding":"normal","paddingDirection":"vertical"},n.l.createElement(i.N,{"times":[{"content":["这是我插入的 Timeline 组件"]}]}))))}},{"key":"componentDidMount","value":function componentDidMount(){p(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidMount",this)&&p(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){p(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidShow",this)&&p(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidHide",this)&&p(Modal.prototype.__proto__||Object.getPrototypeOf(Modal.prototype),"componentDidHide",this).call(this)}}]),Modal}();s.config={"navigationBarTitleText":"Modal 模态框"}}}]);