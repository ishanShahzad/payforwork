import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link className="ml-2" to="/Signup">
          Signup
        </Link>
        <Link className="ml-2 mr-1" to="/login">
          login
        </Link>
        this is nav bar
      </div>
    );
  }
}
