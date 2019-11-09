import React from 'react';
import './HaveNotFound.scss';
import Icon from '@material-ui/core/Icon';

const haveNotFound = () => {
    return (
        <div className="HaveNotFound">
            <div className="container">
                <h1 className="hnf-title">Haven't found what you are looking for?</h1>
                <div className="row">
                    <div className="col-md-6 padding">
                        <div className="d-flex">
                            <Icon className="fa fa-lock hnf-icon" color="black" />
                            <p className="sub-title">For eligible customers only*</p>
                        </div>
                        <p className="context">Please <span className="green">login</span> and raise a ticket for the dedicated support</p>
                    </div>
                    <div className="col-md-6 padding border-gray">
                        <div className="move-left">
                            <div className="d-flex">
                                <Icon className="fa fa-envelope hnf-icon" color="black" />
                                <p className="sub-title"><span className="green">Contact us</span> directly</p>
                            </div>
                            <p className="context">Estimated response time:</p>
                            <p className="context">2-6 hours (Monday to friday 12am to 6pm PST)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default haveNotFound;