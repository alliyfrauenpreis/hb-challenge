import { combineReducers } from 'redux'
import addTodo from './addTodo'
import removeTodo from './removeTodo'

let idCounter = 0;

const initial = {
	todos: [ {text: 'First item', id: idCounter}]
}

function todoApp(state, action) {

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

		let content = action.input.content;
		let index = 0;
		for (var item in state.todos) {
			if(state.todos[item].text == content) {
				index = item;
			}
		}

		var edited = [...state.todos];
		edited.splice(index,1);

		return Object.assign({}, state, {
			todos: edited
		});

	} else {
		return initial;
	}
}

export default todoApp;