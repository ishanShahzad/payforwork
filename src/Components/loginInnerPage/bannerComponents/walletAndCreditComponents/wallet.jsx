import React, { Component } from "react";
class Wallet extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="box d-flex py-2 rounded justify-content-around align-items-center flex-column">
          <div className="font-weight-bold">WALLET</div>
          <div className="pound">
            <span>&#163;</span> 0
          </div>
          <button className="btn ctm-btn btn-outline-dark text-secondary rounded-pill">
            View
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Wallet;
