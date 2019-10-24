import React, { Component } from 'react';
import './TodoList.css'

class TodoList extends Component {
    render() {
        return (
            <div className={'todoList'}>{this.props.name}</div>
        )
    }
}

export default TodoList;
