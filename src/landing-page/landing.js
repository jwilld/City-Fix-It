import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import UserType from '../user-type/UserType'

class Landing extends Component {
  render() {
    return (
      <div className='landing-container'>
        <div className="title">
          <div>
          <Link to="/main/" className="landing-link">
            <h1>City Fix-It</h1>
          </Link>
          </div>
          <div className='description'>
          <p>
            Welcome to City Fix-It, where you can report damage to the city.
          </p>

          </div>
        </div>
        <div className='user-type-container'>
        <UserType/>
        </div>
      </div>
    );
  }
}

export default Landing;
