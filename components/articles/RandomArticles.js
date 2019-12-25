import React, { Component } from 'react';
import { Link } from "react-router-dom";


function RandomArticles(props) {

    let renderArticles = (element) => {
        return( 
            <div key={ element.id }>
                <h3>{element.title}</h3>
                <Link to={"/post/" + element.id} >Link</Link>
            </div>
        )
    }
    
    let renderedArticles = props.articles;
    if(Array.isArray(props.articles)) {
        renderedArticles = props.articles.map((element) => {
            return renderArticles(element);
        })
    }

    
    return (
        <div>
            { renderedArticles }
        </div>
    )
}


export default RandomArticles;