import React, { Component } from "react";
import "./ticket-search.css";
import axios from "axios";
import { Link } from 'react-router-dom'

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
    console.log(this.state.tickets);
    let ticketList = this.state.tickets.map(ticket => (
      <div>
        <div className="list-item-grid">
      
          <div className="urgent-item">
            <Link to='/main/view/urgent/edit'class='edit-link'>
            <div className='edit display'>Edit</div>
            </Link>
            {/* <div className="address display">{ticket.address}</div> */}
            <div className="type display">{ticket.type}</div>
            <div className="priority display ">{ticket.priority}</div>
            <div className="status display">{ticket.status}</div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="ticket-search">
        <div>
          <input
            className="search-box"
            type="text"
            placeholder="Search for a ticket"
          />
        </div>
        <div>
          {ticketList}
        </div>
      </div>
    );
  }
}

export default TicketSearch;
