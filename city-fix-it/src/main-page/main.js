import React, { Component } from "react";
import "./main.css";
import Dashboard from "../dashboard/dashboard";
import CreateTicket from "../create-ticket/Create-Ticket"

class Main extends Component {
  render() {
    return (
      <div className="main-grid">
        <div className="main-header">
          <header className="main-header-text">City Fix-It</header>
        </div>
        <div className="dash" />
        <div className="main-content">
          <Dashboard />
          <CreateTicket/>

        </div>
      </div>
    );
  }
}

export default Main;
