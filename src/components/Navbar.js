import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="_" className="brand-logo">Cincinnati tour</a>
                <ul className="center">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contac</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default withRouter(Navbar);
