import React from "react";
import Home from "../Pages/Home/Home";
import About from "../../Components/About/About2ndSection";
// import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
