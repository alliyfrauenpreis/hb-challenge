// Import from react
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducer'
import addTodo from './addTodo'
import removeTodo from './removeTodo'
import { connect } from 'react-redux';

class ToDoCreator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			input : ''
		};
	}

	addTodoItem(){
		console.log("Input:" + this.state.input);
		this.props.dispatch(addTodo({text: this.state.input}));
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

export default connect()(ToDoCreator);
