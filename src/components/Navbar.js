import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";

const Navbar = ({ handleLoginClick }) => {
  const [weather, setWeather] = useState([]);
  const [icon, seticon] = useState("");
  const [active, setactive] = useState(false);

  const api = "782a3ff54a8d337614b461d3cb2c5333";
  const q = "Cincinnati";

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Cincinnati&appid=782a3ff54a8d337614b461d3cb2c5333`;
    const res = await axios.get(url);
    console.log(res);
  };
  getWeather();

  const handleClick = () => {
    handleLoginClick();
  };

  const toggleClass = () => {
    const currentState = active;
    setactive(!active);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

      {/* logo / title */}
        <a className="navbar-brand" href="/">
          Cincinnati Attractions
        </a>

        {/* nav toggler button */}
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/event">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/blogs">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link login"
                aria-current="page"
                onClick={handleClick}
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
