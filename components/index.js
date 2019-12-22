import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from "./Home";
import AboutMe from "./AboutMe";
import AboutSite from "./AboutSite";
import Catalog from "./Catalog";

function App() {
    return (
        <Router>

            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/about-site">
                <AboutSite />
            </Route>

            <Route exact path="/about-me">
                <AboutMe />
            </Route>

            <Route exact path="/catalog">
                <Catalog />
            </Route>

            <Route>
                <h1>Error 404. Not found</h1>
            </Route>
        </Router>
    )
}
