import marked from 'marked';
import React, { Component } from 'react';


import Header from '../components/Header.js';
import Loading from '../components/Loading.js';
import Reload from '../components/Reload.js';
import { BASE } from '../constants/Base.js';
import Issues from '../components/Issues.js';


export default class Article extends Component {
	constructor (props){
		super(props);
		this.state = {
			issues: null,
			error: null
		}
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
	}
	componentDidUpdate (){
		this.refs.content.innerHTML = marked(this.refs.content.getAttribute('data-body'));
		window.duoshuoQuery = { short_name: BASE.master };
		(function(){
			var ds = document.createElement('script');
			ds.type = 'text/javascript';
			ds.async = true;
			ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
			ds.charset = 'UTF-8';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
		})();
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
							<span className="list-time">{data.created_at.substr(0,10)}</span>
							{
								data.labels.map((val,ix) => 
									<a key={ix} className="list-tag" style={{backgroundColor: '#'+val.color}}>{val.name}</a>
								)
							}
						</div>
						<div className="list-view f16 views" ref="content" data-body={data.body}></div>
					</div>
					<div>
						<div className="ds-thread mb10" data-thread-key={data.number} data-title={data.title} data-url={location.href}></div>
					</div>
				</div>
			)
		}
	}
}