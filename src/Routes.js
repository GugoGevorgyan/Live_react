import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import example from "./components/Dashboard/example";

export default class createRoutes extends Component {

    render() {
        return (
            <Router>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/example" component={example}/>
            </Router>
        )
    }

};