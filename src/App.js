
import React, {Component} from 'react'
import Navbar from "./components/Navbar";
import Home from './components/Home'




import {BrowserRouter, Route} from "react-router-dom";




class App extends Component {
  render(){
    return(
      <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home}/>
     
    </div>

    </BrowserRouter>
    );
  }
}
export default App;