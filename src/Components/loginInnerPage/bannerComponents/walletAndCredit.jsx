import React, { Component } from "react";
import Wallet from "./walletAndCreditComponents/wallet.jsx";
import Credit from "./walletAndCreditComponents/credit.jsx";
import "./walletAndCredit.css";
class WalletAndCredit extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-xl-3 col-sm-6 col-lg-4 d-flex bg-white justify-content-around py-2">
          <Wallet />
          <Credit />
        </div>
      </React.Fragment>
    );
  }
}

export default WalletAndCredit;
