import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from "./Home";
import AboutMe from "./AboutMe";
import AboutSite from "./AboutSite";

function App() {
    return (
        <Router>

            <Route exact to="/">
                <Home />
            </Route>
        
        </Router>
    )
}
