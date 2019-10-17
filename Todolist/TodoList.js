import React from 'react';
import ReactDOM from 'react-dom';


class TodoList extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			listItems: []
		}
	}

	getThisNode(){
		return ReactDOM.findDOMNode(this);
	}

	formHandler = (e) => {
		e.preventDefault();
		let listItems = this.state.listItems;
		let newItem = this.getThisNode().querySelector('input[name="task"]');
		listItems.push( newItem.value );
		newItem.value = '';
		this.setState({
			listItems: listItems
		});
	}

	handleMethod(e){
		e.preventDefault();
		console.log(this);
	}

	render(){
		return (
			<div className="todo-list">
				<h2 className="todo-list-title">Todo List</h2>
				<ul>
					{
						this.state.listItems.map( (item) => <TodoListItem>{item}</TodoListItem> )
					}
					<li>
						<form onSubmit={(e) => { this.handleMethod(e) }}>
							<input type="text" name="task" />
						</form>
					</li>
				</ul>
			</div>
		);
	}

}

class TodoListItem extends React.Component{
	
	constructor(props){
		super(props);
	}

	remove = (e) => {
		e.preventDefault();
		ReactDOM.findDOMNode(this).remove();
	}

	render(){
		return (
			<li className="itemInput">
				<input type="text" value={this.props.children} />
				<button className="remove" onClick={(e) => this.remove(e)}>Remove</button>
			</li>
		);
	}
}

export default TodoList;