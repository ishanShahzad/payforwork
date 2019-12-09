import React, { Component } from "react";
import "./profileInfo.css";
import UserImage from "./profileInfoComponents/userImage.jsx";
import UserInfo from "./profileInfoComponents/userInfo.jsx";
import Journey from "./profileInfoComponents/journey.jsx";
class ProfileInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6 offset-lg-1 bg-white">
          <div className="jumbotron mt-3 py-3 px-4">
            <div className="row">
              <UserImage />
              <UserInfo />
            </div>
          </div>
          <Journey />
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileInfo;
