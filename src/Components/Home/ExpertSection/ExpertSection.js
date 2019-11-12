import React from 'react'
import './ExpertSection.css';
export default function ExpertSection() {
    return (
        <div className="background container-fluid d-flex align-items-center">

            <div className="pl-2 bord pr-4 mt-5 "  >
                <h2 className="text-white  head "  >
                    Find an Expert for your job</h2>
                <p className="text-white para">from the best freelancers around the globe</p>
                <div className="">
                    <form className="form-inline">
                        <input type="text" placeholder="What do you need to get done?" className="form-control none " />
                        <button type="submit" style={{}} className="btn  px-4 butt">FIND</button>
                    </form>
                </div>


            </div>
        </div>
    )
}
