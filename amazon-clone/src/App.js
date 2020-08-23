import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Components/Navbar/Header';
import Home from './Components/Home/Home';
function App() {
  return (
    <Router>
     <div className="app">
    <Switch>
      <Route path="/checkout">
      <Header />
        <h1>Checkout</h1>
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      {/* This is the default route, / */}
      <Route path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
    </div> 
    </Router>
    
  );
}

export default App;
