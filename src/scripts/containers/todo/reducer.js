import { combineReducers } from 'redux'
import addTodo from './addTodo'
import removeTodo from './removeTodo'

let idCounter = 0;

const initial = {
	todos: [ {text: 'First item', id: idCounter}]
}
 
function todoApp(state = initial, action) {

	if (action.type == 'ADD_TODO') {
		let text = action.input.text;
		idCounter += 1;
		return Object.assign({}, state, {

			todos: [
			...state.todos,
			{
				text,
				idCounter
			}]
		});
	} else if (action.type == 'REMOVE_TODO') {

		let ID = action.input.id;

		console.log(ID)
		console.log(state);
		state.todos.splice(ID,1);
		console.log(state);

	} else {
		return initial;
	}
}

export default todoApp;