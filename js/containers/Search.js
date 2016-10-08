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
			this.setState({
				list: [1],
				keyword: this.refs.keywordInput.value
			});
		}
	}
	render (){
		let loadBeforeText = this.state.isNextPageView ? '加载更早的文章' : '没有更多了';
		return (
			<div className="content">
				<Header />
				<div className="mt30">
					<div className="search">
						<input className="bbox f18" type="text" placeholder="~ 输入关键字搜索 ~" ref="keywordInput" onKeyUp={this.search} />
					</div>
					<div className="ac">
						{
							this.state.list.map((v,i) => 
								<Query key={i} callback={this.changeBtn} promise={$.getJSON(`https://api.github.com/search/issues?q=author:${BASE.master}+repo:${BASE.master}/${BASE.master}.github.io+` + this.state.keyword)} />
							)
						}
						<button className={this.state.btnClass} onClick={this.loadBefore}>{loadBeforeText}</button>
					</div>
				</div>
			</div>
		)
	}
}