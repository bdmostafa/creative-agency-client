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
import PrivateRoute from './components/LoginPage/PrivateRoute';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [order, setOrder] = useState({});
  const [user, setUser] = useState(true);

  return (
    <UserContext.Provider value={{
      loggedInUser,
      setLoggedInUser,
      order,
      setOrder,
      admin,
      setAdmin,
      user,
      setUser
    }}>
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
          <PrivateRoute path="/user">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Dashboard />
          </PrivateRoute>
          {/* <PrivateRoute path="/user/place-order">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/user/service-list">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/user/add-review">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin/service-list">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin/add-service">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin/make-admin">
            <Dashboard />
          </PrivateRoute> */}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
