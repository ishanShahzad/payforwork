import React, { Component } from "react";
import "./LoginPage.css";
import Axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../actions/index";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onInputqChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/me");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/me");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handeleSum = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    // Axios.post("http://localhost:5000/signin", data).then(res => {
    //   console.log(res.data);
    // });
    this.props.loginUser(data);
  };

  render() {
    console.log(this.props.auth);
    return (
      <div className="first">
        <div class="main_bg">
          <div class="top_bg"></div>
          <div className="App login-section">
            <p className="text-center heading">Log in</p>
            <p className="text-center">
              Don't have an account ?{" "}
              <a href="/" className="sign-link">
                SIGN UP
              </a>
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
              <form
                onSubmit={this.handeleSum}
                method="post"
                id="login_form"
                className="container"
              >
                <div class="inp_wrap">
                  <div class="login_label">EMAIL </div>
                  <input
                    name="email"
                    type="text"
                    id="username"
                    class="for_form"
                    value={this.state.email}
                    onChange={this.onInputqChange}
                  />
                  {/* <div class="inp_error_w" style={{"display": "none"}}>Please enter your email </div> */}
                </div>
                <div class="inp_wrap">
                  <div class="login_label">PASSWORD</div>
                  <input
                    name="password"
                    type="password"
                    class="for_form"
                    id="pass1"
                    value={this.state.password}
                    onChange={this.onInputqChange}
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
    );
  }
}
const mapStateToProps = state => ({
  auth: state.Auth
});

export default connect(mapStateToProps, { loginUser })(LoginPage);
