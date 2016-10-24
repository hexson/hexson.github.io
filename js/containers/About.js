import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NProgress from 'nprogress';


import Header from '../components/Header.js';


class About extends Component {
	componentWillMount (){
		NProgress.start();
	}
	componentDidMount (){
		NProgress.done();
		this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	}
	routerWillLeave (){
		NProgress.start();
	}
	render (){
		return (
			<div className="content">
				<Header />
				<div className="mt30">
					<b className="b f16 ac abt">一个 <del>沉迷</del> 穿插<br />在魔法世界的 <del>大魔王</del> 小美工,待更...</b>
				</div>
			</div>
		)
	}
};

export default withRouter(About)