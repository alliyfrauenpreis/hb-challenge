// Import from react
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducer'
import addTodo from './actions'
import removeTodo from './actions'
const store = createStore(todoApp, '');

class ToDoCreator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			input : ''
		};
	}

	addTodoItem(){
		console.log(this.state.input);
		console.log(store.getState());
		store.dispatch(addTodo({text: this.state.input}));
	}

	change(event){
		this.setState({ input: event.target.value});
	}

	render() {
		return (
			<div id="creator">
					<label> New to-do: </label>
					<input type="text" onChange={this.change.bind(this)}/>
				<button onClick={this.addTodoItem.bind(this)}>Add</button>
			</div>
		)
	}
}

export default ToDoCreator;
