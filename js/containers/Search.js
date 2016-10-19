import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NProgress from 'nprogress';


import Header from '../components/Header.js';
import Query from '../components/Query.js';


class Search extends Component {
	componentWillMount (){
		NProgress.start();
	}
	componentDidMount (){
		NProgress.done();
		this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	}
	componentDidUpdate (){
		NProgress.done();
	}
	routerWillLeave (){
		NProgress.start();
	}
	render (){
		return (
			<div className="content">
				<Header />
				<Query keyword={this.props.params.keyword} />
			</div>
		)
	}
};

export default withRouter(Search)