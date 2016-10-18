import marked from 'marked';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NProgress from 'nprogress';


import Header from '../components/Header.js';
import Loading from '../components/Loading.js';
import Reload from '../components/Reload.js';
import { BASE } from '../constants/Base.js';
import Issues from '../components/Issues.js';


class Article extends Component {
	constructor (props){
		super(props);
		this.state = {
			issues: null,
			error: null
		}
	}
	componentWillMount (){
		window.scrollTo(0, 0);
		NProgress.start();
	}
	componentDidMount (){
		if (window.issues){
			this.setState({
				issues: window.issues
			});
		}else {
			Issues.prototype.componentDidMount(this);
		}
		// this.refs.content.innerHTML = marked(this.refs.content.body);
		if (this.refs.ds) window.DUOSHUO.EmbedThread(this.refs.ds);
		NProgress.done();
		this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	}
	routerWillLeave (){
		NProgress.start();
	}
	componentDidUpdate (){
		this.refs.content.innerHTML = marked(this.refs.content.getAttribute('data-body'));
		window.DUOSHUO.EmbedThread(this.refs.ds);
	}
	render (){
		if (this.state.issues === null){
			return (
				<div className="article-pt80">
					<Loading />
				</div>
			)
		}else if (this.state.error !== null){
			return (
				<div className="article-pt80">
					<Reload />
				</div>
			)
		}else {
			var data;
			for (let i = 0; i < this.state.issues.length; i++){
				let v = this.state.issues[i];
				if (v.number == this.props.params.id){
					data = v;
					break;
				}
			}
			return (
				<div className="content">
					<Header />
					<div className="list ac mt20">
						<h3 className="list-title mb15">
							<a className="black f20" href="javascript:;">{data.title}</a>
						</h3>
						<div className="mb30">
							<span className="list-time f12">{data.created_at.substr(0,10)}</span>
							{
								data.labels.map((val,ix) => 
									<a key={ix} className="list-tag f12" style={{backgroundColor: '#'+val.color}}>{val.name}</a>
								)
							}
						</div>
						<div className="list-view f16 views" ref="content" data-body={data.body}></div>
					</div>
					<div>
						<div className="ds-thread mb10" ref="ds" data-thread-key={data.number} data-title={data.title} data-url={location.href}></div>
					</div>
				</div>
			)
		}
	}
};

export default withRouter(Article)