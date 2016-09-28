import React, { Component } from 'react';


import Header from '../components/Header.js';
import { Get } from '../components/Get.js';

console.log(Get);
export default class All extends Component {
	render (){
		return (
			<div className="content">
				<Header />
			</div>
		)
	}
}