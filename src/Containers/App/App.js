import React from "react";
import "./App.css";
import Home from "../Pages/Home/Home";
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    );
  }
}

// export default App;

const add = (x, y) => {
  return x + y;
};

const addListItem = (item, list) => {
  list.push(item);
  return list;
};
// module.exports = {
//   add,
//   addListItem
// };
