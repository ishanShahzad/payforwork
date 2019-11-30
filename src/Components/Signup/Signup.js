import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Axios from "axios";
export default class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    workType: "",
    error: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.password == this.state.confirmPassword) {
      const userDate = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        location: this.state.password,
        workType: this.state.workType
      };
      Axios.post("http://localhost:5000/users/registration", userDate);
      this.props.history.push("/login");
    } else {
      this.setState({
        error: "password doesn't match"
      });
    }
  };
  render() {
    console.log(this.props);
    return (
      <div container-fluid>
        <div className="container-fluid  sign">
          <h1 className="text-center heading">Sign Up</h1>
          <div className="container-fluid text-center">
            <p>
              Already have an acount ? <Link to="/login">Log In</Link>
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
                    name="email"
                    onChange={this.handleChange}
                    className="form-control i1 border"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">FIRST NAME</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">LAST NAME</label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">PASSWORD</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
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
                    name="confirmPassword"
                    onChange={this.handleChange}
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                    aria-describedby="ex"
                  />
                  {this.state.password == this.state.confirmPassword ? null : (
                    <small id="ex">{this.state.error}</small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1 "> LOCATION</label>
                  <input
                    type="text"
                    name="location"
                    onChange={this.handleChange}
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">TYPE</label>
                  <select
                    name="workType"
                    onChange={this.handleChange}
                    className="form-control i1 border"
                    id="exampleFormControlSelect1"
                  >
                    <option>Select a value</option>
                    <option>Freelancer</option>
                    <option>Client</option>
                  </select>
                </div>

                <button
                  type="submit"
                  onClick={this.handleClick}
                  className="btn btn-info mb-3 bt1"
                >
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
