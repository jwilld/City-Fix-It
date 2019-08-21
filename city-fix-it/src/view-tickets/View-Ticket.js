import React, { Component } from "react";
import "./view-ticket.css";
import {Route,Link} from 'react-router-dom'
import TicketList from "../view-tickets/Ticket-List"

class ViewTicket extends Component {
  handleClick = event => {
    event.preventDefault();
    alert("clicked");
  };
  render() {
    return (
      <div className="two-buttons">
          <Link to ='/main/view/urgent'>
        <button className="urgent-button">
          Urgent
        </button>

          </Link>
        <button className="routine-button" onClick={this.props.handleClick}>
          Routine
        </button>
        <div>
        <Route path ='/main/view/urgent' component={TicketList}/>
        </div>
      </div>
    );
  }
}

export default ViewTicket;
