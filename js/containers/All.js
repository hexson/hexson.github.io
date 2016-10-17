import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NProgress from 'nprogress';


import Header from '../components/Header.js';
import List from '../components/List.js';


class All extends Component {
	constructor (props){
		super(props);
		this.loadBefore = this.loadBefore.bind(this);
		this.changeBtn = this.changeBtn.bind(this);
		this.state = {
			list: [1],
			isNextPageView: true,
			btnClass: 'load-before block f18 none'
		}
	}
	componentDidMount (){
		NProgress.done();
		this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	}
	routerWillLeave (){
		NProgress.start();
	}
	loadBefore (){
		if (this.state.isNextPageView){
			let list = this.state.list.slice(0);
			list.push(list[list.length-1]+1);
			// console.log(typeof this.setState);
			this.setState({
				list: list
			})
		}else {
			this.setState({
				btnClass: 'load-before block f18 load-before-animation'
			});
			setTimeout(() =>
				this.setState({
					btnClass: 'load-before block f18'
				})
			, 400);
		}
	}
	changeBtn (isNextPageView){
		// console.log(isNextPageView);
		this.setState({
			isNextPageView: isNextPageView,
			btnClass: 'load-before block f18'
		});
	}
	render (){
		let loadBeforeText = this.state.isNextPageView ? '加载更早的文章' : '没有更多了';
		// console.log(this.state.isNextPageView);
		return (
			<div className="content">
				<Header />
				<div className="all-con">
					{
						this.state.list.map((v,i) => 
							<List key={i} perpage="10000" page={v} callback={this.changeBtn} />
						)
					}
					<button className={this.state.btnClass} onClick={this.loadBefore}>{loadBeforeText}</button>
				</div>
			</div>
		)
	}
};

export default withRouter(All)