import React, { Component } from "react"

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
            </div>
        )
    }
}

export default ViewTicket;