import React, { Component } from 'react'
import GrowYourBusiness from '../../../Components/Home/GrowYourBusiness/GrowYourBusiness'
import NavBar from '../../../Components/Home/NavBar/NavBar';
import ExpertSection from '../../../Components/Home/ExpertSection/ExpertSection';
import Herosection from '../../../Components/Home/Herosection/Herosection';
import GrowSection from '../../../Components/Home/GrowSection/GrowSection';
// import Footer from '../../../Components/Home/Footer/Footer';
export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        < ExpertSection />
        <GrowYourBusiness />
        < Herosection />
        <GrowSection />
        {/* <HowItWorks /> */}
        {/* <Footer /> */}
      </div>
    )
  }
}


