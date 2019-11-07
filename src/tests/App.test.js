import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// import App from "../Containers/App/App";
import Ourmission from "../Components/About/OurMission/OurMission";
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe("APP", () => {
  it("renders APP component", () => {
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
  });
});
