import React, { Component } from 'react';

import Header from "./Header";
import ArticleList from "./articles/ArticleList";
import RandomArticles from "./articles/RandomArticles";

class Home extends Component {
    
    render() { 
        return ( 
            <div id="wrapper">
                <Header />
                <ArticleList />
            </div>
        );
    }
}
 
export default Home;