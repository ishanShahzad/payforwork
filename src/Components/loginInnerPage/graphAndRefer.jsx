import React, { Component } from "react";
import "./graphAndRefer.css";
import Graph from "./graphAndReferComponents/graph.jsx";
import Refer from "./graphAndReferComponents/refer.jsx";
class GraphAndRefer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row mt-3">
          <Graph />
          <Refer />
        </div>
      </React.Fragment>
    );
  }
}

export default GraphAndRefer;
