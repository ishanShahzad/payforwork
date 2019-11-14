import React from 'react';
import "./Find_experts.css" ;
export default function Find_experts() {
    return (
        <div>
            
            <div className="row payforwork_find_experts">
              
                    <div className=" col-12 col-lg-6 ">
                          <div className="color_divs" >
                    <div className="one_color" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"></div>
                    <div className="two_color" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"></div>
                    <div className="three_color" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500"></div>
                </div>

                    <div className="find_experts_first">
                        <h2 className="find_experts_heading_one heading1" id="heading1">Find expert freelancers</h2>
                        
                        <img className="find_experts_pic_two picTwo" src="https://www.payforworks.com/images/hwk1.png" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" alt=""/>
                        
                        <p className="paraOne">On payforworks, we provide you with a range of experts from UI designers, web programmers, artists, accountants and more.</p>
                   <h3 className="find_experts_heading_two">Start by posting a job</h3>
                   <p className=" ParaTwo">Post a job with all the details about the work gets done. This will be looking by the experts who registered with us and will give you competent offers.</p>
                  
                  <div className="line"></div>
                  
                  
                   <br/>
                   <button>POST A JOB</button>
                  
                    </div>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        
                        <img className="find_experts_pic picOne" src="https://www.payforworks.com/images/hwk1.png" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" alt=""/>
                        
                           
                    </div>
                </div>

            
        </div>
    )
}
