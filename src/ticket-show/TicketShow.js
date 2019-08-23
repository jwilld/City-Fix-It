import React, { Component } from "react";
import "./TicketShow.css";
import Axios from "axios";

class TicketShow extends Component {


  delete = () => {
    let url = 'https://city-fix-it.herokuapp.com/tickets/delete/'
    Axios.delete(url + `${this.props.location.state.ticketInfo._id}`)
  
  };


  onUpdate = event => {
    event.preventDefault()
    let url = 'https://city-fix-it.herokuapp.com/tickets/'
    let status = new FormData(event.target)
    Axios.put(url + `${this.props.location.state.ticketInfo._id}`, {
      status: status.get('status')
    })
    this.forceUpdate()
  };

  render() {
    console.log(this.props);
    return (
      <div className="ticket-show">
        <div className="ticket-container">
          <div onClick = {this.delete}className="delete-container">
            <span className="delete-text">Delete</span>
          </div>
          <p className="ticket-address">
            <span>Address : </span>
            {this.props.location.state.ticketInfo.address}
          </p>
          <p className="ticket-priority">
            <span>Priority: </span>
            {this.props.location.state.ticketInfo.priority}
          </p>
          <p className="ticket-type">
            <span>Type: </span>
            {this.props.location.state.ticketInfo.type}
          </p>
          <p className="ticket-status">
            <span>Status: </span>
            {this.props.location.state.ticketInfo.status}
          </p>
          <p className="ticket-description">
            <span>Description: </span>
            {this.props.location.state.ticketInfo.description}
          </p>
          <p className="id">
            <span>ID: </span>
            {String(this.props.location.state.ticketInfo._id).slice(19,24)}
          </p>
          <form  onSubmit={this.onUpdate}className='ticket-input-status'>
          <input placeholder='update status' name='status'></input>
          <div className = 'submit-button'>
          <input type='submit' value ='submit'/>

          </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TicketShow;
