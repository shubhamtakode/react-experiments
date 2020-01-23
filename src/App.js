import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Redirect, Route, Router, Switch} from "react-router-dom";
import Target from "./Target/Target";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/" exact component={Target}></Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
