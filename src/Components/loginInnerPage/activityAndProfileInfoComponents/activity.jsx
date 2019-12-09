import React, { Component } from "react";
import "./activity.css";
class Activity extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-5 col-sm-12 bg-white">
          <h5 className="h5 text-secondary mt-3 font-weight-bold mb-0">
            My Recent Activity
          </h5>
          <div className="border text-secondary d-flex justify-content-between border-top-0 border-left-0 border-right-0 mt-5 w-100">
            <span>Earned</span>
            <span className="activityColor">&#163;0</span>
          </div>
          <div className="border text-secondary d-flex justify-content-between border-top-0 border-left-0 border-right-0 my-3 w-100">
            <span>Bought</span>
            <span className="activityColor">0 credits</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Activity;
