import React from "react";
import Home from "../Pages/Home/Home";
import "./App.css";
// import HelpCenter from '../Pages/HelpCenter/HelpCenter';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Home />
        {/* <HelpCenter /> */}
      </div>
    );
  }
}

export default App;
