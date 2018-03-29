import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nprogress from './nprogress';

export default combineReducers({
    nprogress,
    routing: routerReducer
});