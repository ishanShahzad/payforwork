import React from 'react';
import enzyme,{shallow} from "enzyme"
import Pricing from "../component/Pricing"
import adapter from "enzyme-adapter-react-16"


enzyme.configure({adapter: new adapter()})
const wrapper = shallow(<Pricing/>)
describe("pricing component testing", ()=>{
    it("price testing", ()=>{
        const price = wrapper.find(".price")
        const pricetext = price.text() 
        expect(pricetext).toEqual("Pricing")
    })
    it("begin testing", ()=>{
        const begin = wrapper.find(".begin")
        const begintext = begin.text()
        expect(begintext).toEqual("Begin leveraging your profile today")
    })
    it("simple testing", ()=>{
        const simple = wrapper.find(".simple")
        const simpletext = simple.text()
        expect(simpletext).toEqual("Simple and transparent pricing plans to help you get connected.")
    })
    it("Basic testing", ()=>{
        const Basic = wrapper.find(".Basic")
        const Basictext = Basic.text()
        expect(Basictext).toEqual("Basic")
    })
    it("forever testing", ()=>{
        const forever = wrapper.find(".forever")
        const forevertext = forever.text()
        expect(forevertext).toEqual("Free forever")
    })
    it("icon testing", ()=>{
        const icon = wrapper.find(".icon")
        const icontext = icon.text()
        expect(icontext).toEqual(" 15 credits/month")
    })
    it("Payment testing", ()=>{
        const Payment = wrapper.find(".Payment")
        const Paymenttext = Payment.text()
        expect(Paymenttext).toEqual("Payment protection escrow system")
    })
    it("button testing", ()=>{
        const button = wrapper.find(".button")
        const buttontext = button.text()
        expect(buttontext).toEqual("SIGN UP")
    })
    it("Pro testing", ()=>{
        const Pro = wrapper.find(".Pro")
        const Protext = Pro.text()
        expect(Protext).toEqual("Pro")
    })
    it("dolor testing", ()=>{
        const dolor = wrapper.find(".dolor")
        const dolortext = dolor.text()
        expect(dolortext).toEqual("$399/ month")
    })
    it("credits testing", ()=>{
        const credits = wrapper.find(".credits")
        const creditstext = credits.text()
        expect(creditstext).toEqual(" 40 credits/month")
    })
    it("protection testing", ()=>{
        const protection = wrapper.find(".protection")
        const protectiontext = protection.text()
        expect(protectiontext).toEqual("Payment protection escrow system")
    })
    it("special testing", ()=>{
        const special = wrapper.find(".special")
        const specialtext = special.text()
        expect(specialtext).toEqual(" PRO special badge on your profile")
    })
    it("button1 testing", ()=>{
        const button1 = wrapper.find(".button1")
        const button1text = button1.text()
        expect(button1text).toEqual("SIGN UP")
    })
    it("Enterprise testing", ()=>{
        const Enterprise = wrapper.find(".Enterprise")
        const Enterprisetext = Enterprise.text()
        expect(Enterprisetext).toEqual("Enterprise")
    })
    it("dolor1 testing", ()=>{
        const dolor1 = wrapper.find(".dolor1")
        const dolor1text = dolor1.text()
        expect(dolor1text).toEqual("$899/ month")
    })
    it("month testing", ()=>{
        const month = wrapper.find(".month")
        const monthtext = month.text()
        expect(monthtext).toEqual(" 40 credits/month")
    })
    it("escrow testing", ()=>{
        const escrow = wrapper.find(".escrow")
        const escrowtext = escrow.text()
        expect(escrowtext).toEqual(" Payment protection escrow system")
    })
    it("badge testing", ()=>{
        const badge = wrapper.find(".badge")
        const badgetext = badge.text()
        expect(badgetext).toEqual(" PRO special badge on your profile")
    })
    it("month11 testing", ()=>{
        const month11 = wrapper.find(".month11")
        const month11text = month11.text()
        expect(month11text).toEqual(" 40 credits/month")
    })
    it("badge11 testing", ()=>{
        const badge11 = wrapper.find(".badge11")
        const badge11text = badge11.text()
        expect(badge11text).toEqual(" PRO special badge on your profile")
    })
    it("profile testing", ()=>{
        const profile = wrapper.find(".profile")
        const profiletext = profile.text()
        expect(profiletext).toEqual(" PRO special badge on your profile")
    })
    it("button22 testing", ()=>{
        const button22 = wrapper.find(".button22")
        const button22text = button22.text()
        expect(button22text).toEqual("SIGN UP")
    })
})
