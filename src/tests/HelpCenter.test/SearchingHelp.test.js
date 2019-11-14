import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchingHelp from '../../Components/HelpCenter/SearchingHelp/SearchingHelp';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<SearchingHelp />);

describe('SearchingHelp component render', () => {
    it('div length test', () => {
        const div = wrapper.find("div");
        const divLength = div.length;
        expect(divLength).toBe(3)
    })
    it('h1 length test', () => {
        const h1 = wrapper.find("h1");
        const h1Length = h1.length;
        expect(h1Length).toBe(1)
    })
    it('searching-title text test', () => {
        const h1 = wrapper.find("h1.searching-title");
        const h1Text = h1.text();
        expect(h1Text).toBe("How can we help")
    })
    it('input test', () => {
        const input = wrapper.find("input");
        const inputProp = input.prop("type");
        expect(inputProp).toBe("search")
    })
    it('icon test', () => {
        const icon = wrapper.find(".search-icon");
        const iconLength = icon.hasClass('fa fa-search search-icon');
        expect(iconLength).toBe(true)
    })
    it('p length test', () => {
        const p = wrapper.find("p");
        const pLength = p.length;
        expect(pLength).toBe(1)
    })
    it('p text test', () => {
        const p = wrapper.find("p");
        const pText = p.text();
        expect(pText).toBe("Popular topics: Posting a job, Tips for buyers")
    })
})