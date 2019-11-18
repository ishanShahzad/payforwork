import React from 'react';
import './HaveNotFound.scss';
import Icon from '@material-ui/core/Icon';

const HaveNotFound = () => {
    return (
        <div className="HaveNotFound">
            <div className="container">
                <h1 className="hnf-title" data-test="para1">Haven't found what you are looking for?</h1>
                <div className="row">
                    <div className="col-md-6 padding">
                        <div className="d-flex">
                            <Icon className="fa fa-lock hnf-icon" />
                            <p className="sub-title" data-test="para2">For eligible customers only*</p>
                        </div>
                        <p className="context" data-test="para3">Please <span className="green">login</span> and raise a ticket for the dedicated support</p>
                    </div>
                    <div className="col-md-6 padding border-gray">
                        <div className="move-left">
                            <div className="d-flex">
                                <Icon className="fa fa-envelope hnf-icon" />
                                <p className="sub-title" data-test="para4"><span className="green">Contact us</span> directly</p>
                            </div>
                            <p className="context" data-test="para5">Estimated response time:</p>
                            <p className="context" data-test="para6">2-6 hours (Monday to friday 12am to 6pm PST)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HaveNotFound;