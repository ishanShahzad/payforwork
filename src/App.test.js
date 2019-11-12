import React from 'react';
import expectExport from 'expect';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it("test add function", ()=>{
  const result = add(1,2);
  expect(result).toBe(3);
})

const add = (x, y) => {
  return x + y;
}

const addListItem = (item, list) =>{
  list.push(item);
  return list;
}

module.exports = {
  add,
  addListItem
};