import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";

const Navbar = ({ handleLoginClick }) => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [active, setactive] = useState(false);

  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const api = "782a3ff54a8d337614b461d3cb2c5333";
  const q = "Cincinnati";
  
  let shortTemp = String(temp);

  if(shortTemp.length > 2){
    shortTemp = shortTemp.substring(0,2);
    setTemp(shortTemp);
    
  }
  console.log(shortTemp);

  
useEffect(() => {

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Cincinnati&appid=782a3ff54a8d337614b461d3cb2c5333&units=imperial`;
    const res = await axios.get(url);
    
    setWeather(res.data.weather[0].main);
    setIcon(res.data.weather[0].icon);
    setTemp(res.data.main.temp);


  };
  getWeather();



}, []);

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

      {/* weather */}
      <div id="navbar-weather">
      
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-weather">
          <li><img src={weatherIcon} alt=""/></li>
          <li>{`It is ${temp} in Cincinnati`}</li>
        </ul>
      </div>

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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
