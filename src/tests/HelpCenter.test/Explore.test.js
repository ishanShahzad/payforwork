import React from 'react';
import Enzyme, { shallow ,index } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Explore from '../../Components/HelpCenter/Explore/Explore';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Explore />);
const Paras = [
    "Getting started",
    "Sign up and build your profile",
    "Posting a job",
    "Put together your reqiurments, post a job, invite freelancers",
    "Account and billing",
    "Accpount setting, subscription info, bid card",
    "Fee structure",
    "Job fee, transaction fee, subscription fee",
    "Bidding process",
    "Bid credit balance, search for a job, apply for the job",
    "Types of jobs",
    "Fixed jobs and hourly jobs",
]
const imgSources = [
    "./images/exploreimg1.png",
    "./images/exploreimg2.png",
    "./images/exploreimg3.png",
    "./images/exploreimg4.png",
    "./images/exploreimg5.png",
    "./images/exploreimg6.png"
]
describe('explore component render', () => {
    it('div length test', () => {
        const div = wrapper.find("div");
        const divLength = div.length;
        expect(divLength).toBe(21)
    })
    it('h3 length test', () => {
        const h3 = wrapper.find("h3");
        const h3Length = h3.length;
        expect(h3Length).toBe(1)
    })
    it('h3 explore-title text test', () => {
        const h3 = wrapper.find("h3.explore-title");
        const h3Text = h3.text();
        expect(h3Text).toBe("Explore the knowledge Base")
    })
    it('img length test', () => {
        const img = wrapper.find("img");
        const imgLength = img.length;
        expect(imgLength).toBe(6)
    })
    for(let i = 0; i <= 5; i++){
        it(`img${i} src test`, () => {
            let selectImg = wrapper.find(`[alt="img${i+1}"]`)
            const selectedImgProp = selectImg.prop("src");
            expect(selectedImgProp).toBe(imgSources[i])
        })
    }
    it('p length test', () => {
        const p = wrapper.find("p");
        const pLength = p.length;
        expect(pLength).toBe(12)
    })
    for(let i = 0; i <= 11; i++){
    it(`Paras${i} text test`, () => {
            let selectPara = wrapper.find(`[data-test="para${i+1}"]`)
            const selectedParaProp = selectPara.text();
            expect(selectedParaProp).toBe(Paras[i])
        })
    }
})