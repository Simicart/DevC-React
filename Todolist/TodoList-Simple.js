import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			list: []
		};
	}

	insert = () => {
		this.state.list.push(document.getElementById('todo-input').value);
		this.setState( (state) => ({
			list: state.list
		}) );
	}

	render(){
		return (
			<div>
				<div>
					<input type="text" id="todo-input"/>
					<button onClick={this.insert}>Insert</button>
				</div>	
				<ul id="todo-list">{
					this.state.list.map( (item, index) => 
						<TodoItem key={index}>{item}</TodoItem>
					)
				}</ul>
			</div>
		);
	}
	
}

class TodoItem extends React.Component{
	constructor(props){
		super(props)
	}

	remove = () => {
		ReactDOM.findDOMNode(this).remove();
	}

	render(){
		return (
			<li>
				<span>{this.props.children}</span>
				<button className="remove" onClick={this.remove}>x</button>
			</li>
		);
	}
}

export default TodoList;