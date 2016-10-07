import React, { Component } from 'react';


import Header from '../components/Header.js';


export default class About extends Component {
	render (){
		return (
			<div className="content">
				<Header />
				<div className="mt30">
					<b className="b f16 ac">一个 <del>沉迷</del>穿插 在魔法世界的打字员,待更...</b>
				</div>
			</div>
		)
	}
}