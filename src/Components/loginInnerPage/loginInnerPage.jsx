import React, { Component } from "react";
import Navbar from "../common_components/Nav/NavBar.jsx";
import Banner from "./banner.jsx";
import ActivityAndProfileInfo from "./activityAndProfileInfo.jsx";
import GraphAndRefer from "./graphAndRefer.jsx";
import NewAndInvitedJobs from "./newAndInvitesJobs.jsx";
import "./loginInnerpage.css";
class LogInInnerPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container inner-content">
          <Banner />
          <ActivityAndProfileInfo />
          <GraphAndRefer />
          <NewAndInvitedJobs />
        </div>
      </React.Fragment>
    );
  }
}

export default LogInInnerPage;
