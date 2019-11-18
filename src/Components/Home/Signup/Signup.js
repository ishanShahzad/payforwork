import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
export default class Signup extends Component {
  render() {
    return (
      <div container-fluid>
        <div className="container-fluid  sign">
          <h1 className="text-center heading">SIGN UP</h1>
          <div className="container-fluid text-center">
            <p>
              Already Have An Acount? <Link to="/login">Log In</Link>
            </p>
          </div>

          <div className="container-fluid  mini  rounded">
            <div className="pt-5 ">
              <div className="container-fluid text-center">
                <div
                  className="btn  mt-2 p-2 font-weight-bold px-5 bt py-2 hov "
                  style={{ backgroundColor: "#2a5297", color: "white" }}
                >
                  <i className="fa fa-facebook" />

                  <span className="mr-3">|&nbsp; Login With Facebook</span>
                </div>
                &nbsp;
                <div
                  className="btn text-white pr-3 mt-2 mr-3 bt font-weight-bold px-5 py-2 hov1"
                  style={{ backgroundColor: "#dd4b39" }}
                >
                  <i className="fa fa-google" />

                  <span className="mr-3">|&nbsp; Login With Google</span>
                </div>
              </div>
              <h5
                className="text-center my-4 "
                style={{ fontSize: "16px", color: "#2c2c2c " }}
              >
                OR
              </h5>
              {/* <div className="pt-5"> */}

              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    className="form-control i1 border"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">FIRST NAME</label>
                  <input
                    type="text"
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">LAST NAME</label>
                  <input
                    type="text"
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">PASSWORD</label>
                  <input
                    type="password"
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="cp">
                    {" "}
                    CONFIRM PASSWORD
                  </label>
                  <input
                    type="password"
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1 "> LOCATION</label>
                  <input
                    type="text"
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">TYPE</label>
                  <select
                    className="form-control i1 border"
                    id="exampleFormControlSelect1"
                  >
                    <option>Select a value</option>
                    <option>Freelancer</option>
                    <option>Client</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-info mb-3 bt1">
                  Submit
                </button>
              </form>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
