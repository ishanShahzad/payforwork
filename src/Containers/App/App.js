import React from "react";
import "./App.css";
import Home from "../Pages/Home/Home";
import Junaid from "../../Components/Junaid/Junaid";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Junaid />
      </div>
    );
  }
}

export default App;
