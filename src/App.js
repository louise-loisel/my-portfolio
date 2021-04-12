
import "./reset.css";
import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/welcome/Welcome"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Switch>
            <Route path='/my-portfolio' />
          </Switch>
          
          <Welcome />
        
      </Router>
    </>
  );
}

export default App;
