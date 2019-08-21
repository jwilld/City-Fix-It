import React, { Component } from "react"
import { getPriority } from "os";

class TicketList extends Component {
    constructor() {
        super();
        this.state = {
            urgentArray = [],
            routineArray = []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = event => {
        event.preventDefault()
        const url = "https://city-fix-it.herokuapp.com/tickets"
        axios.get(url).then(response => {
            this.setState({
                urgentArray = this.state.priority.filter(function(ticket) {
                    if (priority === urgent) {
                        ticket.push(urgentArray)
                        return urgentArray
                    } else {
                        (priority === routine); {
                            ticket.push(routineArray)
                            return routineArray
                        }
                    }
                })
            })
            // console.log(response.data)
        })
    }
    render() {
        return (
            <div className="viewUrgentTickets">
                <button onClick={this.handleClick}>
                    Urgent
                </button>
            </div>
        )
    }
}

export default TicketList;