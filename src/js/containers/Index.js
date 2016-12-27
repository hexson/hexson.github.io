import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NProgress from 'nprogress';


import { BASE } from '../constants/Base.js';
import Nav from '../components/Nav.js';



class Index extends Component {
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
			<div className="">
				<div className="home-cot abs">
					<div className="ac f16">
						<span className="avatar mr5"></span>
						<span className="master">{BASE.master}</span>
					</div>
				</div>
			</div>
		)
		return (
			<div>
				<div className="index ac">
					<div className="avatar"></div>
					<div className="master f16">{BASE.master}</div>
					<Nav />
				</div>
				<div className="ng2-link ac">
					@React By Hexson | <a href="/ng">Angular 2 版</a> | <a href="/vue">Vue 2 版</a>
				</div>
			</div>
		)
	}
};

export default withRouter(Index)