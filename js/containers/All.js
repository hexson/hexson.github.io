import React, { Component } from 'react';


import Header from '../components/Header.js';
import Get from '../components/Get.js';


export default class All extends Component {
	constructor (props){
		super(props);
		this.loadBefore = this.loadBefore.bind(this);
		this.changeBtn = this.changeBtn.bind(this, false);
		this.state = {
			list: [1],
			isNextPageView: true,
			btnClass: 'load-before block f18'
		}
	}
	loadBefore (){
		if (this.state.isNextPageView){
			let list = this.state.list.slice(0);
			list.push(list[list.length-1]+1);
			console.log(typeof this.setState);
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
		this.setState({
			isNextPageView: false
		});
	}
	render (){
		var loadBeforeText = this.state.isNextPageView ? '加载更早的文章' : '没有更多了';
		return (
			<div className="content">
				<Header />
				<div className="all-con ac">
					{
						this.state.list.map((v,i) => 
							<Get key={i} perpage="2" page={v} callback={this.changeBtn} />
						)
					}
					<button className={this.state.btnClass} onClick={this.loadBefore}>{loadBeforeText}</button>
				</div>
			</div>
		)
	}
}