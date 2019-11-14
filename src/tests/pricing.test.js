import React from 'react';
import enzyme,{shallow} from "enzyme"
import Pricing from "../component/Pricing"
import adapter from "enzyme-adapter-react-16"


enzyme.configure({adapter: new adapter()})
const wrapper = shallow(<Pricing/>)
describe("pricing component testing", ()=>{
    it("price testing", ()=>{
        const price = wrapper.find(".price")
        console.log(price)
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
    it("monthly testing", ()=>{
        const monthly = wrapper.find(".mon")
        const monthlytext = monthly.text()
        expect(monthlytext).toEqual("Monthly")
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
        expect(icontext).toEqual("15 credits/month ")
    })
    it("Payment testing", ()=>{
        const Payment = wrapper.find(".Payment")
        const Paymenttext = Payment.text()
        expect(Paymenttext).toEqual("Payment protection through escrow system")
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
        expect(dolortext).toEqual("£12/mo")
    })
    it("ok testing", ()=>{
        const ok = wrapper.find(".ok")
        const oktext = ok.text()
        expect(oktext).toEqual("40 credits/month")
    })
    it("protection testing", ()=>{
        const protection = wrapper.find(".protection")
        const protectiontext = protection.text()
        expect(protectiontext).toEqual("Payment protection through escrow system")
    })
    it("special testing", ()=>{
        const special = wrapper.find(".special")
        const specialtext = special.text()
        expect(specialtext).toEqual("PRO special badge on your profile")
    })
    it("button1 testing", ()=>{
        const button1 = wrapper.find(".button1")
        const button1text = button1.text()
        expect(button1text).toEqual("SIGNUP")
    })
    
})
