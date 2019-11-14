import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
<<<<<<< HEAD
import App from "../Containers/App/App";
=======

<<<<<<< HEAD
// import App from "../Containers/App/App";
import Ourmission from "../Components/About/OurMission/OurMission";
=======
import App from "../Containers/App/App";
>>>>>>> e98d2a079835ed862c441d056d5a1030172e88f5
import { shallow } from "enzyme";
>>>>>>> 555892684da8e6d7bc3f08feba80d232e12bd42e
Enzyme.configure({ adapter: new Adapter() });

describe("APP", () => {
  it("renders APP component", () => {
<<<<<<< HEAD
<<<<<<< HEAD
    // const wrapper = shallow(<App />);
    // const h1 = wrapper.find("h1.head");
    // const text = h1.text();
    // console.log(text);
    // expect(text).toBe("hello app");
    // const heading = wrapper.find("h1.heading");
    // const headingText = heading.text();
    // console.log(headingText);
    // expect(headingText).toBe("Hello react");
    // const button = wrapper.find("button");
    // const counter = wrapper.find("p").text();
    // expect(counter).toEqual("0");
    // button.simulate("click");
    // button.simulate("click");
    // const counter2 = wrapper.find("p").text();
    // expect(counter2).toEqual("2");
    // console.log(counter2);
=======
    const wrapper = shallow(<Ourmission />);
    const h3 = wrapper.find("h3.heading");
    const text = h3.text();
    console.log(text);
    expect(text).toBe("Our Mission");
    const heading = wrapper.find("h1.heading-big");
    const headingText = heading.text();
    console.log(headingText);
    expect(headingText).toBe(
      "We act as a  matchmaker between  talent and business, ultimately bringing in efficiency and  improved work environment."
    );
>>>>>>> 555892684da8e6d7bc3f08feba80d232e12bd42e
=======
    const wrapper = shallow(<App />);
    const h1 = wrapper.find("h1.head");
    const text = h1.text();
    console.log(text);
    expect(text).toBe("hello app");
    const heading = wrapper.find("h1.heading");
    const headingText = heading.text();
    console.log(headingText);
    expect(headingText).toBe("Hello react");

    const button = wrapper.find("button");
    const counter = wrapper.find("p").text();
    expect(counter).toEqual("0");
    button.simulate("click");
    button.simulate("click");
    const counter2 = wrapper.find("p").text();
    expect(counter2).toEqual("2");
    console.log(counter2);
>>>>>>> e98d2a079835ed862c441d056d5a1030172e88f5
  });
});



    // const button = wrapper.find("button");
    // const counter = wrapper.find("p").text();
    // expect(counter).toEqual("0");
    // button.simulate("click");
    // button.simulate("click");
    // const counter2 = wrapper.find("p").text();
    // expect(counter2).toEqual("2");
    // console.log(counter2);


