import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const tijd = "1.50.00";

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route path='/chat'>
            <h1>messages</h1>
          </Route>
          <Route path='/'>
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
