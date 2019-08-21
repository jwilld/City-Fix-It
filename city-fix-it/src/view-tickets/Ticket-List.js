import React, { Component } from "react"
import { getPriority } from "os";

class TicketList extends Component {
    render() {
        let urgentList = this.props.status.map(stat =>(
            <div>
                <ul>{stat.Priority}</ul>
            </div>
        ))
        return (
            <div >
            <h1>urgent tickets</h1>
                {urgentList}
            </div>
        )
    }
}

export default TicketList;