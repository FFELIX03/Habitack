import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signin from './client/Signin.js';
import Signup from './client/Signup.js';
import AddUser from './components/AddUser.js';
import ListPeople from './components/ListPeople';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Signin} />
      <Route path="/Signup" component={Signup} />
      <Route path="/AddUser" component = {AddUser}/>
      <Route path="/ListPeople" component = {ListPeople} />
    </Router>
  );
}

export default App;
