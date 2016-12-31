import React, { Component } from 'react';

import { BASE } from '../constants/Base.js';
import Nav from '../components/Nav.js';


export default class Header extends Component {
	render (){
		return (
			<div className="header ac">
				<div className="master f16">
					<span className="avatar"></span>
					<b className="ac">{BASE.master}</b>
				</div>
				<Nav />
			</div>
		)
	}
}