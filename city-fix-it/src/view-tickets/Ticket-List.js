import React, { Component } from "react"

class TicketList extends Component { 
    render() {
        let urgentList = this.props.status.map(stat =>(
            <div>
                <ul>{stat.priority}</ul>
            </div>
        ))
        return (
            <div className="urgent-list">
            <h1>Urgent Tickets</h1>
                {urgentList}
            </div>
        )
    }
}

export default TicketList; 