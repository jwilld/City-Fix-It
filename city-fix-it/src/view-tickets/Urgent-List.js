import React, { Component } from "react";
import "./urgent-list.css";

class TicketList extends Component {
  render() {
    let urgentList = this.props.status.map(stat => (
      <div>
        <div >
          <ul className ='urgent-item'>{stat.priority}</ul>
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
