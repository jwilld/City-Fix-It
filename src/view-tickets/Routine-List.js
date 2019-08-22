import React, { Component } from "react"
import './routine-list.css'

class RoutineList extends Component {
    render() {
        let routineList = this.props.status.map(stat => (
            <div>
                <div className='list-item-grid'>
                    <div className='routine-item'>
                        <div className='address display'>{stat.address.street}</div>
                        <div className='type display'>{stat.type}</div>
                        <div className='priority display'>{stat.priority}</div>
                        <div className='status display'>{stat.status}</div>
                    </div>
                </div>
            </div>
        ))
        return (
            <div className="routine-list">
                <h1>Routine Tickets</h1>
                <div className="routine-scroll">
                {routineList}
                </div>
            </div>
        )
    }
}

export default RoutineList;