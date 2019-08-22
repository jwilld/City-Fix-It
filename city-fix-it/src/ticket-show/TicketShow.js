import React, { Component } from 'react'
import './ticketshow.css'

class TicketShow extends Component {
    render(){
        console.log(this.props)
        return(
            <div className='ticket-show'>
                <div className = 'ticket-container'>
                <p className='ticket-address'>{this.props.location.state.ticketInfo.address}</p>
                <p className='ticket-priority'>{this.props.location.state.ticketInfo.priority}</p>
                <p className='ticket-type'>{this.props.location.state.ticketInfo.type}</p>
                <p className='ticket-status'>{this.props.location.state.ticketInfo.status}</p>
                <p className='ticket-description'>{this.props.location.state.ticketInfo.description}</p>
                </div>
            </div>

        )
    }
}

export default TicketShow
