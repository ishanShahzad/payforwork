import React, { Component } from "react";
import "./userInfo.css";
class UserInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-2 col-xl-2 col-6 py-4 arrow relative ">
          <h1 className="mb-0">hey ali!</h1>
          <p className="mb-0">last visited 6 mins ago</p>
        </div>
      </React.Fragment>
    );
  }
}

export default UserInfo;
