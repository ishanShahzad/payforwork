import React from "react";
import { Link } from 'react-router-dom';
import './ArticlesList.scss';

const ArticlesList = () => {
    return(
    <div className="help-center-article-list">
    <div className="container">
      <h3 className="article-title">Popular articles</h3>
      <div className="row">
        <div className="col-md-4">
          <ul className="article-list-item-links">
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">Buyer Tips</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">What’s a perfect profile ?</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">Dispute resolution center</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">Freelancer memberships</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">Violation of policy</Link></li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className="articles-list">
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">How to fine work?</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">Posting a job</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">Account and billing</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">Free structures</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">Bidding process</Link></li>
          </ul>
        </div>
        <div className="col-md-5">
          <ul className="articles-list">
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">How to create perfect proposal?</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">How to link your Bank or Paypal account</Link></li>
            <li className="article-list-item" ><Link className="article-list-item-link" to="/">How to check balance and withdraw money?</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)};
export default ArticlesList;