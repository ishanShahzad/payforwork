import React, { Component } from 'react';


class Pricing extends Component {
    
    render() { 
        return (  
            <div>
        <div class="container py-5">
      
          
          <header className="text-center mb-5 ">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <h1 className="price">Pricing</h1>
                <h2 className="begin">Begin leveraging your profile today</h2>
                <p className="simple">Simple and transparent pricing plans to help you get connected.</p>
              </div>
            </div>
          </header>
          
      
      
      
          <div class="row text-center align-items-end">
            
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="white p-5 rounded-lg shadow">
                <h1 className="Basic h6 text-uppercase font-weight-bold mb-4">Basic</h1>
                <h2 className="forever h1 font-weight-bold text-white">Free forever</h2>
      
                <div className="custom-separator my-4 mx-auto bg-white"></div>
      
                <ul className="list-unstyled my-5 text-small text-left text-white">
                  <li className="mb-3 icon">
                    <i className=" fa fa-check mr-2 text-white"></i> 15 credits/month</li>
                  <li className="mb-3 Payment">
                    <i className="fa fa-check mr-2 text-white"></i>Payment protection escrow system</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-white"></i> </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                   
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    
                  </li>
                </ul>
                <a href="#" className="button btn btn-primary btn-block p-2 shadow rounded-pill">SIGN UP</a>
              </div>
            </div>
        
      
      
            
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="white p-5 rounded-lg shadow">
                <h1 className="Pro h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                <h2 className="dolor h1 font-weight-bold text-white">$399<span className="text-small font-weight-normal ml-2">/ month</span></h2>
      
                <div className="custom-separator my-4 mx-auto bg-white"></div>
      
                <ul className="list-unstyled my-5 text-small text-left font-weight-normal text-white">
                  <li className="mb-3 credits">
                    <i className="fa fa-check mr-2 text-primary"></i> 40 credits/month</li>
                  <li className="mb-3 protection">
                    <i className="fa fa-check mr-2 text-primary"></i>Payment protection escrow system</li>
                  <li className="mb-3 special">
                    <i className="fa fa-check mr-2 text-primary"></i> PRO special badge on your profile</li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i></li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i></li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    
                  </li>
                </ul>
                <a href="#" className="button1 btn btn-primary btn-block p-2 shadow rounded-pill">SIGN UP</a>
              </div>
            </div>
           
      
      
            
            <div className="col-lg-4">
              <div className="white p-5 rounded-lg shadow">
                <h1 className="Enterprise h6 text-uppercase font-weight-bold mb-4">Enterprise</h1>
                <h2 className="dolor1 h1 font-weight-bold text-white">$899<span className="text-small font-weight-normal ml-2 ">/ month</span></h2>
      
                <div className="custom-separator my-4 mx-auto bg-white"></div>
      
                <ul className="list-unstyled my-5 text-small text-left font-weight-normal text-white">
                  <li className="mb-3 month">
                    <i className="fa fa-check mr-2 text-primary"></i> 40 credits/month</li>
                  <li className="mb-3 escrow">
                    <i className="fa fa-check mr-2 text-primary"></i> Payment protection escrow system</li>
                  <li className="mb-3 badge">
                    <i className="fa fa-check mr-2 text-primary"></i> PRO special badge on your profile</li>
                  <li className="mb-3 month11">
                    <i className="fa fa-check mr-2 text-primary"></i> 40 credits/month</li>
                  <li className="mb-3 badge11">
                    <i className="fa fa-check mr-2 text-primary"></i> PRO special badge on your profile</li>
                  <li className="mb-3 profile">
                    <i className="fa fa-check mr-2 text-primary"></i> PRO special badge on your profile</li>
                </ul>
                <a href="#" className="button22 btn btn-primary btn-block p-2 shadow rounded-pill">SIGN UP</a>
              </div>
            </div>
            
      
          </div>
        </div>
      </div>
        );
    }
}
 
export default Pricing;