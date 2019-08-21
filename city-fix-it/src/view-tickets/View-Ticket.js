import React, { Component } from "react";
import "./view-ticket.css";
import { Route, Link } from "react-router-dom";
import TicketList from "../view-tickets/Urgent-List";
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
          <Link to="/main/view/urgent" className="link">
            <button className="urgent-button view">Urgent</button>
          </Link>
          <Link to="/main/view/routine" className="link">
            <button className="routine-button view">Routine</button>
          </Link>
        </div>
        <div className="ticket-view-grid">
          <Route
            path="/main/view/urgent"
            render={() => <TicketList status={this.state.urgentArray} />}
          />
          <Route
            path="/main/view/routine"
            render={() => <RoutineList status={this.state.routineArray} />}
          />
        </div>
      </div>
    );
  }
}

export default ViewTicket;
