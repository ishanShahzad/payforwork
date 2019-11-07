import React from 'react'
import "./PayInvoice.css";

const PayInvoice = () => {
  return (
      <div className="container">
          <div class="hw_tabcont">
            <div class="row"> 
              <div class="col-lg-6 text-left">
                <div class="andot aos-init aos-animate" data-aos="flip-up" data-aos-delay="0" data-aos-duration="10">
                    <span></span>
                  </div>
                  <h2 class="hw_mtitle">Pay the invoice</h2>
                  <div class="only_mob"> 
                    <img src="https://www.payforworks.com/images/hwk3.png" alt="Payforwork-invoice-img" class="img-responsive hwinv aos-init aos-animate" data-aos="fade-down" data-aos-delay="0" data-aos-duration="1500"/>
                  </div> 
                  <p>Please verify all works done by the freelancer before you pay any invoice. Invoice for small jobs can be paid at once when the required work is finished. For larger jobs, you can agree with the freelancer for different milestone payments.</p> <h3>Leave feedback</h3> <p>Post a job with all the details about the work gets done. This will be looking by the experts who registered with us and will give you competent offers.</p>
              </div> 
              <div class="col-lg-6 hw_img only_lg"> 
                  <img src="https://www.payforworks.com/images/hwk3.png" alt="Payforwork-invoice-img" class="img-responsive hwinv aos-init aos-animate" data-aos="fade-down" data-aos-delay="0" data-aos-duration="1500" width="100%"/> 
              </div> 
          </div>
      </div>
    </div>
  )
}





export default PayInvoice;
