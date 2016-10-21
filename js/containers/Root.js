import React, { Component } from 'react';
import { Router, Route, IndexRoute, useRouterHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';

import App from '../components/App.js';

import '../../css/common.css';
import '../../css/nprogress.css';
import '../../css/highlight.css';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

var Index = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../containers/Index.js').default)
	}, 'index')
};
var All = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../containers/All.js').default)
	}, 'all')
};
var Archives = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../containers/Archives.js').default)
	}, 'archives')
};
var Article = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../containers/Article.js').default)
	}, 'article')
};
var Tags = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../containers/Tags.js').default)
	}, 'tags')
};
var About = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../containers/About.js').default)
	}, 'about')
};
var Search = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../containers/Search.js').default)
	}, 'about')
};


const routes = (
	<Route path="/" component={App}>
		<IndexRoute getComponent={Index} />
		<Route path="all" getComponent={All} />
		<Route path="archives" getComponent={Archives} />
		<Route path="article/:id" getComponent={Article} />
		<Route path="tags(/:tag)" getComponent={Tags} />
		<Route path="about" getComponent={About} />
		<Route path="search(/:keyword)" getComponent={Search} />
	</Route>
);


export default class Root extends Component {
	render (){
		return <Router history={appHistory} routes={routes} />
	}
}