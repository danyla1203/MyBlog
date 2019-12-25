import React, { Component }from 'react';

import Header from "./Header";
import ArticleList from "./articles/ArticleList";
import RandomArticles from "./articles/RandomArticles";

import Article from "./articles/Article";

class Home extends Component {

    constructor() {
        super();
        
        this.state = {
            articles: "Nothing here" 
        }
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/data/articles");
        xhr.send();

        xhr.onload = () => {
            let result = JSON.parse(xhr.response);
            this.setState({ articles: result })
        }
    }

    render() {
        let articles = this.state.articles;
        
        return ( 
            <div id="wrapper">
                <Header />
                <div id="content">
                    <ArticleList articles = { articles } Article=   { Article }/>
                    <RandomArticles articles = { articles } />
                </div>
            </div>
        );
    }
}
 
export default Home;