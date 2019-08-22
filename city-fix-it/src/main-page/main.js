import React, { Component } from "react";
import "./main.css";
import Dashboard from "../dashboard/dashboard";
import CreateTicket from "../create-ticket/Create-Ticket"
import ViewTicket from "../view-tickets/View-Ticket"
import TicketSearch from "../ticket-search/ticket-search"

import {Route,Link} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div className="main-grid">
        <div className="main-header">
          <header className="main-header-text">City Fix-It</header>
        </div>
        <div className="dash" />

        <div className="main-content">
          {/* <Route path='/main/view' component ={ViewTicket}/>
          <Route path='/main/create' component ={CreateTicket}/> */}
          <Route path = '/main/ticket-search' component={TicketSearch}/>
          <Dashboard />

        </div>
      </div>
    );
  }
}

export default Main;
