import React, { Component } from "react";
import "./invitedJobs.css";
class InvitedJobs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="container-lg container-fluid border"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <div className="row d-flex" id={this.props.id}>
            <div className="col-12 mt-5 pt-4 pt-sm-0">
              <div className="alert alert-primary d-flex" role="alert">
                <div className="caution mr-3">!</div>
                <div className="caution2">No invited jobs found </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InvitedJobs;
