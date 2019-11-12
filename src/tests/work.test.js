import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Work from "../components/works/works.jsx";
Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Work />);
describe("work module testing", () => {
  it("heading", () => {
    const h1 = wrapper.find("h1.heading1");
    const h1txt = h1.text();
    expect(h1txt).toBe("See how it works");
  });
  it("imageOne", () => {
    const img = wrapper.find("img.img1").prop("src");
    expect(img).toEqual("https://www.payforworks.com/images/hiw1.png");
  });
  it("imageTwo", () => {
    const img = wrapper.find("img.img2").prop("src");
    expect(img).toEqual("https://www.payforworks.com/images/hiw2.png");
  });
  it("imageThree", () => {
    const img = wrapper.find("img.img3").prop("src");
    expect(img).toEqual("https://www.payforworks.com/images/hiw3.png");
  });
  it("paraOne", () => {
    const paraOne = wrapper.find("p.paraOne");
    const paraOneTxt = paraOne.text();
    expect(paraOneTxt).toEqual("WE WORK IN THREE SIMPLE STEPS");
  });
  it("paraTwo", () => {
    const paraTwo = wrapper.find("h3.paraTwo");
    const paraTwoTxt = paraTwo.text();
    expect(paraTwoTxt).toEqual("Post a Job");
  });
  it("paraThree", () => {
    const paraThree = wrapper.find("div.paraThree");
    const paraThreeTxt = paraThree.text();
    expect(paraThreeTxt).toEqual(
      "Hassle free process allows you to post a job very quickly which reaches to the experts"
    );
  });
  it("paraFour", () => {
    const paraFour = wrapper.find("div.paraFour");
    const paraFourTxt = paraFour.text();
    expect(paraFourTxt).toEqual(
      "Select the best offer based on the experience and the cost you are offered"
    );
  });
  it("paraFive", () => {
    const paraFive = wrapper.find("h3.paraFive");
    const paraFiveTxt = paraFive.text();
    expect(paraFiveTxt).toEqual("Award the job");
  });
  it("Digit One", () => {
    const digitOne = wrapper.find("h1.digitOne");
    const digitOneTxt = digitOne.text();
    expect(digitOneTxt).toEqual("1");
  });
  it("Digit Two", () => {
    const digitTwo = wrapper.find("h1.digitTwo");
    const digitTwoTxt = digitTwo.text();
    expect(digitTwoTxt).toEqual("2");
  });
  it("Digit Three", () => {
    const digitThree = wrapper.find("h1.digitThree");
    const digitThreeTxt = digitThree.text();
    expect(digitThreeTxt).toEqual("3");
  });
  it("paraSix", () => {
    const paraSix = wrapper.find("h3.paraSix");
    const paraSixTxt = paraSix.text();
    expect(paraSixTxt).toEqual("Get work done");
  });
  it("paraSeven", () => {
    const paraSeven = wrapper.find("div.paraSeven");
    const paraSevenTxt = paraSeven.text();
    expect(paraSevenTxt).toEqual(
      "Make sure that the job is finished, make the payment and leave a review"
    );
  });
});
