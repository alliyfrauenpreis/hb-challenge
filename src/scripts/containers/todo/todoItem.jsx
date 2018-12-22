// Import from react
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

// Import scss
import styles from './todo.scss';
import todoApp from './reducer'
import removeTodo from './removeTodo'
const store = createStore(todoApp, '');

class ToDoItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			content: 'This is what a generic to-do looks like.',
			id: 0
		};
	}

	checkOff(){
		this.setState({ checked: !this.state.checked });
	}

	remove(){
		store.dispatch(removeTodo({id: this.state.id}));
	}

	render() {
		return (
			<div>
				<p>
					<div clas="todo-item" style= {{ textDecoration: this.state.checked? 'line-through' : ''}}>
						{this.state.content}
						<button onClick={this.checkOff.bind(this)}>✓</button> 
						<button onClick={this.remove.bind(this)}>✘</button> 
					</div>
				</p>
			</div>
		)
	}
}

export default ToDoItem;
