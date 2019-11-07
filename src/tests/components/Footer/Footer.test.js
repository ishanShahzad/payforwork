import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../Containers/App/App";
import { shallow } from "enzyme";
import Footer from "../../../Components/Home/Footer/Footer";
Enzyme.configure({ adapter: new Adapter() });

describe("APP", () => {
  it("renders APP component", () => {
    const wrapper = shallow(<App />);
    const h3 = wrapper.find(<Footer/>);
    const text = h3.text();
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
  });
});
