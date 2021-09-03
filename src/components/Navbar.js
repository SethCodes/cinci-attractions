import React from "react";

const Navbar = ({ handleLoginClick }) => {
  const handleClick = () => {
    handleLoginClick();
  };

  return (
    <nav className="nav-wrapper navbar-dark navbar-expand-lg black darken-3">
      <div className="container-fluid">
        <a href="_" className="brand-logo">
          Cincinnati Attractions
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
