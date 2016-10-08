import $ from 'jquery';
import React, { Component } from 'react';


import { BASE, DATA } from '../constants/Base.js';
import Loading from '../components/Loading.js';
import SingleView from '../components/SingleView.js';


export default class List extends Component {
	constructor (props){
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: null
		}
	}
	componentDidMount (){
		// let keyword = this.props.keyword;
		// if (keyword !== null){
		// 	$.ajax({
		// 		url: `https://api.github.com/search/issues?q=author:${BASE.master}+repo:${BASE.master}/${BASE.master}.github.io+` + keyword,
		// 		success: result => {
		// 			this.setState({
		// 				loading: false,
		// 				data: result.items || result
		// 			});
		// 			this.props.callback && this.props.callback(!!result.length);
		// 		},
		// 		error: msg => {
		// 			this.setState({
		// 				loading: false,
		// 				error: msg
		// 			})
		// 		}
		// 	})
		// }
		this.props.promise.then(
			result => 
			(this.setState({loading: false, data: result.items}),
			this.props.callback()),
			msg => 
			this.setState({loading: false, error: msg})
		)
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
							<SingleView {...v} key={i} />
						)
					}
				</div>
			)
		}
	}
}