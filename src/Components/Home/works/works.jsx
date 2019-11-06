import React, { Component } from "react";
import "./work.css";
class HowItWorks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="work">
          <div>
            <p className="para paraOne">WE WORK IN THREE SIMPLE STEPS</p>
            <h1 className="heading1">See how it works</h1>
          </div>
          <div className="flex">
            <div className="items">
              <div className="heading2">
                <div>
                  <img
                    src="https://www.payforworks.com/images/hiw1.png"
                    alt="img"
                    className="img img1"
                  />
                  <h3 className="para2 paraTwo">Post a Job</h3>
                </div>
                <h1 className="digit digitOne">1</h1>
              </div>
              <div className="para3 paraThree">
                Hassle free process allows you to post a job very quickly which
                reaches to the experts
              </div>
            </div>
            <div className="items">
              <div className="heading2">
                <div>
                  <img
                    src="https://www.payforworks.com/images/hiw2.png"
                    alt="img"
                    className="img img2"
                  />
                  <h3 className="para2 paraFive">Award the job</h3>
                </div>
                <h1 className="digit digitTwo">2</h1>
              </div>
              <div className="para3 paraFour">
                Select the best offer based on the experience and the cost you
                are offered
              </div>
            </div>
            <div className="items respItem">
              <div className="heading2">
                <div>
                  <img
                    src="https://www.payforworks.com/images/hiw3.png"
                    alt="img"
                    className="img img3"
                  />
                  <h3 className="para2 paraSix">Get work done</h3>
                </div>
                <h1 className="digit digitThree">3</h1>
              </div>
              <div className="para3 paraSeven">
                Make sure that the job is finished, make the payment and leave a
                review
              </div>
            </div>
          </div>
          <div className="bottomOne">
            <div>
              <img
                src="https://www.payforworks.com/images/hiwf.png"
                alt="img"
                width="20%"
              />
              <p className="para">YOUR MONEY IS ALWAYS PROTECTED</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HowItWorks;
