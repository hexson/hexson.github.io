import React, { Component } from 'react';


import Header from '../components/Header.js';
import Labels from '../components/Labels.js';


export default class Tags extends Component {
	render (){
		return (
			<div className="content">
				<Header />
				<div className="mt30">
					<Labels />
				</div>
			</div>
		)
	}
}