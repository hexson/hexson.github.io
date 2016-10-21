// import $ from 'jquery';
import React, { Component } from 'react';


import { BASE, LABELS } from '../constants/Base.js';
import Loading from '../components/Loading.js';
import Reload from '../components/Reload.js';
import SingleView from '../components/SingleView.js';


export default class Tag extends Component {
	constructor (props){
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: null
		}
	}
	// componentWillMount (){
	// 	// init
	// 	this.props.initCallback && this.props.initCallback();
	// }
	componentDidMount (){
		// init
		this.props.initCallback && this.props.initCallback();
		// ajax
		$.ajax({
			url: `https://api.github.com/repos/${BASE.master}/${BASE.master}.github.io/issues`,
			data: {
				filter: this.props.filter || 'created',
				per_page: this.props.perpage || 10,
				page: this.props.page || 1,
				labels: this.props.label || null
			},
			success: result => {
				this.setState({
					loading: false,
					data: result
				});
				this.props.callback && this.props.callback(!!result.length);
			},
			error: msg => {
				this.setState({
					loading: false,
					error: msg
				})
			}
		})
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