import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import FindExperts from "../Components/How_it_work/Find_experts_section/Find_experts";
Enzyme.configure ({ adapter: new Adapter()});
const wrapper = shallow(<FindExperts/>);
describe("Find Expert Tests", ()=>{
//First Heading Test Start
    it("heading one test", () =>{
        
        const heading = wrapper.find('h2.heading1');
        const headingtext = heading.text();
        expect(headingtext).toBe('Find expert freelancers')
    })

//Second Heading(H3) Start
it("heading 2(h3) test", () =>{
        
    const h3 = wrapper.find('h3');
    const text = h3.text();
    expect(text).toBe('Start by posting a job')
})

//First Para Test Start
it("ParaOne test", () =>{
        
    const ParaOne = wrapper.find('p.paraOne');
    const ParaOneText = ParaOne.text();
    expect(ParaOneText).toBe('On payforworks, we provide you with a range of experts from UI designers, web programmers, artists, accountants and more.')
})

//Second Para Test Start
it("ParaTwo test", () =>{
        
    const ParaTwo = wrapper.find('p.ParaTwo');
    const ParaTwoText = ParaTwo.text();
    expect(ParaTwoText).toBe('Post a job with all the details about the work gets done. This will be looking by the experts who registered with us and will give you competent offers.')
})

//Imgs Test Start
it("image 2 test", () => {
    const img = wrapper.find("img.picTwo").prop("src");
    expect(img).toEqual("https://www.payforworks.com/images/hwk1.png");
  });

  
//Img 2 Test Start
it("image 1 test", () => {
    const img = wrapper.find("img.picOne").prop("src");
    expect(img).toEqual("https://www.payforworks.com/images/hwk1.png");
  });


//Button Test
it("Button test", () =>{
        
    const Button = wrapper.find('button');
    const ButtonText = Button.text();
    expect(ButtonText).toBe('POST A JOB')
})



})

