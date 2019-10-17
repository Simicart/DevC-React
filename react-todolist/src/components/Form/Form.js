import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function Form(props) {
  const { autoFocus, renderActions, inputText, value, onChangeForm } = props;
  const _handleChange = event => {
    const { value } = event.target;
    onChangeForm(value);
  };
  return (
    <div className="form">
      <form>
        <textarea
          placeholder={inputText}
          onChange={_handleChange}
          autoFocus={autoFocus}
          value={value}
          className="form__textarea"
        />
        {renderActions()}
      </form>
    </div>
  );
}

Form.propsType = {
  renderActions: PropTypes.func,
  inputText: PropTypes.string,
  onSubmit: PropTypes.func,
  onValueChange: PropTypes.func,
  valueProps: PropTypes.string,
  autoFocus: PropTypes.bool
};

Form.defaultProps = {
  renderActions: () => {},
  inputText: "Add List",
  onSubmit: () => {},
  onChangeForm: () => {},
  valueProps: "",
  autoFocus: false
};
export default Form;
