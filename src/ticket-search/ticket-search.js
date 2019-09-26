import React, { Component } from "react";
import { connect } from 'react-redux'
import { get_tickets, set_tickets } from '../actions/actions'
import "./ticket-search.css";
import { Route} from "react-router-dom";

import TicketShow from "../ticket-show/TicketShow";
import TicketList from "../ticket-list/Ticket-List.js";

class TicketSearch extends Component {

  componentDidMount = () => {
    this.props.dispatch(get_tickets())
  };
  


  ticketSearch = event => {
    this.props.dispatch(set_tickets(event.target.value.toLowerCase()))
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
          {this.props.data.tickets.map((ticket, key) => {
            if (ticket.address !== undefined) {
              if (String(ticket._id).toLowerCase().includes(this.props.data.currentTickets)
              ||
              (ticket.priority.toLowerCase().includes(this.props.data.currentTickets)
              ||
              (ticket.address.toLowerCase().includes(this.props.data.currentTickets))
              )) {
                return <TicketList key={key} tickets={ticket} />;
              }
            }
          })}
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
export default connect(mapStateToProps)(TicketSearch)
