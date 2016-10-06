import React, { Component } from 'react';


import Header from '../components/Header.js';


export default class About extends Component {
	render (){
		return (
			<div className="content">
				<Header />
				<div className="mt30">
					<b className="b f16 ac">一个<del>经常</del>喜欢穿插于现实和理想之间的打字员...</b>
				</div>
			</div>
		)
	}
}