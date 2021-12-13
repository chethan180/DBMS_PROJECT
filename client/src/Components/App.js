import React, {Component} from 'react';
//import logo from './logo.svg';
// import './App.css';
import AdminLanding from './Hostel_Admin_Landing/AdminLanding';
import Postupdates from './Hostel_Admin_Landing/Postupdates';
import  Navbar  from './Student_Landing/navibar';
import MessAdminLanding from './Mess_Admin_Landing/AdminLanding';
import StudentLanding from '../Components/Student_Landing/StudentLanding';
import MessPostupdates from './Mess_Admin_Landing/Postupdates';
import 'antd/dist/antd.css';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import SignUp from './Student_Landing/Auth/Auth';

function App() {
  return (
    <Router>
      <main>
          <Navbar/>
          <Switch>
            <Route path = "/auth" exact component = {SignUp} />

            <Route path = "/admin1" exact component = {MessAdminLanding}/>
            <Route path = "/admin1/Postupdates" exact component = {MessAdminLanding}/>

            <Route path = "/admin" exact component = {AdminLanding}/>
            <Route path = "/admin/Postupdates" exact component = {AdminLanding}/>
            <Route path = "/admin/Allotment" exact component = {AdminLanding}/>

            <Route path = "/student" exact component = {StudentLanding}/>
            <Route path = "/student/Messpage" exact component = {StudentLanding}/>
            <Route path = "/student/complaints" exact component = {StudentLanding}/>
            {/* <Route path = "/admin/Postupdates" exact component = {AdminLanding}/> */}
          </Switch>
        </main>
    </Router>
  );
}

export default App;