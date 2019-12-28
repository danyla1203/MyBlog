import React, { Component } from 'react';
import { Link } from "react-router-dom";

function RandomArticles(props) {
    let getRandNum = () => {
      return Math.ceil(Math.random() * props.articles.length - 1);
    };

    let getRandArr = () => {
        let arr = [];
        while (arr.length < 3) {
            var r = getRandNum();
    
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        return arr;
    };

  
    let randArticlesId = getRandArr();
    let articles = [];
  
    for (let i = 0; i < randArticlesId.length; i++) {
        for (let j = 0; j < props.articles.length; j++) {
            if (randArticlesId[i] === props.articles[j].id) {
                articles.push(props.articles[j]);
            }
        }
    }
  
    let renderedArticles = articles.map(element => {
        return (
            <div key={ element.id }>
                <h4>{element.title}</h4>
                <p>{ element.short_text }</p>   
                <Link to={ "/post/" + element.id }>Link</Link>
            </div>
        );
    });
  
    return (
        <div id="random_articles">
            <h3>Random Articles</h3>
            {renderedArticles}
        </div>
    )
  }


export default RandomArticles;