import React, { Component } from 'react';

import { BASE } from '../constants/Base.js';
import Nav from '../components/Nav.js';



export default class Index extends Component {
	render (){
		return (
			<div>
				<div className="index ac">
					<div className="avatar"></div>
					<div className="master f16">{BASE.master}</div>
					<Nav />
				</div>
			</div>
		)
	}
}