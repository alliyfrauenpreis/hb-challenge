// Import from react
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

// Import scss
import styles from './todo.scss';

class ToDoItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			content: 'This is my todo item!'
		};
	}

	checkOff(){
		this.setState({ checked: !this.state.checked });
	}

	render() {
		return (
			<div>
				<p>
					<div clas="todo-item" style= {{ textDecoration: this.state.checked? 'line-through' : ''}}>
						{this.state.content}
						<button onClick={this.checkOff.bind(this)}>✓</button> 
						<button>✘</button> 
					</div>
				</p>
			</div>
		)
	}
}

export default ToDoItem;
