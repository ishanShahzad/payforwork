import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavBar from "../Components/Home/Nav/NavBar.jsx";
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<NavBar />);
describe("NavBar", () => {
  it("img testing", () => {
    const img = wrapper.find(".logo");
    const src = img.prop("src");
    expect(src).toEqual("https://www.payforworks.com/images/logo_dark.png");
  });
});
