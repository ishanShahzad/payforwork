<<<<<<< HEAD
import React from "react";
import HowItWork from "../../../Components/Home/works/works.jsx";
const Home = () => {
  return (
    <React.Fragment>
      <HowItWork />
    </React.Fragment>
  );
};

export default Home;
=======
import React, { Component } from 'react'
import NavBar from '../../../Components/Home/NavBar/NavBar'
import Signup from '../../../Components/Home/Signup/Signup'
import { BrowserRouter as Router,Route} from "react-router-dom";


export default class Home extends Component {
    render() {
        return (
            <Router>

                <NavBar/>
                
        <Route path="/Signup"exact component={Signup} />
            </Router>
        )
    }
}
>>>>>>> 42cf523bcd115c9fc0e1d1c60d788af07270fb25
