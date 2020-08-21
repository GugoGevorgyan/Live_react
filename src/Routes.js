import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";
export default class createRoutes extends Component {
    render() {
        return (
            <Router>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Router>
        )
    }

};
