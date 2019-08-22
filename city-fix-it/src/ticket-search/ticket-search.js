import React, { Component } from "react";
import "./ticket-search.css"
import { stat } from "fs";

class TicketSearch extends Component {
    render() {
        let urgentList = this.props.status.map(stat => (
           <div>
               <input className="search-bar" placeholder="find tickets"></input>
               <div className="list-item-grid">
                   <div className="urgent-item">
                        <div className="address display">{stat.type}</div>
                        <div className="type display">{stat.type}</div>
                        <div className="priority display ">{stat.priority}</div>
                        <div className="status display">{stat.status}</div>
                   </div>
               </div>
           </div>
        ))
        return (
            <div className="urgent-list">
                <h1>Urgent Tickets</h1>
            <div className="urgent-scroll">{urgentList}</div>
          </div>
        );
    }
}

export default TicketSearch;