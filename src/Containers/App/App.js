import React from "react";
import Home from "../Pages/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "../../Components/Home/Signup/Signup";
import LoginPage from "../../Components/LoginPage/LoginPage";
import NavBar from '../../Components/CommonComponents/NavBar/NavBar';
import Footer from '../../Components/CommonComponents/Footer/Footer';
// import postJob from "../../Components/Home/PostJob/postJob";
class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={LoginPage} />
          {/* <Route path="/postjob" component={postJob} /> */}





        </Switch>
        <Footer />
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
