import React, { Component } from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.payforworks.com/images/logo_dark.png"
              alt="LOGO IMG"
              className="logo ml-0 ml-lg-5"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5 ">
              <li className="nav-item mt-2">
                <a className="nav-link" href="/">
                  FIND JOBS
                </a>
              </li>
              <li className=" dropdown dis-none mt-3">
                <a
                  className="dropdown-toggle "
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  FIND
                </a>
                <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <a className="dropdown-item  row mr-0" href="/">
                    <img
                      src="https://www.payforworks.com/images/dd-jobs.png"
                      alt="Payforworks-jobs-icon"
                      className="dd-aimg mr-3"
                    />
                    JOBS
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item row mr-0" href="/">
                    <img
                      src="https://www.payforworks.com/images/dd-fls.png"
                      alt="Payforworks-freelancer-icon"
                      className="dd-aimg mr-3"
                    />
                    FREELANCERS
                  </a>
                </div>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" href="/">
                  BROWSER FREELANCERS
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" href="/">
                  HOW IT WORKS
                </a>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item mt-2">
                <a className="nav-link" href="/">
                  <Link to="/signup"> SIGN UP</Link>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" href="/">
                  <Link to="/login">LOGIN</Link>
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-lg text-white">POST JOBS</button>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
