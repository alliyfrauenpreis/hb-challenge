// Import from react
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducer'
import removeTodo from './removeTodo'
import { connect } from 'react-redux';

class ToDoItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			hidden: false,
			content: props.text
		};
	}

	checkOff(){
		this.setState({ checked: !this.state.checked });
	}

	remove(){
		this.setState({ hidden: !this.state.hidden });
		// This method resulted in some unexpected behaviors.
		// this.props.dispatch(removeTodo({content: this.state.content}));
	}

	render() {
		return (
			<div>
				<div clas="todo-item" style= {{ textDecoration: this.state.checked? 'line-through' : '', display: this.state.hidden? 'none' : ''}}>
					{this.state.content}
					<button onClick={this.checkOff.bind(this)}>✓</button> 
					<button onClick={this.remove.bind(this)}>✘</button> 
				</div>
			</div>
		)
	}
}

export default connect()(ToDoItem);
