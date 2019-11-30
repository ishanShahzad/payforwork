import React from "react";
import Home from "../Pages/Home/Home";
import { Route } from "react-router-dom";
import SignUp from "../../Components/Signup/Signup";
import LogIn from "../../Components/LoginPage/LoginPage";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/Signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </React.Fragment>
    );
  }
}

export default App;
