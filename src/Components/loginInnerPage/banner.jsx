import React, { Component } from "react";

import UserInfo from "./bannerComponents/userInfo.jsx";
import AboutProfile from "./bannerComponents/aboutProfile.jsx";
import WalletAndCredit from "./bannerComponents/walletAndCredit.jsx";
import FreelanceAreas from "./bannerComponents/freelanceAreas.jsx";
class Banner extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <UserInfo />
          <AboutProfile />
          <WalletAndCredit />
          <FreelanceAreas />
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
