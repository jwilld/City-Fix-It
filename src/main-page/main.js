import React, { Component } from "react";
import { connect } from 'react-redux'
import "./main.css";
import Dashboard from "../dashboard/dashboard";
import CreateTicket from "../create-ticket/Create-Ticket"
import TicketSearch from "../ticket-search/ticket-search"
import TicketChart from "../ticket-chart/Ticket-Chart"
import TicketShow from "../ticket-show/TicketShow";

import { Route, Link } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div className="main-grid">
        <div className='header-container'>
        <div className="main-header">
          <Link  className='landing-redirect' to ='/'>
          <header className="main-header-text">City Fix-It</header>
          </Link>
        </div>
        </div>
        {this.props.data.isAdmin ? 
        <div className='ticket-search-container'>
          <Route path ='/main/ticket-search' component={TicketSearch}/>
        </div>
          :
          null
          }
          {this.props.data.isAdmin ?
        <div className='ticket-show-container'>
          <Route path="/main/ticket-search/:id"component={TicketShow} />
        </div>
        :
        null
          }
  
        <div className='dashboard-container'>
          <Dashboard path ='/main/' component={Main} />
        </div>
        <div className='create-container'>
          <Route exact path ='/main/create' component={CreateTicket}/> 
        </div>
        <div className='ticket-chart-container'>
          <Route exact path='/main' component={TicketChart}/>
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
export default connect(mapStateToProps)(Main)
