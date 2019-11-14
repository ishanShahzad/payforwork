import React from "react";
import Home from "../Pages/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "../../Components/Home/Signup/Signup";
import LoginPage from "../../Components/LoginPage/LoginPage";
import NavBar from '../../Components/CommonComponents/NavBar/NavBar';
import Footer from '../../Components/CommonComponents/Footer/Footer';
import HowItWorks from "../Pages/How_it_works/How_it_works";
import Pricing from "../../Components/Home/price/Pricing";
import Privacy from "../../Components/Privacy/privacy";
// import postJob from "../../Components/Home/PostJob/postJob";
class App extends React.Component {

  render() {
    return (

      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={LoginPage} />
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/privacy" component={Privacy} />




          {/* <Route path="/postjob" component={postJob} /> */}





        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

