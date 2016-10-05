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
		// /*
		$.ajax({
			url: `https://api.github.com/repos/${BASE.master}/${BASE.master}.github.io/issues`,
			data: {
				filter: this.props.filter || 'created',
				per_page: this.props.perpage || 10,
				page: this.props.page || 1
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
		// */
		/*
		console.log('ajax success.');
		let data = DATA;
		data[1] = {};
		data[1].title = data[0].title + 2;
		data[1].labels = data[0].labels;
		data[1].created_at = data[0].created_at;
		data[1].body = data[0].body;
		data[2] = {};
		data[2].title = data[0].title + 3;
		data[2].labels = data[0].labels;
		data[2].created_at = data[0].created_at;
		data[2].body = data[0].body;
		data[3] = {};
		data[3].title = data[0].title + 4;
		data[3].labels = data[0].labels;
		data[3].created_at = data[0].created_at;
		data[3].body = data[0].body;
		let arr = this.props.page==1 ? data.slice(0,2) : this.props.page==2 ? data.slice(2) : [];
		this.setState({
			loading: false,
			data: arr
		});
		console.log(arr,!!arr.length)
		this.props.callback(!!arr.length);
		*/
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