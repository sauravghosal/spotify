import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Queue from "./pages/Queue";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/queue">
            <Queue />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
