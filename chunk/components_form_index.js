(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"60":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return s});var n,r,l=o(0),i=o(2),a=o(69),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),u=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var l=n.get;return void 0!==l?l.call(o):void 0};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=(r=n=function(e){function Cl_Form(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Cl_Form);for(var n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=o=_possibleConstructorReturn(this,(e=Cl_Form.__proto__||Object.getPrototypeOf(Cl_Form)).call.apply(e,[this].concat(r))),o.ref=null,o.refFunc=function(e){o.ref=e},o.state={"model":{"name":"我是名字","phone":"188","hobby":[]},"message":"","showMessage":!1,"messageType":"info"},_possibleConstructorReturn(o,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Cl_Form,i["a"].Component),c(Cl_Form,[{"key":"handleSubmit","value":function handleSubmit(){var e=this;this.ref.validate(function(t){e.setState({"message":"数据校验"+(t?"通过":"未通过"),"messageType":t?"success":"error","showMessage":!0})})}},{"key":"render","value":function render(){var e=this,t=this.state,o=t.model,n=t.showMessage,r=t.message,i=t.messageType;return l.l.createElement(a.s,null,l.l.createElement(a.v,{"message":r,"show":n,"type":i,"onClose":function onClose(){e.setState({"showMessage":!1})}}),l.l.createElement(a.O,{"title":"实时校验&&失焦校验","textColor":"black","type":"icon"}),l.l.createElement(a.f,null,"由于小程序的 view 没有失焦事件，目前组件库只能做到 model 里面的数据更新就会进行校验，如果想做到失焦校验请手动在 Input 组件下绑定 onBlur 事件，在此事件里面进行数据更新。 具体用法请看文档。"),l.l.createElement(a.f,null,l.l.createElement(a.m,{"ref":this.refFunc,"model":o,"rules":{"name":function name(e,t,o){return e.required(t)?!(t.length>5&&(o("姓名长度不能超过 5"),1)):(o("姓名不能为空"),!1)},"phone":function phone(e,t,o){return e.required(t)?!!e.phone(t)||(o("手机号码不正确"),!1):(o("手机号码不能为空"),!1)},"hobby":function hobby(e,t,o){return!(t.length<2&&(o("至少选择 2 项"),1))}}},l.l.createElement(a.n,{"prop":"name","required":!0},l.l.createElement(a.r,{"title":"姓名（失焦）","value":o.name,"onBlur":function onBlur(t){e.setState({"model":p({},e.state.model,{"name":t})})}})),l.l.createElement(a.n,{"prop":"phone","required":!0},l.l.createElement(a.r,{"title":"手机号码（实时）","value":o.phone,"onChange":function onChange(t){e.setState({"model":p({},e.state.model,{"phone":t})})}})),l.l.createElement(a.n,{"prop":"hobby"},l.l.createElement(a.g,{"type":"form","shape":"round","title":"选择爱好","checkboxGroup":[{"key":"下棋","value":"xiaqi"},{"key":"画画","value":"huahua"},{"key":"唱歌","value":"singsong"}],"onChange":function onChange(t){e.setState({"model":p({},o,{"hobby":t})})}})))),l.l.createElement(a.e,{"text":"校验","shape":"round","long":!0,"onClick":this.handleSubmit.bind(this)}))}},{"key":"componentDidMount","value":function componentDidMount(){u(Cl_Form.prototype.__proto__||Object.getPrototypeOf(Cl_Form.prototype),"componentDidMount",this)&&u(Cl_Form.prototype.__proto__||Object.getPrototypeOf(Cl_Form.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){u(Cl_Form.prototype.__proto__||Object.getPrototypeOf(Cl_Form.prototype),"componentDidShow",this)&&u(Cl_Form.prototype.__proto__||Object.getPrototypeOf(Cl_Form.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){u(Cl_Form.prototype.__proto__||Object.getPrototypeOf(Cl_Form.prototype),"componentDidHide",this)&&u(Cl_Form.prototype.__proto__||Object.getPrototypeOf(Cl_Form.prototype),"componentDidHide",this).call(this)}}]),Cl_Form}(),n.config={"navigationBarTitleText":"Form 表单"},r)}}]);