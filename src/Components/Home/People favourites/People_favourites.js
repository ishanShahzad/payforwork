import React, { Component } from "react";
import "./People_favourites.css";
export default class People_favourites extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="people_fav">
          <div class="container-fluid py-5">
            <h1 class="text-center py-2">People Favorite</h1>
            <h6 class="text-center py-2">
              Top hired freelancers <br />
              <br />
              Get your work done , from small changes to large build
            </h6>
            <div class="row py-5">
              <div class="col-md-3 col-sm-6">
                <img
                  src="https://www.payforworks.com/images/pfv_1.png"
                  alt="img1"
                />
                <h4 class="font-weight-bold py-2">WordPress development</h4>
                <p class="adeel text-success">Find Resources</p>
              </div>
              <div class="col-md-3 col-sm-6">
                <img
                  src="https://www.payforworks.com/images/pfv_2.png"
                  alt="img1"
                />
                <h4 class="font-weight-bold py-2">Website Design</h4>
                <p class="adeel text-success">Find Resources</p>
              </div>
              <div class="col-md-3 col-sm-6">
                <img
                  src="https://www.payforworks.com/images/pfv_3.png"
                  alt="img1"
                />
                <h4 class="font-weight-bold py-2">Logo Design</h4>
                <p class="adeel text-success">Find Resources</p>
              </div>
              <div class="col-md-3 col-sm-6">
                <img
                  src="https://www.payforworks.com/images/pfv_4.png"
                  alt="img1"
                />
                <h4 class="font-weight-bold py-2">Seo Experts</h4>
                <p class="adeel text-success">Find Resources</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
