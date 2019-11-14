import React from "react";
import "./App.css";
import HelpCenter from '../Pages/HelpCenter/HelpCenter';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <HelpCenter />
      </div>
    );
  }
}

export default App;
