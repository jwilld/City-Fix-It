import React, { Component } from "react";
import "./ticket-search.css";

class TicketSearch extends Component {
  render() {
    return (
      <div>
        <div>
          <input className='search-box' type="text" placeholder="serach for ticket" />
        </div>
      </div>
    );
  }
}

export default TicketSearch;
