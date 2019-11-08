import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div id="myFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 logo">
                            <img src="https://www.payforworks.com/images/logo_new.png"
                                alt="Payforworks-logo" className="img-responsive" />
                        </div>
                        <div className="col-sm-2">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="https://www.payforworks.com/about">About</a></li>
                                <li><a href="https://www.payforworks.com/pricing">Pricing</a></li>
                                <li><a href="https://www.payforworks.com/blog">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="https://www.payforworks.com/support">Help center</a></li>
                                <li><a href="https://www.payforworks.com/how-it-works">How it works</a></li>
                                <li><a href="https://www.payforworks.com/terms">General terms</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <h3>Other links</h3>
                            <ul>
                                <li><a href="https://www.payforworks.com/user/freelancers">Find freelancers</a></li>
                                <li><a href="https://www.payforworks.com/project/job">Find jobs</a></li>
                                <li><a href="https://www.payforworks.com/user/freelancers">Top freelancers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <div className="social-networks">
                                <h3>Social</h3>
                                <div className="socials"> <a href="https://www.facebook.com/payforworks" > <i
                                    className="fa fa-facebook" ></i></a> <a
                                        href="https://twitter.com/payforworks" ><i className="fa fa-twitter"
                                        ></i></a> <a
                                            href="https://www.youtube.com/channel/UCMdHFgy9Ffp9irZom9v7sKg" ><i
                                                className="fa fa-youtube-play" ></i></a> <a
                                                    href="https://www.linkedin.com/company/payforworks/" ><i
                                                        className="fa fa-linkedin" ></i></a> </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="footer_bg">
                    <div className="footer">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-3 col-sm-4 fs__copy">
                                        <div className="text07">© 2019 payforworks</div>
                                    </div>
                                    <div className="col-md-9 col-sm-8 fs__link">
                                        <div className="footer_box02">
                                            <ul className="sub_links">
                                                <li><a href="https://www.payforworks.com/terms">Terms</a></li>
                                                <li><a href="https://www.payforworks.com/privacy-policy">Privacy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
