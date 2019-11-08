import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";
import HireTheBest from "./../Components/HowItWorks/HireTheBest/HireTheBest";
Enzyme.configure({ adapter: new Adapter() });

describe("n", () => {
  it("h1 test", () => {
    const wrapper = shallow(<HireTheBest />);
    const head = wrapper.find("h1.h1");
    const text = head.text();
    expect(text).toBe("Hire The Best freelancer");
  });
  it("Para1", () => {
    const wrapper = shallow(<HireTheBest />);
    const para = wrapper.find("p.p1");
    const Paragraph1 = para.text();
    expect(Paragraph1).toBe(
      "You will be receiving a number of proposals from a range of new freelancers, established companies, expert freelancers etc. You can browse freelancers and filter them of skills, reviews, location etc."
    );
  });
  it("h3 1", () => {
    const wrapper = shallow(<HireTheBest />);
    const firsth = wrapper.find("h3.firsth3");
    const h3 = firsth.text();
    expect(h3).toBe("Review proposals carefully");
  });
  it("Para2", () => {
    const wrapper = shallow(<HireTheBest />);
    const para2 = wrapper.find("p.p2");
    const Paragraph2 = para2.text();
    expect(Paragraph2).toBe(
      "Take your time to go through each proposal, compare with other offers, schedule a call or a chat, check previous work samples etc."
    );
  });
  it("h3 2", () => {
    const wrapper = shallow(<HireTheBest />);
    const Secondh3 = wrapper.find("h3.Secondh3");
    const h3s = Secondh3.text();
    expect(h3s).toBe("Award the job");
  });
  it("Para3", () => {
    const wrapper = shallow(<HireTheBest />);
    const para3 = wrapper.find("p.p3");
    const Paragraph3 = para3.text();
    expect(Paragraph3).toBe(
      "Please select a freelancer after the detailed interview and award job by depositing funds in escrow. Supply all the required information to finish the job."
    );
  });
  //   it("p test", () => {
  //     const wrapper = shallow(<HireTheBest />);
  //     const p = wrapper.find("p.para");
  //     const text = p.text();
  //     expect(text).toBe("from the best freelancers around the globe");
  //   });
});
