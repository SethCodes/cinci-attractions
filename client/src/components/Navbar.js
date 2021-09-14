import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD

=======
>>>>>>> f6efa244d151903b4f4fee2a051fe3242f1ee4a2

const Navbar = ({ handleLoginClick, handleContactClick }) => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [active, setactive] = useState(false);

  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
<<<<<<< HEAD

=======
  
  
>>>>>>> f6efa244d151903b4f4fee2a051fe3242f1ee4a2
  //change temp from float to int
  let shortTemp = String(temp);

  if (shortTemp.length > 2) {
    shortTemp = shortTemp.substring(0, 2);
    setTemp(shortTemp);
  }
<<<<<<< HEAD
  


  // const url = `https://api.openweathermap.org/data/2.5/weather?q=Cincinnati&appid=${process.env.REACT_APP_WEATHER_API}&units=imperial`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Cincinnati&appid=782a3ff54a8d337614b461d3cb2c5333&units=imperial`;
  useEffect(() => {
    const getWeather = async () => {
      const res = await axios.get(url);
      console.log(res);
      setWeather(res.data.weather[0].main);
      setIcon(res.data.weather[0].icon);
      setTemp(res.data.main.temp);
    };
    getWeather();
  }, [weather]);

//   useEffect(() => {
//     const getWeather = async () => {
//       const res = await axios.get(`${BACKEND_URL}/api`);
//       console.log(res.data);

//     }
// getWeather();

//   }, [])
  
=======

  useEffect(() => {
    const getWeather = async () => {
      const url = process.env.REACT_APP_WEATHER_API;
      const res = await axios.get(url);
    
      setWeather(res.data.weather[0].main);
      setIcon(res.data.weather[0].icon);
      setTemp(res.data.main.temp);
  };
  getWeather();
}, []);
>>>>>>> f6efa244d151903b4f4fee2a051fe3242f1ee4a2

  const handleClick = () => {
    handleLoginClick();
  };

<<<<<<< HEAD
  // const toggleClass = () => {
  //   const currentState = active;
  //   setactive(!active);
  // };
=======
  const handleClickB = () => {
    handleContactClick();
  };

  const toggleClass = () => {
    const currentState = active;
    setactive(!active);
  };
>>>>>>> f6efa244d151903b4f4fee2a051fe3242f1ee4a2

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* weather */}
        <div id="navbar-weather">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-weather">
            <li>
              <img src={weatherIcon} alt="" />
            </li>
            <li>{`${temp}F in Cincinnati`}</li>
          </ul>
        </div>

<<<<<<< HEAD
        {/* logo / title */}

        <a className="navbar-brand" href="/">
          Cincinnati Attractions
=======
        {/* weather */}
        <div id="navbar-weather">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-weather">
            <li><img src={weatherIcon} alt=""/></li>
            <li>{`${temp}F in Cincinnati`}</li>
          </ul>
        </div>

        {/* logo / title */}
        <a className="navbar-brand" href="/">
            Cincinnati Attractions
>>>>>>> f6efa244d151903b4f4fee2a051fe3242f1ee4a2
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
              <NavLink className="nav-link" exact activeClassName="nav-link--active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link--active" aria-current="page" to="/event">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link--active" aria-current="page" to="/about">
                About
              </NavLink>
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
            <li className="nav-item">
              <a
                className="nav-link contact"
                aria-current="page"
                onClick={handleClickB}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
