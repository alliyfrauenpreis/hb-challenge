import { combineReducers } from 'redux'
import addTodo from './actions'
import removeTodo from './actions'

const initial = {
	todos: [ {text: 'okay'}]
}
 
function todoApp(state = initial, action) {

	if (action.type == 'ADD_TODO') {
		let text = action.input.text;
		return Object.assign({}, state, {

			todos: [
			...state.todos,
			{
				text
			}]
		});
	} else {
		return initial;
	}

}


export default todoApp;


