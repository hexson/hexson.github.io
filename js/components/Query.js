// import $ from 'jquery';
import React, { Component } from 'react';


import { BASE, DATA } from '../constants/Base.js';
import Loading from '../components/Loading.js';
import Reload from '../components/Reload.js';
import SingleView from '../components/SingleView.js';


export default class Query extends Component {
	constructor (props){
		super(props);
		this.loadBefore = this.loadBefore.bind(this);
		this.search = this.search.bind(this);
		this.state = {
			loading: true,
			error: null,
			data: null,
			btnClass: 'load-before block f18 none'
		}
	}
	componentDidMount (){
		let keyword = this.props.keyword;
		// console.log(keyword);
		if (keyword !== undefined && typeof keyword !== 'undefined'){
			// this.refs.keywordInput.value = keyword;
			this.ajax(keyword);
		}
	}
	componentDidUpdate (){
		this.refs.keywordInput.value = this.props.keyword || '';
	}
	ajax (keyword,callback){
		$.ajax({
			url: `https://api.github.com/search/issues?q=author:${BASE.master}+repo:${BASE.master}/${BASE.master}.github.io+` + keyword,
			success: result => {
				this.setState({
					loading: false,
					data: result.items,
					btnClass: 'load-before block f18'
				});
				callback && callback();
			},
			error: msg => {
				this.setState({
					loading: false,
					error: msg
				})
			}
		})
	}
	loadBefore (){
		this.setState({
			btnClass: 'load-before block f18 load-before-animation'
		});
		setTimeout(() =>
			this.setState({
				btnClass: 'load-before block f18'
			})
		, 400);
	}
	changeBtn (){
		this.setState({
			isNextPageView: false,
			btnClass: 'load-before block f18'
		});
	}
	search (e){
		let keyword = this.refs.keywordInput.value;
		if (e.keyCode == 13 && keyword != ''){
			window.location.hash = '#/search/' + keyword;
			this.setState({
				loading: true,
				error: null,
				data: null,
				btnClass: 'load-before block f18 none'
			});
			this.ajax(keyword, function(){
				// window.location.hash = '#/search/' + keyword;
			});
		}
	}
	render (){
		if (this.props.keyword === undefined){
			return (
				<div className="mt30">
					<div className="search">
						<input className="bbox f18" type="text" placeholder="~ 输入关键字搜索 ~" ref="keywordInput" onKeyUp={this.search} />
					</div>
				</div>
			)
		}else if (this.state.loading){
			// console.log(1);
			return (
				<div className="mt30">
					<div className="search">
						<input className="bbox f18" type="text" placeholder="~ 输入关键字搜索 ~" ref="keywordInput" onKeyUp={this.search} />
					</div>
					<div className="ac">
						<Loading />
					</div>
				</div>
			)
		}else if (this.state.error !== null){
			// console.log(2);
			return (
				<div className="mt30">
					<div className="search">
						<input className="bbox f18" type="text" placeholder="~ 输入关键字搜索 ~" ref="keywordInput" onKeyUp={this.search} />
					</div>
					<div className="ac">
						<Reload />
					</div>
				</div>
			)
		}else {
			// console.log(3);
			return (
				<div className="mt30">
					<div className="search">
						<input className="bbox f18" type="text" placeholder="~ 输入关键字搜索 ~" ref="keywordInput" onKeyUp={this.search} />
					</div>
					<div className="ac">
						{
							this.state.data.map((v,i) => 
								<SingleView {...v} key={i} />
							)
						}
						<button className={this.state.btnClass} onClick={this.loadBefore}>{this.state.data.length ? '没有更多了' : '无搜索结果'}</button>
					</div>
				</div>
			)
		}
	}
}