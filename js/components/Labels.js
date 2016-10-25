// import $ from 'jquery';
import React, { Component } from 'react';


import { BASE, LABELS } from '../constants/Base.js';
import Loading from '../components/Loading.js';
import List from '../components/List.js';


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
	label (label){
		this.props.callback && this.props.callback();
		window.location.href = '#/tags/' + label;
	}
	render (){
		if (this.state.loading){
			return (
				<Loading />
			)
		}else if (this.state.error !== null){
			return (
				<Reload />
			)
		}else {
			return (
				<div className="ac">
					{
						this.state.data.map((v,i) => 
							<a key={i} className="tags-label" href="javascript:;" onClick={this.label.bind(this,v.name)} style={{backgroundColor: '#'+v.color, color: v.fcolor?('#'+v.fcolor):''}}>{v.name}</a>
						)
					}
				</div>
			)
		}
	}
}