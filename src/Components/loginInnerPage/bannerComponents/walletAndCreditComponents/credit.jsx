import React, { Component } from "react";
class Credit extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="box ml-3 d-flex py-2 rounded justify-content-around align-items-center flex-column">
          <div className="font-weight-bold">BID CREDIT</div>
          <div className="pound">
            <span className="bg-dark mt-2 ml-1 rounded-circle copy text-center">
              C
            </span>{" "}
            <span className="ml-4">15</span>
          </div>
          <button className="btn btn-outline-dark ctm-btn text-secondary rounded-pill">
            Add Credit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Credit;
