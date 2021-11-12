import React, {Component} from 'react';
//import logo from './logo.svg';
// import './App.css';
import AdminLanding from './AdminLanding';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
          {/* Navbar */}
          <Navbar/>
          <Switch>
            <Route path = "/admin" exact component = {AdminLanding}/>
            <Route  component = {Default}/>            
          </Switch>
        </main>
    </Router>
  );
}

export default App;