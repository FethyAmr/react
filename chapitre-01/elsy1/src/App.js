import React from "react";
import './styles/global.css'

import Box from './components/Box.jsx'


const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    };

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)
    this.onCalculateWaterChange = this.onCalculateWaterChange.bind(this)
  }

  onCalculateWaterChange(e) {
    this.setState({ calculateWater: e.target.value })
    this.calculateWater()
  }

  onHeartChange(e) {
    this.setState({ heart: e.target.value })
    console.log(e.target);
    this.calculateWater()
  }

  onStepsChange(e) {
    this.setState({ steps: e.target.value })
    this.calculateWater()
  }


  onTemperatureChange(e) {
    this.setState({ temperature: e.target.value })
    this.calculateWater()
  }

  calculateWater() {
    let tempWater = 0;
    let heartWater = 0;
    let stepsWater = 0;

    if (this.state.temperature > 20) {
      tempWater = (this.state.temperature - 20) * 0.02;
    }

    if (this.state.heart > 120) {
      heartWater = (this.state.heart - 120) * 0.0008;
    }

    if (this.state.steps > 10000) {
      stepsWater = (this.state.steps - 10000) * 0.00002;
    }

    this.setState({ water: (1.5 + tempWater + heartWater + stepsWater).toFixed(2) });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L"></Box >

          {/* Steps */}
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps"
            min={stepsMin} max={stepsMax} onChange={this.onStepsChange}></Box >

          {/* Heart */}
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm"
            min={heartMin} max={heartMax} onChange={this.onHeartChange} ></Box >

          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C"
            min={tempMin} max={tempMax} onChange={this.onTemperatureChange} ></Box >

        </div>
      </div>
    );
  }
}

export default App;