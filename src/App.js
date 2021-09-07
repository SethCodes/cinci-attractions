
import React, { useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import About from './components/About';
import Event from './components/Event';
import Footer from './components/Footer';
import Blog from './components/Blog';
import {BrowserRouter, Route, Switch } from "react-router-dom";




const App = () => {


  const [isShowLogin, setShowLogin] = useState(false);

  const handleLoginCLick = () => {
    setShowLogin((isShowLogin) => !isShowLogin);
  }
    return(
      <BrowserRouter>
    <div className="App">
      <Navbar handleLoginClick={handleLoginCLick}  />
      <LoginForm isShowLogin={isShowLogin} />
       
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/Event' component={Event}/>
      <Route path='/Blog' component={Blog}/>
      <Footer />
      </Switch>
       
    </div>
    

    </BrowserRouter>
    
    );
  }

export default App;

