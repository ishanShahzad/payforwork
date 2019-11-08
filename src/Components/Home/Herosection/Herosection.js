import React, { Component } from "react";
import "./Herosection.css";
export default class Herosection extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12 col-lg-6 hs1_conte mt-5 ">
              <div
                className="ml-5 mr-5 hs2_conte"
                style={{ marginTop: "65px" }}
              >
                <h2 className="head">Top quality freelancers</h2>
                <h3 className="heading">Incredible Job results</h3>
                <p className="mt-5 hrp" style={{ fontSize: "19px" }}>
                  Upturn your business through the top quality freelancers
                  listed here. 100's of jobs done every week on all categories
                  of web development, Wordpress development, etc
                </p>

                {/* a  ke css be hy */}

                <a className="btn button mb-5" href="https://www.payforworks.com">
                  <span>Browse Freelancers</span>
                </a>
              </div>
            </div>
            <div className=" col-md-12 col-lg-6 ">
              <img
                className="img-fluid"
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
