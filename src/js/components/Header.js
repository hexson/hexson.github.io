import React, { Component } from 'react';

import { BASE } from '../constants/Base.js';
import Nav from '../components/Nav.js';


export default class Header extends Component {
	handleClick (){
		window.location.href = '#/'
	}
	render (){
		return (
			<div className="header ac">
				<div className="master f16">
					<b className="ac" onClick={this.handleClick}>{BASE.master}</b>
				</div>
				<Nav />
			</div>
		)
	}
}