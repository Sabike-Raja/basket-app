import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/containers/home/home";

import "./App.css";
import "./assets/style/general.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
