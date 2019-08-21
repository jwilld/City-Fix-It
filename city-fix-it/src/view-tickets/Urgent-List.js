import React, { Component } from "react";
import "./urgent-list.css";

class TicketList extends Component {
  render() {
    let urgentList = this.props.status.map(stat => (
      <div>
        <div className='list-item-grid'>
          <div className ='urgent-item'>
          <div className='address display'>{stat.address.street}</div>
          <div className='type display'>{stat.type}</div>
          <div className='priority display '>{stat.priority}</div>
          <div className= 'status display'>{stat.status}</div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="urgent-list">
        <h1>Urgent Tickets</h1>
        <div className= 'urgent-scroll'>
        {urgentList}

        </div>
      </div>
    );
  }
}

export default TicketList;
