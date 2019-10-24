import React, {Component} from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';
import './TodoList.css'
import Button from "@material-ui/core/Button";

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Task 1', 'Task 2'],
            showAddForm: false,
        }
    }

    setStatus = () => {
        this.setState({
            showAddForm: true
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false
        })
    }
    addTask = (name) => {
        this.state.tasks.push(name)
        this.forceUpdate()
    }

    render() {
        if (this.state.showAddForm === true) {
            return (
                <AddTask addTask={this.addTask} closeForm={this.closeForm}/>
            )
        } else {
            return (
                <div className="container">
                    <h1>List Task</h1>
                    <Button className={'button'} variant="contained" color="primary" onClick={this.setStatus}>Add
                        Task</Button>
                    <h3>Name of task</h3>
                    {
                        this.state.tasks.map(function (name, index) {
                            return <TodoList name={name}
                            />
                        }.bind(this))
                    }
                </div>
            );
        }
    }
}

export default TaskList;
