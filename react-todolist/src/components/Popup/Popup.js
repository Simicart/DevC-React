import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function Popup(props) {
  const [isVisible, setVisible] = useState(false);
  const { visible, headerText, children } = props;
  useEffect(() => {
    setVisible(visible);
  }, [visible]);

  const _handleClosePopup = () => {
    setVisible(false);
  };

  const _renderHeader = () => {
    return (
      <div className="popup__header">
        <h3 className="popup__title">{headerText}</h3>
        <span className="popup__close" onClick={_handleClosePopup}>
          &times;
        </span>
      </div>
    );
  };

  const _renderContent = () => {
    return <div className="popup__content">{children}</div>;
  };

  return isVisible ? (
    <div className="popup">
      <div className="popup__inner">
        {_renderHeader()}
        {_renderContent()}
      </div>
    </div>
  ) : null;
}

Popup.propTypes = {
  headerText: PropTypes.string,
  children: PropTypes.node,
  isVisible: PropTypes.bool
};

Popup.defaultProps = {
  children: () => {},
  isVisible: false
};

export default Popup;
