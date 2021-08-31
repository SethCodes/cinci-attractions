import React, {Component} from 'react'
import Home from './components/Home';


import Navbar from "./components/Navbar";
class App extends Component {
  render(){
    return(
    <div className="App">
      <Navbar />
      <Home />
    </div>
    );
  }
}
export default App;