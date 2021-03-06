import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage.js/LandingPage';
import Login from './components/LoginPage/Login';
import RegisterPage from './components/RegisterPage/Register';
import Auth from './hoc/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route  path="/login" component={Auth(Login, false)} />
            <Route  path="/register" component={Auth(RegisterPage, false)} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;