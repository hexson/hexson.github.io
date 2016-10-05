import React, { Component } from 'react';


import Header from '../components/Header.js';
import Labels from '../components/Labels.js';
import Tag from '../components/Tag.js';


export default class Tags extends Component {
	render (){
		if (this.props.params.tag === undefined){
			return (
				<div className="content">
					<Header />
					<div className="mt30">
						<Labels />
					</div>
				</div>
			)
		}else {
			return (
				<div className="content">
					<Header />
					<div className="mt30">
						<p className="ac f18 mb30">- {this.props.params.tag} -</p>
						<Tag />
					</div>
				</div>
			)
		}
	}
}