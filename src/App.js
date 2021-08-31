
import React, {Component} from 'react'
import Navbar from "./components/Navbar";
import Home from './components/Home'
import './App.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import images from './images/carousel11.jpg'
import image2 from './images/carousel12.jpg'
import image3 from './images/carousel13.jpg'
import image4 from './images/carousel14.jpg'
import {BrowserRouter, Route} from "react-router-dom";




class App extends Component {
  render(){
    return(
      <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route path='/' Component={Home}/>
      <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={images} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image3} className="sliderimg" alt=""/>
      <img src={image4} className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>

    </BrowserRouter>
    );
  }
}
export default App;