import React, { Component } from "react";
import "./create-ticket.css";


class CreateTicket extends Component {
  render() {
    return (
      <div className="create-form">
        <form className="form">
        <div className='form-label'>
          <label >Create Ticket</label>
        </div>
        <div className = 'form-inputs'>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
              <input type="submit"/>
          </div>

        </div>
        </form>
      </div>
    );
  }
}
export default CreateTicket;
