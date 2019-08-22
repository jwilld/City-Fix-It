import React, { Component } from "react";
import "./view-ticket.css";
import { Route, Link } from "react-router-dom";
import TicketList from "../view-tickets/Urgent-List";
import FormChange from "../form-change/Form-Change"
import axios from "axios";
import RoutineList from "../view-tickets/Routine-List";

class ViewTicket extends Component {
  constructor() {
    super();
    this.state = {
      urgentArray: [],
      routineArray: []
    };
  }

  componentDidMount = event => {
    const url = "https://city-fix-it.herokuapp.com/tickets";
    axios.get(url).then((response, urgent, routine) => {
      return (
        (urgent = response.data.filter(ticket => ticket.priority === "Urgent")),
        this.setState({ urgentArray: urgent }),
        (routine = response.data.filter(
          ticket => ticket.priority === "Routine"
        )),
        this.setState({ routineArray: routine })
      );
    });
  };

  render() {
    return (
      <div className="two-buttons">
        <div className="link-grid">
        </div>
        <div className="ticket-view-grid">
          <Route name ='edit' path="/main/view/urgent/edit/"
          render={() => <FormChange/>}/>
        </div>
      </div>
    );
  }
}

export default ViewTicket;
