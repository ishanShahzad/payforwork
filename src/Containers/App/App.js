import React from "react";
import "./App.css";

// import Footer from "../Pages/Home/MainFooter/main-Footer";
import Footer from "../../Components/Footer/Footer";
class App extends React.Component {
  state = {
    counter: 0
  };
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <div className="App">

        <Footer />
      </div>
    );
  }
}

export default App;
