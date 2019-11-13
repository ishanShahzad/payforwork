import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Herosection from "../Components/Home/Herosection/Herosection";
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe("Herosection", () => {
  it("renders Herosection component", () => {
    const wrapper = shallow(<Herosection />);

    const h1 = wrapper.find("h2.head");
    const text = h1.text();
    console.log(text);
    expect(text).toBe("Top quality freelancers");

    const heading = wrapper.find("h3.heading");
    const headingText = heading.text();
    console.log(headingText);
    expect(headingText).toBe("Incredible Job results");

    // const paragraph = wrapper.find("p.hrp");
    // const paragraphText = paragraph.text();
    // console.log(paragraphText);
    // expect(paragraphText).toBe(
    //   "Upturn your business through the top quality freelancers listed here. 100's of jobs done every week on all categories of web development, Wordpress development, etc"
    // );
  });
});
