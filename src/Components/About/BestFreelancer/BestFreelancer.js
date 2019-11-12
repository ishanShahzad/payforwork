import React from "react";
import "./BestFreelancer.css";
function BestFreelancer() {
  return (
    <div className="app">
      <div className="container-fluid pt-5">
        <div className="row pt-5 px-0 px-lg-5 px-md-5">
          <div className="col-lg-6 col-md-12 col-sm-12 test"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 test">
            <h1 className="h1 styled ml-4 ml-lg-4 ml-md-3">
              Hire the best freelancer
            </h1>
          </div>
        </div>
        <div className="row px-5 pb-5">
          <div className=" col-lg-5 col-md-12 col-sm-12 bg-img-section test ml-lg-5">
            <div className="row test p-3">
              <div className="img-1 test"></div>
              <div className="img-2 test"></div>
              <div className="img-3 test"></div>
            </div>
          </div>
          <div className=" col-lg-6 col-md-12 col-sm-12 test px-0 py-2 px-lg-5 px-md-5 ml-lg-5 order-1 order-lg-1 order-md-0">
            <p className="styled-para text-dark">
              You will be receiving a number of proposals from a range of new
              freelancers, established companies, expert freelancers etc. You
              can browse freelancers and filter them of skills, reviews,
              location etc.
            </p>
            <h3 className="h3 styled-h3">Review proposals carefully</h3>
            <p className="styled-para text-dark">
              Take your time to go through each proposal, compare with other
              offers, schedule a call or a chat, check previous work samples
              etc.
            </p>
            <h3 className="styled-h3">Award the job</h3>
            <p className="styled-para text-dark">
              Please select a freelancer after the detailed interview and award
              the job by depositing funds in escrow. Supply all the required
              information to finish the job.
            </p>
            <a
              href="https://www.payforworks.com/user/freelancers"
              className="find-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              find freelancers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BestFreelancer;
