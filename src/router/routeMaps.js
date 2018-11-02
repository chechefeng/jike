import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Layout from '../layout';
import  Home from "../app/containers/home/index.jsx"
import  Login from "../app/containers/login/login"
class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }


    routerWillLeave = () => {
        alert("离开")
    }

    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}/>
                </Route>

                <Route path="login" component={Login}/>
            </Router>
        )
    }
}

export default RouteMap