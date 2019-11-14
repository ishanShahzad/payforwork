import React from "react";
import './Explore.scss';

const Explore = () => {
    return (
        <div className="explore">
            <div className="container-inner">
                <h3 className="explore-title text-center">Explore the knowledge Base</h3>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="inner-container">
                            <div className="cart-img">
                                <img src="./images/exploreimg1.png" className="img-fluid img1" alt="img1" />
                                <p className="cart-title" data-test="para1">Getting started</p>
                            </div>
                            <p className="cart-content" data-test="para2">Sign up and build your profile</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="inner-container">

                            <div className="cart-img">
                                <img src="./images/exploreimg2.png" className="img-fluid img2" alt="img2" />
                                <p className="cart-title" data-test="para3">Posting a job</p>
                            </div>
                            <p className="cart-content" data-test="para4">Put together your reqiurments, post a job, invite freelancers</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="inner-container">

                            <div className="cart-img">
                                <img src="./images/exploreimg3.png" className="img-fluid img3" alt="img3" />
                                <p className="cart-title" data-test="para5">Account and billing</p>
                            </div>
                            <p className="cart-content" data-test="para6">Accpount setting, subscription info, bid card</p>
                        </div>
                    </div>


                    <div className="col-md-4 ">
                        <div className="inner-container">

                            <div className="cart-img">
                                <img src="./images/exploreimg4.png" className="img-fluid img4" alt="img4" />
                                <p className="cart-title" data-test="para7">Fee structure</p>
                            </div>
                            <p className="cart-content" data-test="para8">Job fee, transaction fee, subscription fee</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="inner-container">
                            <div className="cart-img">
                                <img src="./images/exploreimg5.png" className="img-fluid img5" alt="img5" />
                                <p className="cart-title" data-test="para9">Bidding process</p>
                            </div>
                            <p className="cart-content" data-test="para10">Bid credit balance, search for a job, apply for the job</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="inner-container">
                            <div className="cart-img">
                                <img src="./images/exploreimg6.png" className="img-fluid img6" alt="img6" />
                                <p className="cart-title" data-test="para11">Types of jobs</p>
                            </div>
                            <p className="cart-content" data-test="para12">Fixed jobs and hourly jobs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Explore;