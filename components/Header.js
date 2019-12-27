import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about-site"><li>About Site</li></Link>
                <Link to="/about-me"><li>About Me</li></Link>
                <Link to="/catalog"><li>Catalog</li></Link>
            </ul>
        </header>
    )
}

export default Header;