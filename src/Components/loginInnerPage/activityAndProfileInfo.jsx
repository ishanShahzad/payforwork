import React, { Component } from "react";
import Activity from "./activityAndProfileInfoComponents/activity.jsx";
import ProfileInfo from "./activityAndProfileInfoComponents/profileInfo.jsx";
import "./activityAndProfileInfo.css";
class ActivityAndProfileInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="mt-3">
          <div className="row">
            <Activity />
            <ProfileInfo />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ActivityAndProfileInfo;
