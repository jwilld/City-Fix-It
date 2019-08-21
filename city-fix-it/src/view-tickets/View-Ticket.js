import React, { Component } from "react";
import "./view-ticket.css";
import { Route, Link } from "react-router-dom";
import TicketList from "../view-tickets/Ticket-List";
import axios from "axios";

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
        (urgent = response.data.filter(ticket => ticket.Priority === "Urgent")),
        this.setState({ urgentArray: urgent }),
        (routine = response.data.filter(
          ticket => ticket.Priority === "Routine"
        )),
        this.setState({ routineArray: routine })
      );
    });
  };

  render() {
    console.log(this.state.routineArray);

    return (
      <div className="two-buttons">
        <Link to="/main/view/urgent">
          <button className="urgent-button">Urgent</button>
        </Link>
        <Link to="/main/view/routine">
          <button className="routine-button">Routine</button>
        </Link>
        <div>
          <Route path="/main/view/urgent" render={() => <TicketList status={this.state.urgentArray} />} />
          <Route path="/main/view/routine" component={TicketList} />
        </div>
      </div>
    );
  }
}

export default ViewTicket;
