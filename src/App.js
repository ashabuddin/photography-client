import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddService from "./components/Dashboard/AddService/AddService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Delete from "./components/Dashboard/Delete/Delete";
import Checkout from "./components/Home/Checkout/Checkout";
import Home from "./components/Home/Home/Home";
import Order from "./components/Home/Order/Order";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
                <Login/>
          </Route>
          <PrivateRoute path="/checkout/:_id">
              <Checkout />
            </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/order">
             <Order/>
          </PrivateRoute>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/delete">
            <Delete />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
