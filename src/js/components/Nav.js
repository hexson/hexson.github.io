import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

import { MENU } from '../constants/Menu.js';


class Nav extends Component {
	render (){
		return (
			<ul className="nav">
				{
					MENU.map((v,i) => 
						<li className="nav-item al rel ov" key={i}>
							<svg className="icon f30" aria-hidden="true">
								<use xlinkHref={'#' + v.icon}></use>
							</svg>
							<Link className="ml20 f14" to={v.path} activeStyle={{color: '#222222'}}>{v.name} / {v.path}</Link>
						</li>
					)
				}
			</ul>
		)
	}
}

export default withRouter(Nav)