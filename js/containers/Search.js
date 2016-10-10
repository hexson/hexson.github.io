import React, { Component } from 'react';


import Header from '../components/Header.js';
import Query from '../components/Query.js';


export default class Search extends Component {
	// constructor (props){
	// 	super(props);
	// 	this.loadBefore = this.loadBefore.bind(this);
	// 	this.changeBtn = this.changeBtn.bind(this);
	// 	this.search = this.search.bind(this);
	// 	this.valueCallback = this.valueCallback.bind(this);
	// 	this.state = {
	// 		list: [],
	// 		isNextPageView: true,
	// 		btnClass: 'load-before block f18 none',
	// 		keyword: null
	// 	}
	// }
	// componentDidMount (){
	// 	this.props.params.keyword = '';
	// 	console.log(this.props.params.keyword);
	// }
	// valueCallback (){
	// 	// this.refs.keywordInput.value = this.props.params.keyword || '';
	// }
	// loadBefore (){
	// 	this.setState({
	// 		btnClass: 'load-before block f18 load-before-animation'
	// 	});
	// 	setTimeout(() =>
	// 		this.setState({
	// 			btnClass: 'load-before block f18'
	// 		})
	// 	, 400);
	// }
	// changeBtn (){
	// 	this.setState({
	// 		isNextPageView: false,
	// 		btnClass: 'load-before block f18'
	// 	});
	// }
	// search (e){
	// 	if (e.keyCode == 13){
	// 		let keyword = this.refs.keywordInput.value;
	// 		this.setState({
	// 			keyword: keyword
	// 		});
	// 		window.location.href = '#/search/' + keyword;
	// 	}
	// }
	reset (){
		console.log(1);
	}
	render (){
		return (
			<div className="content">
				<Header />
				<Query keyword={this.props.params.keyword} />
			</div>
		)
	}
}