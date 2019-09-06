(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"32":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return f});var r=o(0),n=o(2),c=o(201),i=o(67),a=o(91),l=o.n(a),u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],r=!0,n=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(o.push(i.value),!t||o.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw c}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),s=function get(e,t,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,o)}if("value"in r)return r.value;var c=r.get;return void 0!==c?c.call(o):void 0};var h=void 0,f=function(e){function SearchBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SearchBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SearchBar.__proto__||Object.getPrototypeOf(SearchBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SearchBar,n["a"].Component),p(SearchBar,[{"key":"render","value":function render(){var e=Object.entries(l.a[86]),t=n.a.useState(e.map(function(t){return{"title":t[1]+"("+t[0]+")","desc":function getAreaData(t,o){var r=t;t||(r={"key":e[0][0],"value":e[0][1]});var n=Object.entries(l.a[r.key]),c=Object.entries(l.a[o?o.key:n[0][0]]);return{"province":e,"city":n,"district":c}}({"key":t[0],"value":t[1]}).district.join("|")}})),o=u(t,2),a=o[0],p=(o[1],n.a.useState([])),s=u(p,2),f=s[0],y=s[1],d=n.a.useState(!1),b=u(d,2),m=b[0],S=b[1],_=function _onSearch(e){Object(c.c)({"title":"您要搜索"+e,"icon":"none"})};return r.l.createElement(i.q,null,r.l.createElement(i.M,{"title":"搜索结果&异步 loading","textColor":"black","type":"icon"}),r.l.createElement(i.z,{"shape":"radius","bgColor":"gradualBlue","showLoading":m,"placeholder":"请输入省份或编码","searchType":"none","onTouchResult":function onTouchResult(e){Object(c.c)({"title":"您点击了"+f[e].title+"省","icon":"none"})},"onInput":function onInput(e){if(S(!0),h&&clearTimeout(h),""===e)return clearTimeout(h),void setTimeout(function(){S(!1),y([])});h=setTimeout(function(){S(!1),y(a.filter(function(t){return t.title.includes(e)||t.desc.includes(e)}))},1e3)},"showResult":!0,"result":f}),r.l.createElement(i.M,{"title":"形状&背景色","textColor":"black","type":"icon","subTitle":"shape&bgColor","subTitleColor":"shadow"}),r.l.createElement(i.e,null,r.l.createElement(i.z,{"shape":"radius","bgColor":"grey","onSearch":function onSearch(e){_(e)}})),r.l.createElement(i.e,null,r.l.createElement(i.z,{"shape":"round","bgColor":"light-blue","onSearch":function onSearch(e){_(e)}})),r.l.createElement(i.M,{"title":"占位符","textColor":"black","type":"icon","subTitle":"placeholder","subTitleColor":"shadow"}),r.l.createElement(i.e,null,r.l.createElement(i.z,{"shape":"round","placeholder":"请输入你想输入的内容","onSearch":function onSearch(e){_(e)}})),r.l.createElement(i.M,{"title":"功能组&按钮颜色","textColor":"black","type":"icon","subTitle":"leftIcons&rightButtonColor","subTitleColor":"shadow"}),r.l.createElement(i.e,null,r.l.createElement(i.z,{"shape":"round","rightButtonColor":"black","rightTextColor":"white","placeholder":"请输入你想输入的内容","leftIcons":["emoji"],"onIconClick":function onIconClick(e){Object(c.c)({"title":"您点击了第"+(e+1)+"个图标","icon":"none"})},"onSearch":function onSearch(e){_(e)}})))}},{"key":"componentDidMount","value":function componentDidMount(){s(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidMount",this)&&s(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){s(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidShow",this)&&s(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){s(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidHide",this)&&s(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidHide",this).call(this)}}]),SearchBar}();f.config={"navigationBarTitleText":"SearchBar 搜索栏"}}}]);