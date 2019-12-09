import React, { Component } from "react";
import InvitedJobs from "../newAndInvitedJobsComponents/invitedJobs.jsx";
import "./newJobs.css";
class NewJobs extends Component {
  state = {};
  handleNewJobs = () => {
    const invitedJobs = document.getElementById("invitedJobs");
    const invitedColor = document.getElementById("invitedColor");
    const newJobs = document.getElementById("newJobs");
    const newJobsColor = document.getElementById("newJobsColor");
    invitedJobs.style.transition = "all 0.75s .25s";
    invitedColor.style.transition = "all .35s";
    invitedColor.style.color = "black";
    invitedJobs.style.opacity = 0;
    newJobs.style.transition = "all 0.75s";
    newJobs.style.opacity = 1;
    newJobsColor.style.transition = "all .35s";
    newJobsColor.style.color = "red";
  };
  handleInvitedJobs = () => {
    const invitedJobs = document.getElementById("invitedJobs");
    const invitedColor = document.getElementById("invitedColor");
    const newJobs = document.getElementById("newJobs");
    const newJobsColor = document.getElementById("newJobsColor");
    invitedJobs.style.transition = "all 0.75s .25s";
    invitedColor.style.transition = "all .35s";
    invitedColor.style.color = "red";
    invitedJobs.style.opacity = 1;
    newJobs.style.transition = "all 0.75s";
    newJobs.style.opacity = 0;
    newJobsColor.style.transition = "all .35s";
    newJobsColor.style.color = "black";
  };
  componentDidMount() {
    const invitedJobs = document.getElementById("invitedJobs");
    invitedJobs.style.opacity = 0;
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-lg mt-3 container-fluid bg-white main">
          <div className="row pl-0 pl-sm-3">
            <div
              className="d-sm-block d-flex justify-content-center col-sm-2 col-lg-1 col-12 pl-sm-0 mb-0 mt-2"
              style={{ zIndex: 2, cursor: "pointer" }}
            >
              <p
                className="new1 mb-0 text-nowrap"
                id="newJobsColor"
                onClick={this.handleNewJobs}
              >
                NEW JOBS
              </p>
            </div>
            <div
              className="col mt-2 d-sm-block d-flex justify-content-center"
              style={{ zIndex: 2, cursor: "pointer" }}
            >
              <p
                className="mb-0"
                id="invitedColor"
                onClick={this.handleInvitedJobs}
              >
                INVITED JOBS
              </p>
            </div>
          </div>
          <div id="newJobs" style={{ position: "relative ", zIndex: 2 }}>
            <hr />
            <div className="row">
              <div className="col-lg-9 col-sm-12 col-12 ">
                <h6 className="ml-2">SEO Specialist</h6>
                <div className="row">
                  <div className="col-sm-1 col-12 d-sm-block d-flex justify-content-center py-2 py-sm-0">
                    <div className="img ">
                      <img
                        className="img1 rounded-circle"
                        src="https://www.w3schools.com/w3css/img_avatar3.png"
                        alt="H"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3 py-2 py-sm-0 col-12 d-flex justify-content-center">
                    <p className="fs mb-0">Hayes Howard </p>
                    <span className="badge badge-white">
                      <img
                        className="img2"
                        src="https://qph.fs.quoracdn.net/main-qimg-65a3285cc059fdaa08c6381b921218eb.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">15 minutes ago</p>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    {" "}
                    <p className="fs mb-0">0 Proposal</p>
                  </div>
                  <div className="col-sm-1 col-lg-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">Remote</p>
                  </div>
                  <div className="col-sm-1 col-12 col-lg-1 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    <p className="fs mb-0">Hourly</p>
                  </div>
                  <div className="col-sm-1 col-12 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    {" "}
                    <p className="badge mb-0 badge-pill badge-success">Open</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12 pl-0 d-flex flex-column align-items-center align-items-sm-end ">
                <button className="btn btn-sm btn-outline-primary send">
                  SEND PROPOSAL
                </button>
                <h6 className=" mt-2 mb-0">&#163;16/hr</h6>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-lg-9 col-sm-12 col-12 ">
                <h6 className="ml-2">Resume Update & Format</h6>
                <div className="row">
                  <div className="col-sm-1 col-12 d-sm-block d-flex justify-content-center py-2 py-sm-0">
                    <div className="img ">
                      <img
                        className="img1 rounded-circle"
                        src="https://www.w3schools.com/w3css/img_avatar3.png"
                        alt="H"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3 py-2 py-sm-0 col-12 d-flex justify-content-center">
                    <p className="fs mb-0">Harris Thompson </p>
                    <span className="badge badge-white">
                      <img
                        className="img2"
                        src="https://qph.fs.quoracdn.net/main-qimg-65a3285cc059fdaa08c6381b921218eb.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">1 Hour ago</p>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    {" "}
                    <p className="fs mb-0">2 Proposal</p>
                  </div>
                  <div className="col-sm-1 col-lg-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">Remote</p>
                  </div>
                  <div className="col-sm-1 col-12 col-lg-1 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    <p className="fs mb-0">Fixed</p>
                  </div>
                  <div className="col-sm-1 col-12 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    {" "}
                    <p className="badge mb-0 badge-pill badge-success">Open</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12 pl-0 d-flex flex-column align-items-center align-items-sm-end ">
                <button className="btn btn-sm btn-outline-primary send">
                  SEND PROPOSAL
                </button>
                <h6 className=" mt-2 mb-0">&#163;80</h6>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-lg-9 col-sm-12 col-12 ">
                <h6 className="ml-2">Influencer Marketing</h6>
                <div className="row">
                  <div className="col-sm-1 col-12 d-sm-block d-flex justify-content-center py-2 py-sm-0">
                    <div className="img ">
                      <img
                        className="img1 rounded-circle"
                        src="https://www.w3schools.com/w3css/img_avatar3.png"
                        alt="H"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3 py-2 py-sm-0 col-12 d-flex justify-content-center">
                    <p className="fs mb-0">Shelly Thompson </p>
                    <span className="badge badge-white">
                      <img
                        className="img2"
                        src="https://qph.fs.quoracdn.net/main-qimg-65a3285cc059fdaa08c6381b921218eb.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">2 Hours ago</p>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    {" "}
                    <p className="fs mb-0">11 Proposal</p>
                  </div>
                  <div className="col-sm-1 col-lg-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">Remote</p>
                  </div>
                  <div className="col-sm-1 col-12 col-lg-1 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    <p className="fs mb-0">HOURLY</p>
                  </div>
                  <div className="col-sm-1 col-12 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    {" "}
                    <p className="badge mb-0 badge-pill badge-success">Open</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12 pl-0 d-flex flex-column align-items-center align-items-sm-end ">
                <button className="btn btn-sm btn-outline-primary send">
                  SEND PROPOSAL
                </button>
                <h6 className=" mt-2 mb-0">&#163;12/hr</h6>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-lg-9 col-sm-12 col-12 ">
                <h6 className="ml-2">
                  2D Animators for Youtube explanatory videos
                </h6>
                <div className="row">
                  <div className="col-sm-1 col-12 d-sm-block d-flex justify-content-center py-2 py-sm-0">
                    <div className="img ">
                      <img
                        className="img1 rounded-circle"
                        src="https://www.w3schools.com/w3css/img_avatar3.png"
                        alt="H"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3 py-2 py-sm-0 col-12 d-flex justify-content-center">
                    <p className="fs mb-0">Ellie Steve </p>
                    <span className="badge badge-white">
                      <img
                        className="img2"
                        src="https://qph.fs.quoracdn.net/main-qimg-65a3285cc059fdaa08c6381b921218eb.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">3 Hours ago</p>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    {" "}
                    <p className="fs mb-0">10 Proposal</p>
                  </div>
                  <div className="col-sm-1 col-lg-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">Remote</p>
                  </div>
                  <div className="col-sm-1 col-12 col-lg-1 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    <p className="fs mb-0">HOURLY</p>
                  </div>
                  <div className="col-sm-1 col-12 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    {" "}
                    <p className="badge mb-0 badge-pill badge-success">Open</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12 pl-0 d-flex flex-column align-items-center align-items-sm-end ">
                <button className="btn btn-sm btn-outline-primary send">
                  SEND PROPOSAL
                </button>
                <h6 className=" mt-2 mb-0">&#163;22/hr</h6>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-lg-9 col-sm-12 col-12 ">
                <h6 className="ml-2">Translator</h6>
                <div className="row">
                  <div className="col-sm-1 col-12 d-sm-block d-flex justify-content-center py-2 py-sm-0">
                    <div className="img ">
                      <img
                        className="img1 rounded-circle"
                        src="https://www.w3schools.com/w3css/img_avatar3.png"
                        alt="H"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3 py-2 py-sm-0 col-12 d-flex justify-content-center">
                    <p className="fs mb-0">Reine H </p>
                    <span className="badge badge-white">
                      <img
                        className="img2"
                        src="https://qph.fs.quoracdn.net/main-qimg-65a3285cc059fdaa08c6381b921218eb.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">4 Hours ago</p>
                  </div>
                  <div className="col-sm-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    {" "}
                    <p className="fs mb-0">9 Proposal</p>
                  </div>
                  <div className="col-sm-1 col-lg-2 col-12 py-2 py-sm-0 d-sm-block d-flex justify-content-center">
                    <p className="fs mb-0">Remote</p>
                  </div>
                  <div className="col-sm-1 col-12 col-lg-1 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    <p className="fs mb-0">HOURLY</p>
                  </div>
                  <div className="col-sm-1 col-12 d-sm-block py-2 py-sm-0 d-flex justify-content-center">
                    {" "}
                    <p className="badge mb-0 badge-pill badge-success">Open</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12 pl-0 d-flex flex-column align-items-center align-items-sm-end ">
                <button className="btn btn-sm btn-outline-primary send">
                  SEND PROPOSAL
                </button>
                <h6 className=" mt-2 mb-0">&#163;15/hr</h6>
              </div>
            </div>
            <hr />
          </div>
          <InvitedJobs id="invitedJobs" />
        </div>
      </React.Fragment>
    );
  }
}

export default NewJobs;
