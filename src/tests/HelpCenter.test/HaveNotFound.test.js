import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HaveNotFound from '../../Components/HelpCenter/HaveNotFund/HaveNotFound';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<HaveNotFound />);
const Paras = [
    "Haven't found what you are looking for?",
    "For eligible customers only*",
    "Please login and raise a ticket for the dedicated support",
    "Contact us directly",
    "Estimated response time:",
    "2-6 hours (Monday to friday 12am to 6pm PST)"
]
describe('HaveNotFound component render', () => {
    it('div length test', () => {
        const div = wrapper.find("div");
        const divLength = div.length;
        expect(divLength).toBe(8)
    })
    it('h1 length test', () => {
        const h1 = wrapper.find("h1");
        const h1Length = h1.length;
        expect(h1Length).toBe(1)
    })
    it('h1 text test', () => {
        const h1 = wrapper.find("h1.hnf-title");
        const h1Text = h1.text();
        expect(h1Text).toBe("Haven't found what you are looking for?")
    })
    it('Icon test', () => {
        const Icon = wrapper.find(".fa");
        const IconLength = Icon.length;
        expect(IconLength).toBe(2)
    })
    it('icon1 class test', () => {
        const icon1 = wrapper.find(".fa-lock");
        const icon1Class = icon1.hasClass('fa fa-lock hnf-icon');
        expect(icon1Class).toBe(true)
    })
    it('icon2 class test', () => {
        const icon2 = wrapper.find(".fa-envelope");
        const icon2Class = icon2.hasClass('fa fa-envelope hnf-icon');
        expect(icon2Class).toBe(true)
    })
    it('p length test', () => {
        const p = wrapper.find("p");
        const pLength = p.length;
        expect(pLength).toBe(5)
    })
    for (let i = 0; i <= 5; i++) {
        it(`Paras${i} text test`, () => {
            let selectPara = wrapper.find(`[data-test="para${i + 1}"]`)
            const selectedParaProp = selectPara.text();
            expect(selectedParaProp).toBe(Paras[i])
        })
    }
})