import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/"  component= { Dashboard } />
        <Route path="/signin"  component= { SignIn } />
        <Route path="/register"  component= { Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
