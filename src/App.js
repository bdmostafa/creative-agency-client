import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import { useState } from 'react';
import Home from './components/HomePage/Home/Home';
import Login from './components/LoginPage/Login';
import NoMatch from './components/NoMatch/NoMatch';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
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
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
