import React from "react";
import "./App.css";
import Home from "../Pages/Home/Home";

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
        <Home />
      </div>
    );
  }
}

export default App;
