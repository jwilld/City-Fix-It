import React, { Component } from "react"
import { getPriority } from "os";

class TicketList extends Component {
    constructor() {
        super();
        this.state = {
            urgentArray: [],
            routineArray: []
        }
    }
    // handleClick = event => {
    //     alert("clicked")
    //     event.preventDefault()
    //     const url = "https://city-fix-it.herokuapp.com/tickets"
    //     axios.get(url).then(response => {
    //         this.setState({
    //             urgentArray = this.state.priority.filter(function(ticket) {
    //                 if (priority === urgent) {
    //                     ticket.push(urgentArray)
    //                     return urgentArray
    //                 } else {
    //                     (priority === routine); {
    //                         ticket.push(routineArray)
    //                         return routineArray
    //                     }
    //                 }
    //             })
    //         })
    //         // console.log(response.data)
    //     })


    // }
    render() {
        return (
            <div >
                <h1>TICKET LIST</h1>

            </div>
        )
    }
}

export default TicketList;