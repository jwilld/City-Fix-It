import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { delete_ticket, update_ticket } from '../actions/actions'

import "./ticketshow.css";

class TicketShow extends Component {
  delete = () => {
    this.props.dispatch(delete_ticket(this.props.location.state.ticketInfo._id))
  };
  onUpdate = event => {
    event.preventDefault()
    let status = new FormData(event.target)
    this.props.dispatch(update_ticket(this.props.location.state.ticketInfo._id, status.get('status')))
    console.log(this.props)
  };



  render() {
    return (
      <div className="ticket-show">
        <div className="ticket-container">
          <Link to='/main/ticket-search/' className="delete-container">
            <div onClick={this.delete}>
              <span onClick={this.delete} className="delete-text">Delete</span>
            </div>
          </Link>

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
            {String(this.props.location.state.ticketInfo._id).slice(19, 24)}
          </p>
          <form onSubmit={this.onUpdate} className='ticket-input-status'>
            <input className='ticket-input-box' placeholder='update status' name='status'></input>
            <div className='submit-button'>
              <input className='submit-box' type='submit' value='submit' />

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

