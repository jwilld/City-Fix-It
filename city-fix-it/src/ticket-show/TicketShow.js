import React, { Component } from 'react'
import './ticketshow.css'

class TicketShow extends Component {
    render(){
        console.log(this.props)
        return(
            <div className='ticket-show'>
                <div className = 'ticket-container'>
                <p>{this.props.location.state.ticketInfo.address}</p>
                <p>{this.props.location.state.ticketInfo.priority}</p>
                <p>{this.props.location.state.ticketInfo.type}</p>
                <p>{this.props.location.state.ticketInfo.status}</p>
                <p>{this.props.location.state.ticketInfo.description}</p>
                </div>
            </div>

        )
    }
}

export default TicketShow
