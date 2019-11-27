import React, { Component } from "react";
import { logoutUser } from "../../actions/index";
import { connect } from "react-redux";

class Userpage extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };
  render() {
    return (
      <div>
        <h1>hy sir</h1>
        <button onClick={this.onLogout}>LOGOUT</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Userpage);
