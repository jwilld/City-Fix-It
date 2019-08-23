import React, { Component } from "react";
import "./ticket-search.css";
import axios from "axios";
import { Route} from "react-router-dom";

import TicketShow from "../ticket-show/TicketShow";
import TicketList from "../ticket-list/Ticket-List.js";

class TicketSearch extends Component {
  constructor() {
    super();
    this.state = {
      tickets: [
        {
          address: "101 Dragon Rd",
          priority: "Urgent",
          type: 'Damage',
          _id: 'XXXXXX',
        }
      ],
      current: ""
    };
  }

  componentDidMount = () => {
    const url = "https://city-fix-it.herokuapp.com/tickets";
    axios.get(url).then(response => {
      this.setState({ tickets: response.data });
    });
  };

  ticketSearch = event => {
    this.setState({ current: event.target.value.toLowerCase() });
  };

  render() {
    return (
      <div className="ticket-search">
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder="Search for a ticket"
            onChange={this.ticketSearch}
          />
        </div>
        <div className="ticket-scroll">
          {this.state.tickets.map((ticket, key) => {
            if (ticket.address !== undefined) {
              if (String(ticket._id).toLowerCase().includes(this.state.current)
              ||
              (ticket.priority.toLowerCase().includes(this.state.current)
              ||
              (ticket.address.toLowerCase().includes(this.state.current))
              )) {
                return <TicketList key={key} tickets={ticket} />;
              }
            }
          })}
        </div>
        <Route path="/main/ticket-search/:id" component={TicketShow} />
      </div>
    );
  }
}

export default TicketSearch;
