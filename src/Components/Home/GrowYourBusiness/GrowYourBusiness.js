import React from 'react';
import "./GrowYourBusiness.scss";
// import React from "react";
function GrowYourBusiness() {
  return (
    <React.Fragment>
      <div className="grow-your-business">

        <h2 className="grow-your-business-heading">Grow your business through our experts</h2>
        <div className="container cont">
          <div className="row mb-5">
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body web-card d-flex justify-content-center align-items-center flex-column">
                  <img alt="..." className="web-developers" src="https://www.payforworks.com/images/hmn1.png" />
                  <img alt="..." className="web-hover" src="https://www.payforworks.com/images/hmn1-hover.png" />
                  <h6 className="mt-3 text-uppercase category-h6">Web Developers</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body designers-card d-flex justify-content-center align-items-center flex-column">
                  <img alt="..." className="designers" src="https://www.payforworks.com/images/hmn2.png" />
                  <img alt="..." className="designers-hover" src="https://www.payforworks.com/images/hmn2-hover.png" />
                  <h6 className="mt-3 text-uppercase category-h6">Designers</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body marketing-card d-flex justify-content-center align-items-center flex-column">
                  <img alt="..." className="marketing" src="https://www.payforworks.com/images/hmn3.png" />
                  <img alt="..." className="marketing-hover" src="https://www.payforworks.com/images/hmn3-hover.png" />
                  <h6 className="mt-3 text-uppercase category-h6">Marketing Experts</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body writers-card d-flex justify-content-center align-items-center flex-column">
                  <img alt="..." className="writers" src="https://www.payforworks.com/images/hmn4.png" />
                  <img alt="..." className="writers-hover" src="https://www.payforworks.com/images/hmn4-hover.png" />
                  <h6 className="mt-3 text-uppercase category-h6">Writers</h6>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body admin-assistants-card d-flex justify-content-center align-items-center flex-column">
                  <img alt="..." className="admin-assistants" src="https://www.payforworks.com/images/hmn5.png" />
                  <img alt="..." className="admin-assistants-hover" src="https://www.payforworks.com/images/hmn5-hover.png" />
                  <h6 className="mt-3 text-uppercase category-h6">Admin Assistants</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body social-media-experts-card d-flex justify-content-center align-items-center flex-column">
                  <img alt="..." className="social-media-experts" src="https://www.payforworks.com/images/hmn8.png" />
                  <img alt="..." className="social-media-experts-hover" src="https://www.payforworks.com/images/hmn8-hover.png" />
                  <h6 className="mt-3 text-uppercase category-h6">Social Media Experts</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body customer-support-card d-flex justify-content-center align-items-center flex-column">
                  <img alt="..." className="customer-support" src="https://www.payforworks.com/images/hmn6.png" />
                  <img alt="..." className="customer-support-hover" src="https://www.payforworks.com/images/hmn6-hover.png" />
                  <h6 className="mt-3 text-uppercase category-h6">Customer Support </h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body accountants-card d-flex justify-content-center align-items-center flex-column">
                  <img alt="..." className="accountants" src="https://www.payforworks.com/images/hmn7.png" />
                  <img alt="..." className="accountants-hover" src="https://www.payforworks.com/images/hmn7-hover.png" />
                  <p className="mt-3 text-uppercase category-h6">Accountants</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default GrowYourBusiness;



// const add = (x, y) => {
//   return x+y
// }
// const addListItem = (list, item) => {
//   list.push(item)
//   return list
// }
// module.exports = {
//   add,
//   addListItem
// }