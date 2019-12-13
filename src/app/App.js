import React, { useState } from 'react';

// import logo from './logo.svg';
import '../assets/css/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';

import ComputerBoard from './components/ComputerBoard';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userName, setUserName] = useState();
  
  return (
  
    <div className="App"> 
    
    <Navigation />

    <Router>
     <Switch>
       <Route exact path="/" render = { (props) => <Home {...props} userName={userName} setUserName={setUserName}/> } />
       <Route path="/login" render = { (props) => <Login {...props} userName={userName} setUserName={setUserName}/> } />
       <Route path="/computerboard" render = { (props) => <ComputerBoard {...props} userName={userName}/> } />
     </Switch>
   </Router>
   

 
   </div>
  );
}

export default App;
