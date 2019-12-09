import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import Axios from "axios";
class LogIn extends Component {
  state = {
    email: "",
    password: "",
    user: {},
    error: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    Axios.post("http://localhost:5000/users/login", data).then(res => {
      console.log(res.data);
      Axios.defaults.headers["Authorization"] = res.data;
      localStorage.setItem("authorization", res.data);
      Axios.post("http://localhost:5000/users/me")
        .then(res => {
          this.setState({
            user: res.data
          });
        })
        .catch(err => {
          this.setState({
            error: err
          });
        });
      if (res.data === "password doesn't match") {
        alert(res.data);
      } else {
        this.props.history.push("/loginInnerPage");
      }
    });
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div className="first">
          <div class="main_bg">
            <div class="top_bg"></div>
            <div className="App login-section">
              <p className="text-center heading">Log In</p>
              <p className="text-center">
                Don't have an account ?{" "}
                <Link to="/Signup" className="sign-link">
                  Sign Up
                </Link>
              </p>
            </div>
            <div class="forgot">
              <div class="social_login">
                <div class="login_fb">
                  <a href="/" class="fb_login">
                    <button class="lw_fb_btn">
                      <i class="fa fa-facebook"></i>{" "}
                      <span>Continue with Faceboook</span>
                    </button>
                  </a>
                </div>
                <div class="login_li">
                  <a href="/" class="" id="googleSignIn">
                    <button class="lw_fb_btn glogin ml-md-1">
                      <i class="fa fa-google"></i>{" "}
                      <span>Continue with Google</span>
                    </button>
                  </a>
                </div>
                <div class="or_text">OR</div>
              </div>
              <div className="width">
                <form method="post" id="login_form" className="container">
                  <div class="inp_wrap">
                    <div class="login_label">EMAIL ADDRESS</div>
                    <input
                      type="text"
                      name="email"
                      onChange={this.handleChange}
                      id="username"
                      class="for_form"
                    />
                    {/* <div class="inp_error_w" style={{"display": "none"}}>Please enter your email </div> */}
                  </div>
                  <div class="inp_wrap">
                    <div class="login_label">PASSWORD</div>
                    <input
                      name="password"
                      onChange={this.handleChange}
                      type="password"
                      class="for_form"
                      id="pass1"
                    />
                    <input
                      type="hidden"
                      name="csrf_token"
                      value="af0fe1d89968084b8a1ae5410beff973"
                    />
                    {/* <div class="inp_error_w" style={{"display": "none"}}>Please enter your password</div> */}
                  </div>
                  <div class="inp_wrap wrap_rem">
                    <div class="login_label">
                      <div class="fliter_check">
                        <input
                          type="checkbox"
                          id="remember_cookie_"
                          class="filter_type"
                          name="check"
                        />
                        <label for="remember_cookie_">
                          <span>Remember me</span>
                        </label>
                      </div>
                      <span class="forgt_link" style={{ float: "right" }}>
                        {" "}
                        <a href="/" id="fgt_rst_pass">
                          Forgot password?
                        </a>
                      </span>{" "}
                    </div>
                  </div>
                  <div class="inp_wrap wrap_lgn">
                    {" "}
                    <input
                      onClick={this.handleClick}
                      name="login"
                      type="submit"
                      class="for_button login_btn"
                      value="LOG IN"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LogIn;
