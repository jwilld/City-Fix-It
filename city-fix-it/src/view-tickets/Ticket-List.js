import React, { Component } from "react"

const url = "https://city-fix-it.herokuapp.com/tickets"

class TicketList extends Component {
    axios
    .get(url)
    .then(response => {
        let urgentArray = []
        
    })


    render() {
        return(

        )
    }
}

export default TicketList;