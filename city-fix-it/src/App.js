import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Landing from './landing-page/landing'
import Main  from './main-page/main'
import Create from './create'

function App() {
  return (
    <div className="App">
      <Route exact path ='/' component = {Landing}/>
      <Route exact path='/main/' component = {Main}/>
      <Route exact path='/create' render={() => <Create ticketList={this.state.tickets} />} />
    </div>
  );
}

export default App;
