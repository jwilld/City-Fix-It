import React from 'react';
import './App.css';
import {Route } from 'react-router-dom'
import Landing from './landing-page/landing'
import Main  from './main-page/main'

function App() {
  return (
    <div className="App">
      <Route exact path ='/' component = {Landing}/>
      <Route path='/main/' component = {Main}/>
    </div>
  );
}

export default App;
