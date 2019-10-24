import React, { Component } from 'react';
import TaskList from './TaskList';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTaskList: false,
            name: '',
        }
    }
    linkList = () => {
        this.props.closeForm()
    }
    handleAddTask = () => {
        this.props.addTask(this.state.name)
        this.linkList()
    }
    isChangedName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        if (this.state.showTaskList == true) {
            return (
                <TaskList />
            )
        } else {
            return (
                <React.Fragment>
                    <div className="container">
                        <h2>Add New Task</h2>
                        <div className="form-group">
                            <TextField
                                    label="Name"
                                   margin="normal"
                                   variant="outlined" placeholder="Enter name of task" onChange={this.isChangedName} />
                        </div>

                        <Button variant="contained" color="primary" style={{ marginRight: 5 + 'px' }} onClick={this.handleAddTask}>Add</Button>
                        <Button variant="contained" color="primary" onClick={this.linkList}>Back</Button>
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default AddTask;
