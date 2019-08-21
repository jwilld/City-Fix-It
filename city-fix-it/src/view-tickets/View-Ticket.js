import React, { Component } from "react"
import "./view-ticket.css"
import MapAll from "../maps/MapAll"


class ViewTicket extends Component {
    render() {
        return (
            <div className="two-buttons">
                <button 
                className="urgent-button"
                onClick={this.props.handleClick}>Urgent</button>
                <button 
                className="routine-button"
                onClick={this.props.handleClick}>Routine</button>
                <MapAll/>
            </div>
        )
    }
}

export default ViewTicket;