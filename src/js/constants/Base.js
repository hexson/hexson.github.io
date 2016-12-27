export const BASE = {
	master: 'Hexson',
	duoshuo: 'hexson',
	baidu: '228e0569572a7293c078c76a5f0db0f8'
};


// export const LABELS = [{name:"杂文",color:"f9d0c4"},{name:"电影",color:"fef2c0"},{name:"Git",color:"c5def5"},{name:"CSS",color:"c2e0c6"},{name:"hoslider",color:"f2546b",fcolor:"ffffff"}];


// export const ISSUES = [{"number":6,"title":"Hoslider.js: 简洁的 mobile touch slider 组件类库","labels":[{"name":"hoslider","color":"f2546b"}],"state":"open","locked":false,"comments":0,"created_at":"2016-10-25T02:17:31Z","updated_at":"2016-10-26T02:18:16Z","closed_at":null,"body":"公司mobile端的一个需求开发而来，后面继续由我开发并维护，遵循 **MIT** 开源协议\r\n\r\n# Hoslider\r\n\r\n一个简单易用的 **mobile** 端 touch slider 组件类库，目前正在持续更新中...\r\n\r\n## example\r\n\r\n首先引入\r\n\r\n`<link rel=\"stylesheet\" type=\"text/css\" href=\"/build/hoslider.css\">`\r\n\r\n`<script type=\"text/javascript\" src=\"/build/hoslider.min.js\"></script>`\r\n\r\n栗子很简单\r\n\r\n```javascript\r\nvar demo = new Hoslider('demo', {\r\n\tpartition: 15\r\n});\r\n```\r\n\r\n现在你就可以在手机浏览器或者 **chrome** 浏览器里面模拟mobile查看效果\r\n\r\n上一张动图展示下组件是如何运行的：\r\n\r\n![Hoslider demo](http://ww3.sinaimg.cn/mw690/005EkSOcgw1f94a9m2w5ug30b90dwjya.gif)\r\n\r\n## 参数\r\n\r\n**partition**\r\n\r\n组件间隔(单位:px)\r\n\r\n`partition: 10`\r\n\r\n**duration**\r\n\r\n动画执行时间(单位:ms)\r\n\r\n`duration: 300`\r\n\r\n**touchEndCallback**\r\n\r\ntouch 事件结束回调函数\r\n\r\n```javascript\r\ntouchEndCallback: function () {\r\n\t// some code...\r\n}\r\n```\r\n\r\n**endCallback**\r\n\r\ntouch 事件最后结束回调函数\r\n\r\n```javascript\r\nendCallback: function () {\r\n\t// some code...\r\n}\r\n```"},{"number":5,"title":"CSS 字体大小之REM","labels":[{"name":"CSS","color":"c2e0c6"}],"state":"open","locked":false,"comments":0,"created_at":"2016-10-21T09:27:15Z","updated_at":"2016-10-21T14:43:28Z","closed_at":null,"body":"网页技术发展至今，随着设备平台的迅速发展，相关技术迭代的非常迅猛，`CSS3` 的出现，网页字体的大小从之前的 `px` 、 `pt` 、 `em` 、`percent` 等增加了一个新的单位: `rem`。\r\n\r\n**W3C** 上有这么一句话描述它：font size of the root element\r\n\r\n从这句话上面看，字体大小是参照根元素 `<html>` 大小为基准的，我们只要在根元素 `<html>` 设定一个参考值，然后再根据需要，具体的去设置对应的字体大小，我们来看一个实例代码：\r\n\r\n```css\r\nhtml {\r\n  font-size: 62.5%;  /* 10px */\r\n}\r\np,span {\r\n  font-size: 1.4rem; /* 14px */\r\n}\r\n.class {\r\n  font-size: 1.8rem; /* 18px */\r\n}\r\n```\r\n\r\n让我们来解析一下这段代码的意思，首页给根元素 `<html>` 设置了字体的大小10px，这个数值是怎么来的呢？浏览器默认字体大小 `16px * ? = 10px`，我们可以得出具体的百分比，然后给元素 `<p>` 和 `<span>` 设置的字体大小为 `1.4 * 10px = 14px`，再给某个或某些 **className** 包含 `.class` 的元素设置了字体大小为 `1.8 * 10px = 18px`，到此为止，你知道该怎么去使用 `rem` 了吧。\r\n\r\n> 补充：**em** 虽然一般以元素 `<body>` 为参考点，但是某些时候你如果不知道父元素字体大小，那么很可能子元素的字体大小是未知的。附上 **em** 的计算公式：\r\n\r\n> 子元素的em值 = 子元素的font-size / 父元素的font-size * 父元素的em值"},{"number":4,"title":"身未动，心已远。","labels":[{"name":"杂文","color":"f9d0c4"}],"state":"open","locked":false,"comments":0,"created_at":"2016-10-20T09:52:27Z","updated_at":"2016-10-20T15:37:33Z","closed_at":null,"body":"<p class=\"ac\">2016年 秋</p><p class=\"ac\">最近老是有各种想法萦绕在心头，去海边看日出，呵呵呵。</p>\r\n\r\n<p class=\"ac\">读很多书，见很多人，看很多景，爱一个人，任重而道远，先去看看景。</p>\r\n\r\n<div class=\"pb15\"></div>\r\n\r\n![青春18](http://ww2.sinaimg.cn/mw690/005EkSOcgw1f8ywmfzm5zj30bl0gcdkb.jpg)"},{"number":3,"title":"Git Push 储存用户名和密码","labels":[{"name":"Git","color":"c5def5"}],"state":"open","locked":false,"comments":0,"created_at":"2016-10-17T16:32:33Z","updated_at":"2016-10-19T07:16:01Z","closed_at":null,"body":"在使用 `Git Push` 的过程中，次数频繁需要输入用户名和密码，太久不push需要输入用户名和密码，低版本的 **Git** 甚至每次都需要提交用户名和密码，天了噜，这是坑，必须要填过去了咯。\r\n\r\n### for windows\r\n\r\n首先我们进入 `%HOME%` 目录，你不用管这是什么东东，一般在电脑 `C:\\users\\Administrator` 的目录，**users** 可能对应中文名 **用户**，某些电脑 **Administrator** 可能为 **Admin**，总之你看见一个 `.gitconfig` 名字的文件的时候，恭喜你找对目录了，这个时候我们来借助 `git bash` （鼠标右键阿喂）创建一个名为 `.git-credentials` 的文件，直接创建？对不起，大win不支持直接创建以 `.` 开头的文件。\r\n\r\n好了，打开面板之后，我们开始输入命令：\r\n\r\n\r\n- `touch .git-credentials`\r\n\r\n- `vim .git-credentials`\r\n\r\n- `https://{username}:{password}@github.com`\r\n\r\n- `wq`\r\n\r\n- `git config --global credential.helper store`\r\n\r\n\r\n> 注意：上面第三步在花括号内把你对应的账号密码替换上去，然后按 `ESC` 键，输入第四步命令保存并退出编辑文件的状态。\r\n\r\n全部完成之后，你就已经填坑了。\r\n\r\n"},{"number":2,"title":"虞美人盛开的山坡 コクリコ坂から","labels":[{"name":"电影","color":"fef2c0"}],"state":"open","locked":false,"comments":0,"created_at":"2016-10-17T03:49:31Z","updated_at":"2016-10-20T03:55:53Z","closed_at":null,"body":"![コクリコ坂から 海报](http://ww1.sinaimg.cn/mw690/005EkSOcgw1f8ylglodbij30go096mzn.jpg)\r\n\r\n两个人一起翘课啊，真是青春啊\r\n\r\n尽管命运跟我们开了玩笑，尽管现实无法改变，我拥抱这命运，接受这现实，并仍旧喜欢着你\r\n\r\n多年后，再回想这样的迷茫或许连执著的原因都记不得了，青春就是让你张扬的笑，也给你莫名的痛\r\n\r\n只顾着追求新事物，却不回顾历史，怎么会有未来\r\n\r\n我说不出来为什么爱你，但我知道，你就是我不爱别人的理由\r\n\r\n宫崎吾朗执导\r\n\r\n虽然宫崎吾朗的地海普遍都说很烂，但是这部剧在我而言还是值得一看\r\n\r\n友情，亲情，爱情，青春，这些你都能看得到\r\n\r\n一个小姑娘认真又平凡的生活着\r\n\r\n配乐很不错\r\n\r\n插入曲  1963年的怀旧金曲 - 上を向いて歩こう\r\n\r\n官方主题曲  手嶌MM的 - さよならの夏 〜コクリコ坂から〜"},{"number":1,"title":"Blog の 始","labels":[{"name":"杂文","color":"f9d0c4"}],"state":"open","locked":false,"comments":0,"created_at":"2016-09-27T11:02:06Z","updated_at":"2016-10-25T03:33:23Z","closed_at":null,"body":"前段时间一直在忙，很多事情在日程上没时间去做，构建一个自己blog也是其中之一，之前有写些随笔的习惯，不过大部分流落各处，现在想重拾起来，不管是随笔、总结又或是技术各种，留下点回忆和记录。\r\n\r\n### 构想\r\n构想总是大胆又天马行空的，想过很多种方式去做，有想过基于nodeJs为后台，AngularJs为前台，然后自己写了各种的模块，Validator、Api...，最后的最后，发现比较费时间，还有备案等问题，后来看到很多用 **hexo** 搭建的blog，去官网看了一下有一些主题可供选择，但是到后面没想过用这个去搭建一个blog，很多原因说不上来，看了好几个这类的blog，傻傻分不清。\r\n\r\n### 构建\r\n一个偶然的情况下在知乎上面看到了关于blog的问题，有一个回答里面讲了一些 **React** 的东西，当时看下去觉得很有趣，很好玩，这让我有点兴奋了，后来脑子里有了个大概的想法：通过 **React Router** 和 **git** ，实现单页blog，而且这样我随便来个电脑都能进行coding和commits，很好阿哈。\r\n\r\n### 技术栈\r\n前端框架想过很多，上面也提到了AngularJs，目前公司是用这个贯穿整个前端的架构，有一些历史和文化的原因，最后觉得blog很多模块用不上，就抛弃了他 >_<\r\n\r\n开发使用了\r\n\r\n- **react@15.3.2**\r\n- **react-router@2.8.1**\r\n- **less@2.7.1**\r\n- **jquery@1.11.1**\r\n- **grunt@1.0.1**\r\n- **es6**\r\n- **etc...**\r\n\r\n### 最后\r\n平常很少上知乎，这次由知乎得益一些启发。\r\n当然并不是推崇什么，不过我觉得对人和事物保持着敬畏的心态，才有所得。\r\n于是乎，就有了这个blog。"}];