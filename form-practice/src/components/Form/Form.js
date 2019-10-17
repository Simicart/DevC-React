import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  static propTypes = {
    data: PropTypes.array,
    onSubmit: PropTypes.func,
    renderTextInput: PropTypes.func,
    renderCheckBox: PropTypes.func,
    renderRadio: PropTypes.func,
    type: PropTypes.string
  };
  static defaultProps = {
    onSubmit: () => {},
    renderTextInput: () => {},
    renderCheckBox: () => {},
    renderRadio: () => {}
  };

  _handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit && onSubmit();
  };

  _renderItem = (item, index) => {
    const { renderTextInput, renderCheckBox, renderRadio } = this.props;
    switch (item.type) {
      case "checkbox":
        return renderCheckBox(item, index);
      case "radio":
        return renderRadio(item, index);
      default:
        return renderTextInput(item, index);
    }
  };
  render() {
    const { data } = this.props;
    return (
      <div className="form">
        <form onSubmit={this._handleSubmit}>
          {data.map(this._renderItem)}
          <input type="submit" value="Submit" name="submit" />
        </form>
      </div>
    );
  }
}
