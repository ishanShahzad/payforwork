import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../Containers/App/App"
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe("APP", () => {
  it("renders APP component", () => {
    const wrapper = shallow(<App />);
    // const login = shallow(<LoginPage />);
    // const parah = login.find("p.heading");
    // const heading = login.find("p.heading");
    // const headingText = heading.text();
    // console.log(headingText);
    // expect(headingText).toBe("Log in");

    // const button = login.find("button.lw_fb_btn");

    // const counter = wrapper.find("p").text();
    // expect(counter).toEqual("0");
    // button.simulate("click");
    // button.simulate("click");
    // const counter2 = wrapper.find("p").text();
    // expect(counter2).toEqual("2");
    // console.log(counter2);
  });
});
