// import $ from 'jquery';
import React, { Component } from 'react';


// import { BASE, LABELS, ISSUES } from '../constants/Base.js';
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
		let ISSUES = window.ISSUES;
		if (ISSUES && this.props.page == 1){
			let data = [];
			for (let i = 0; i < ISSUES.length; i++){
				for (let n = 0; n < ISSUES[i].labels.length; n++){
					if (ISSUES[i].labels[n].name == this.props.label){
						data.push(ISSUES[i]);
					}
				}
			}
			this.setState({
				loading: false,
				data: data
			});
			this.props.callback && this.props.callback(true);
		}else if (ISSUES && ISSUES.length < this.props.perpage){
			this.setState({
				loading: false,
				data: []
			});
			this.props.callback && this.props.callback(false);
		}else {
			$.ajax({
				// url: `https://api.github.com/repos/${BASE.master}/${BASE.master}.github.io/issues`,
				url: 'json/data_callbak.json',
				// data: {
				// 	filter: this.props.filter || 'created',
				// 	per_page: this.props.perpage || 10,
				// 	page: this.props.page || 1,
				// 	labels: this.props.label || null
				// },
				success: result => {
					// this.setState({
					// 	loading: false,
					// 	data: result
					// });
					window.ISSUES = result;
					let data = [];
					for (let i = 0; i < result.length; i++){
						for (let n = 0; n < result[i].labels.length; n++){
							if (result[i].labels[n].name == this.props.label){
								data.push(result[i]);
							}
						}
					}
					this.setState({
						loading: false,
						data: data
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