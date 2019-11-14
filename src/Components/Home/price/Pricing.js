import React from "react";
import "./pricing.scss"
class Pricing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid pricingSection">
          <div className="container " style={{ width: "95vw" }}>
            <div className="container">
              <div class="subpage mbr_pln ">

                <div class="subpage_bg">

                  <div class="support_bx">

                    <div class="pricing_wrps">

                      <div class="row prcing_row justify-content-center ">

                        <div class="col-xs-12 col-md-12 col-lg-5 text-center text-lg-left mr-2   pricing_hds">

                          <div class="prc_Title mr-4">

                            <h2 className="price" style={{ fontSize: "64px" }}>Pricing</h2>
                            <h3 className="prc-title begin mr-4" style={{ fontSize: "32px" }}>Begin leveraging your profile today</h3>
                            <span className="simple" style={{ fontSize: "16px" }}>
                              Simple and transparent pricing plans to help you get
                              connected.
                        </span>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 pricing_bxs">
                          <div className="pricing_switch d-flex justify-content-center">
                            <div className="monthly mon">Monthly</div>
                            <div className="center">
                              <input type="checkbox" name="" value="" />
                            </div>
                            <div className="yearly disabled">Yearly</div>
                          </div>
                          <div className="price_boxes row">
                            <div className="col-sm-6 col-md-6 price_boxx pric__free">
                              <div className="inner">
                                <h3 className="Basic">Basic</h3> <h4 className="forever">Free forever</h4>
                                <ul>
                                  <li>
                                    <span className="icon">15 credits/month </span>
                                  </li>
                                  <li>
                                    <span className="Payment">Payment protection through escrow system</span>
                                  </li>
                                </ul>
                                <div className="plan">
                                  <a href="user/signup.html">
                                    <button type="button" className="mbpl_a button">SIGN UP</button>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 mt-3 mt-sm-0">
                              <div className="inner pro_info">
                                <h3 className="Pro">Pro</h3>
                                <h4 className="pro dolor">£12<sup>/mo</sup>
                                </h4>
                                <ul>
                                  <li>
                                    <span className="ok">40 credits/month</span>
                                  </li>
                                  <li>
                                    <span className="protection">Payment protection through escrow system</span>
                                  </li>
                                  <li>
                                    <span className="special">PRO special badge on your profile</span>
                                  </li>
                                </ul>
                                <div className="plan">
                                  <a href="user/signup.html">
                                    <button type="button" className="mbpl_a button1">SIGNUP</button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pricing;
