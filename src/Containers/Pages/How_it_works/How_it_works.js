import React, { Component } from 'react'
import SectionOne from '../../../Components/How_it_works/Section_1/Sectioion_1'
import HireTheBest from '../../../Components/How_it_works/HireTheBest/HireTheBest'
// import Find_experts from '../../../Components/How_it_works/Find_experts_section/Find_experts'

export default class HowItWorks extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionOne />
        <HireTheBest />
        {/* <Find_experts /> */}
      </React.Fragment>




    )
  }
}
