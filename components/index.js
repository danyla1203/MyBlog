import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./Home";
import AboutMe from "./AboutMe";
import AboutSite from "./AboutSite";
import Catalog from "./Catalog";
import FullArticle from './articles/FullArticle';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                
                <Route exact path="/about-site" component={ AboutSite } />
    
                <Route exact path="/about-me" component={ AboutMe } />
        
                <Route exact path="/catalog" component={ Catalog } />
            
                <Route exact path="/post/:idPost" component={ FullArticle } />
                    
                <Route>
                    <h1>Error 404. Not found</h1>
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
