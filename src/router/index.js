import React, { Component } from 'react';
import { Router, Route, Switch, Redirect, IndexRoute } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import Loadable from 'react-loadable';
import QueueAnim from 'rc-queue-anim';
import Home from '../app/Home';
import { userinfo, menu } from '../constants';

import './index.less';

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
        return (
            <Router history={history}>
                <div className="container">
                    <div className="left-views">
                        <QueueAnim delay={200}>
                            <img key="a" className="avatar" src={ userinfo.avatar } />
                            <h3 key="b" className="title">{ userinfo.title }</h3>
                            <div key="c" className="description">{ userinfo.description }</div>
                            <div key="d" className="link">
                                <Link to="/home">日志</Link>
                                <Link to="/class">分类</Link>
                                <Link to="/tags">标签</Link>
                            </div>
                            <ul key="e" className="nav">
                                {
                                    menu.map(
                                        (v, i) =>
                                        <li key={i}>
                                            <NavLink to={v.path} activeClassName="active"><i className={`fas fa-${v.icon}`}></i> { v.name }</NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                        </QueueAnim>
                    </div>
                    <div className="right-views">
                        { routes }
                    </div>
                </div>
            </Router>
        )
    }
}

export { history };