import React from "react";
import "./App.css";
import HowItWorks from "../Pages/How_it_works/How_it_works";

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
      <div >
       <HowItWorks/>
      </div>
    );
  }
}

export default App;
