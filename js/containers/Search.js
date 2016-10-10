import React, { Component } from 'react';


import Header from '../components/Header.js';
import Query from '../components/Query.js';


export default class Search extends Component {
	render (){
		return (
			<div className="content">
				<Header />
				<Query keyword={this.props.params.keyword} />
			</div>
		)
	}
}