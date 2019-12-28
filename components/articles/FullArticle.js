import React from 'react';

import Header from "../Header";


function FullArticle(props) {

    let getArticle = () => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/data/articles/" + props.match.params.idPost, false);
        xhr.send();

        let result = JSON.parse(xhr.response);
    
        return result;
    }
    
    let article = getArticle();

    let img = ( article.img ) ? <img src={ article.img }/> : "";
    return (
        <div>
            <Header />
            <div id="article">
                { img }
                <h3>{ article.title }</h3>
                <p>{ article.text }</p>
                <h4>{ article.date }</h4>
            </div>
        </div>
    )
}

export default FullArticle;