import React, {Component} from 'react';
//import logo from './logo.svg';
// import './App.css';
import AdminLanding from './Hostel_Admin_Landing/AdminLanding';
import Postupdates from './Hostel_Admin_Landing/Postupdates';
import { Navbar } from './Navbar';
import 'antd/dist/antd.css';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
          <Navbar/>
          <Switch>
            <Route path = "/admin" exact component = {AdminLanding}/>
            <Route path = "/admin/Postupdates" exact component = {AdminLanding}/>
          </Switch>
        </main>
    </Router>
  );
}

export default App;