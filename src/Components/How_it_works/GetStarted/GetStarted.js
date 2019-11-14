import React from "react";
import "./GetStarted.scss";
function GetStarted() {
  return (
    <div className="app row-3 mb-5">
      <h1 className="h1 text-center styled-2">
        Find an expert and get your job done
      </h1>

      <a
        href="https://www.payforworks.com/user/freelancers"
        className="start-btn mb-5"
        target="_blank"
        rel="noopener noreferrer"
      >
        get started
      </a>
    </div>
  );
}
export default GetStarted;
