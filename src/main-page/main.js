import React, { Component } from "react";
import "./main.css";
import Dashboard from "../dashboard/dashboard";
import CreateTicket from "../create-ticket/Create-Ticket"
import TicketSearch from "../ticket-search/ticket-search"
import TicketChart from "../ticket-chart/Ticket-Chart"
import TicketShow from "../ticket-show/TicketShow";

import {Route} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div className="main-grid">
        <div className='header-container'>
        <div className="main-header">
          <header className="main-header-text">City Fix-It</header>
        </div>

        </div>
        <div className='ticket-search-container'>
          <Route path ='/main/ticket-search' component={TicketSearch}/>
        </div>
        <div className='ticket-show-container'>
          <Route path="/main/ticket-search/:id"component={TicketShow} />
        </div>
        <div className='dashboard-container'>
          <Dashboard path ='/main/' component={Main} />
        </div>
        <div className='create-container'>
          <Route exact path ='/main/create' component={CreateTicket}/> 
        </div>
          <Route exact path='/main' component={TicketChart}/>
      </div>
    );
  }
}

export default Main;
