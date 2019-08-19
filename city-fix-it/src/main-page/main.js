import React, { Component } from "react";
import './main.css'
import Dashboard from '../dashboard/dashboard'

class Main extends Component {
  render() {
    return (
      <div className='main-grid'>
        <div className= 'main-header'>
          <header className='main-header-text'>City Fix-It</header>
        </div>
        <div className='dash'>
        </div>
        <Dashboard/>
        <div className ='main-content'>

        </div>
      </div>
    );
  }
}

export default Main;
