import React, { Component } from 'react';
import { BASE } from '../constants/Base.js';


import Issues from '../components/Issues.js';


export default class App extends Component {
	componentWillMount (){
		this.baiduStatistics();
		Issues.prototype.componentDidMount(this.props);
	}
	baiduStatistics (){
		if (location.host.indexOf('hexson') >= 0){
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement('script');
				var s = document.getElementsByTagName('script')[0];
				hm.src = '//hm.baidu.com/hm.js?' + BASE['baidu'];
				s.parentNode.insertBefore(hm, s);
			})();
		}
	}
	render (){
		return (
			<div>
				<div>{this.props.children}</div>
			</div>
		)
	}
}