import React from "react";
import { Link } from 'react-router-dom';
import './ArticlesList.scss';

const ArticlesList = () => {
    return(
    <div className="articles-list">
    <div className="container">
      <h3 className="article-title">Popular articles</h3>
      <div className="row mt-4">
        <div className="col-md-4">
          <ul className="list">
            <li className="list-item" data-test="li1"><Link className="item-link" to="/">Buyer Tips</Link></li>
            <li className="list-item" data-test="li2"><Link className="item-link" to="/">What’s a perfect profile ?</Link></li>
            <li className="list-item" data-test="li3"><Link className="item-link" to="/">Dispute resolution center</Link></li>
            <li className="list-item" data-test="li4"><Link className="item-link" to="/">Freelancer memberships</Link></li>
            <li className="list-item" data-test="li5"><Link className="item-link" to="/">Violation of policy</Link></li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className="list">
            <li className="list-item" data-test="li6"><Link className="item-link" to="/">How to fine work?</Link></li>
            <li className="list-item" data-test="li7"><Link className="item-link" to="/">Posting a job</Link></li>
            <li className="list-item" data-test="li8"><Link className="item-link" to="/">Account and billing</Link></li>
            <li className="list-item" data-test="li9"><Link className="item-link" to="/">Free structures</Link></li>
            <li className="list-item" data-test="li10"><Link className="item-link" to="/">Bidding process</Link></li>
          </ul>
        </div>
        <div className="col-md-5">
          <ul className="list">
            <li className="list-item" data-test="li11"><Link className="item-link" to="/">How to create perfect proposal?</Link></li>
            <li className="list-item" data-test="li12"><Link className="item-link" to="/">How to link your Bank or Paypal account</Link></li>
            <li className="list-item" data-test="li13"><Link className="item-link" to="/">How to check balance and withdraw money?</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)};
export default ArticlesList;