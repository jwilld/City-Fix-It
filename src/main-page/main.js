import React, { Component } from "react";
import "./main.css";
import Dashboard from "../dashboard/dashboard";
import CreateTicket from "../create-ticket/Create-Ticket"
import TicketSearch from "../ticket-search/ticket-search"
import TicketChart from "../ticket-chart/Ticket-Chart"

import {Route} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div className="main-grid">
        <div className="main-header">
          <header className="main-header-text">City Fix-It</header>
        </div>
        <div className="dash" />

        <div className="main-content">
          <Route path = '/main/ticket-search' component={TicketSearch}/>
          <Route path ='/main/create' component={CreateTicket}/> 
          <Dashboard />
          <TicketChart/>

        </div>
      </div>
    );
  }
}

export default Main;
