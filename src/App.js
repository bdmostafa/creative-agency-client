import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { createContext } from 'react';
import { useState } from 'react';
import Home from './components/HomePage/Home/Home';
import Login from './components/LoginPage/Login';
import NoMatch from './components/NoMatch/NoMatch';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [order, setOrder] = useState({});

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, order, setOrder }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user">
            <Dashboard />
          </Route>
          <Route path="/user/place-order">
            <Dashboard />
          </Route>
          {/* <Route path="/user/place-order/:serviceId">
            <Dashboard />
          </Route> */}
          <Route path="/user/service-list">
            <Dashboard />
          </Route>
          <Route path="/user/add-review">
            <Dashboard />
          </Route>
          <Route path="/admin/service-list">
            <Dashboard />
          </Route>
          <Route path="/admin/add-service">
            <Dashboard />
          </Route>
          <Route path="/admin/make-admin">
            <Dashboard />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
