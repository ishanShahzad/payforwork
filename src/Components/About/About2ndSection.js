import React from "react";
import "./About2ndSection.css";

function About() {
  return <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <img src="./abt_circle_bg.png" alt="Reload" className="circle" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800"/>
          <h1 className="para-title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
            Creating a space for the people
<br />a <strong>convenient, reliable, and easy way<br /></strong> to access the global freelance talents</h1>
          <p className="paragraph" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"><strong>
            It all started as a freelancer </strong> We wanted to create a platform that is very user-friendly and <br /> offer services with a low commission rate.<br />

            Though we have several marketplaces available, we thought creating another great <br /> platform will help millions of people to find their living.</p>
          <p className="paragraph2" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"><strong><span className="underline">
            Our vision</span></strong> is to help people find their dream job and help employers to<br />
            find the right skills.</p>
          <div className="row">
            <div className="col-md-12">
              <div className="bg-div" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                <p className="div_para">We help to strengthen business by connecting them<br /> to the skilled freelancing talent across the globe.</p>
                <p className="div_para2">
                  We are always trying to make the freelance process<br /> more efficient as the work shifts from full-time<br /> employment to free-agent employment.
          </p>
                <h2 className="div_h2">Act quick. Grow even quicker.</h2>
                <div className="div_imgs" >
                  <img src="./abt_work.png" className="pic" alt="#" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800" />
                  <img src="./abt_plus.png" className="pic2" alt="#" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
}


export default About;

// const add = (x, y) => {
//   return x + y;
// };
// const addListItem = (item, list) => {
//   list.push(item)
//   return list;
// };
// module.exports = {
//   add,
//   addListItem
// };
