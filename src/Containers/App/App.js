import React from "react";
import Home from "../Pages/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/signup"  component={} /> */}


        </Switch>
      </div>
    );
  }
}

export default App;

// const add = (x, y) => {
//   return x + y;
// };

// const addListItem = (item, list) => {
//   list.push(item);
//   return list;
// };
// module.exports = {
//   add,
//   addListItem
// };
