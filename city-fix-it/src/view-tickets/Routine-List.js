import React, { Component } from "react"

class RoutineList extends Component {
    render() {
        let routineList = this.props.status.map(stat => (
            <div>
                <ul>{stat.Priority}</ul>
            </div>
        ))
        return (
            <div className="routine-list">
                <h1>Routine Tickets</h1>
                {routineList}
            </div>
        )
    }
}

export default RoutineList;