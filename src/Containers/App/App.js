import React from "react";
import "./App.css";
import LoginPage from "../../Components/LoginPage/LoginPage"

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
        <LoginPage/>
      </div>
    );
  }
}

export default App;
