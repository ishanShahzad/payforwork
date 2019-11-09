import React from "react";
import './Explore.scss';

const Explore = () =>{
    return(
        <div className="explore">
            <div className="container">
                <h3 className="explore-title text-center">Explore the knowledge Base</h3>
                <div className="explore-container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 shadow d-flex flex-column align-items-center">
                        <div className="cart-img">
                            <img src="./images/exploreimg1.png" className="img-fluid" />
                            <p className="cart-title">Getting started</p>
                        </div>
                        <p className="cart-content text-center">Sign up and build your profile</p>
                    </div>
                    <div className="col-md-3 offset-md-1 margin shadow d-flex flex-column align-items-center">
                    <div className="cart-img">
                            <img src="./images/exploreimg2.png" className="img-fluid" />
                            <p className="cart-title">Posting a job </p>
                        </div>
                        <p className="cart-content text-center">Put together your reqiurments, post a job, invite freelancers </p>
                    </div>
                    <div className="col-md-3 offset-md-1 shadow d-flex flex-column align-items-center">
                    <div className="cart-img">
                            <img src="./images/exploreimg3.png" className="img-fluid" />
                            <p className="cart-title">Account and billing </p>
                        </div>
                        <p className="cart-content text-center"> Accpount setting, subscription info, bid card </p>
                    </div>
        
                    <div className="col-md-3 shadow mt-2 d-flex flex-column align-items-center">
                    <div className="cart-img">
                            <img src="./images/exploreimg4.png" className="img-fluid" />
                            <p className="cart-title"> Fee structure </p>
                        </div>
                        <p className="cart-content text-center"> Job fee, transaction fee, subscription fee </p>
                    </div>
                    <div className="col-md-3 mt-2 offset-md-1 shadow d-flex flex-column align-items-center">
                    <div className="cart-img">
                            <img src="./images/exploreimg5.png" className="img-fluid" />
                            <p className="cart-title">Bidding process </p>
                        </div>
                        <p className="cart-content text-center"> Bid credit balance, search for a job, apply for the job </p>
                    </div>
                    <div className="col-md-3 mt-2 offset-md-1 shadow d-flex flex-column align-items-center">
                    <div className="cart-img">
                            <img src="./images/exploreimg6.png" className="img-fluid" />
                            <p className="cart-title"> Types of jobs  </p>
                        </div>
                        <p className="cart-content text-center"> Fixed jobs and hourly jobs </p>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}
export default Explore;