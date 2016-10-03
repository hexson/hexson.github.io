import $ from 'jquery';
import marked from 'marked';
import React, { Component } from 'react';


import { BASE, DATA } from '../constants/Base.js';
import Loading from '../components/Loading.js';


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
				page: this.props.page || 1,
				labels: this.props.labels || null
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
							<div className="list" key={i}>
								<h3 className="list-title mb15 f20">{v.title}</h3>
								<div className="mb30">
									<span className="list-time">{v.created_at.substr(0,10)}</span>
									{
										v.labels.map((val,ix) => 
											<a key={ix} className="list-tag" style={{backgroundColor: '#'+val.color}}>{val.name}</a>
										)
									}
								</div>
								<div className="list-view mb30 f16">
									{
										marked(v.body).substr(0,marked(v.body).match(/\n/)['index']).replace(/\<(\/p|p)\>/g,'')
									}
								</div>
								<a className="f14" href={'#/article/'+v.color}>更多 +</a>
							</div>
						)
					}
				</div>
			)
		}
	}
}