import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import "./style.css";

export default class Radio extends Component {
  static propTypes = {
    radios: PropTypes.array.isRequired,
    onChangeValue: PropTypes.func,
    onChangeText: PropTypes.func
  };

  static defaultProps = {
    radios: [],
    onChangeValue: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  _handleChangeValue = e => {
    const { onChangeValue } = this.props;
    const { value, name } = e.target;
    this.setState({
      selected: value
    });
    onChangeValue && onChangeValue(value, name);
  };

  componentDidMount() {
    const { selected } = this.props;
    this.setState({
      selected
    });
  }

  _renderRadioItem = (item, index) => {
    return (
      <div key={item.id.toString()}>
        <div className="radio-box">
          <input
            {...this.props}
            type="radio"
            value={item.value}
            name={item.name}
            checked={this.state.selected === item.value}
            onChange={this._handleChangeValue}
          />
          <label className="radio-label">{item.text}</label>
        </div>
      </div>
    );
  };
  render() {
    const { radios } = this.props;
    return <div className="radio-btn">{radios.map(this._renderRadioItem)}</div>;
  }
}
