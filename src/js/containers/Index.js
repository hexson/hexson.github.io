import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NProgress from 'nprogress';


import { BASE } from '../constants/Base.js';
import Nav from '../components/Nav.js';



class Index extends Component {
	// constructor (props){
	// 	super(props);
	// 	this.state = {
	// 		bgIndex: 1
	// 	}
	// }
	componentWillMount (){
		NProgress.start();
		// this.setState({
		// 	bgIndex: Math.ceil(Math.random() * 7)
		// });
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
			<div className="home-cot abs">
				<div className="home-top">
					<Nav />
				</div>
			</div>
		)
		return (
			<div className="home-cot abs">
				<div className="home-nav">
					<div className="ac f16">
						<span className="avatar mr5"></span>
						<span className="master">{BASE.master}</span>
					</div>
				</div>
				<div className="home-info">
					<div className="home-show rel ov">
						<div>
							<h2>希望世界和平</h2>
						</div>
						<span className="home-bg"></span>
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