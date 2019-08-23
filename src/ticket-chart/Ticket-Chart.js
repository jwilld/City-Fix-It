import React, { Component } from "react";
import Axios from "axios";
import './ticket-chart.css'
import { XAxis, YAxis,XYPlot, VerticalBarSeries,LabelSeries } from "react-vis";

class TicketChart extends Component {
  constructor() {
    super();
    this.state = {
      urgentLength: 100,
      routineLength: 100
    };
  }

  componentDidMount = () => {
    const url = "https://city-fix-it.herokuapp.com/tickets";
    Axios.get(url).then(response => {
      let urgentTickets = response.data.filter(
        ticket => ticket.priority === "Urgent"
      );
      let routineTickets = response.data.filter(
        ticket => ticket.priority === "Routine"
      );
      this.setState({ urgentLength: urgentTickets.length });
      this.setState({ routineLength: routineTickets.length });
      console.log(this.state);
    });
  };

  render() {
    const chartWidth = 250;
    const chartHeight = 200;
    const chartDomain = [0, chartHeight];
    let myData = [
        {x:'Urgent' ,y:this.state.urgentLength},
        {x:'Routine' ,y:this.state.routineLength}

    ]
    return (
      <div className="chart">
        <div className='description-header'>  
          <h1>City Fix-It</h1>
        </div>
          <div className='app-description'>
          <p>
           This website allows you to report repair tickets to the local government.
           Simply fill out the location and other details of the issue along with a description.
          </p>
          </div>
          <div className= 'chart-container'>
        <XYPlot className='the-chart' xType="ordinal" width={chartWidth} height={chartHeight} yDomain={chartDomain}>
            <XAxis/>
            <YAxis/>
            <VerticalBarSeries
            data = {myData}
            />

            <LabelSeries
            data = {myData.map( obj => {
                return { ...obj,label: obj.y.toString() }
            })}
            labelAnchorX = "middle"
            labelAnchorY = "text-after-edge"
            
            />

        </XYPlot>

          </div>
      </div>
    );
  }
}

export default TicketChart;
