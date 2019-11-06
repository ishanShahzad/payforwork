import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import ExpertSection from '../Components/Home/ExpertSection/ExpertSection';
Enzyme.configure({ adapter: new Adapter() });

describe("Home Section test", () => {
    it("h2 test", () => {
        const wrapper = shallow(<ExpertSection />);
        const h2 = wrapper.find('h2.head');
        const text = h2.text();
        expect(text).toBe('Find an Expert for your job')
    })
    it('p test', () => {
        const wrapper = shallow(<ExpertSection />);
        const p = wrapper.find('p.para');
        const text = p.text();
        expect(text).toBe("from the best freelancers around the globe")
    })


})



