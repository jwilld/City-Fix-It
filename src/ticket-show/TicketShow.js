import React, { Component } from 'react'
import './ticketshow.css'
import axios from 'axios'

class TicketShow extends Component {
    onDelete = () =>{
        
    }
    render(){
        console.log(this.props)
        return(
            <div className='ticket-show'>
                <div className = 'ticket-container'>
                <div className='delete-container'><span className='delete-text'>Delete</span></div>
                <p className='ticket-address'>{this.props.location.state.ticketInfo.address}</p>
                <p className='ticket-priority'>{this.props.location.state.ticketInfo.priority}</p>
                <p className='ticket-type'>{this.props.location.state.ticketInfo.type}</p>
                <p className='ticket-status'><span>Status: </span>{this.props.location.state.ticketInfo.status}</p>
                <p className='ticket-description'>{this.props.location.state.ticketInfo.description}</p>
                </div>
            </div>

        )
    }
}

export default TicketShow
