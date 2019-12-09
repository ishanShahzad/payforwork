import React, { Component } from "react";
class UserInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-sm-9 col-md-8 col-xs-12 col-xl-9 col-lg-11">
          <h3 className="h3 font-weight-bold mt-lg-3 mt-xl-0 text-center text-sm-left">
            Ali Hamza
          </h3>
          <div className="row ml-0">
            <div className="col-xl-4 col-xs-4 col-lg-3 col-sm-6 p-sm-0">
              <p className="profileText mb-0 text-light rounded-pill bg-success pad-1 ">
                Total Jobs <span className="color pl-1">0</span>
              </p>
            </div>
            <div className="col-xl-4 ml-lg-2 ml-xl-0 col-xs-4 col-sm-6 col-lg-4 p-sm-0 ">
              <p className="profileText mb-0 mt-2 mt-sm-0 text-light rounded-pill bg-success pad-1">
                Completed Jobs <span className="color pl-1">0</span>
              </p>
            </div>
            <div className="col-xl-4 col-xs-4 col-sm-6 ml-xl-0 ml-lg-2 col-lg-4 p-sm-0">
              <p className="profileText mb-0 mt-2 mt-lg-0 text-light rounded-pill bg-success pad-1">
                Job Invitation <span className="color pl-1">0</span>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserInfo;
