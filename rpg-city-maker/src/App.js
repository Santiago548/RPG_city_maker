import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from "./components/About"
import { Home } from "./components/Home"
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
    </Router>
  );
}

export default App;
