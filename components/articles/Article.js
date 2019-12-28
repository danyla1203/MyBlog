import React, { Component } from 'react';

function Article(props) {


    let img = ( props.data.img ) ?  <img src={ props.data.img } /> : "";
    return (
        <div className="article">
            { img }
            <h3>{ props.data.title }</h3>
            <p>{ props.data.text }</p>
            <h4>{ props.data.date }</h4>

        </div>       
    );
    
}
 
export default Article;