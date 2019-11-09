import React, { Component } from 'react'
import NavBar from '../../../Components/Home/NavBar/NavBar'
import ExpertSection from '../../../Components/Home/ExpertSection/ExpertSection'
import Herosection from '../../../Components/Home/Herosection/Herosection'
import HowItWorks from '../../../Components/Home/works/works'
import Footer from '../../../Components/Home/Footer/Footer';
import GrowYourBusiness from '../../../Components/Home/GrowYourBusiness/GrowYourBusiness'
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <NavBar />/ */}
        < ExpertSection />
        <GrowYourBusiness />
        < Herosection />
        <HowItWorks />
        <Footer />
      </div>
    )
  }
}

