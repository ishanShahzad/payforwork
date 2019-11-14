import React from 'react';
import './LoginPage.scss';

function LoginPage() {
  return (
    <div className="first">
      <div class="main_bg container">
        <div class="top_bg"></div>
        <div className="App login-section">
          <p className="text-center heading p" >Log in</p>
          <p className="text-center question p" >Don't have an account ? <a href="/signup" className="sign-link" >SIGN UP</a>
          </p>
        </div>
        <div class="forgot">
          <div class="social_login">
            <div class="login_fb">
              <a href="/" class="fb_login">
                <button class="lw_fb_btn">
                  <i class="fa fa-facebook"></i> <span>Continue with Faceboook</span>
                </button>
              </a>
            </div>
            <div class="login_li">
              <a href="/" class="" id="googleSignIn">
                <button class="lw_fb_btn glogin ml-1">
                  <i class="fa fa-google"></i> <span>Continue with Google</span>
                </button>
              </a>
            </div>
            <div class="or_text">OR</div>
          </div>
          <div className="width" >
            <form method="post" id="login_form" className="container" >
              <div class="inp_wrap">
                <div class="login_label">EMAIL ADDRESS</div>
                <input name="username" type="text" id="username" class="for_form" value="" />
                {/* <div class="inp_error_w" style={{"display": "none"}}>Please enter your email </div> */}
              </div>
              <div class="inp_wrap">
                <div class="login_label">PASSWORD</div>
                <input name="password" type="password" class="for_form" id="pass1" value="" />
                <input type="hidden" name="csrf_token" value="af0fe1d89968084b8a1ae5410beff973" />
                {/* <div class="inp_error_w" style={{"display": "none"}}>Please enter your password</div> */}
              </div>
              <div class="inp_wrap wrap_rem">
                <div class="login_label">
                  <div class="fliter_check">
                    <input type="checkbox" id="remember_cookie_" class="filter_type" name="check" />
                    <label for="remember_cookie_"><span>Remember me</span></label>
                  </div>
                  <span class="forgt_link" style={{ "float": "right", marginTop: "-25px" }}>  <a href="/" id="fgt_rst_pass">Forgot password?</a></span> </div>
              </div>
              <div class="inp_wrap wrap_lgn"> <input name="login" type="submit" class="for_button login_btn mt-5" value="LOG IN" />
              </div> </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
