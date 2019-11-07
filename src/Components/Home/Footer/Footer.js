import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div id="myFooter">
        <div className="container">
          <div class="row">
            <div class="col-sm-12 col-md-4 logo">
              <img
                src="https://www.payforworks.com/images/logo_new.png"
                alt="Payforworks-logo"
                class="img-responsive"
              />
            </div>
            <div class="col-sm-2">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="https://www.payforworks.com/about">About</a>
                </li>
                <li>
                  <a href="https://www.payforworks.com/pricing">Pricing</a>
                </li>
                <li>
                  <a href="https://www.payforworks.com/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-3">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="https://www.payforworks.com/support">Help center</a>
                </li>
                <li>
                  <a href="https://www.payforworks.com/how-it-works">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="https://www.payforworks.com/terms">General terms</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-3">
              <h3>Other links</h3>
              <ul>
                <li>
                  <a href="https://www.payforworks.com/user/freelancers">
                    Find freelancers
                  </a>
                </li>
                <li>
                  <a href="https://www.payforworks.com/project/job">
                    Find jobs
                  </a>
                </li>
                <li>
                  <a href="https://www.payforworks.com/user/freelancers">
                    Top freelancers
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="social-networks">
                <h3>Social</h3>
                <div class="socials">
                  {" "}
                  <a
                    href="https://www.facebook.com/payforworks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>{" "}
                  <a
                    href="https://twitter.com/payforworks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/channel/UCMdHFgy9Ffp9irZom9v7sKg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/company/payforworks/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer_bg">
          <div class="footer">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-3 col-sm-4 fs__copy">
                    <div class="text07">© 2019 payforworks</div>
                  </div>
                  <div class="col-md-9 col-sm-8 fs__link">
                    <div class="footer_box02">
                      <ul class="sub_links">
                        <li>
                          <a href="https://www.payforworks.com/terms">Terms</a>
                        </li>
                        <li>
                          <a href="https://www.payforworks.com/privacy-policy">
                            Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
