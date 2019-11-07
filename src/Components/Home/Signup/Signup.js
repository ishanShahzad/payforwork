import React, { Component } from 'react'
import "./Signup.css"


export default class Signup extends Component {
    render() {
        return (
            <div container-fluid>
                <div className="container-fluid  sign">
        <h1 className="text-center heading">SIGN-UP</h1>
        <div className="container-fluid text-center">
        <p>Already Have An Acount? <span>Log In</span></p>
        </div>
      
      
        <div className="container-fluid bg-light mini ">
          <div className="pt-5 ">
            <div className="container-fluid text-center">
          <div className="btn btn-primary mt-2 p-2">
              
              <i className="fa fa-facebook" />

               <span className="mr-3">
                |&nbsp; Login With Facebook</span>
              
              
             
              </div>
              &nbsp; &nbsp; &nbsp;
            
              <div className="btn btn-danger pr-3 mt-2 mr-3 bt">
              
              <i className="fa fa-google" />

               <span className="mr-3">|&nbsp; Login With Google</span>
              
            
              </div>
              </div>
              <h5 className="text-center heading">OR</h5>
              {/* <div className="pt-5"> */}
           
        <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">EMAIL ADDRESS</label>
          <input type="email" className="form-control i1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">FIRST NAME</label>
          <input type="text" className="form-control i1" id="exampleInputPassword1" placeholder="First Name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">LAST NAME</label>
          <input type="text" className="form-control i1" id="exampleInputPassword1" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">PASSWORD</label>
          <input type="password" className="form-control i1" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="cp"> CONFIRM PASSWORD</label>
          <input type="password" className="form-control i1" id="exampleInputPassword1" placeholder=" Confirm Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1 " > LOCATION</label>
          <input type="text" className="form-control i1" id="exampleInputPassword1" placeholder=" Location" />
        </div>
        <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">TYPE</label>
        <select className="form-control i1" id="exampleFormControlSelect1">
        <option>Select a value</option>
          <option>Freelancer</option>
          <option>Client</option>
          
        </select>
      </div>


       
        <button type="submit" className="btn btn-info mb-3 bt1">Submit</button>
        
          
      </form>
      {/* </div> */}
      </div>
      </div>
     
      
      </div>
            </div>
        )
    }
}
