import React, { Component } from "react";
import "./TicketShow.css";
import Axios from "axios";

class TicketShow extends Component {
  onDelete = () => {};

  onUpdate = event => {
    event.preventDefault()
    let url = 'https://city-fix-it.herokuapp.com/tickets/'
    let status = new FormData(event.target)
    Axios.put(url + `${this.props.location.state.ticketInfo._id}`, {
      status: status.get('status')
    })
  };

  render() {
    console.log(this.props);
    return (
      <div className="ticket-show">
        <div className="ticket-container">
          <div className="delete-container">
            <span className="delete-text">Delete</span>
          </div>
          <p className="ticket-address">
            {this.props.location.state.ticketInfo.address}
          </p>
          <p className="ticket-priority">
            {this.props.location.state.ticketInfo.priority}
          </p>
          <p className="ticket-type">
            {this.props.location.state.ticketInfo.type}
          </p>
          <p className="ticket-status">
            <span>Status: </span>
            {this.props.location.state.ticketInfo.status}
          </p>
          <p className="ticket-description">
            {this.props.location.state.ticketInfo.description}
          </p>
          <form  onSubmit={this.onUpdate}className='ticket-input-status'>
          <input  name='status'></input>
          <input type='submit' value ='submit'/>
          </form>
        </div>
      </div>
    );
  }
}

export default TicketShow;
