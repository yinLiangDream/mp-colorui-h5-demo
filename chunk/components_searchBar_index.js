(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"54":function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(2),a=n(279),i=n(69),l=n(101),c=n.n(l),u=n(70);n.d(t,"default",function(){return d});var s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),h=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};var f=void 0,d=function(e){function SearchBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SearchBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SearchBar.__proto__||Object.getPrototypeOf(SearchBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SearchBar,o["a"].Component),p(SearchBar,[{"key":"render","value":function render(){var e=Object.entries(c.a[86]),t=o.a.useState(e.map(function(t){return{"title":t[1]+"("+t[0]+")","desc":function getAreaData(t,n){var r=t;t||(r={"key":e[0][0],"value":e[0][1]});var o=Object.entries(c.a[r.key]),a=Object.entries(c.a[n?n.key:o[0][0]]);return{"province":e,"city":o,"district":a}}({"key":t[0],"value":t[1]}).district.join("|")}})),n=s(t,2),l=n[0],p=(n[1],o.a.useState([])),h=s(p,2),d=h[0],y=h[1],b=o.a.useState(!1),m=s(b,2),S=m[0],v=m[1],g=function _onSearch(e){Object(a.c)({"title":"您要搜索"+e,"icon":"none"})};return r.l.createElement(i.s,null,r.l.createElement(i.O,{"title":"搜索结果&异步 loading","textColor":"black","type":"icon"}),r.l.createElement(i.B,{"shape":"radius","bgColor":"gradualBlue","showLoading":S,"placeholder":"请输入省份或编码","searchType":"none","onTouchResult":function onTouchResult(e){Object(a.c)({"title":"您点击了"+d[e].title+"省","icon":"none"})},"onInput":function onInput(e){if(v(!0),f&&clearTimeout(f),""===e)return clearTimeout(f),void setTimeout(function(){v(!1),y([])});f=setTimeout(function(){v(!1),y(l.filter(function(t){return t.title.includes(e)||t.desc.includes(e)}))},1e3)},"showResult":!0,"result":d}),r.l.createElement(i.s,{"margin":"normal","marginDirection":"vertical"},r.l.createElement(u.a,{"code":"\n```\n<ClSearchBar\n  shape='radius'\n  bgColor='gradualBlue'\n  showLoading={showLoading}\n  placeholder='请输入省份或编码'\n  searchType='none'\n  onTouchResult={(index) => {\n    Taro.showToast({\n      title: `您点击了${filterResult[index].title}省`,\n      icon: 'none'\n    })\n  }}\n  onInput={value => {\n    setShowLoading(true)\n    if (timer) clearTimeout(timer)\n    if (value === '') {\n      clearTimeout(timer)\n      setTimeout(() => {\n        setShowLoading(false)\n        setFilterResult([])\n      })\n      return\n    }\n    timer = setTimeout(() => {\n      setShowLoading(false)\n      setFilterResult(result.filter(item => item.title.includes(value) || item.desc.includes(value)))\n    }, 1000)\n  }}\n  showResult\n  result={filterResult}\n/>\n```\n"})),r.l.createElement(i.O,{"title":"形状&背景色","textColor":"black","type":"icon","subTitle":"shape&bgColor","subTitleColor":"shadow"}),r.l.createElement(i.f,null,r.l.createElement(i.B,{"shape":"radius","bgColor":"grey","onSearch":function onSearch(e){g(e)}})),r.l.createElement(i.f,null,r.l.createElement(i.B,{"shape":"round","bgColor":"light-blue","onSearch":function onSearch(e){g(e)}})),r.l.createElement(u.a,{"code":"\n```\n<ClSearchBar\n  shape='radius'\n  bgColor='grey'\n  onSearch={value => {\n    onSearch(value)\n  }}\n/>\n\n<ClSearchBar\n  shape='round'\n  bgColor='light-blue'\n  onSearch={value => {\n    onSearch(value)\n  }}\n/>\n```\n"}),r.l.createElement(i.O,{"title":"占位符","textColor":"black","type":"icon","subTitle":"placeholder","subTitleColor":"shadow"}),r.l.createElement(i.f,null,r.l.createElement(i.B,{"shape":"round","placeholder":"请输入你想输入的内容","onSearch":function onSearch(e){g(e)}})),r.l.createElement(u.a,{"code":"\n```\n<ClSearchBar\n  shape='round'\n  placeholder='请输入你想输入的内容'\n  onSearch={value => {\n    onSearch(value)\n  }}\n/>\n```\n"}),r.l.createElement(i.O,{"title":"功能组&按钮颜色","textColor":"black","type":"icon","subTitle":"leftIcons&rightButtonColor","subTitleColor":"shadow"}),r.l.createElement(i.f,null,r.l.createElement(i.B,{"shape":"round","rightButtonColor":"black","rightTextColor":"white","placeholder":"请输入你想输入的内容","leftIcons":["emoji"],"onIconClick":function onIconClick(e){Object(a.c)({"title":"您点击了第"+(e+1)+"个图标","icon":"none"})},"onSearch":function onSearch(e){g(e)}})),r.l.createElement(u.a,{"code":"\n```\n<ClSearchBar\n  shape='round'\n  rightButtonColor='black'\n  rightTextColor='white'\n  placeholder='请输入你想输入的内容'\n  leftIcons={[\n    'emoji'\n  ]}\n  onIconClick={(index) => {\n    Taro.showToast({\n      title: `您点击了第${index + 1}个图标`,\n      icon: 'none'\n    })\n  }}\n  onSearch={value => {\n    onSearch(value)\n  }}\n/>\n```\n"}))}},{"key":"componentDidMount","value":function componentDidMount(){h(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidMount",this)&&h(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){h(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidShow",this)&&h(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){h(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidHide",this)&&h(SearchBar.prototype.__proto__||Object.getPrototypeOf(SearchBar.prototype),"componentDidHide",this).call(this)}}]),SearchBar}();d.config={"navigationBarTitleText":"SearchBar 搜索栏"}},"70":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),o=n(2),a=n(69),i=n(72),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var c=function(e){function GenerateCode(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GenerateCode),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GenerateCode.__proto__||Object.getPrototypeOf(GenerateCode)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GenerateCode,o["a"].Component),l(GenerateCode,[{"key":"render","value":function render(){var e=this.props;return r.l.createElement(a.s,{"padding":"normal","paddingDirection":"bottom"},r.l.createElement(a.a,{"title":"示例代码","card":!0},r.l.createElement(a.s,{"padding":"normal","paddingDirection":"around"},r.l.createElement(i.a,{"raw":!1,"richText":e.code,"type":"markdown"}))))}}]),GenerateCode}();c.defaultProps={"code":""}}}]);