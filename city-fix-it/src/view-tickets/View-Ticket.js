import React, { Component } from "react";
import "./view-ticket.css";
import { Route, Link } from "react-router-dom";
import FormChange from "../form-change/Form-Change"
import axios from "axios";


class ViewTicket extends Component {
  constructor() {
    super();
    this.state = {
      urgentArray: [],
      routineArray: []
    };
  }


  render() {
    return (
      <div className="two-buttons">
        <div className="link-grid">
        </div>
        <div className="ticket-view-grid">
          <Route path="/main/view/urgent/edit"
          render={() => <FormChange/>}/>
        </div>
      </div>
    );
  }
}

export default ViewTicket;
