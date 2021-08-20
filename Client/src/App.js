import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage.js/LandingPage';
import Login from './components/LoginPage/Login';
import RegisterPage from './components/RegisterPage/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route  path="/login" component={Login} />
            <Route  path="/register" component={RegisterPage} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;