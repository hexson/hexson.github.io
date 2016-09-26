import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

import { MENU } from '../constants/Menu.js';


class Nav extends Component {
	render (){
		return (
			<ul>
				{
					MENU.map((v,i) => 
						<li key={i}>
							<Link className="f14" to={v.path}>{v.name}</Link>
						</li>
					)
				}
			</ul>
		)
	}
}

export default withRouter(Nav)