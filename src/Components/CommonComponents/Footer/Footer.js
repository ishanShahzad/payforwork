import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="container-fluid main">
                <div className="row footer-columns">


                    <div className="col-md-4  col-lg-4 col-sm-12 logo">
                        <img className="image" src="https://www.payforworks.com/images/logo_new.png" alt="Payforworks-logo"
                            className="img-responsive" />

                    </div>



                    <div className=" col-lg-2 col-md-2 col-sm-3 lefty">
                        <h3> Company</h3>
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-2 col-sm-3 lefty">
                        <h3>Resources</h3>
                        <ul>
                            <li><Link to="/helpcenter">Help center</Link></li>
                            <li><Link to="/howitworks">How it works</Link></li>
                            <li><Link to="/">General terms</Link></li>
                        </ul>

                    </div>

                    <div className="col-lg-2 col-md-2 col-sm-3 lefty">
                        <h3>Other links</h3>
                        <ul>
                            <li><Link to="/">Find freelancers</Link></li>
                            <li><Link to="/">Find jobs</Link></li>
                            <li><Link to="/">Top freelancers</Link></li>
                        </ul>
                    </div>
                    <div className=" col-lg-2 col-md-2 col-sm-3 lefty">
                        <div className="social-networks">
                            <h3>Social</h3>
                            <div className="socials"> <a href="https://www.facebook.com/payforworks" target="_blank"> <i
                                className="fa fa-facebook" aria-hidden="true"></i></a> <a
                                    href="https://twitter.com/payforworks" target="_blank"><i className="fa fa-twitter"
                                        aria-hidden="true"></i></a> <a
                                            href="https://www.youtube.com/channel/UCMdHFgy9Ffp9irZom9v7sKg" target="_blank"><i
                                                className="fa fa-youtube-play" aria-hidden="true"></i></a> <a
                                                    href="https://www.linkedin.com/company/payforworks/" target="_blank"><i
                                                        className="fa fa-linkedin" aria-hidden="true"></i></a> </div>
                        </div>

                    </div>
                </div>


                <hr className="line mt-4" />
            </div>



            <div className="footer-bg">
                <div className="footer">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="row ">
                                <div className="col-md-3 col-sm-4  ">
                                    <div className="copy-rite">
                                        &copy; 2019 payforworks
                                </div>
                                </div>
                                <div className="col-md-9  col-sm-8   links">
                                    <div className="terms">
                                        <ul className="sub_links">
                                            <li className="linkz"><Link to="/">Terms</Link></li>
                                            <li className="linkz"><Link to="privacy">Privacy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}





export default Footer;
