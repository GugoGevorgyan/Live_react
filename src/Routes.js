import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";

export default class createRoutes extends Component {
    render() {
        let promis = fetch(url,{
            method:'get',
            // method:'post',
            // body: formdata,
        }).then((r)=>{
            if(r.ok){
                return r;
            }
            throw new Error('invalid status code exav')
        })
        promis
            .then(r=>{
                console.log(r.text())
            })
        return (
            <Router>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Router>


        )
    }

};
