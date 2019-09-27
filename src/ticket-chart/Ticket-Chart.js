import React, { Component } from "react";
import Axios from "axios";
import '../../node_modules/react-vis/dist/style.css';
import './ticket-chart.css'
import {
  XAxis, YAxis,
  XYPlot, VerticalBarSeries,
  LabelSeries, HorizontalGridLines,
  makeWidthFlexible
}
  from "react-vis";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

class TicketChart extends Component {

  constructor() {
    super();
    this.state = {
      urgentLength: 200,
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
    const chartWidth = 500;
    const chartHeight = 250;
    const chartDomain = [0, chartHeight];
    let myData = [
      { x: 'Urgent', y: this.state.urgentLength },
      { x: 'Routine', y: this.state.routineLength }

    ]
    return (
      <div className="chart">
        <div className='description-overview'>
          <h1>Overview</h1>
          <p>
            Tickets submitted in this area by chart.
          </p>
        </div>
        <div className='chart-container'>
          <div className='chart-wrapper'>
            <FlexibleXYPlot className='the-chart' xType="ordinal" height={chartHeight} opacity={.7} yDomain={chartDomain} color="green" margin={{ left: 50 }}>
              <XAxis />
              <YAxis />
              <VerticalBarSeries

                data={myData}
              />
              <LabelSeries className='label-series'
                data={myData.map(obj => {
                  return { ...obj, label: obj.y.toString() }
                })}
                labelAnchorX="middle"
                labelAnchorY="text-after-edge"

              />
              <HorizontalGridLines className='grid-lines' />
            </FlexibleXYPlot>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketChart;