import React, { Component } from 'react';


import Header from '../components/Header.js';
import { Get } from '../components/Get.js';

Get.init();
export default class All extends Component {
	render (){
		return (
			<div className="content">
				<Header />
			</div>
		)
	}
}