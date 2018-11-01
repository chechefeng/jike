import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import layout from '../layout';
import  login from "../app/containers/login/login"

class RouteMap extends React.Component {
    updateHandle() {
         console.log('每次router变化之后都会触发')
    }

    
    routerWillLeave=()=>{
       alert("离开")
    }
    render() {
        return (
            <Router history={this.props.history}  onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={layout}>
                    <IndexRoute component={login} />


                </Route>
                <Route path="login">

                </Route>

            </Router>
        )
    }
}

export default RouteMap