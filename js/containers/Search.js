import $ from 'jquery';
import React, { Component } from 'react';


import { BASE } from '../constants/Base.js';
import Header from '../components/Header.js';
import Query from '../components/Query.js';


export default class Search extends Component {
	constructor (props){
		super(props);
		this.loadBefore = this.loadBefore.bind(this);
		this.changeBtn = this.changeBtn.bind(this);
		this.search = this.search.bind(this);
		this.state = {
			list: [],
			isNextPageView: true,
			btnClass: 'load-before block f18 none',
			keyword: null
		}
	}
	componentDidMount (){
		this.refs.keywordInput.value = this.props.params.keyword || '';
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
		if (e.keyCode == 13){
			let keyword = this.refs.keywordInput.value
			// this.setState({
			// 	list: [1],
			// 	keyword: keyword
			// });
			window.location.href = '#/search/' + keyword;
		}
	}
	render (){
		if (this.props.params.keyword === undefined){
			return (
				<div className="content">
					<Header />
					<div className="mt30">
						<div className="search">
							<input className="bbox f18" type="text" placeholder="~ 输入关键字搜索 ~" ref="keywordInput" onKeyUp={this.search} />
						</div>
					</div>
				</div>
			)
		}
		return (
			<div className="content">
				<Header />
				<div className="mt30">
					<div className="search">
						<input className="bbox f18" type="text" placeholder="~ 输入关键字搜索 ~" ref="keywordInput" onKeyUp={this.search} />
					</div>
					<div className="ac">
						<Query callback={this.changeBtn} keyword={this.state.keyword} />
						<button className={this.state.btnClass} onClick={this.loadBefore}>没有更多了</button>
					</div>
				</div>
			</div>
		)
	}
}