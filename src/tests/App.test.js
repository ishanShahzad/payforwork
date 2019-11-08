import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../Containers/App/App";
import PayInvoice from "../Components/PayInvoice/PayInvoice";
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("PayInvoice working process", () => {
  it("renders APP component", () => {
    const wrapper = shallow(<PayInvoice />);
    const h2 = wrapper.find("h2.hw_mtitle");
    const textdata = h2.text();
    console.log(textdata);
    expect(textdata).toBe("Pay the invoice");
    const paragraph = wrapper.find("p.hw_para");
    const paragraphText = paragraph.text();
    console.log(paragraphText);
    expect(paragraphText).toBe("Please verify all works done by the freelancer before you pay any invoice. Invoice for small jobs can be paid at once when the required work is finished. For larger jobs, you can agree with the freelancer for different milestone payments.");
    const h3 = wrapper.find("h3.hw_subtitle");
    const text = h3.text();
    console.log(text);
    expect(text).toBe("Leave feedback");
    const paraSec = wrapper.find("p.hw_para1");
    const paragraphText1 = paraSec.text();
    console.log(paragraphText1);
    expect(paragraphText1).toBe("Post a job with all the details about the work gets done. This will be looking by the experts who registered with us and will give you competent offers.");
    expect(wrapper.find("img.imgdata1").prop("src")).toEqual("https://www.payforworks.com/images/hwk3.png");

    // const button = wrapper.find("button");
    // const counter = wrapper.find("p").text();
    // expect(counter).toEqual("0");
    // button.simulate("click");
    // button.simulate("click");
    // const counter2 = wrapper.find("p").text();
    // expect(counter2).toEqual("2");
    // console.log(counter2);
  });
});
