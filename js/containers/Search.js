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
			btnClass: 'load-before block f18 none'
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
				list: [1]
			});
			window.location.href = '#/search/' + this.refs.keywordInput.value;
		}
	}
	render (){
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
								<Query key={i} callback={this.changeBtn} keyword={this.props.params.keyword} />
							)
						}
						<button className={this.state.btnClass} onClick={this.loadBefore}>没有更多了</button>
					</div>
				</div>
			</div>
		)
	}
}