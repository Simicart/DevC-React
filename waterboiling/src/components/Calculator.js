import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict, {
  tryConvert,
  toCelsius,
  toFahrenheit
} from "./WaterBoiling";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c"
    };
  }

  _handleCelcilusChange = temperature => {
    this.setState({
      scale: "c",
      temperature
    });
  };

  _handleFahrenheritChange = temperature => {
    this.setState({
      scale: "f",
      temperature
    });
  };
  render() {
    const { scale, temperature } = this.state;
    const celcius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenherit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celcius}
          onTemperatureChange={this._handleCelcilusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenherit}
          onTemperatureChange={this._handleFahrenheritChange}
        />
        <BoilingVerdict celsius={celcius} />
      </div>
    );
  }
}
