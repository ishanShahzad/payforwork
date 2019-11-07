import React from "react";
import NavBar from "../../../Components/Home/NavBar/NavBar";
import ExpertSection from "../../../Components/Home/ExpertSection/ExpertSection";
import Herosection from "../../../Components/Home/Herosection/Herosection";
import HowItWorks from "../../../Components/Home/works/works";
import Footer from "../../../Components/Home/Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <ExpertSection />
      <Herosection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
