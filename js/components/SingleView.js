import marked from 'marked';
import React, { Component } from 'react';


// import { LABELS } from '../constants/Base.js';


export default class SingleView extends Component {
	constructor (props){
		super(props);
		this.state = {
			tags: {}
		}
	}
	componentWillMount (){
		let LABELS = window.LABELS;
		if (LABELS){
			let tags = {};
			for (let i = 0; i < LABELS.length; i++){
				tags[LABELS[i].color] = LABELS[i];
			}
			this.setState({
				tags: tags
			});
		}else {
			$.ajax({
				url: 'json/labels.json',
				success: result => {
					window.LABELS = result;
					let tags = {};
					for (let i = 0; i < result.length; i++){
						tags[result[i].color] = result[i];
					}
					this.setState({
						tags: tags
					});
				},
				error: msg => {
					console.log(msg);
				}
			})
		}
	}
	componentDidMount (){
		let v = this.props;
		let html = marked(v.body).substr(0,marked(v.body).match(/\n/)['index']);
		this.refs.preview.innerHTML = html;
		// if (html.indexOf('<img src') >= 0) this.refs.preview.style.textIndent = '0px';
	}
	render (){
		let v = this.props;
		return (
			<div className="list">
				<h3 className="list-title mb15">
					<a className="black f22 title" href={'#/article/'+v.number}>{v.title}</a>
				</h3>
				<div className="mb30">
					<span className="list-time f12">{v.created_at.substr(0,10)}</span>
					{
						v.labels.map((val,ix) => 
							<a key={ix} className="list-tag f12" style={{backgroundColor: '#'+val.color, color: this.state.tags[val.color] && this.state.tags[val.color].fcolor?('#'+this.state.tags[val.color].fcolor):''}}>{val.name}</a>
						)
					}
				</div>
				<div className="list-view mb30 views" ref="preview"></div>
				<a className="f14 gray" href={'#/article/'+v.number}>查看更多 +</a>
			</div>
		)
	}
}