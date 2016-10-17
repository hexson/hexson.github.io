import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NProgress from 'nprogress';


import { BASE } from '../constants/Base.js';
import Nav from '../components/Nav.js';



class Index extends Component {
	componentWillMount (){
		NProgress.configure({ showSpinner: false });
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
			<div>
				<div className="index ac">
					<div className="avatar"></div>
					<div className="master f16">{BASE.master}</div>
					<Nav />
				</div>
			</div>
		)
	}
};

export default withRouter(Index)