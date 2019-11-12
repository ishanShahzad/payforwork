import React, { Component } from "react";
import "./People_favourites.css";
export default class PeopleFavourites extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div class="people_fav">
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
        </div> */}








        <div class="ppl_favr"> 
        <div class="container contain"> 
          <div class="pfv_title"> 
          <h2>People favourites</h2>
          <h4>Top hired freelancers <br/>
            Get your work done , from small changes to large build</h4>
            </div> 
           <div class="pfv_row row"> 
           <div class="col-lg-3 col-md-6 col-sm-6 pfv_col">
              <div class="pfv_item"> <div class="pfv_block"> 
              <div class="pfv_img"> 
              <img src="https://www.payforworks.com/images/pfv_1.png"
               alt="Payforworks-wordpress-development-icon" class="img-responsive"/>
                </div> <div class="pfv_ct"> 
                <a href="/">
                  <h3>WordPress development</h3></a>
                   <a href="/">Find resources 
                   <img src="https://www.payforworks.com/images/g_arrow.png" alt="Payforworks-arrow-icon"/></a> 
                   </div> </div> </div> </div> <div class="col-lg-3 col-md-6  col-sm-6 pfv_col">
                      <div class="pfv_item"> <div class="pfv_block">
                         <div class="pfv_img"> <img src="https://www.payforworks.com/images/pfv_2.png" 
                         alt="Payforworks-website-design-icon" class="img-responsive"/>
                          </div> <div class="pfv_ct"> 
                          <a href="/">
                            <h3>Website design</h3></a> 
                            <a href="/">
                              Find resources <img src="https://www.payforworks.com/images/g_arrow.png" 
                              alt="Payforworks-arrow-icon"/></a> </div> </div>
                               </div> </div> <div class="col-lg-3 col-md-6 col-sm-6 pfv_col"> 
                               <div class="pfv_item"> <div class="pfv_block"> <div class="pfv_img">
                                  <img src="https://www.payforworks.com/images/pfv_3.png"
                                   alt="Payforworks-logo-design-icon" class="img-responsive"/>
                                    </div> <div class="pfv_ct"> 
            <a href="/">
              <h3>Logo design</h3></a>
             <a href="/">Find resources
              <img src="https://www.payforworks.com/images/g_arrow.png" alt="Payforworks-arrow-icon"/></a> 
              </div> </div> </div> </div> <div class="col-lg-3 col-md-6  col-sm-6  pfv_col"> <div class="pfv_item"> 
              <div class="pfv_block"> <div class="pfv_img"> <img src="https://www.payforworks.com/images/pfv_4.png"
               alt="Payforworks-seo-experts-icon" class="img-responsive"/>
                </div> <div class="pfv_ct"> <a href="https://www.payforworks.com/user/freelancers?skill=SEO,SEO expert">
                  <h3>SEO Experts</h3></a>
                   <a href="/">Find resources
                    <img src="https://www.payforworks.com/images/g_arrow.png" alt="Payforworks-arrow-icon"/></a> 
                    </div> </div> </div> </div> </div> </div> </div>
      </React.Fragment>
    );
  }
}
