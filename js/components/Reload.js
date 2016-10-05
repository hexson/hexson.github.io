import React, { Component } from 'react';


export default class Reload extends Component {
	reload (){
		window.location.reload();
	}
	render (){
		return (
			<div className="ac">
				<span className="lh18 block f16 mb15">阿哦出错了</span>
				<span className="reload f14" onClick={this.reload}>重新加载</span>
			</div>
		)
	}
}