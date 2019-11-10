import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../Containers/App/App";
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



    // const button = wrapper.find("button");
    // const counter = wrapper.find("p").text();
    // expect(counter).toEqual("0");
    // button.simulate("click");
    // button.simulate("click");
    // const counter2 = wrapper.find("p").text();
    // expect(counter2).toEqual("2");
    // console.log(counter2);
 

