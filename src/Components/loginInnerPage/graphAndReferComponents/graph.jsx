import React, { Component } from "react";
import "./graph.css";
class Graph extends Component {
  state = {};
  handleProfileVisits = () => {
    const profile = document.getElementById("profile");
    const graphImg = document.getElementById("graph");
    const earning = document.getElementById("earning");
    const earningStatus = document.getElementById("earningStatus");
    earning.style.color = "black";
    // earningStatus.style.display = "none";
    earningStatus.style.opacity = "0";
    profile.style.color = "#13d272";
    // graphImg.style.display = "block";
    graphImg.style.transition = "all 1s";
    graphImg.style.opacity = "1";
  };
  handleEarningStatus = () => {
    const profile = document.getElementById("profile");
    const graphImg = document.getElementById("graph");
    const earning = document.getElementById("earning");
    const earningStatus = document.getElementById("earningStatus");
    profile.style.color = "black";
    // graphImg.style.display = "none";
    graphImg.style.opacity = "0";
    earning.style.color = "#13d272";
    earningStatus.style.transition = "all 1s";
    // earningStatus.style.display = "block";
    earningStatus.style.opacity = "1";
  };
  componentDidMount() {
    const earningStatus = document.getElementById("earningStatus");
    // earningStatus.style.display = "none";
    earningStatus.style.transition = "all 1s";
    earningStatus.style.opacity = "0";
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-5 col-sm-12 py-3 bg-white">
          <div className="graph">
            <div className="container">
              <div className="row">
                <div className="col col-sm pb-3 col-lg-4 text-nowrap">
                  <p
                    className="graphNav"
                    style={{ color: "#13d272" }}
                    id="profile"
                    onClick={this.handleProfileVisits}
                  >
                    Profile Visits
                  </p>
                </div>
                <div className="col col-sm col-lg-4 pl-0 pr-2">
                  <p
                    className="graphNav"
                    id="earning"
                    onClick={this.handleEarningStatus}
                  >
                    Earning Status
                  </p>
                </div>
              </div>
            </div>
            <img
              src="data:image/png;base64,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"
              alt=""
              className="img-thumbnail"
              id="graph"
              width="100%"
            />
            <div className="w-100" id="earningStatus">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTtxgHL-BrbQXWMTJ_h9SPrSzu8VlLWABKH84ahzA_IafjxQp&s"
                alt=""
                width="100%"
                className="earningImg img-thumbnail"
              />
              <div className="d-flex flex-wrap weeks w-100 justify-content-between">
                <p className="mb-0 week pl-0">
                  1<sup>st</sup> Week
                </p>
                <p className="mb-0 week">
                  2<sup>nd</sup> Week
                </p>
                <p className="mb-0 week">
                  3<sup>rd</sup> Week
                </p>
                <p className="mb-0 week">
                  4<sup>th</sup> Week
                </p>
                <p className="mb-0 week">
                  5<sup>th</sup> Week
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Graph;
