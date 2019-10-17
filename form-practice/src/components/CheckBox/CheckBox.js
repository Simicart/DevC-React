import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    onChecked: PropTypes.func
  };
  componentDidMount() {
    const { checked } = this.props;
    this.setState({
      checked: checked
    });
  }
  t;
  _handleChecked = async e => {
    const { onChecked } = this.props;
    const { value, name } = e.target;
    await this.setState({
      checked: !this.state.checked
    });
    onChecked(name, this.state.checked, value);
  };

  render() {
    const { checked } = this.state;
    const { name, value, text } = this.props;
    return (
      <div className="checkbox">
        <input
          {...this.props}
          type="checkbox"
          value={value}
          checked={checked}
          name={name}
          onChange={this._handleChecked}
        />
        <label>{text}</label>
      </div>
    );
  }
}
