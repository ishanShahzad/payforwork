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
