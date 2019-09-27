import React, { Component } from "react";
import './dashboard.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'


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
            { this.props.data.isAdmin ?
              <Link className = 'dash-link' to='/main/ticket-search'>
            <ul>View Tickets</ul>

              </Link>
              :
              null
            }
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

const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(Dashboard)