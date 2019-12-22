import React, { Component } from 'react';

import Header from "./Header";
import ArticleList from "./articles/ArticleList";
import RandomArticles from "./articles/RandomArticles";

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
        console.log(articles);
        return ( 
            <div id="wrapper">
                <Header />
                <ArticleList articles = { articles } />
                <RandomArticles articles = { articles } />
            </div>
        );
    }
}
 
export default Home;