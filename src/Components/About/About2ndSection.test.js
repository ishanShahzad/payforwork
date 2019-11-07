// import React from 'react';
// import ReactDOM from 'react-dom';
// // import App from './App';

// it('renders without crashing', () => {
//   // const div = document.createElement('div');
//   // ReactDOM.render(<App />, div);
//   // ReactDOM.unmountComponentAtNode(div);
// });

// const { add, addListItem } = require("../Containers/App/App");
// it("tests add function", () => {
//   const result = add(1, 2);
//   expect(result).toBe(3)
// })

// it("tests list function", () => {
//   let list = [1, 2, 3];
//   let item = 5;
//   const res = addListItem(item, list)
//   expect(res[3]).toBe(5)

// });

import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../Containers/App/App";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter });


const wrapper = shallow(<App />)
it('main heading renders without crashing', () => {
    const mainHeading = wrapper.find('h1').text()
    expect(mainHeading).toEqual('Creating a space for the peoplea convenient, reliable, and easy way to access the global freelance talents')
})
it('main heading renders without crashing', () => {
    const paragraph = wrapper.find('p.paragraph').text()
    expect(paragraph).toEqual('It all started as a freelancer  We wanted to create a platform that is very user-friendly and  offer services with a low commission rate.Though we have several marketplaces available, we thought creating another great  platform will help millions of people to find their living.')
})
it('main heading renders without crashing', () => {
    const paragraph2 = wrapper.find('p.paragraph2').text()
    expect(paragraph2).toEqual('Our vision is to help people find their dream job and help employers tofind the right skills.')
})
it('main heading renders without crashing', () => {
    const divpara = wrapper.find('p.div_para').text()
    expect(divpara).toEqual('We help to strengthen business by connecting them to the skilled freelancing talent across the globe.')
})
it('main heading renders without crashing', () => {
    const divpara2 = wrapper.find('p.div_para2').text()
    expect(divpara2).toEqual('We are always trying to make the freelance process more efficient as the work shifts from full-time employment to free-agent employment.')
})
it('main heading renders without crashing', () => {
    const heading2 = wrapper.find('h2').text()
    expect(heading2).toEqual('Act quick. Grow even quicker.')
})