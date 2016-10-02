import $ from 'jquery';
import React, { Component } from 'react';


import { BASE, LABELS } from '../constants/Base.js';
import Loading from '../components/Loading.js';


export default class Labels extends Component {
	constructor (props){
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: null
		}
	}
	componentDidMount (){
		// $.ajax({
		// 	url: `https://api.github.com/repos/${BASE.master}/${BASE.master}.github.io/labels`,
		// 	data: {},
		// 	success: result => {
		// 		this.setState({
		// 			loading: false,
		// 			data: result
		// 		})
		// 	},
		// 	error: msg => {
		// 		this.setState({
		// 			loading: false,
		// 			error: msg
		// 		})
		// 	}
		// })
		this.setState({
			loading: false,
			data: LABELS
		})
	}
	reload (){
		window.location.reload();
	}
	render (){
		if (this.state.loading){
			return (
				<Loading />
			)
		}else if (this.state.error !== null){
			return (
				<div>
					<span className="lh18 block f16 mb15">阿哦出错了</span>
					<span className="reload f14" onClick={this.reload}>重新加载</span>
				</div>
			)
		}else {
			return (
				<div className="ac">
					{
						this.state.data.map((v,i) => 
							<a key={i} className="tags-label" href="" style={{backgroundColor: '#'+v.color}}>{v.name}</a>
						)
					}
				</div>
			)
		}
	}
}