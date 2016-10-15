import React, { Component } from 'react';
import { BASE } from '../constants/Base.js';


import Issues from '../components/Issues.js';


export default class App extends Component {
	// constructor (props){
	// 	super(props);
	// 	this.state = {
	// 		issues: null
	// 	}
	// }
	componentWillMount (){
		this.baiduStatistics();
		this.duoshuoComment();
		// Issues.prototype.componentDidMount(this);
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
	duoshuoComment (){
		window.duoshuoQuery = { short_name: BASE['duoshuo'] };
		(function(){
			var ds = document.createElement('script');
			ds.type = 'text/javascript';
			ds.async = true;
			ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
			ds.charset = 'UTF-8';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
		})();
	}
	render (){
		return (
			<div>
				<div>{this.props.children}</div>
			</div>
		)
	}
}