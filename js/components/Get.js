import $ from 'jquery';
import marked from 'marked';
import React, { Component } from 'react';


import { BASE } from '../constants/Base.js';
import Loading from '../components/Loading.js';


export default class Get extends Component {
	constructor (props){
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: null
		}
	}
	componentDidMount (){
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
				})
			},
			error: msg => {
				this.setState({
					loading: false,
					error: msg
				})
			}
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
				<div className="ac">
					<span className="lh18 block f16 mb15">阿哦出错了</span>
					<span className="reload f14" onClick={this.reload}>重新加载</span>
				</div>
			)
		}else {
			return (
				<div>
					{
						this.state.data.map((v,i) => 
							<div key={i}>
								<h3>{v.title}</h3>
								{
									console.log(marked(v.body))
								}
							</div>
						)
					}
				</div>
			)
		}
	}
}