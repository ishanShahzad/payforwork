import React, { Component } from 'react'
import './privacy.scss';
class Privacy extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid  pt-4 pb-4" style={{ backgroundColor: "#EDEDEC" }}>
                <div className="container bg-white   mt-3 mb-3 " style={{ width: "89vw" }}>
                    <div className="container  pt-4" style={{ width: "82vw" }}>
                        <div className="ml-3 pt-4  text-left">
                            <h2 className="pt-4  " style={{ color: "#1A2D51", fontSize: "45px", fontWeight: 600 }}>Privacy Policy</h2>
                            <p className="mt-2 mb-4" style={{ color: "#7697C4", fontSize: "14px" }}>Last modified 1 October 2019</p>
                            <p className="mt-4" style={{
                                fontSize: "14px", fontWeight: "600", lineHeight: "22px",
                                color: "#3e3e3e"
                            }}>Payforworks are committed to protecting and respecting your privacy.</p>
                            <p className="" style={{ fontSize: "14px" }}>Payforworks.com’s privacy statement together with terms and conditions explains the following:</p>
                            <ol style={{ fontSize: "14px" }}>
                                <li className="olfirst1">  &nbsp;&nbsp;What all the personal data we collect.</li>
                                <li className="olfirst2"> &nbsp;&nbsp;Anonymous data collected through this website.</li>
                                <li className="olfirst3"> &nbsp;&nbsp;Links to other websites.</li>
                                <li className="olfirst4"> &nbsp;&nbsp;Cookies. </li>
                                <li className="olfirst5"> &nbsp;&nbsp;What do we do with the collected data & disclosure of the personal and employment data. </li>
                                <li className="olfirst6"> &nbsp;&nbsp;Security.</li>
                                <li className="olfirst7"> &nbsp;&nbsp;Rights and choices.</li>
                                <li className="olfirst8">&nbsp;&nbsp;About changes in the privacy policy.</li>
                                <li className="olfirst9">&nbsp;&nbsp;Contact</li>
                            </ol>
                            <p style={{ fontSize: "14px" }} className="mb-5">These statements also explain how personal data are used for the people who belong to Europe as required under the General Data Protection Regulation (GDPR).</p>
                            <h2 className="" style={{ fontSize: "24px" }}>What data do we collect?</h2>
                            <p className=" mb-5" style={{ fontSize: "14px", lineHeight: "22px" }}>We collect and handle your personal data because you give this on signup by confirming that thyself agree with the terms and conditions. We collect data only on your confirmation. The personal data that we collect may include email, first name, last name, location with country, your portfolio samples, your hourly work payment details, your language, etc. When you do a payment in our site, your payment provider might transfer your details to us for the process. We don’t keep or save any kind of card details unless you want us to do it. To pay your savings, we may use the bank details or other financial details of the freelancers/seller’s.
            </p>
                            <h2 className="" style={{ fontSize: "24px" }}>Anonymous data collected through this website</h2>
                            <p className=" mr-3 mb-5" style={{ fontSize: "14px", lineHeight: "22px", }}>
                                We may use any third party to collect the personal information because they are publicly available. Like any other online companies, we receive technical information when you use our services. These technologies help us to analyze how people use our services. It also helps to improve our site functions, saves your log-in information for future sessions, and serve you with advertisements that might interest you. Using this technology does not identify you personally, it enables to compile statistics about the visitors and their use of our website. For example, our web server automatically logs to the website our visitor's view, their IP addresses and which are the web browsers our visitors use.
            </p>

                            <h2 className="" style={{ fontSize: "24px" }}>Links to other websites</h2>
                            <p className="mr-3 mb-5" style={{ fontSize: "14px", lineHeight: "22px", }}>
                                Our website might be containing hyperlinks to websites that are not operated by us. These hyperlinks are for your references. And so do not imply any endorsement of the activities of these third-party websites. We are not the ones controlling these websites and are not responsible for their data or privacy practices. We strongly advise you to review any privacy policy posted on any site you visit before you use the site or provide any personal data.
            </p>
                            <h2 className=" " style={{ fontSize: "24px" }}>
                                Cookies
            </h2>
                            <p className=" mb-5" style={{ fontSize: "14px", lineHeight: "22px", }} >
                                A cookie is a small piece of data which is sent to your browser and stored on your computer's hard drive. Cookies do not harm or damage your computer. You can also set your browser to notify when you receive a cookie. This enables you to accept it or not.
            </p>
                            <h2 className="" style={{ fontSize: "24px" }}>
                                What do we do with the collected data
            </h2>
                            <p className=" mr-3 " style={{ fontSize: "14px", lineHeight: "22px", }}>
                                The personal data we collect will be used to provide users for their requested service. Please find below to see the different scenarios of the usage of the data we collected.
            </p>
                            <ol style={{ fontSize: "14px", lineHeight: "22px", }}>
                                <li className="ol1"> &nbsp;&nbsp;  Contacting you to inform about the new updates in the privacy policy. </li>
                                <li className="ol2"> &nbsp;&nbsp; Contacting you to inform about the new updates in the terms and conditions. </li>
                                <li className="ol3">  &nbsp;&nbsp;We may contact you to inform about the new service requests.</li>
                                <li className="ol4"> &nbsp;&nbsp; Your data may be used for commercial purposes. </li>
                                <li className="ol5"> &nbsp;&nbsp; We may contact you to inform about the new users who are interested in our services.</li>
                                <li className="ol6"> &nbsp;&nbsp; To conduct regular analysis and research to improve our platform.</li>
                                <li className="ol7"> &nbsp;&nbsp; To provide support as a part of the dispute process.</li>
                            </ol>
                            <h2 className="mt-5" style={{ fontSize: "24px" }}>
                                Protection of datas
            </h2>
                            <p className="mb-5" style={{ fontSize: "14px", lineHeight: "22px", }}>
                                We have implemented necessary security measures with the help of the latest technology standards to keep your data safe and secure. We ensure that our site is secure and free from viruses and other malware, but not limited to, the scanning of all user content uploaded by users for viruses and malware as it is uploaded. However, we do not guarantee that our site is secure or free from viruses or other malware. We accept no liability for the same. Some of those measures are XSS filtering, CSRF protection, Password handling, Validate input data.
            </p>
                            <h2 className="" style={{ fontSize: "24px" }}>
                                Rights and Choices
            </h2>
                            <ul style={{ fontSize: "14px", lineHeight: "22px", }}>
                                <li className="ul1">You have the right to see your personal data that we hold, and you can change the details anytime. </li>
                                <li className="ul2">Your name first entered will be locked to change for the unique identity. </li>
                                <li className="ul3">In case if you need to change your name, please raise a ticket through the platform. All other personal information can be accessed and changed from your “edit profile” page.</li>
                                <li className="ul4">You have the right to request us to send you a copy of the personal information we keep about you. </li>
                                <li className="ul5"> You have the right to request to stop putting your profile public in our platform, you can contact us to do so.</li>
                                <li className="ul6">You have the right to put your status as “not available” in case if you are busy. </li>
                                <li className="ul7">You have the right to unsubscribe from our newsletter we may send you occasionally.</li>
                                <li className="ul8"> You can deactivate your account at any time by raising a ticket.</li>
                            </ul>
                            <h2 className="mt-5" style={{ fontSize: "24px" }}>
                                Updations in the Privacy policy
            </h2>
                            <p className="mb-5" style={{ fontSize: "14px", lineHeight: "22px", }}>
                                We may edit or change the privacy policy and terms of use from time to time. You will be notified about it either through the platform or through the email you have registered. The last revision date will be displayed at the top of this page.
            </p>
                            <h2 className="" style={{ fontSize: "24px" }}>
                                Contact
            </h2>
                            <p className=" mb-5" style={{ fontSize: "14px", lineHeight: "22px", }}>
                                If you have any other questions, suggestions regarding the privacy policy or the terms
            <button className="btn btn-link text-info">
                                    contact us
            </button>
                            </p>
                            <p className="mt-5 mb-5">&nbsp; </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Privacy;