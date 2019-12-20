import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Route,Switch} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
      <React.Fragment>
          <Navbar/>
          <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route exact path={"/rooms"}  component={Rooms}/>
          <Route exact path={"/rooms/:id"}  component={SingleRoom}/>
          <Route component={Error}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
