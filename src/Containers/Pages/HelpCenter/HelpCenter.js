import React from 'react';
import SearchingHelp from '../../../Components/HelpCenter/SearchingHelp/SearchingHelp';
import Explore from "../../../Components/HelpCenter/Explore/Explore";
import ArticlesList from '../../../Components/HelpCenter/ArticlesList/ArticlesList';
import HaveNotFound from '../../../Components/HelpCenter/HaveNotFund/HaveNotFound';

const HelpCenter = () => (
    <div className="help-center">
        <SearchingHelp />
        <Explore/>
        <ArticlesList />
        <HaveNotFound />
    </div>
)
export default HelpCenter;