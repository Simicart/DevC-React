import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

class Button extends PureComponent {
  static propTypes = {
    backgroundcolor: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
    type: PropTypes.string
  };

  static defaultProps = {
    backgroundcolor: "primary",
    size: "md",
    type: "button"
  };

  render() {
    const { children, size, backgroundcolor, disabled, ...props } = this.props;
    const className = `btn btn--${size} btn--${backgroundcolor} ${
      disabled ? "btn--disabled" : ""
    }`;
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
