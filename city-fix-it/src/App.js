import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Landing from './landing-page/landing'

function App() {
  return (
    <div className="App">
      <Route path ='/' component = {Landing}/>
    </div>
  );
}

export default App;
