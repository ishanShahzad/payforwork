import React, { Component } from 'react';
import "./searchbar.css"
class Serachbar extends Component {
    state = {
    }
    render () {
        return(
            <React.Fragment>
                <div className="kal">
                <div className="input-group mb-3 ka">
  <input type="text" className="form-control umer"  placeholder="search for free lancers" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-success do" type="button" id="button-addon2">SEARCH</button>
  </div>
</div>
                </div>
            </React.Fragment>
        )
    }
}
export default Serachbar;