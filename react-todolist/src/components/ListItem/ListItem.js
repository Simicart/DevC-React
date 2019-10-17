import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function ListItem(props) {
  const [isActive, setActive] = useState(false);
  const { complete, renderActions, renderContent } = props;
  const _handleHover = type => event => {
    setActive(type === "onMouseEnter");
  };
  return (
    <div
      className={`listItem ${complete ? "list-item--complete" : ""}`}
      onMouseEnter={_handleHover("onMouseEnter")}
      onMouseLeave={_handleHover("onMouseLeave")}
    >
      <div className="listItem--content">{renderContent()}</div>
      {isActive && <div className="listItem__actions">{renderActions()}</div>}
    </div>
  );
}

ListItem.propsType = {
  complete: PropTypes.bool,
  renderActions: PropTypes.func,
  renderContent: PropTypes.func
};
ListItem.defaultProps = {
  renderContent: () => {},
  renderActions: () => {},
  complete: false
};

export default ListItem;
