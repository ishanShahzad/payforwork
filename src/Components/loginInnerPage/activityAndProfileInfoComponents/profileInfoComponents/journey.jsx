import React, { Component } from "react";
class Journey extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-8 col-xs-12 col-xl-7 mb-3 d-flex justify-content-center align-items-center">
              <div>
                <h3 className="h4 font-weight-bold mb-0">
                  Start Journey With Us
                </h3>
                <p className="mb-0 text-secondary">
                  A lot more to reach the heights. Win more works !
                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 col-xl-5 col-xs-12 pb-lg-0 pb-3 d-flex justify-content-center align-items-center">
              <button className="btn btn-primary rounded-pill">
                Browser Jobs
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Journey;
