import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { history } from '../router';
import reducer from '../reducers';

const store = () => createStore(
    reducer,
    applyMiddleware(
        routerMiddleware(history),
        createSagaMiddleware()
    )
);

export default store();