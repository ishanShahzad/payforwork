import React, { Component } from 'react';
import "./postjob.css";
import "./postTab.css";
// import "./postMobile.css";


export default class postJob extends Component {
   
    render() {
        return (
            <div>
                 <div className="main">
                <div className="post-form">
                    <h1 className="h1" id="heading">Post a Job</h1>
                    <p className="main-para" id="para">Post your job in minutes. Contact expert freelancers and get your work done.</p>
                
                    <ul className="aside">
                        <li className="list1">
                            <h3 className="listed" id="head">01 Personal Details</h3>
                            <div className="img1">
                                <img className="logo img1" src="./images/pj.png"/>
                                <p className="paragraph" id="paragraph">Add a title for your job.Explain your job in detail.Attach any file if that helps to describe the job.</p>
                            </div>
                        </li>
                        <li className="list2">
                            <h3 id="list1">02 Job Details</h3>
                        </li>
                        <li className="list3">
                            <h3 id="list2">03 Category and Skills</h3>
                        </li>
                        <li className="list4">
                            <h3 id="list3">04 Budget</h3>
                        </li>
                        <li className="list5">
                            <h3 id="list4">05 Project Special</h3>
                        </li>
                    </ul>
               
                    <div className="form">

                        <h3 className="label-head" id="main_label">Personal Details</h3>

                        <label className="email" id="label_1">EMAIL ADDRESS</label>
                        <input className="em" type="email" placeholder="Email Address"/>   

                        <label className="first" id="label_2">FIRST NAME</label>
                        <input className="name1" type="text" placeholder="First Name"/>   

                        <label className="last" id="label_3">LAST NAME</label>
                        <input className="name2" type="text" placeholder="Last Name"/>  

                        <label className="password" id="label_4">PASSWORD</label>
                        <input className="pass" type="password" placeholder="Password"/>  

                        <label className="confirm" id="label_5">CONFIRM PASSWORD</label>
                        <input className="pass2" type="password" placeholder="Confirm Password"/>  

                        <label className="location" id="label_6">LOCATION</label>
                        <input className="locate" type="password" placeholder="Karachi, Sindh, Pakistan"/>  
                        <button className="btn">NEXT ></button>
                     </div>


                </div>
           </div>
            </div>
        )
    }
}
