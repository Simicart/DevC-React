import React, { Component } from 'react';
import './Todos.css';


class Todos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newTask: "",
            list: []
        }
    }


    updateInput(key, value) {
        // update react state
        this.setState({ [key]: value });
    }


    addTask() {
        const newTask = {
            id: 1 + Math.random(),
            value: this.state.newTask.slice()
        }

        const list = [...this.state.list]

        list.push(newTask)

        this.setState({
            list,
            newTask: ""
        })
    }

    deleteTask(id) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
    }
    render() {
        return (
            <div className="Container">
                <div class="card px-3">
                    <div class="card-body">
                        <h3><stron>Awsome Todo List</stron></h3>
                        <div class="add-items d-flex">
                            <input
                                className="form-control todo-list-input"
                                type="text"
                                placeholder="Type item here"
                                value={this.state.newTask}
                                onChange={e => this.updateInput("newTask", e.target.value)}
                            />
                            <button
                                class="add btn btn-primary font-weight-bold todo-list-add-btn"
                                type="submit"
                                onClick={() => this.addTask()}
                            >
                                +
                            </button>
                        </div>
                        <br />
                        <ul>
                            {this.state.list.map(item => {
                                return (
                                    <li key={item.id}>
                                        {item.value}
                                        <button  onClick={() => this.deleteTask(item.id)}>
                                            <i class="material-icons">x</i>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todos;