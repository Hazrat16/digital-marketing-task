import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import Header from './component/Home/Header';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
