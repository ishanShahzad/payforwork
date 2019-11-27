import React, { Component } from "react";
import Signup from "../../../Components/Home/Signup/Signup";
import Herosection from "../../../Components/Home/Herosection/Herosection";
import LoginPage from "../../../Components/LoginPage/LoginPage";
import Userpage from "../../../Components/Userpage/Userpage";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Herosection} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/me" component={Userpage} />
      </Router>
    );
  }
}
