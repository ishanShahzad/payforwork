import React from 'react';
import "./Find_experts.scss";
export default function Find_experts() {
    return (
        <div>

            <div className="row payforwork_find_expert">
                <div className="color_divs" >
                    <div className="one_color" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"></div>
                    <div className="two_color" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"></div>
                    <div className="three_color" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500"></div>
                </div>
                <div className="col-md-6 ">
                    <div className="first">
                        <h2 className="h1">Find expert freelancers</h2>

                        <img className="img2" src="https://www.payforworks.com/images/hwk1.png" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" alt="" />

                        <p>On payforworks, we provide you with a range of experts from UI designers, web programmers, artists, accountants and more.</p>
                        <h3>Start by posting a job</h3>
                        <p className="p2">Post a job with all the details about the work gets done. This will be looking by the experts who registered with us and will give you competent offers.</p>

                        <div className="line"></div>


                        <br />
                        <button>POST A JOB</button>

                    </div>
                </div>
                <div className="col-md-6 ">

                    <img className="pic" src="https://www.payforworks.com/images/hwk1.png" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" alt="" />


                </div>
            </div>


        </div>
    )
}
