import React, { Component } from 'react';
import { Router, Route, Switch, Redirect, IndexRoute } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import Loadable from 'react-loadable';
import Home from '../app/Home';

const history = createHashHistory();

const exact = true;

const router = {
    '/post': {
        component: Loadable({
            loader: () => import('../app/Post'),
            loading: () => <div>loading</div>
        }),
        exact
    }
}

const routes = (
    <Switch>
        <Route path='/' exact component={Home} />
        {
            Object.keys(router).map((path, key) => <Route key={key} path={path} exact={router[path].exact} component={router[path].component} />)
        }
        {/* <Redirect from="/" to="/home" /> */}
        <Route component={() => <b>not found</b>} />
    </Switch>
);

export default class Routes extends Component {
    render() {
        return <Router history={history}>{ routes }</Router>
    }
}

export { history };