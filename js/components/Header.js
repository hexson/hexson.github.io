import React, { Component } from 'react';

import { BASE } from '../constants/Base.js';
import Nav from '../components/Nav.js';


export default class Header extends Component {
	render (){
		return (
			<div className="header ac">
				<div className="master f16">
					<b className="ac">{BASE.master}</b>
				</div>
				<Nav />
			</div>
		)
	}
}