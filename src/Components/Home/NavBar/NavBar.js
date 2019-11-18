import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <div>
            <Link to="/Signup">Signup</Link>
                this is nav bar
            </div>
        )
    }
}
