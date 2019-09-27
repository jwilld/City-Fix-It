import React, { Component } from "react";
import "./landing.css";
import UserType from '../user-type/UserType'

class Landing extends Component {
  render() {
    return (
      <div className='landing-container'>
        <div className="title">
          <div>
          <div  className="landing-link">
            <h1>City Fix-It</h1>
          </div>
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
