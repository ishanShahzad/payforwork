import React, { Component } from "react";
import "./NavBar.scss";
import { Link } from 'react-router-dom';
class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top payforwork-navbar">
          <Link className="navbar-brand" to="/">
            <img
              src="https://www.payforworks.com/images/logo_dark.png"
              alt="LOGO IMG"
              className="logo ml-0 ml-lg-5"
            />
          </Link>
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
                <Link className="nav-link" to="/">
                  FIND JOBS
                </Link>
              </li>
              <li className=" dropdown dis-none mt-3">
                <Link
                  className="dropdown-toggle "
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  FIND
                </Link>
                <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item  row mr-0" to="/">
                    <img
                      src="https://www.payforworks.com/images/dd-jobs.png"
                      alt="Payforworks-jobs-icon"
                      className="dd-aimg mr-3"
                    />
                    JOBS
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item row mr-0" to="/">
                    <img
                      src="https://www.payforworks.com/images/dd-fls.png"
                      alt="Payforworks-freelancer-icon"
                      className="dd-aimg mr-3"
                    />
                    FREELANCERS
                  </Link>
                </div>
              </li>
              <li className="nav-item mt-2">
                <Link className="nav-link" to="/">
                  BROWSER FREELANCERS
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link className="nav-link" to="/howitworks">
                  HOW IT WORKS
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item mt-2">

                <Link to="/signup" className="nav-link"> SIGN UP</Link>

              </li>
              <li className="nav-item mt-2">
                <Link className="nav-link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-lg text-white"><Link to='/postjob'>POST JOBS</Link></button>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
