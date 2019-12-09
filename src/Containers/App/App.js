import React from "react";
import Home from "../Pages/Home/Home";
import { Route } from "react-router-dom";
import SignUp from "../../Components/Signup/Signup";
import LogIn from "../../Components/LoginPage/LoginPage";
import loginInnerPage from "../../Components/loginInnerPage/loginInnerPage.jsx";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/Signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/loginInnerPage" component={loginInnerPage} />
      </React.Fragment>
    );
  }
}

export default App;
