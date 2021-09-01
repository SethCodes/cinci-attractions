
import React, {Component} from 'react'
import Navbar from "./components/Navbar";
import Home from './components/Home'
// import './App.css'
import About from './components/About'


import {BrowserRouter, Route, Switch } from "react-router-dom";




class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Navbar />
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      </Switch>
    
    </div>

    </BrowserRouter>
    );
  }
}
export default App;