// import React from "react";
// import ReactDOM from "react-dom";
// import { exportAllDeclaration } from "@babel/types";
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

const { add, addListItem } = require("../Containers/App/App");

it("Add List check", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

it("Add List check", () => {
  const result = addListItem("a", []);
  expect(result[0]).toBe("a");
});
