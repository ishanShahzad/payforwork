// import React from "react";
// import People from "../../Components/Home/People favourites/People_favourites";

// function App() {
//   return (
//     <div className="App">
//       <People />
//     </div>
//   );
// }

// export default App;

const add = (x, y) => {
  return x + y;
};

const addListItem = (item, list) => {
  list.push(item);
  return list;
};
module.exports = {
  add,
  addListItem
};
