import React, { Component } from "react";
class FreelanceAreas extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-2 bg-white col-sm-6 col-xl-3 pb-3 pb-sm-0 py-md-3 py-lg-4 d-flex flex-column justify-content-around align-items-center">
          <button className="btn btn-outline-dark mt-sm-0 mt-2 rounded-pill">
            WORKSPACE
          </button>
          <button className="btn mt-3 btn-outline-dark rounded-pill">
            BROWSE JOBS
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default FreelanceAreas;
