import React, { Component } from 'react';


import Header from '../components/Header.js';
import Get from '../components/Get.js';


export default class All extends Component {
	constructor (props){
		super(props);
		this.state = {
			list: [1]
		}
	}
	loadBefore (){
		let list = this.state.list.slice(0);
		list.push(list[list.length-1]+1);
		console.log(this.state.list,list)
		this.setState({
			list: list
		})
	}
	render (){
		return (
			<div className="content">
				<Header />
				<div className="all-con ac">
					{
						this.state.list.map((v,i) => 
							<Get key={i} perpage="2" page={v} />
						)
					}
					<button className="load-before block f18" onClick={this.loadBefore.bind(this)}>加载更早的文章</button>
				</div>
			</div>
		)
	}
}