import React, { Component } from 'react'
import NavBar from '../../../Components/Home/NavBar/NavBar'
import ExpertSection from '../../../Components/Home/ExpertSection/ExpertSection'
import Herosection from '../../../Components/Home/Herosection/Herosection'
import HowItWorks from '../../../Components/Home/works/works'
import Footer from '../../../Components/Home/Footer/Footer'
export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />/
        < ExpertSection />
        < Herosection />
        <HowItWorks />
        <Footer />
      </div>
    )
  }
}

