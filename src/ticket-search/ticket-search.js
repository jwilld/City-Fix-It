import React, { Component } from "react";
import "./ticket-search.css";
import axios from "axios";
import { Route, Link } from 'react-router-dom'
import TicketShow from '../ticket-show/TicketShow'

class TicketSearch extends Component {
  constructor() {
    super();
    this.state = {
      tickets: []
    };
  }

  componentDidMount = () => {
    const url = "https://city-fix-it.herokuapp.com/tickets";
    axios.get(url).then(response => {
      this.setState({ tickets: response.data });
    });
  };

  render() {
    // console.log(this.state.tickets);
    let ticketList = this.state.tickets.map((ticket, i) => (
      <div key={i}>
        <div className="list-item-grid">
      
          <div className="ticket-item">
            <Link className='edit-link display-list' to={{ pathname:'/main/ticket-search/'+ ticket._id,
            state:{ticketInfo:ticket} }}>
            <div className='edit '>Edit</div>
            </Link>
            <div className="type display-list">{ticket.type}</div>
            <div className="priority display-list  ">{ticket.priority}</div>
            <div className="status display-list">{ticket.status}</div>
            <div className="add display-list ">{ticket.address}</div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="ticket-search">
        <div className='search-container'>
          <input
            className="search-box"
            type="text"
            placeholder="Search for a ticket"
          />
        </div>
        <div className='ticket-scroll'>
          {ticketList}
        </div>
        <Route path='/main/ticket-search/:id' component={TicketShow}/>
      </div>
    );
  }
}

export default TicketSearch;