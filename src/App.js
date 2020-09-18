import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddUser from './components/AddUser.js';
import ListPeople from './components/ListPeople';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component = {AddUser}/>
      <Route path="/ListPeople" component = {ListPeople} />
    </Router>
  );
}

export default App;
