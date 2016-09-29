import React, { Component } from 'react';


import Header from '../components/Header.js';
import Get from '../components/Get.js';


export default class All extends Component {
	render (){
		return (
			<div className="content">
				<Header />
				<div className="all-con">
					<Get perpage="10" page="1" />
				</div>
			</div>
		)
	}
}