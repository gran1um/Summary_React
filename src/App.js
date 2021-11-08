import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import Error from "./Error";
function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
