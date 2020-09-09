import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import RegisterCompany from "./components/RegisterCompany";
import Reg from "./components/Reg";
import example from "./components/Dashboard/example";
import Forgot from "./components/forgot";

export default class createRoutes extends Component {
  render() {
    return (
      <Router>
        {/*<Route path='/product' component={Product}/>*/}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/*<Route path="/reg" component={Reg} />*/}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/example" component={example} />
        <Route path="/registerCompany" component={RegisterCompany} />
        <Route path="/forgot" component={Forgot}/>
      </Router>
    );
  }
}
