import React from "react";
import PropTypes from "prop-types";

function TodoList(props) {
  const { data, keyExtractor, renderItem } = props;
  const _renderItem = (item, index) => {
    return (
      <div key={keyExtractor(item, index)} className="mb-10">
        {renderItem({ item, index })}
      </div>
    );
  };
  return <div className="todoList">{data.map(_renderItem)}</div>;
}

TodoList.propTypes = {
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func,
  data: PropTypes.array.isRequired
};
export default TodoList;
