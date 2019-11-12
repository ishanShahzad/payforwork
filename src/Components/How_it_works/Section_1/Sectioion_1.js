import React, { Component } from 'react'
import "./Section_1.css"

export default class SectionOne extends Component {
   render() {
    
   
    return (
        <React.Fragment>
        <section class="hiw_1"> 
        <div class="container">
           <h1>How It Works</h1>
            <p>In just a few simple steps we will get you connected.</p>  </div>
           </section>
   
       <section  className="hiw_2">
         <div className="container">
           <div class="borftab">
           <div class="borftab_lk">
               <ul class="nav nav-tabs switch_type" 
               id="myTab" role="tablist" > 
                 <li class=" nav-item">
                   <a className=" nav-link active"
                    data-toggle="tab" 
                    href="/" data-val="client"
                    role="tab" aria-controls="client"
                     aria-selected="true">As a buyer</a>
                   </li> 
                   <li className="nav-item">
                     <a className="nav-link"
                     data-toggle="tab" href="/" 
                     data-val="freelancer"
                     role="tab" aria-controls="freelancer"
                      aria-selected="false">As a freelancer</a>
                   </li> 
               </ul> 
             </div>
           
   

           </div>
         </div>
   
       </section>
       </React.Fragment>
    )
  }
}


