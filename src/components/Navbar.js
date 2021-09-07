import React from "react";

const Navbar = ({ handleLoginClick }) => {
  const handleClick = () => {
    handleLoginClick();
  };

    return (
        <nav className="nav-wrapper blue ">
       
            <div className="container">
            <a href="_" className="brand-logo">Cincinnati Attractions</a>
            <ul className="right">
            <li> <a href="/"> Home </a></li>
            <li> <a href="/Event"> Event </a></li>
             <li> <a href="/Blog"> Blog </a></li>
             <li> <a href="/About"> About </a></li>
             <li><a onClick={handleClick} className="login"> sign up</a></li>
            
        </ul>
            </div>
        </nav>
    )}
export default Navbar;
