import React from "react";
import "./App.css";
import How_it_works from "../Pages/How_it_works/How_it_works";

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
       <How_it_works/>
      </div>
    );
  }
}

export default App;
