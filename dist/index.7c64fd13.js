webpackJsonp([0],{233:function(e,t){},231:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),l=o(s),c=n(232),f=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentWillMount",value:function(){this.baiduStatistics(),this.duoshuoComments()}},{key:"baiduStatistics",value:function(){if(location.host.indexOf("hexson")>=0){!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.src="//hm.baidu.com/hm.js?"+c.BASE.baidu,t.parentNode.insertBefore(e,t)}()}}},{key:"duoshuoComments",value:function(){window.duoshuoQuery={short_name:c.BASE.duoshuo},function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https:":"http:")+"//static.duoshuo.com/embed.js",e.charset="UTF-8",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}},{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement("div",null,this.props.children))}}]),t}(s.Component);t["default"]=f},240:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),l=o(s),c=n(164),f=n(241),p=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l["default"].createElement("ul",null,f.MENU.map(function(e,t){return l["default"].createElement("li",{key:t},l["default"].createElement(c.Link,{className:"f14",to:e.path,activeStyle:{color:"#222222"}},e.name))}))}}]),t}(s.Component);t["default"]=(0,c.withRouter)(p)},232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE={master:"hexson",duoshuo:"hexson",baidu:"9d14224261c3197a9f46c652ae3071b3"},t.DATA=[{url:"https://api.github.com/repos/hexson/hexson.github.io/issues/1",repository_url:"https://api.github.com/repos/hexson/hexson.github.io",labels_url:"https://api.github.com/repos/hexson/hexson.github.io/issues/1/labels{/name}",comments_url:"https://api.github.com/repos/hexson/hexson.github.io/issues/1/comments",events_url:"https://api.github.com/repos/hexson/hexson.github.io/issues/1/events",html_url:"https://github.com/hexson/hexson.github.io/issues/1",id:179461988,number:1,title:"Blog の始",user:{login:"hexson",id:16832957,avatar_url:"https://avatars.githubusercontent.com/u/16832957?v=3",gravatar_id:"",url:"https://api.github.com/users/hexson",html_url:"https://github.com/hexson",followers_url:"https://api.github.com/users/hexson/followers",following_url:"https://api.github.com/users/hexson/following{/other_user}",gists_url:"https://api.github.com/users/hexson/gists{/gist_id}",starred_url:"https://api.github.com/users/hexson/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/hexson/subscriptions",organizations_url:"https://api.github.com/users/hexson/orgs",repos_url:"https://api.github.com/users/hexson/repos",events_url:"https://api.github.com/users/hexson/events{/privacy}",received_events_url:"https://api.github.com/users/hexson/received_events",type:"User",site_admin:!1},labels:[{url:"https://api.github.com/repos/hexson/hexson.github.io/labels/%E6%9D%82%E6%96%87",name:"杂文",color:"f9d0c4"}],state:"open",locked:!1,assignee:null,assignees:[],milestone:null,comments:0,created_at:"2016-09-27T11:02:06Z",updated_at:"2016-09-28T17:17:20Z",closed_at:null,body:"前段时间一直在忙，很多事情在日程上没时间去做，构建一个自己blog也是其中之一，之前有写些随笔的习惯，不过大部分流落各处，现在想重拾起来，不管是随笔、总结又或是技术各种，留下点回忆和记录。\r\n\r\n### 构想\r\n构想总是大胆又天马行空的，想过很多种方式去做，有想过基于nodeJs为后台，AngularJs为前台，然后自己写了各种的模块，Validator、Api...，最后的最后，发现比较费时间，还有备案等问题，后来看到很多用 **hexo** 搭建的blog，去官网看了一下有一些主题可供选择，但是到后面没想过用这个去搭建一个blog，很多原因说不上来，看了好几个这类的blog，傻傻分不清。\r\n\r\n### 构建\r\n一个偶然的情况下在知乎上面看到了关于blog的问题，有一个回答里面讲了一些 **Github Issues** 的东西，当时看下去越觉得很有趣，原来还可以这么玩，新的东西让我有点兴奋了，后来脑子里有了个大概的想法：通过 **Github Issues** 和 **git push** ，单页blog，文章不用去写文件储存，而且这样我随便来个电脑都能进行coding和commits，很好。\r\n\r\n### 技术栈\r\n前端框架想过很多，上面也提到了AngularJs，目前公司是用这个贯穿整个前端的架构，有一些历史和文化的原因，最后觉得blog很多模块用不上，就抛弃了他 >_<\r\n\r\n开发使用了\r\n\r\n- **react@15.3.2**\r\n- **react-router@2.8.1**\r\n- **less@2.7.1**\r\n- **jquery@1.11.1**\r\n- **grunt@1.0.1**\r\n- **es6**\r\n- **etc...**\r\n\r\n### 最后\r\n平常很少上知乎，这次由知乎得益一些启发。\r\n当然并不是推崇什么，各人看法不同，不过我觉得对人和事物存着敬畏的心态，才有所得。\r\n于是乎，就有了这个blog。"}],t.LABELS=[{name:"杂文",color:"f9d0c4"},{name:"电影",color:"fef2c0"}]},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NAME="hexson",t.MENU=[{path:"all",name:"全部"},{path:"tags",name:"标签"},{path:"about",name:"关于"},{path:"search",name:"搜索"}]},239:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),l=o(s),c=n(232),f=n(240),p=o(f),d=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement("div",{className:"index ac"},l["default"].createElement("div",{className:"avatar"}),l["default"].createElement("div",{className:"master f16"},c.BASE.master),l["default"].createElement(p["default"],null)))}}]),t}(s.Component);t["default"]=d},163:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),l=o(s),c=n(164),f=n(227),p=n(231),d=o(p);n(233);var h=(0,c.useRouterHistory)(f.createHashHistory)({queryKey:!1}),b=function(e,t){n.e(0,function(e){t(null,n(239)["default"])})},m=function(e,t){n.e(1,function(e){t(null,n(242)["default"])})},y=function(e,t){n.e(2,function(e){t(null,n(250)["default"])})},g=function(e,t){n.e(3,function(e){t(null,n(251)["default"])})},_=function(e,t){n.e(4,function(e){t(null,n(253)["default"])})},v=function(e,t){n.e(5,function(e){t(null,n(256)["default"])})},w=function(e,t){n.e(5,function(e){t(null,n(257)["default"])})},E=l["default"].createElement(c.Route,{path:"/",component:d["default"]},l["default"].createElement(c.IndexRoute,{getComponent:b}),l["default"].createElement(c.Route,{path:"all",getComponent:m}),l["default"].createElement(c.Route,{path:"archives",getComponent:y}),l["default"].createElement(c.Route,{path:"article/:id",getComponent:g}),l["default"].createElement(c.Route,{path:"tags(/:tag)",getComponent:_}),l["default"].createElement(c.Route,{path:"about",getComponent:v}),l["default"].createElement(c.Route,{path:"search(/:keyword)",getComponent:w})),O=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l["default"].createElement(c.Router,{history:h,routes:E})}}]),t}(s.Component);t["default"]=O},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),u=o(r),a=n(30),i=n(163),s=o(i);(0,a.render)(u["default"].createElement(s["default"],null),document.getElementById("hexson"))},229:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(189),u=o(r),a=n(228),i=o(a);t["default"]=u["default"](i["default"],"enableBeforeUnload is deprecated, use useBeforeUnload instead"),e.exports=t["default"]},230:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(189),u=o(r),a=n(190),i=o(a);t["default"]=u["default"](i["default"],"enableQueries is deprecated, use useQueries instead"),e.exports=t["default"]},227:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(189),u=o(r),a=n(187),i=o(a),s=n(224),l=o(s);t.createHistory=l["default"];var c=n(174),f=o(c);t.createHashHistory=f["default"];var p=n(220),d=o(p);t.createMemoryHistory=d["default"];var h=n(219),b=o(h);t.useBasename=b["default"];var m=n(228),y=o(m);t.useBeforeUnload=y["default"];var g=n(190),_=o(g);t.useQueries=_["default"];var v=n(176),w=o(v);t.Actions=w["default"];var E=n(229),O=o(E);t.enableBeforeUnload=O["default"];var x=n(230),j=o(x);t.enableQueries=j["default"];var M=u["default"](i["default"],"Using createLocation without a history instance is deprecated; please use history.createLocation instead");t.createLocation=M},228:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){function t(t){var n=e();if("string"==typeof n)return(t||window.event).returnValue=n,n}return l.addEventListener(window,"beforeunload",t),function(){l.removeEventListener(window,"beforeunload",t)}}function u(e){return function(t){function n(){for(var e=void 0,t=0,n=p.length;null==e&&t<n;++t)e=p[t].call();return e}function o(e){return p.push(e),1===p.length&&s.canUseDOM&&(c=r(n)),function(){p=p.filter(function(t){return t!==e}),0===p.length&&c&&(c(),c=null)}}function u(e){s.canUseDOM&&p.indexOf(e)===-1&&(p.push(e),1===p.length&&(c=r(n)))}function i(e){p.length>0&&(p=p.filter(function(t){return t!==e}),0===p.length&&c())}var l=e(t),c=void 0,p=[];return a({},l,{listenBeforeUnload:o,registerBeforeUnloadHook:f["default"](u,"registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead"),unregisterBeforeUnloadHook:f["default"](i,"unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead")})}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(175),s=(o(i),n(178)),l=n(179),c=n(189),f=o(c);t["default"]=u,e.exports=t["default"]}});