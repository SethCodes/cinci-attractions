import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper black darken-3">
            <div className="container">
            <a href="_" className="brand-logo">Cincinnati Attractions</a>
            <ul className="right">
            <li> <a href="/"> Home </a></li>
            <li> <a href="/Shop"> Shop </a></li>
             <li> <a href="/Blog"> Blog </a></li>
        </ul>
            </div>
        </nav>

    )
}

export default withRouter(Navbar);
