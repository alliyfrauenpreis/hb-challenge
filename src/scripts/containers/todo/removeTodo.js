export function removeTodo(input){
	return {
		type: 'REMOVE_TODO',
		input
	}
}

export default removeTodo;