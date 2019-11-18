import React, { Component } from 'react';
// import "./postjob.scss";
// import "./postTab.scss";
// import "./postMobile.css";


export default class postJob extends Component {

    render() {
        return (
            <div className="container-fluid pb-4 pt-4" style={{ backgroundColor: "#EDEDEC" }}>
                <div className="container bg-white  mb-4 mt-5 " style={{ width: "89vw" }}>
                    <div className=" pb-4">
                        <h1 className="h4 text-center pt-4" style={{ fontSize: "26px" }}>Post a Job</h1>
                        <p className=" h3 text-center" style={{ fontSize: "18px" }} >Post your job in minutes. Contact expert freelancers and get your work done.</p>
                        <div className="border border-light mt-4"></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4" >
                            <ul className="mt-2" style={{ fontSize: "14px", listStyle: "none" }}>
                                <li className="">
                                    <h3 className="h6 mb-3" style={{ fontWeight: "bold" }} id="">01 Personal Details</h3>
                                    <div className="row mb-4">
                                        <div className="col-3">
                                            <img className="" style={{ height: "10vh" }} src="./images/pj.png" />
                                        </div>

                                        <p className="col-8" style={{ marginLeft: "-23px" }} >Add a title for your job.Explain your job in detail.Attach any file if that helps to describe the job.</p>
                                    </div>
                                </li>
                                <li className="mb-4" style={{
                                    color: "#868686", fontSize: "16px",
                                    fontWeight: 600
                                }}>
                                    <h3 className="h6">02 Job Details</h3>
                                </li>
                                <li className="mb-4" style={{
                                    color: "#868686", fontSize: "16px",
                                    fontWeight: 600
                                }}>
                                    <h3 className="h6">03 Category and Skills</h3>
                                </li>
                                <li className="mb-4" style={{
                                    color: "#868686", fontSize: "16px",
                                    fontWeight: 600
                                }}>
                                    <h3 className="h6">04 Budget</h3>
                                </li>
                                <li className="mb-4" style={{
                                    color: "#868686", fontSize: "16px",
                                    fontWeight: 600
                                }}>
                                    <h3 className="h6">05 Project Special</h3>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                            <form>
                                <h2 className="" style={{ textDecoration: "underline", fontSize: "22px", fontWeight: "bolder", marginBottom: "35px" }}>Personal Details</h2>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1" style={{
                                        color: "#424242",
                                        fontSize: "14px",
                                        fontWeight: 800,
                                        fontFamily: "nunito sans,sans-serif",
                                        textTransform: "uppercase"
                                    }}>Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{
                                        width: "100%",
                                        height: "45px", borderRadius: "2px",
                                        padding: "10px 15px",
                                        fontSize: "13px",
                                        fontWeight: 300,
                                        lineHeight: "21px"
                                    }} />
                                </div>
                                <div className="form-group  mb-4">
                                    <label htmlFor="exampleInputPassword1" style={{
                                        color: "#424242",
                                        fontSize: "14px",
                                        fontWeight: 800,
                                        fontFamily: "nunito sans,sans-serif",
                                        textTransform: "uppercase"
                                    }}>First Name</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="First Name" style={{
                                        width: "100%",
                                        height: "45px", borderRadius: "2px",
                                        padding: "10px 15px",
                                        fontSize: "13px",
                                        fontWeight: 300,
                                        lineHeight: "21px"
                                    }} />
                                </div>
                                <div className="form-group  mb-4">
                                    <label htmlFor="exampleInputEmail1" style={{
                                        color: "#424242",
                                        fontSize: "14px",
                                        fontWeight: 800,
                                        fontFamily: "nunito sans,sans-serif",
                                        textTransform: "uppercase"
                                    }}>Last Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" style={{
                                        width: "100%",
                                        height: "45px", borderRadius: "2px",
                                        padding: "10px 15px",
                                        fontSize: "13px",
                                        fontWeight: 300,
                                        lineHeight: "21px"
                                    }} />
                                </div>
                                <div className="form-group  mb-4">
                                    <label htmlFor="exampleInputEmail1" style={{
                                        color: "#424242",
                                        fontSize: "14px",
                                        fontWeight: 800,
                                        fontFamily: "nunito sans,sans-serif",
                                        textTransform: "uppercase"
                                    }}>Password</label>
                                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" style={{
                                        width: "100%",
                                        height: "45px", borderRadius: "2px",
                                        padding: "10px 15px",
                                        fontSize: "13px",
                                        fontWeight: 300,
                                        lineHeight: "21px"
                                    }} />
                                </div>
                                <div className="form-group  mb-4">
                                    <label htmlFor="exampleInputEmail1" style={{
                                        color: "#424242",
                                        fontSize: "14px",
                                        fontWeight: 800,
                                        fontFamily: "nunito sans,sans-serif",
                                        textTransform: "uppercase"
                                    }}>Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirm Password" style={{
                                        width: "100%",
                                        height: "45px", borderRadius: "2px",
                                        padding: "10px 15px",
                                        fontSize: "13px",
                                        fontWeight: 300,
                                        lineHeight: "21px"
                                    }} />
                                </div>
                                <div className="form-group  mb-4">
                                    <label htmlFor="exampleInputEmail1" style={{
                                        color: "#424242",
                                        fontSize: "14px",
                                        fontWeight: 800,
                                        fontFamily: "nunito sans,sans-serif",
                                        textTransform: "uppercase"
                                    }}>Location</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location" style={{
                                        width: "100%",
                                        height: "45px", borderRadius: "2px",
                                        padding: "10px 15px",
                                        fontSize: "13px",
                                        fontWeight: 300,
                                        lineHeight: "21px"
                                    }} />
                                </div>
                                <button type="submit" className="btn-primary px-5 py-3 mt-5 mb-5" style={{ borderRadius: "none", border: "none", outline: "none", backgroundColor: "#29D67F" }}>NEXT ></button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
