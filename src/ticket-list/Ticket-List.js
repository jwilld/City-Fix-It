import React, { Component } from "react";
import { Link } from "react-router-dom";

class TicketList extends Component {
  render() {
    console.log(this.props)
    return (
             <div className="list-item-grid">
        <div className="ticket-item">
          <Link
            className="edit-link display-list"
            to={{
              pathname: "/main/ticket-search/" + this.props.tickets._id,
              state: { ticketInfo: this.props.tickets }
            }}
          >
            <div className="edit ">Edit</div>
          </Link>
          <div className="type display-list">{this.props.tickets.type}</div>
          <div className="priority display-list  ">{this.props.tickets.priority}</div>
          <div className="status display-list">{String(this.props.tickets._id).slice(19,24)}</div>
          <div className="add display-list ">{this.props.tickets.address}</div>
          <div className="add display-list ">{this.props.tickets.status}</div>
        </div>
      </div> 

    );
  }
}
export default TicketList;
