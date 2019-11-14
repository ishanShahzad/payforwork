import React from 'react';
import Enzyme, { shallow ,index } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticlesList from '../../Components/HelpCenter/ArticlesList/ArticlesList';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<ArticlesList />);
const Paras = [
    "Buyer Tips",
    "What’s a perfect profile ?",
    "Dispute resolution center",
    "Freelancer memberships",
    "Violation of policy",
    "How to fine work?",
    "Posting a job",
    "Account and billing",
    "Free structures",
    "Bidding process",
    "How to create perfect proposal?",
    "How to link your Bank or Paypal account",
    "How to check balance and withdraw money?"
]
describe('explore component render', () => {
    it('div length test', () => {
        const div = wrapper.find("div");
        const divLength = div.length;
        expect(divLength).toBe(6)
    })
    it('h3 length test', () => {
        const h3 = wrapper.find("h3");
        const h3Length = h3.length;
        expect(h3Length).toBe(1)
    })
    it('h3 article-title text test', () => {
        const h3 = wrapper.find("h3.article-title");
        const h3Text = h3.text();
        expect(h3Text).toBe("Popular articles")
    })
    it('ul list length test', () => {
        const ul = wrapper.find("ul.list");
        const ulLength = ul.length;
        expect(ulLength).toBe(3)
    })
    it('li list-item length test', () => {
        const li = wrapper.find("li.list-item");
        const liLength = li.length;
        expect(liLength).toBe(13)
    })
    for(let i = 0; i <= 12; i++){
        it(`item${i} text test`, () => {
            let selectLi = wrapper.find(`[data-test="li${i+1}"]`)
            const selectedLi = selectLi.text();
            expect(selectedLi).toBe(Paras[i])
        })
    }
})