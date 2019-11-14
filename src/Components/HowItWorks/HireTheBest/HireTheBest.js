import React from "react";
import "./HireTheBest.css";
export default function HireTheBest() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="main1 row py-5">
          <div className="bg1 col-md-6 col-sm-12">
            <div className="py-5">
              <img className="img1" src="./1.png" alt="" />
              <img className="img2" src="./2.png" alt="" />
              <img className="img3" src="./3.png" alt="" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 pl-5">
            <h1 className="h1">Hire The Best freelancer</h1>
            <p className="p1 text-secondary">
              You will be receiving a number of proposals from a range of new
              freelancers, established companies, expert freelancers etc. You
              can browse freelancers and filter them of skills, reviews,
              location etc.
            </p>
            <h3 className="text-dark firsth3">Review proposals carefully</h3>
            <p className="p2 text-secondary">
              Take your time to go through each proposal, compare with other
              offers, schedule a call or a chat, check previous work samples
              etc.
            </p>
            <h3 className="Secondh3 text-dark">Award the job</h3>
            <p className="p3 text-secondary">
              Please select a freelancer after the detailed interview and award
              job by depositing funds in escrow. Supply all the required
              information to finish the job.
            </p>
            <button className="btn btn-lg btn-success">FIND FREELANCERS</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
