import React, { Component } from "react";
import "./Herosection.scss";
export default class Herosection extends Component {
  render() {
    return (
      <div className="container-fluid junaid1">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12 col-lg-6 hs1_conte mt-5 ">
              <div className="hs2-dot-img"></div>

              <div
                className="ml-5  mr-5 hs2_conte"
                style={{ marginTop: "65px" }}
              >
                <h2 className="head">Top quality freelancers</h2>
                <h3 className="heading">Incredible Job results</h3>
                <p className="mt-5 hrp">
                  Upturn your business through the top quality freelancers
                  listed here. 100's of jobs done every week on all categories
                  of web development, Wordpress development, etc
                </p>

                {/* a  ke css be hy */}

                <button className="btn button">
                  <span>Browse Freelancers</span>
                </button>
              </div>
              <div className="hs2-dot2-img"></div>
            </div>
            <div className=" col-md-12 col-lg-6 container-fluid hs2_px ">
              <img
                className="img-fluid pb-4 mb-5 "
                src="https://www.payforworks.com/images/hs2_px.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
