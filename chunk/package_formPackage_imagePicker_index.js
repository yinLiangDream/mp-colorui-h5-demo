(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"210":function(t,e,r){t.exports=r(211)},"211":function(t,e,r){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){return this||"object"===("undefined"==typeof self?"undefined":n(self))&&self}()||Function("return this")(),i=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,a=i&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,t.exports=r(212),i)o.regeneratorRuntime=a;else try{delete o.regeneratorRuntime}catch(t){o.regeneratorRuntime=void 0}},"212":function(t,e,r){(function(t){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(r){"use strict";var n,o=Object.prototype,i=o.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",s="object"===e(t),f=r.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=r.regeneratorRuntime=s?t.exports:{}).wrap=wrap;var p="suspendedStart",h="suspendedYield",y="executing",d="completed",m={},g={};g[c]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(values([])));b&&b!==o&&i.call(b,c)&&(g=b);var w=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(g);GeneratorFunction.prototype=w.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[l]=GeneratorFunction.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{"__await":t}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[u]=function(){return this},f.AsyncIterator=AsyncIterator,f.async=function(t,e,r,n){var o=new AsyncIterator(wrap(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},defineIteratorMethods(w),w[l]="Generator",w[c]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function next(){for(;e.length;){var r=e.pop();if(r in t)return next.value=r,next.done=!1,next}return next.done=!0,next}},f.values=values,Context.prototype={"constructor":Context,"reset":function reset(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(resetTryEntry),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},"stop":function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},"dispatchException":function dispatchException(t){if(this.done)throw t;var e=this;function handle(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},"abrupt":function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},"complete":function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},"finish":function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),m}},"catch":function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},"delegateYield":function delegateYield(t,e,r){return this.delegate={"iterator":values(t),"resultName":e,"nextLoc":r},"next"===this.method&&(this.arg=n),m}}}function wrap(t,e,r,n){var o=e&&e.prototype instanceof Generator?e:Generator,i=Object.create(o.prototype),a=new Context(n||[]);return i._invoke=function makeInvokeMethod(t,e,r){var n=p;return function invoke(o,i){if(n===y)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return doneResult()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=maybeInvokeDelegate(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=y;var u=tryCatch(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===m)continue;return{"value":u.arg,"done":r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function tryCatch(t,e,r){try{return{"type":"normal","arg":t.call(e,r)}}catch(t){return{"type":"throw","arg":t}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function AsyncIterator(t){var r;this._invoke=function enqueue(n,o){function callInvokeWithMethodAndArg(){return new Promise(function(r,a){!function invoke(r,n,o,a){var c=tryCatch(t[r],t,n);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===(void 0===l?"undefined":e(l))&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){invoke("next",t,o,a)},function(t){invoke("throw",t,o,a)}):Promise.resolve(l).then(function(t){u.value=t,o(u)},function(t){return invoke("throw",t,o,a)})}a(c.arg)}(n,o,r,a)})}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,maybeInvokeDelegate(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=tryCatch(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function pushTryEntry(t){var e={"tryLoc":t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{"tryLoc":"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function next(){for(;++r<t.length;)if(i.call(t,r))return next.value=t[r],next.done=!1,next;return next.value=n,next.done=!0,next};return o.next=o}}return{"next":doneResult}}function doneResult(){return{"value":n,"done":!0}}}(function(){return this||"object"===("undefined"==typeof self?"undefined":e(self))&&self}()||Function("return this")())}).call(this,r(213)(t))},"213":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{"enumerable":!0,"get":function get(){return t.l}}),Object.defineProperty(t,"id",{"enumerable":!0,"get":function get(){return t.i}}),t.webpackPolyfill=1),t}},"33":function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return p});var n=r(210),o=r.n(n),i=r(0),a=r(1),c=r(236),u=r(67),l=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),f=function get(t,e,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0};function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var p=function(t){function ImagePicker(){var t,e,r;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ImagePicker);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return e=r=_possibleConstructorReturn(this,(t=ImagePicker.__proto__||Object.getPrototypeOf(ImagePicker)).call.apply(t,[this].concat(o))),r.config={"navigationBarTitleText":"ImagePicker 图片选择器"},_possibleConstructorReturn(r,e)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(ImagePicker,a["a"].Component),s(ImagePicker,[{"key":"render","value":function render(){var t=this,e=a.a.useState([]),r=l(e,2),n=r[0],s=r[1];return i.l.createElement(u.t,null,i.l.createElement(u.R,{"title":"默认","textColor":"black","type":"icon","subTitle":"default"}),i.l.createElement(u.g,null,i.l.createElement(u.r,{"chooseImgObj":{"success":function success(t){s(t)}},"imgList":n}),i.l.createElement(u.t,{"padding":"normal","paddingDirection":"around"},i.l.createElement(u.e,{"shape":"round","long":!0,"onClick":function onClick(){console.log(t.state),s(n.map(function(t){return t.status="loading",t})),n.forEach(function(t,e){t.status="loading",setTimeout(function(){t.status="success",1===e&&(t.status="fail"),s(n)},1e3*(e+1))})}},"开始上传"))),i.l.createElement(u.R,{"title":"最多选择 3 张图片","textColor":"black","type":"icon","subTitle":"most"}),i.l.createElement(u.g,null,i.l.createElement(u.r,{"chooseImgObj":{"count":3}})),i.l.createElement(u.R,{"title":"删除图片确认操作","textColor":"black","type":"icon","subTitle":"beforeDelete"}),i.l.createElement(u.g,null,i.l.createElement(u.r,{"chooseImgObj":{"count":3},"beforeDel":function _asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function step(n,o){try{var i=e[n](o),a=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(a).then(function(t){step("next",t)},function(t){step("throw",t)});t(a)}("next")})}}(o.a.mark(function _callee(){var e;return o.a.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)({"title":"您确认要删除吗"});case 2:if(e=t.sent,console.log(e),!e.confirm){t.next=6;break}return t.abrupt("return",!0);case 6:if(!e.cancel){t.next=8;break}return t.abrupt("return",!1);case 8:case"end":return t.stop()}},_callee,t)}))})))}},{"key":"componentDidMount","value":function componentDidMount(){f(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidMount",this)&&f(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){f(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidShow",this)&&f(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){f(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidHide",this)&&f(ImagePicker.prototype.__proto__||Object.getPrototypeOf(ImagePicker.prototype),"componentDidHide",this).call(this)}}]),ImagePicker}();p.config={"navigationBarTitleText":"ImagePicker 图片选择器"}}}]);