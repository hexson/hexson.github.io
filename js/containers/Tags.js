import React, { Component } from 'react';


import Header from '../components/Header.js';
import Labels from '../components/Labels.js';
import Tag from '../components/Tag.js';


export default class Tags extends Component {
	constructor (props){
		super(props);
		this.state = {
			list: [1],
			isNextPageView: true,
			btnClass: 'load-before block f18 none'
		}
	}
	render (){
		if (this.props.params.tag === undefined){
			return (
				<div className="content">
					<Header />
					<div className="mt30">
						<Labels />
					</div>
				</div>
			)
		}else {
			let loadBeforeText = this.state.isNextPageView ? '加载更早的文章' : '没有更多了';
			return (
				<div className="content">
					<Header />
					<div className="mt30">
						<p className="ac f18 mb30">- {this.props.params.tag} -</p>
						<Tag />
						<button className={this.state.btnClass} onClick={this.loadBefore}>{loadBeforeText}</button>
					</div>
				</div>
			)
		}
	}
}