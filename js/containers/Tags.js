import React, { Component } from 'react';


import Header from '../components/Header.js';
import Labels from '../components/Labels.js';
import Tag from '../components/Tag.js';


export default class Tags extends Component {
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
	componentWillMount (){
		console.log(1);
		this.setState({
			list: [1],
			isNextPageView: true,
			btnClass: 'load-before block f18 none'
		})
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
						{
							this.state.list.map((v,i) => 
								<Tag key={i} perpage="10" page={v} label={this.props.params.tag} callback={this.changeBtn} />
							)
						}
						<button className={this.state.btnClass} onClick={this.loadBefore}>{loadBeforeText}</button>
					</div>
				</div>
			)
		}
	}
}