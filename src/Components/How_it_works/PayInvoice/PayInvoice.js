import React from 'react'
import "./PayInvoice.scss";

const PayInvoice = () => {
  return (
    // <div className="row">
    <div className="hw_tabcont pb-4">
      <div className="row">
        <div className="col-lg-6 text-left">
          <div className="andot aos-init aos-animate" data-aos="flip-up" data-aos-delay="0" data-aos-duration="10">
            <span></span>
          </div>
          <h2 className="hw_mtitle">Pay the invoice</h2>
          <div className="only_mob">
            <img src="https://www.payforworks.com/images/hwk3.png" alt="Payforwork-invoice-img" className="img-responsive hwinv imgdata1 aos-init aos-animate" data-aos="fade-down" data-aos-delay="0" data-aos-duration="1500" />
          </div>
          <p className="hw_para">Please verify all works done by the freelancer before you pay any invoice. Invoice for small jobs can be paid at once when the required work is finished. For larger jobs, you can agree with the freelancer for different milestone payments.</p> <h4 className="hw_subtitle font-weight-bold">Leave feedback</h4> <p className="hw_para1">Post a job with all the details about the work gets done. This will be looking by the experts who registered with us and will give you competent offers.</p>
        </div>
        <div className="col-lg-6 hw_img only_lg pl-4">
          <img src="https://www.payforworks.com/images/hwk3.png" alt="Payforwork-invoice-img" className="img-responsive hwinv   imgdata aos-init aos-animate ml-5" data-aos="fade-down" data-aos-delay="0" data-aos-duration="1500" width="100%" />
        </div>
      </div>
    </div>
    // </div>
  )
}





export default PayInvoice;
