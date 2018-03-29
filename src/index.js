import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NProgress from './utils/nprogress';
import Routes from './router';
import store from './store';

NProgress.start();

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('hexson')
)