webpackJsonp([5],{246:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=r(i),c=n(233),f=n(243),h=r(f),p=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),o(t,[{key:"handleClick",value:function(){window.location.href="#/"}},{key:"render",value:function(){return u["default"].createElement("div",{className:"header ac"},u["default"].createElement("div",{className:"master f16"},u["default"].createElement("b",{className:"ac",onClick:this.handleClick},c.BASE.master)),u["default"].createElement(h["default"],null))}}]),t}(i.Component);t["default"]=p},248:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=r(i),c=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),o(t,[{key:"render",value:function(){return u["default"].createElement("div",{className:"spinner"},u["default"].createElement("div",{className:"double-bounce1"}),u["default"].createElement("div",{className:"double-bounce2"}))}}]),t}(i.Component);t["default"]=c},261:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),f=n(248),h=r(f),p=n(249),d=r(p),m=n(250),b=r(m),g=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.loadBefore=n.loadBefore.bind(n),n.search=n.search.bind(n),n.state={loading:!0,error:null,data:null,btnClass:"load-before block f18 none"},n}return s(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props.keyword;void 0!==e&&"undefined"!=typeof e&&this.ajax(e)}},{key:"componentDidUpdate",value:function(){this.refs.keywordInput.value=this.props.keyword||""}},{key:"ajax",value:function(e,t){var n=this,r=window.ISSUES;if(r){for(var l=[],a=0;a<r.length;a++)(r[a].title.indexOf(e)>=0||r[a].body.indexOf(e)>=0)&&l.push(r[a]);this.setState({loading:!1,data:l,btnClass:"load-before block f18"}),t&&t()}else $.ajax({url:"json/data_callbak.json",success:function(r){window.ISSUES=r,n.ajax(e,t)},error:function(e){n.setState({loading:!1,error:e})}})}},{key:"loadBefore",value:function(){var e=this;this.setState({btnClass:"load-before block f18 load-before-animation"}),setTimeout(function(){return e.setState({btnClass:"load-before block f18"})},400)}},{key:"changeBtn",value:function(){this.setState({isNextPageView:!1,btnClass:"load-before block f18"})}},{key:"search",value:function(e){var t=this.refs.keywordInput.value;13==e.keyCode&&""!=t&&(window.location.hash="#/search/"+t,this.setState({loading:!0,error:null,data:null,btnClass:"load-before block f18 none"}),this.ajax(t,function(){}))}},{key:"render",value:function(){return void 0===this.props.keyword?c["default"].createElement("div",{className:"mt30 pb30"},c["default"].createElement("div",{className:"search"},c["default"].createElement("input",{className:"bbox f18",type:"text",placeholder:"~ 输入关键字搜索(⊙︿⊙) ~",ref:"keywordInput",onKeyUp:this.search})),c["default"].createElement("p",{className:"search-ol ac f24 mb30"},"这儿好像什么都没有阿"),c["default"].createElement("p",{className:"search-ol ac f24 mb30"},"...")):this.state.loading?c["default"].createElement("div",{className:"mt30"},c["default"].createElement("div",{className:"search"},c["default"].createElement("input",{className:"bbox f18",type:"text",placeholder:"~ 输入关键字搜索 ~",ref:"keywordInput",onKeyUp:this.search})),c["default"].createElement("div",{className:"ac"},c["default"].createElement(h["default"],null))):null!==this.state.error?c["default"].createElement("div",{className:"mt30"},c["default"].createElement("div",{className:"search"},c["default"].createElement("input",{className:"bbox f18",type:"text",placeholder:"~ 输入关键字搜索 ~",ref:"keywordInput",onKeyUp:this.search})),c["default"].createElement("div",{className:"ac"},c["default"].createElement(d["default"],null))):c["default"].createElement("div",{className:"mt30"},c["default"].createElement("div",{className:"search"},c["default"].createElement("input",{className:"bbox f18",type:"text",placeholder:"~ 输入关键字搜索 ~",ref:"keywordInput",onKeyUp:this.search})),c["default"].createElement("div",{className:"ac"},this.state.data.map(function(e,t){return c["default"].createElement(b["default"],o({},e,{key:t}))}),c["default"].createElement("button",{className:this.state.btnClass,onClick:this.loadBefore},this.state.data.length?"没有更多了":"无搜索结果")))}}]),t}(u.Component);t["default"]=g},249:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=r(i),c=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),o(t,[{key:"reload",value:function(){window.location.reload()}},{key:"render",value:function(){return u["default"].createElement("div",{className:"ac"},u["default"].createElement("span",{className:"lh18 block f16 mb15"},"阿哦出错了"),u["default"].createElement("span",{className:"reload f14",onClick:this.reload},"重新加载"))}}]),t}(i.Component);t["default"]=c},250:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(251),u=r(i),c=n(1),f=r(c),h=n(252),p=r(h),d=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tags:{}},n}return s(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(0,u["default"])(e.body).substr(0,(0,u["default"])(e.body).match(/\n/).index);this.refs.preview.innerHTML=t}},{key:"render",value:function(){var e=this.props;return f["default"].createElement("div",{className:"list"},f["default"].createElement("h3",{className:"list-title mb15"},f["default"].createElement("a",{className:"black f22 title",href:"#/article/"+e.number},e.title)),f["default"].createElement("div",{className:"mb30"},f["default"].createElement("span",{className:"list-time f12"},e.created_at.substr(0,10)),e.labels.map(function(e,t){return f["default"].createElement("a",{key:t,className:"list-tag f12",style:{backgroundColor:"#"+e.color,color:(0,p["default"])(e.color)[1]>=50||(0,p["default"])(e.color)[2]<=50?"#ffffff":""}},e.name)})),f["default"].createElement("div",{className:"list-view mb30 views",ref:"preview"}),f["default"].createElement("a",{className:"f14 gray",href:"#/article/"+e.number},"查看更多 +"))}}]),t}(c.Component);t["default"]=d},259:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=r(i),c=n(164),f=n(232),h=r(f),p=n(251),d=r(p),m=n(246),b=r(m),g=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.showAlipay=n.showAlipay.bind(n),n.showWeChat=n.showWeChat.bind(n),n}return s(t,e),o(t,[{key:"componentWillMount",value:function(){h["default"].start()}},{key:"componentDidMount",value:function(){h["default"].done(),this.refs.log.innerHTML=(0,d["default"])("基于 **React** 单页博客\r\n\r\n持续更新中...\r\n## 日志\r\n### v1.2.4\r\n\r\n> 优化 `label` 请求及数据树，减少网络资源消耗，使页面无需等待更加快速渲染\r\n> \r\n> 新增 **HSV** 算法，目的是为了辅助快速准确的渲染 `label` 相关样式 *\r\n\r\n### v1.2.3\r\n\r\n> 关于和搜索界面优化，增加update日志\r\n> \r\n> 代码高亮CSS更换为 `monokai-sublime`\r\n> \r\n> 优化资源加载速度 *\r\n\r\n### v1.2.2\r\n\r\n> 优化jQuery载入慢的问题,采用cdn加速处理\r\n\r\n### v1.2.1\r\n\r\n> 优化代码高亮Js载入慢,改采用cdn加速处理\r\n> \r\n> css样式优化\r\n\r\n### v1.2.0\r\n\r\n> 新增代码高亮Js及对应的css皮肤\r\n\r\n### v1.1.1\r\n\r\n> 页面切换的进度条去除 `showSpinner` 等设置\r\n\r\n### v1.1.0\r\n\r\n> 新增页面切换的进度条,更新一些css\r\n\r\n### v1.0.1\r\n\r\n> 新增数据储存及一些优化\r\n\r\n### v1.0.0\r\n\r\n> 列表/标签/关于/搜索等模块开发完成,第一版发布"),this.props.router.setRouteLeaveHook(this.props.route,this.routerWillLeave)}},{key:"routerWillLeave",value:function(){h["default"].start()}},{key:"showfn",value:function(e,t){e.className.indexOf("block")<0?(e.className+=" block",t.className+=" block",setTimeout(function(){e.className+=" in",t.className+=" in"},10)):(e.className=e.className.replace(" in",""),t.className=t.className.replace(" in",""),setTimeout(function(){e.className=e.className.replace(" block",""),t.className=t.className.replace(" block","")},200))}},{key:"showAlipay",value:function(){this.showfn(this.refs.bg,this.refs.alipay)}},{key:"showWeChat",value:function(){this.showfn(this.refs.bg,this.refs.WeChat)}},{key:"render",value:function(){var e="#f3f3f3";return u["default"].createElement("div",{className:"content"},u["default"].createElement(b["default"],null),u["default"].createElement("div",{className:"mt30"},u["default"].createElement("p",{className:"bbox pt15 pr30 pb15 pl30",style:{backgroundColor:e,borderRadius:"6px"}},u["default"].createElement("b",{className:"f16 ac abt"},"一个 ",u["default"].createElement("del",null,"沉迷")," 穿插",u["default"].createElement("br",null),"在魔法世界的 ",u["default"].createElement("del",null,"大魔王")," 小萌新...")),u["default"].createElement("p",{className:"bbox pt15 pr30 pb15 pl30 mt30 f16 lh30",style:{backgroundColor:e,borderRadius:"6px"}},u["default"].createElement("del",null,"如果你想赞助我")," 你的支持就是我的动力",u["default"].createElement("br",null),"欢迎打赏一杯咖啡给我",u["default"].createElement("a",{className:"gray f14 ml10",href:"javascript:;",onClick:this.showAlipay,style:{textDecoration:"underline"}},"Alipay"),u["default"].createElement("a",{className:"gray f14 ml10",href:"javascript:;",onClick:this.showWeChat,style:{textDecoration:"underline"}},"WeChat"),u["default"].createElement("br",null),"商务合作及其他相关联系 Email: ",u["default"].createElement("a",{className:"f14",href:"mailto:1477546184@qq.com",style:{color:"#e21d42"}},"1477546184@qq.com"),u["default"].createElement("br",null),u["default"].createElement("small",{className:"gray"},"* 有教学解惑需求也可以联系我 / 开放友链 · 欢迎互链 / 感谢各位的支持"),u["default"].createElement("br",null),u["default"].createElement("small",{className:"gray"},"* 打赏请备注才能将你添加到列表并增加打赏友链(如果你有博客相关)")),u["default"].createElement("div",{className:"al bbox pt15 pr30 pb15 pl30 mt30 f12",style:{backgroundColor:e,borderRadius:"6px"}},u["default"].createElement("p",{className:"f14 mb10"},"打赏列表"),u["default"].createElement("table",{width:"100%"},u["default"].createElement("thead",null,u["default"].createElement("tr",null,u["default"].createElement("th",null,"时间"),u["default"].createElement("th",null,"支付宝/微信"),u["default"].createElement("th",null,"姓名"),u["default"].createElement("th",null,"金额(¥)"))),u["default"].createElement("tbody",null,u["default"].createElement("tr",null,u["default"].createElement("td",null,"2016-10-28"),u["default"].createElement("td",null,"2365***152@qq.com"),u["default"].createElement("td",null,"*明月"),u["default"].createElement("td",null,"6.66")),u["default"].createElement("tr",null,u["default"].createElement("td",null,"2016-11-01"),u["default"].createElement("td",null,"s***2@163.com"),u["default"].createElement("td",null,"*彬"),u["default"].createElement("td",null,"19.50")),u["default"].createElement("tr",null,u["default"].createElement("td",null,"2016-11-09"),u["default"].createElement("td",null,"36***562@qq.com"),u["default"].createElement("td",null,"*方"),u["default"].createElement("td",null,"10.60")),u["default"].createElement("tr",null,u["default"].createElement("td",null,"2016-11-11"),u["default"].createElement("td",null,"196***930@qq.com"),u["default"].createElement("td",null,"*伟伟"),u["default"].createElement("td",null,"8.00"))))),u["default"].createElement("div",{className:"list-view bbox mb30 views mt30 pt15 pr30 pb15 pl30",style:{backgroundColor:e,borderRadius:"6px"},ref:"log"})),u["default"].createElement("div",{className:"opacity-bg",ref:"bg"}),u["default"].createElement("div",{className:"alipay",ref:"alipay",onClick:this.showAlipay},u["default"].createElement("img",{src:"http://ww3.sinaimg.cn/mw690/005EkSOcgw1f96lrl2zoij30r60r6n27.jpg"})),u["default"].createElement("div",{className:"WeChat",ref:"WeChat",onClick:this.showWeChat},u["default"].createElement("img",{src:"http://ww1.sinaimg.cn/mw690/005EkSOcgw1f96o9nfy0aj30lm0lmq59.jpg"})))}}]),t}(i.Component);t["default"]=(0,c.withRouter)(g)},260:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=r(i),c=n(164),f=n(232),h=r(f),p=n(246),d=r(p),m=n(261),b=r(m),g=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),o(t,[{key:"componentWillMount",value:function(){h["default"].start()}},{key:"componentDidMount",value:function(){h["default"].done(),this.props.router.setRouteLeaveHook(this.props.route,this.routerWillLeave)}},{key:"componentDidUpdate",value:function(){h["default"].done()}},{key:"routerWillLeave",value:function(){h["default"].start()}},{key:"render",value:function(){return u["default"].createElement("div",{className:"content"},u["default"].createElement(d["default"],null),u["default"].createElement(b["default"],{keyword:this.props.params.keyword}))}}]),t}(i.Component);t["default"]=(0,c.withRouter)(g)},252:function(e,t,n){"use strict";function r(e){if(e=e.toLowerCase(),3===e.length){for(var t="",n=0;n<3;n++)t+=e.slice(n,n+1).concat(e.slice(n,n+1));e=t}for(var r=[],l=0;l<6;l+=2)r.push(parseInt("0x"+e.slice(l,l+2)));var a=r[0]/255,s=r[1]/255,o=r[2]/255,i=Math.max(a,s,o),u=Math.min(a,s,o),c=void 0,f=void 0,h=i;if(i==u)c=0;else{var p=i-u;switch(f=0==i?0:1-u/i,i){case a:c=(s-o)/p+(s<o?6:0);break;case s:c=(o-a)/p+2;break;case o:c=(a-s)/p+4}c/=6}return[Math.round(360*c),Math.round(100*f),Math.round(100*h)]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},251:function(e,t,n){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||c.defaults,this.rules=f.normal,this.options.gfm&&(this.options.tables?this.rules=f.tables:this.rules=f.gfm)}function n(e,t){if(this.options=t||c.defaults,this.links=e,this.rules=h.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=h.breaks:this.rules=h.gfm:this.options.pedantic&&(this.rules=h.pedantic)}function r(e){this.options=e||{}}function l(e){this.tokens=[],this.token=null,this.options=e||c.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function a(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function s(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function o(e,t){return e=e.source,t=t||"",function n(r,l){return r?(l=l.source||l,l=l.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,l),n):new RegExp(e,t)}}function i(){}function u(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function c(e,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=u({},c.defaults,n||{});var s,o,i=n.highlight,f=0;try{s=t.lex(e,n)}catch(h){return r(h)}o=s.length;var p=function(e){if(e)return n.highlight=i,r(e);var t;try{t=l.parse(s,n)}catch(a){e=a}return n.highlight=i,e?r(e):r(null,t)};if(!i||i.length<3)return p();if(delete n.highlight,!o)return p();for(;f<s.length;f++)!function(e){return"code"!==e.type?--o||p():i(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--o||p():(e.text=n,e.escaped=!0,void(--o||p()))})}(s[f])}else try{return n&&(n=u({},c.defaults,n)),l.parse(t.lex(e,n),n)}catch(h){if(h.message+="\nPlease report this to https://github.com/chjj/marked.",(n||c.defaults).silent)return"<p>An error occured:</p><pre>"+a(h.message+"",!0)+"</pre>";throw h}}var f={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:i,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:i,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:i,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};f.bullet=/(?:[*+-]|\d+\.)/,f.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,f.item=o(f.item,"gm")(/bull/g,f.bullet)(),f.list=o(f.list)(/bull/g,f.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+f.def.source+")")(),f.blockquote=o(f.blockquote)("def",f.def)(),f._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",f.html=o(f.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,f._tag)(),f.paragraph=o(f.paragraph)("hr",f.hr)("heading",f.heading)("lheading",f.lheading)("blockquote",f.blockquote)("tag","<"+f._tag)("def",f.def)(),f.normal=u({},f),f.gfm=u({},f.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),f.gfm.paragraph=o(f.paragraph)("(?!","(?!"+f.gfm.fences.source.replace("\\1","\\2")+"|"+f.list.source.replace("\\1","\\3")+"|")(),f.tables=u({},f.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=f,t.lex=function(e,n){var r=new t(n);return r.lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var r,l,a,s,o,i,u,c,h,e=e.replace(/^ +$/gm,"");e;)if((a=this.rules.newline.exec(e))&&(e=e.substring(a[0].length),a[0].length>1&&this.tokens.push({type:"space"})),a=this.rules.code.exec(e))e=e.substring(a[0].length),a=a[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?a:a.replace(/\n+$/,"")});else if(a=this.rules.fences.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"code",lang:a[2],text:a[3]||""});else if(a=this.rules.heading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:a[1].length,text:a[2]});else if(t&&(a=this.rules.nptable.exec(e))){for(e=e.substring(a[0].length),i={type:"table",header:a[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3].replace(/\n$/,"").split("\n")},c=0;c<i.align.length;c++)/^ *-+: *$/.test(i.align[c])?i.align[c]="right":/^ *:-+: *$/.test(i.align[c])?i.align[c]="center":/^ *:-+ *$/.test(i.align[c])?i.align[c]="left":i.align[c]=null;for(c=0;c<i.cells.length;c++)i.cells[c]=i.cells[c].split(/ *\| */);this.tokens.push(i)}else if(a=this.rules.lheading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:"="===a[2]?1:2,text:a[1]});else if(a=this.rules.hr.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"hr"});else if(a=this.rules.blockquote.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"blockquote_start"}),a=a[0].replace(/^ *> ?/gm,""),this.token(a,t,!0),this.tokens.push({type:"blockquote_end"});else if(a=this.rules.list.exec(e)){for(e=e.substring(a[0].length),s=a[2],this.tokens.push({type:"list_start",ordered:s.length>1}),a=a[0].match(this.rules.item),r=!1,h=a.length,c=0;c<h;c++)i=a[c],u=i.length,i=i.replace(/^ *([*+-]|\d+\.) +/,""),~i.indexOf("\n ")&&(u-=i.length,i=this.options.pedantic?i.replace(/^ {1,4}/gm,""):i.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&c!==h-1&&(o=f.bullet.exec(a[c+1])[0],s===o||s.length>1&&o.length>1||(e=a.slice(c+1).join("\n")+e,c=h-1)),l=r||/\n\n(?!\s*$)/.test(i),c!==h-1&&(r="\n"===i.charAt(i.length-1),l||(l=r)),this.tokens.push({type:l?"loose_item_start":"list_item_start"}),this.token(i,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(a=this.rules.html.exec(e))e=e.substring(a[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===a[1]||"script"===a[1]||"style"===a[1]),text:a[0]});else if(!n&&t&&(a=this.rules.def.exec(e)))e=e.substring(a[0].length),this.tokens.links[a[1].toLowerCase()]={href:a[2],title:a[3]};else if(t&&(a=this.rules.table.exec(e))){for(e=e.substring(a[0].length),i={type:"table",header:a[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3].replace(/(?: *\| *)?\n$/,"").split("\n")},c=0;c<i.align.length;c++)/^ *-+: *$/.test(i.align[c])?i.align[c]="right":/^ *:-+: *$/.test(i.align[c])?i.align[c]="center":/^ *:-+ *$/.test(i.align[c])?i.align[c]="left":i.align[c]=null;for(c=0;c<i.cells.length;c++)i.cells[c]=i.cells[c].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(i)}else if(t&&(a=this.rules.paragraph.exec(e)))e=e.substring(a[0].length),this.tokens.push({type:"paragraph",text:"\n"===a[1].charAt(a[1].length-1)?a[1].slice(0,-1):a[1]});else if(a=this.rules.text.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"text",text:a[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var h={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:i,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:i,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};h._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,h._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,h.link=o(h.link)("inside",h._inside)("href",h._href)(),h.reflink=o(h.reflink)("inside",h._inside)(),h.normal=u({},h),h.pedantic=u({},h.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),h.gfm=u({},h.normal,{escape:o(h.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:o(h.text)("]|","~]|")("|","|https?://|")()}),h.breaks=u({},h.gfm,{br:o(h.br)("{2,}","*")(),text:o(h.gfm.text)("{2,}","*")()}),n.rules=h,n.output=function(e,t,r){var l=new n(t,r);return l.output(e)},n.prototype.output=function(e){for(var t,n,r,l,s="";e;)if(l=this.rules.escape.exec(e))e=e.substring(l[0].length),s+=l[1];else if(l=this.rules.autolink.exec(e))e=e.substring(l[0].length),"@"===l[2]?(n=":"===l[1].charAt(6)?this.mangle(l[1].substring(7)):this.mangle(l[1]),r=this.mangle("mailto:")+n):(n=a(l[1]),r=n),s+=this.renderer.link(r,null,n);else if(this.inLink||!(l=this.rules.url.exec(e))){if(l=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),e=e.substring(l[0].length),s+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):a(l[0]):l[0];else if(l=this.rules.link.exec(e))e=e.substring(l[0].length),this.inLink=!0,s+=this.outputLink(l,{href:l[2],title:l[3]}),this.inLink=!1;else if((l=this.rules.reflink.exec(e))||(l=this.rules.nolink.exec(e))){if(e=e.substring(l[0].length),t=(l[2]||l[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){s+=l[0].charAt(0),e=l[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(l,t),this.inLink=!1}else if(l=this.rules.strong.exec(e))e=e.substring(l[0].length),s+=this.renderer.strong(this.output(l[2]||l[1]));else if(l=this.rules.em.exec(e))e=e.substring(l[0].length),s+=this.renderer.em(this.output(l[2]||l[1]));else if(l=this.rules.code.exec(e))e=e.substring(l[0].length),s+=this.renderer.codespan(a(l[2],!0));else if(l=this.rules.br.exec(e))e=e.substring(l[0].length),s+=this.renderer.br();else if(l=this.rules.del.exec(e))e=e.substring(l[0].length),s+=this.renderer.del(this.output(l[1]));else if(l=this.rules.text.exec(e))e=e.substring(l[0].length),s+=this.renderer.text(a(this.smartypants(l[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(l[0].length),n=a(l[1]),r=n,s+=this.renderer.link(r,null,n);return s},n.prototype.outputLink=function(e,t){var n=a(t.href),r=t.title?a(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,a(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,l=0;l<r;l++)t=e.charCodeAt(l),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+a(t,!0)+'">'+(n?e:a(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:a(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){
return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(s(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(l){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var a='<a href="'+e+'"';return t&&(a+=' title="'+t+'"'),a+=">"+n+"</a>"},r.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},l.parse=function(e,t,n){var r=new l(t,n);return r.parse(e)},l.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},l.prototype.next=function(){return this.token=this.tokens.pop()},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,l,a="",s="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(a+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",l=0;l<t.length;l++)n+=this.renderer.tablecell(this.inline.output(t[l]),{header:!1,align:this.token.align[l]});s+=this.renderer.tablerow(n)}return this.renderer.table(a,s);case"blockquote_start":for(var s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":for(var s="",o=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o);case"list_item_start":for(var s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(var s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var i=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(i);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},i.exec=i,c.options=c.setOptions=function(e){return u(c.defaults,e),c},c.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1},c.Parser=l,c.parser=l.parse,c.Renderer=r,c.Lexer=t,c.lexer=t.lex,c.InlineLexer=n,c.inlineLexer=n.output,c.parse=c,e.exports=c}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,function(){return this}())}});