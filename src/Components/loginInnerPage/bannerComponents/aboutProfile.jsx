import React, { Component } from "react";
import "./aboutProfile.css";
class AboutProfile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-4 col-6 bg-white">
          <div className="row mt-4">
            <div className="col-12  ">
              <p className="mb-0 text-secondary d-flex justify-content-between">
                Profile Completion{" "}
                <span className="font-weight-bold text-dark">30%</span>
              </p>
            </div>
            <div className="col-12 ">
              <div className="line">
                <div className="line-green"></div>
              </div>
            </div>
          </div>
          <div className="row pt-sm-3">
            <div className="col-xs-12 col-sm-7 ">
              <p className="mb-0 pt-2 pt-sm-0 h5 text-sm-left text-center font-weight-bold">
                Your account is basic
              </p>
              <p className="mb-0 mt-1 text-sm-left text-center text-secondary">
                why upgrade?
              </p>
            </div>
            <div className="col-xs-12 text-sm-left text-center pt-sm-0 py-2  col-sm-5">
              <button className="btn btn-outline-dark rounded-pill">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutProfile;
