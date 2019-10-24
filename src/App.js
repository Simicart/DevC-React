import React from 'react';
import {Route} from 'react-router-dom';
import './App.css'
import Book from "./Book/Book";
import TaskList from "./TodoList/TaskList";

function App(props) {
    const {classes}=props
    return(
        <div>
            <switch>
                    <Route exact path={'/'} component={TaskList}/>
            </switch>
        </div>
    )
}
export default App

