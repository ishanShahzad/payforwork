import React from "react";
import "./App.css";
import Home from "../Pages/Home/Home";
import { Route } from "react-router-dom";
import SignUp from "../../Components/Home/Signup/Signup";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/Signup" component={SignUp} />
      </React.Fragment>
    );
  }
}

export default App;
