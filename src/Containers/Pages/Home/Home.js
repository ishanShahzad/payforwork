import React, { Component } from 'react'
import GrowYourBusiness from '../../../Components/Home/GrowYourBusiness/GrowYourBusiness'
import ExpertSection from '../../../Components/Home/ExpertSection/ExpertSection';
import Herosection from '../../../Components/Home/Herosection/Herosection';
import GrowSection from '../../../Components/Home/GrowSection/GrowSection';
import PeopleFavourites from '../../../Components/Home/People favourites/People_favourites';
import HowItWorks from '../../../Components/Home/works/works';
import TopSkills from '../../../Components/Home/TopSkills/TopSkills';
export default class Home extends Component {
  render() {
    return (
      <div>
        < ExpertSection />
        <GrowYourBusiness />
        < Herosection />
        <GrowSection />
        <PeopleFavourites />
        <HowItWorks />
        <TopSkills />

      </div>
    )
  }
}


