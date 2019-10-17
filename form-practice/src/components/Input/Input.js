import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class Input extends React.Component {
  static propTypes = {
    required: PropTypes.bool,
    onTextChange: PropTypes.func,
    value: PropTypes.string,
    placeHolderText: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.string
  };
  static defaultProps = {
    required: true,
    onTextChange: () => {},
    placeHolderText: "Input"
  };

  _handleChange = e => {
    const { onTextChange } = this.props;
    const { value, name } = e.target;
    onTextChange && onTextChange(value, name);
  };

  render() {
    const { required, value, placeHolderText, type, name } = this.props;
    return (
      <div className="inputBox">
        <input
          {...this.props}
          type={type}
          required={required}
          value={value}
          onChange={this._handleChange}
          placeholder=""
          name={name}
          id={name}
        />
        <label className="labelInput" htmlFor={name}>
          {placeHolderText}
        </label>
      </div>
    );
  }
}
