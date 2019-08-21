import React, { Component } from "react"
import './routine-list.css'

class RoutineList extends Component {
    render() {
        let routineList = this.props.status.map(stat => (
            <div>
                <ul className='routine-item'>{stat.priority}</ul>
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