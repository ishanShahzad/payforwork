import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoginPage from "../Components/LoginPage/LoginPage";
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe("LoginPage", () => {
  it("renders LoginPage component", () => {
    const login = shallow(<LoginPage />);
    const heading = login.find("p.heading");
    const headingText = heading.text();
    console.log(headingText);
    expect(headingText).toBe("Log in");

    const button = login.find("button.lw_fb_btn");

    // const counter = wrapper.find("p").text();
    // expect(counter).toEqual("0");
    // button.simulate("click");
    // button.simulate("click");
    // const counter2 = wrapper.find("p").text();
    // expect(counter2).toEqual("2");
    // console.log(counter2);
  });
});
