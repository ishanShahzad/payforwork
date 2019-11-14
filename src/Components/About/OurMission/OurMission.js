import React from "react";
import "./OurMission.css";

function OurMission() {
  return (
    <div className="App">
      <div className="container-fluid bg-img">
        <div className="row pl-5">
          <div className="col-lg-6 col-md-8 col-12 pt-5 pl-5">
            <h3 className=" h4 heading ml-0 ml-sm-3">Our Mission</h3>
            <h1 className="h1 heading-big mt-4 mr-5 ml-0 ml-sm-3">
              We act as a <span style={{ color: "#2AC783" }}> matchmaker</span>{" "}
              between <span style={{ color: "#2AC783" }}> talent</span> and{" "}
              <span style={{ color: "#2AC783" }}>business</span>, ultimately
              bringing in efficiency and{" "}
              <span style={{ color: "#2AC783" }}> improved</span> work
              environment.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
