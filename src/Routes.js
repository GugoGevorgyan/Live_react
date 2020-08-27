<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Login from "./components/Login";
=======
import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Login from "./components/login";
>>>>>>> 6d90866ef90ebe2d40990683e91331f75654cc76
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import RegisterCompany from "./components/RegisterCompany";

// import Product from "./components/product";

import example from "./components/Dashboard/example";

export default class createRoutes extends Component {
  render() {
    return (
      <Router>
        {/*<Route path='/product' component={Product}/>*/}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/example" component={example} />
        <Route path="/register-company" component={RegisterCompany}></Route>
      </Router>
    );
  }
}
