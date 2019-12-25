import React, { Component } from 'react';

class ArticleList extends Component {
    
    render() {
        let renderArticles = this.props.articles;
        let Article = this.props.Article;
        
        if(Array.isArray(this.props.articles)) {
            
            renderArticles = renderArticles.map((element) => {
                
                return <Article data={ element } key={ element.id }/>
            });
        }

        return (
            <div id="article_list">
                { renderArticles }
            </div>
        );
    }
}
 
export default ArticleList;