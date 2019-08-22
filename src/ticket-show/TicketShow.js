import React, { Component } from 'react'

class TicketShow extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.location.state.ticketInfo.type}</h1>


            </div>

        )
    }
}

export default TicketShow
