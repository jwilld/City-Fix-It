import React, { Component } from "react";
import './dashboard.css'
import {Link} from 'react-router-dom'


class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <div className='dash-grid'> 
          <div className='dash-menu'>
            <div className ='dash-menu-items'>
            <Link className="dashboard-link" to="/main/">
            <ul className='dash-link'>Overview</ul>
            </Link>
              <Link className = 'dash-link' to='/main/ticket-search'>
            <ul>View Tickets</ul>

              </Link>
              <Link className = 'dash-link' to='/main/create/'>

            <ul>New Ticket</ul>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard