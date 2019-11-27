import React, { Component } from "react";
import "./Signup.css";
// import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/index";

class Signup extends Component {
  // state ke val
  state = {
    email: "",
    name: "",
    lastname: "",
    password: "",
    password_confirm: "",
    location: "",
    type: ""
  };

  //onchange fun jo input ma name vo value de te
  oninputchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/Login");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/Login");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  // button ma submit
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      name: this.state.name,
      lastname: this.state.lastname,
      password: this.state.password,
      password_confirm: this.state.password_confirm,
      location: this.state.location,
      type: this.state.type
    };
    // axios.post("http://localhost:5000/register", data).then(res => {
    //   console.log(res.data);
    // });
    this.props.registerUser(data);

    //for emty input
    this.setState({
      email: "",
      name: "",
      lastname: "",
      password: "",
      password_confirm: "",
      location: "",
      type: ""
    });
  };
  render() {
    // console.log(this.state);
    return (
      <div container-fluid>
        <div className="container-fluid  sign">
          <h1 className="text-center heading">SIGN UP</h1>
          <div className="container-fluid text-center">
            <p>
              Already Have An Acount? <span>Log In</span>
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

              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.oninputchange}
                    className="form-control i1 border"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">FIRST NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.oninputchange}
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">LAST NAME</label>
                  <input
                    type="text"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.oninputchange}
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">PASSWORD</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.oninputchange}
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
                    name="password_confirm"
                    value={this.state.password_confirm}
                    onChange={this.oninputchange}
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1 "> LOCATION</label>
                  <input
                    type="text"
                    name="location"
                    value={this.state.location}
                    onChange={this.oninputchange}
                    className="form-control i1 border"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">TYPE</label>
                  <select
                    name="type"
                    value={this.state.type}
                    onChange={this.oninputchange}
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
const mapStateToProps = state => ({
  auth: state.Auth
});

export default connect(mapStateToProps, { registerUser })(Signup);
