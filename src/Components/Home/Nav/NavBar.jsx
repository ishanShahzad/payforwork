import React, { Component } from "react";
import "./NavBar.css";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-md navbar-light bg-white">
          <a class="navbar-brand" href="#">
            <img
              src="https://www.payforworks.com/images/logo_dark.png"
              alt="LOGO IMG"
              className="logo ml-0 ml-lg-5"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-5 ">
              <li class="nav-item mt-2">
                <a class="nav-link" href="#">
                  FIND JOBS
                </a>
              </li>
              <li class=" dropdown dis-none mt-3">
                <a
                  class="dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  FIND
                </a>
                <div class="dropdown-menu " aria-labelledby="navbarDropdown">
                  <a class="dropdown-item  " href="#">
                    <img
                      src="https://www.payforworks.com/images/dd-jobs.png"
                      alt="Payforworks-jobs-icon"
                      class="dd-aimg mr-3"
                    />
                    JOBS
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item " href="#">
                    <img
                      src="https://www.payforworks.com/images/dd-fls.png"
                      alt="Payforworks-freelancer-icon"
                      class="dd-aimg mr-3"
                    />
                    FREELANCERS
                  </a>
                </div>
              </li>
              <li class="nav-item mt-2">
                <a class="nav-link" href="#">
                  BROWSER FREELANCERS
                </a>
              </li>
              <li class="nav-item mt-2">
                <a class="nav-link" href="#">
                  HOW IT WORKS
                </a>
              </li>
              <li class="nav-item"></li>
              <li class="nav-item mt-2">
                <a class="nav-link" href="#">
                  SIGN UP
                </a>
              </li>
              <li class="nav-item mt-2">
                <a class="nav-link" href="#">
                  LOGIN
                </a>
              </li>
              <li class="nav-item">
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
