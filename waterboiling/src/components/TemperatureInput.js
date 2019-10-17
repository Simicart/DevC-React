import React, { Component } from "react";

export default class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleChangeText = e => {
    const { onTemperatureChange } = this.props;
    onTemperatureChange && onTemperatureChange(e.target.value);
  };

  render() {
    const { scale, temperature } = this.props;
    return (
      <div>
        <input
          type="text"
          value={temperature}
          name={scale}
          onChange={this._handleChangeText}
        />
      </div>
    );
  }
}
