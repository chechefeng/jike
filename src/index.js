import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { hashHistory } from 'react-router';
import registerServiceWorker from './utils/registerServiceWorker';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import RouteMap from './router/routeMaps';
import "./static/css/style.css"
var createStoreWithMiddleware;
const middlewares = [thunk];
createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
let store = createStoreWithMiddleware(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <div style={{height:"100%"}} id="asda">
            <RouteMap history={hashHistory}/>
        </div>
    </Provider>,
    document.getElementById('root')
);

//资源缓存
registerServiceWorker();
