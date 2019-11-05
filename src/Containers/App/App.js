import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    counter: 0
  };
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="head">hello app</h1>
        <h1 className="heading">Hello react</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default App;
