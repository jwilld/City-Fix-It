import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { delete_ticket } from '../actions/actions'

import "./ticketshow.css";
import Axios from "axios";

class TicketShow extends Component {
  delete = () => {
    let url = 'https://city-fix-it.herokuapp.com/tickets/delete/'
    Axios.delete(url + `${this.props.data.tickets._id}`)
  
  };


  onUpdate = event => {
    event.preventDefault()
    let url = 'https://city-fix-it.herokuapp.com/tickets/'
    let status = new FormData(event.target)
    Axios.put(url + `${this.props.data.tickets._id}`, {
      status: status.get('status')
    })
    this.forceUpdate()
  };

  render() {
    console.log(this.props.data);
    return (
      <div className="ticket-show">
        <div className="ticket-container">
          <Link to='/main/ticket-search/' className="delete-container">
          <div onClick = {this.delete}>
            <span className="delete-text">Delete</span>
          </div>
          </Link>
          <p className="ticket-address">
            <span>Address : </span>
            {this.props.data.tickets.address}
          </p>
          <p className="ticket-priority">
            <span>Priority: </span>
            {this.props.data.tickets.priority}
          </p>
          <p className="ticket-type">
            <span>Type: </span>
            {this.props.data.tickets.type}
          </p>
          <p className="ticket-status">
            <span>Status: </span>
            {this.props.data.tickets.status}
          </p>
          <p className="ticket-description">
            <span>Description: </span>
            {this.props.data.tickets.description}
          </p>
          <p className="id">
            <span>ID: </span>
            {String(this.props.data.tickets._id).slice(19,24)}
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

const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(TicketShow)

