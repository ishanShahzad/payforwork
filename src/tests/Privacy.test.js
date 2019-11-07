import React from 'react'
import enzyme,{shallow} from "enzyme";

import adapter from "enzyme-adapter-react-16";
import Privacy from "../Components/Privacy/privacy.jsx";
enzyme.configure({adapter:new adapter()})
const wrapper =  shallow(<Privacy />)
describe("Privacy Testing" , () => {
it("p testing1",()=>{
const pone = wrapper.find(".pone")
const ponetext = pone.text() 
expect(ponetext).toEqual("Last modified 5 November 2019")
})
it("p testing2",()=>{
    const ptwo = wrapper.find(".ptwo")
    const ptwotext = ptwo.text()
    expect(ptwotext).toEqual("Payforworks are committed to protecting and respecting your privacy.")
})
it("p testing3",()=>{
    const pthree = wrapper.find(".pthree")
    const pthreetext = pthree.text()
    expect(pthreetext).toEqual("Payforworks.com’s privacy statement together with terms and conditions explains the following:")
})
it("p testing4",()=>{
    const pfour = wrapper.find(".pfour")
    const pfourtext = pfour.text()
    expect(pfourtext).toEqual("These statements also explain how personal data are used for the people who belong to Europe as required under the General Data Protection Regulation (GDPR).")
})
it("p testing5",()=>{
    const pfive = wrapper.find(".pfive")
    const pfivetext = pfive.text()
    expect(pfivetext).toEqual("We collect and handle your personal data because you give this on signup by confirming that thyself agree with the terms and conditions. We collect data only on your confirmation. The personal data that we collect may include email, first name, last name, location with country, your portfolio samples, your hourly work payment details, your language, etc. When you do a payment in our site, your payment provider might transfer your details to us for the process. We don’t keep or save any kind of card details unless you want us to do it. To pay your savings, we may use the bank details or other financial details of the freelancers/seller’s.")
})
it("p testing6",()=>{
    const psix = wrapper.find(".psix")
    const psixtext = psix.text()
    expect(psixtext).toEqual("We may use any third party to collect the personal information because they are publicly available. Like any other online companies, we receive technical information when you use our services. These technologies help us to analyze how people use our services. It also helps to improve our site functions, saves your log-in information for future sessions, and serve you with advertisements that might interest you. Using this technology does not identify you personally, it enables to compile statistics about the visitors and their use of our website. For example, our web server automatically logs to the website our visitor's view, their IP addresses and which are the web browsers our visitors use.")
})
it("p testing7",()=>{
    const pseven = wrapper.find(".pseven")
    const pseventext = pseven.text()
    expect(pseventext).toEqual("Our website might be containing hyperlinks to websites that are not operated by us. These hyperlinks are for your references. And so do not imply any endorsement of the activities of these third-party websites. We are not the ones controlling these websites and are not responsible for their data or privacy practices. We strongly advise you to review any privacy policy posted on any site you visit before you use the site or provide any personal data.")
})
it("p testing8",()=>{
    const peight = wrapper.find(".peight")
    const peighttext = peight.text()
    expect(peighttext).toEqual("A cookie is a small piece of data which is sent to your browser and stored on your computer's hard drive. Cookies do not harm or damage your computer. You can also set your browser to notify when you receive a cookie. This enables you to accept it or not.")
})
it("p testing9",()=>{
    const pnine = wrapper.find(".pnine")
    const pninetext = pnine.text()
    expect(pninetext).toEqual("The personal data we collect will be used to provide users for their requested service. Please find below to see the different scenarios of the usage of the data we collected.")
})
it("p testing10",()=>{
    const pten = wrapper.find(".pten")
    const ptentext = pten.text()
    expect(ptentext).toEqual("We have implemented necessary security measures with the help of the latest technology standards to keep your data safe and secure. We ensure that our site is secure and free from viruses and other malware, but not limited to, the scanning of all user content uploaded by users for viruses and malware as it is uploaded. However, we do not guarantee that our site is secure or free from viruses or other malware. We accept no liability for the same. Some of those measures are XSS filtering, CSRF protection, Password handling, Validate input data.")
})
it("p testing11",()=>{
    const peleven = wrapper.find(".peleven")
    const peleventext = peleven.text()
    expect(peleventext).toEqual("We may edit or change the privacy policy and terms of use from time to time. You will be notified about it either through the platform or through the email you have registered. The last revision date will be displayed at the top of this page.")
})
it("p testing12",()=>{
    const ptwelve = wrapper.find(".ptwelve")
    const ptwelvetext = ptwelve.text()
    expect(ptwelvetext).toEqual("If you have any other questions, suggestions regarding the privacy policy or the termscontact us")
})
it("htesting1",()=>{
    const htesting1 = wrapper.find(".htesting1")
    const htesting1text = htesting1.text()
    expect(htesting1text).toEqual("Privacy Policy")
})
it("htesting2",()=>{
    const htesting2 = wrapper.find(".htesting2")
    const htesting2text = htesting2.text()
    expect(htesting2text).toEqual("What data do we collect?")
})
it("htesting3",()=>{
    const htesting3 = wrapper.find(".htesting3")
    const htesting3text = htesting3.text()
    expect(htesting3text).toEqual("Anonymous data collected through this website")
})
it("htesting4",()=>{
    const htesting4 = wrapper.find(".htesting4")
    const htesting4text = htesting4.text()
    expect(htesting4text).toEqual("Links to other websites")
})
it("htesting5",()=>{
    const htesting5 = wrapper.find(".htesting5")
    const htesting5text = htesting5.text()
    expect(htesting5text).toEqual("Cookies")
})
it("htesting6",()=>{
    const htesting6 = wrapper.find(".htesting6")
    const htesting6text = htesting6.text()
    expect(htesting6text).toEqual("What do we do with the collected data")
})
it("htesting7",()=>{
    const htesting7 = wrapper.find(".htesting7")
    const htesting7text = htesting7.text()
    expect(htesting7text).toEqual("Protection of datas")
})
it("htesting8",()=>{
    const htesting8 = wrapper.find(".htesting8")
    const htesting8text = htesting8.text()
    expect(htesting8text).toEqual("Rights and Choices")
})
it("htesting9",()=>{
    const htesting9 = wrapper.find(".htesting9")
    const htesting9text = htesting9.text()
    expect(htesting9text).toEqual("Updations in the Privacy policy")
})
it("htesting10",()=>{
    const htesting10 = wrapper.find(".htesting10")
    const htesting10text = htesting10.text()
    expect(htesting10text).toEqual("Contact")
})
})

