import marked from 'marked';
import React, { Component } from 'react';


export default class SingleView extends Component {
	render (){
		let v = this.props;
		return (
			<div className="list">
				<h3 className="list-title mb15">
					<a className="black f20" href={'#/article/'+v.number}>{v.title}</a>
				</h3>
				<div className="mb30">
					<span className="list-time f12">{v.created_at.substr(0,10)}</span>
					{
						v.labels.map((val,ix) => 
							<a key={ix} className="list-tag f12" style={{backgroundColor: '#'+val.color}}>{val.name}</a>
						)
					}
				</div>
				<div className="list-view mb30 f16">
					{
						marked(v.body).substr(0,marked(v.body).match(/\n/)['index']).replace(/\<(\/p|p)\>/g,'')
					}
				</div>
				<a className="f14" href={'#/article/'+v.number}>更多 +</a>
			</div>
		)
	}
}