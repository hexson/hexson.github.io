import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NProgress from 'nprogress';
import marked from 'marked';


import Header from '../components/Header.js';


class About extends Component {
	componentWillMount (){
		NProgress.start();
	}
	componentDidMount (){
		NProgress.done();
		this.refs.log.innerHTML = marked('基于 **React** 单页博客\r\n\r\n持续更新中...\r\n\r\n## 日志\r\n\r\n### v1.2.3\r\n\r\n> 关于和搜索界面优化，增加update日志\r\n\r\n> 代码高亮CSS更换为 `monokai-sublime`\r\n\r\n### v1.2.2\r\n\r\n> 优化jQuery载入慢的问题,采用cdn加速处理\r\n\r\n### v1.2.1\r\n\r\n> 优化代码高亮Js载入慢,改采用cdn加速处理\r\n\r\n> css样式优化\r\n\r\n### v1.2.0\r\n\r\n> 新增代码高亮Js及对应的css皮肤\r\n\r\n### v1.1.1\r\n\r\n> 页面切换的进度条去除 `showSpinner` 等设置\r\n\r\n### v1.1.0\r\n\r\n> 新增页面切换的进度条,更新一些css\r\n\r\n### v1.0.1\r\n\r\n> 新增数据储存及一些优化\r\n\r\n### v1.0.0\r\n\r\n> 列表/标签/关于/搜索等模块开发完成,第一版发布');
		this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	}
	routerWillLeave (){
		NProgress.start();
	}
	render (){
		let bgColor = '#f3f3f3';
		return (
			<div className="content">
				<Header />
				<div className="mt30">
					<p className="bbox pt15 pr30 pb15 pl30" style={{backgroundColor: bgColor, borderRadius: '6px'}}>
						<b className="f16 ac abt">一个 <del>沉迷</del> 穿插<br />在魔法世界的 <del>大魔王</del> 小美工,待更...</b>
					</p>
					<div className="list-view bbox mb30 views mt30 pt15 pr30 pb15 pl30" style={{backgroundColor: bgColor, borderRadius: '6px'}} ref="log"></div>
				</div>
			</div>
		)
	}
};

export default withRouter(About)