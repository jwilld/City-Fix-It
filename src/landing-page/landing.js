import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div className='landing-container'>
        <div className="title">
          <Link to="/main/" className="link">
            <h1>City Fix-It</h1>
          </Link>
          <p>
            Welcome to City Fix-It, where you can report damage to the city.
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
