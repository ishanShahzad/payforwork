import React from 'react';
import './SearchingHelp.scss';
import Icon from '@material-ui/core/Icon';

const SearchingHelp = () => {
    return (
        <div className="searching-help">
        <div className=" d-flex align-items-center flex-column h-3">
            <h1 className="searching-title">How can we help</h1>
            <div className="search-box d-flex align-items-center">
                <input type="text" placeholder="Search"></input>
                <Icon className="fa fa-search search-icon" color="disabled" />
            </div>
            <p className="popular-topics">Popular topics: <span>Posting a job</span>, <span>Tips for buyers</span></p>
        </div>
        </div>
    )
}
export default SearchingHelp;