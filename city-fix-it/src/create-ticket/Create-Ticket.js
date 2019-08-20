import React, { Component } from "react";
import "./create-ticket.css";

class CreateTicket extends Component {
  render() {
    return (
      <div className="create-form">
        <form className="form-input">
        <div className='form-label'>
          <label>Create Ticket</label>
        </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateTicket;
