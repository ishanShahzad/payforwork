import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TopSkills from './Components/TopSkills'
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe("TopSkills", () => {
it("render without crasdhing",()=>{
  const wrapper = shallow(<TopSkills />)
  const li = wrapper.find('li.a')
  const test = li.text();
  console.log(test)
  expect(test).toBe("WordPress Developer")
})
});