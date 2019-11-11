import React, { Component } from "react";
import "./Junaid.css";
export default class junaid extends Component {
  render() {
    return (
      <div className="mt-5 container hw_tabcont">
        <div className="row">
          <div className="col-lg-6 col-md-12 coi-mar">
            <div className=" akd">
              <div className="andot">
                <span></span>
              </div>
              <div className="mt-3"></div>
              <h2 class="hw_mtitle ">Find expert freelancers</h2>
              <img
                className="img-fluid s2d-img"
                src="https://www.payforworks.com/images/hwk1.png"
                alt=""
              />
              <p>
                On payforworks, we provide you with a range of experts from UI
                designers, web programmers, artists, accountants and more.
              </p>
              <h3>Start by posting a job</h3>
              <p>
                Post a job with all the details about the work gets done. This
                will be looking by the experts who registered with us and will
                give you competent offers.
              </p>
              <div class="h_divider"></div>
              <div className="button2">
                <span class="hwlink">Post a job</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12  s1d-img">
            <img
              className="img-fluid mt-3"
              src="https://www.payforworks.com/images/hwk1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
