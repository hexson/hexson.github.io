import $ from 'jquery';
import React, { Component } from 'react';


import { BASE, DATA } from '../constants/Base.js';
import Loading from '../components/Loading.js';
import Reload from '../components/Reload.js';
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
		// /*
		if (window.issues && this.props.page == 1){
			this.setState({
				loading: false,
				data: window.issues
			});
			this.props.callback && this.props.callback(true);
		}else if (window.issues && window.issues.length < this.props.perpage){
			this.setState({
				loading: false,
				data: []
			});
			this.props.callback && this.props.callback(false);
		}else {
			$.ajax({
				url: `https://api.github.com/repos/${BASE.master}/${BASE.master}.github.io/issues`,
				data: {
					filter: this.props.filter || 'created',
					per_page: this.props.perpage || 10,
					page: this.props.page || 1
				},
				success: result => {
					window.issues = result;
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
		// */
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