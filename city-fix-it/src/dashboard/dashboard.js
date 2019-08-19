import React, { Component } from "react";
import './dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <div className='dash-grid'> 
          <div className='dash-menu'>
            <header className='dash-header'>Dashboard</header>
            <div className ='dash-menu-items'>
            <ul>Create Ticket</ul>
            <ul>View Tickets</ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard