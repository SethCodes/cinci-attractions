import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Navbar from "./components/Navbar";

class App extends Component {
  render(){
    return(
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path='/about' component={About}/>
      </Switch>
      </BrowserRouter>
    </div>
    );
  }
}
export default App;