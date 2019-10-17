import React, { useState, useEffect } from "react";
import { default as UUID } from "node-uuid";
import TodoList from "./TodoList/TodoList";
import Form from "./Form/Form";
import Button from "./Button/Button";
import ListItem from "./ListItem/ListItem";
import Popup from "./Popup/Popup";

const data = [
  {
    id: UUID(),
    text: "Photoshop",
    complete: false
  },
  {
    id: UUID(),
    text: "Javascript",
    complete: false
  },
  {
    id: UUID(),
    text: "After Effect",
    complete: false
  },
  {
    id: UUID(),
    text: "Sketch",
    complete: true
  }
];
function TodoListApp() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [isVisiblePopup, setPopup] = useState(false);
  const [itemEditTing, setItemEditing] = useState({});

  useEffect(() => {
    setTodoList(data);
  }, []);

  const _handleEditText = event => {
    event.preventDefault();
    const newTodoList = todoList.map(item => {
      return {
        ...item,
        text: itemEditTing.id === item.id ? value : item.text
      };
    });
    setTodoList(newTodoList);
    setPopup(!isVisiblePopup);
    setValue("");
    setEditing(false);
  };

  const _handleOpenPopup = item => event => {
    event.preventDefault();
    setEditing(true);
    setValue(item.text);
    setPopup(!isVisiblePopup);
    setItemEditing(item);
  };

  const _handleDeleteItem = item => event => {
    event.preventDefault();
    const newTodoList = todoList.filter(i => i.id !== item.id);
    setTodoList(newTodoList);
  };

  const _handleCompleteItem = item => event => {
    event.preventDefault();
    const newTodoList = todoList.map(i => {
      return {
        ...i,
        complete: item.id === i.id ? !item.complete : i.complete
      };
    });
    setTodoList(newTodoList);
  };

  const _handleAddToList = event => {
    event.preventDefault();
    const newTodoList = {
      id: UUID(),
      text: value,
      complete: false
    };
    // console.log(newTodoList);
    setTodoList([...todoList, newTodoList]);
    setValue("");
    setEditing(false);
  };

  const _handleChangeForm = text => {
    setValue(text);
  };

  const _renderActionsForListItem = item => () => {
    return (
      <div className="group-btn">
        <Button
          size="sm"
          backgroundcolor={item.complete ? "tertiary" : "quaternary"}
          onClick={_handleCompleteItem(item)}
        >
          {!item.complete ? "Complete" : "Working"}
        </Button>
        {!item.complete && (
          <Button size="sm" onClick={_handleOpenPopup(item)}>
            Edit
          </Button>
        )}
        {!item.complete && (
          <Button
            size="sm"
            backgroundcolor="secondary"
            onClick={_handleDeleteItem(item)}
          >
            Delete
          </Button>
        )}
      </div>
    );
  };

  const _keyExtractor = (item, index) => item.id.toString();

  const _renderItem = ({ item, index }) => {
    return (
      <ListItem
        complete={item.complete}
        renderContent={() => <span>{item.text}</span>}
        renderActions={_renderActionsForListItem(item)}
      />
    );
  };

  const todoListWorking = todoList.filter(item => !item.complete);
  const todoListComplete = todoList.filter(item => item.complete);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <TodoList
            data={todoListWorking}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
          />
          <Form
            inputText="Add List"
            autoFocus={false}
            renderActions={() => (
              <Button
                size="md"
                backgroundcolor="primary"
                type="submit"
                onClick={_handleAddToList}
                disabled={!value}
              >
                Add To List
              </Button>
            )}
            value={!isEditing ? value : ""}
            onChangeForm={_handleChangeForm}
          />
          <Popup headerText={value} visible={isVisiblePopup}>
            <Form
              autoFocus={true}
              renderActions={() => (
                <Button
                  size="md"
                  backgroundcolor="primary"
                  type="submit"
                  onClick={_handleEditText}
                  disabled={!value}
                >
                  Update
                </Button>
              )}
              value={value}
              onChangeForm={_handleChangeForm}
            />
          </Popup>
        </div>

        <div className="col-4">
          <TodoList
            data={todoListComplete}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
          />
        </div>
      </div>
    </div>
  );
}
export default TodoListApp;
