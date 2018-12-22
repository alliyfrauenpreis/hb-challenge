
export function addTodo(input){
	console.log("ADDDDDDING");
	return {
		type: 'ADD_TODO',
		input
	}
}

export function removeTodo(text){
	return {
		type: 'REMOVE_TODO',
		text
	}
}

export default addTodo;