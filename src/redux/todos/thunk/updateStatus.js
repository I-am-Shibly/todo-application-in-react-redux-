import { toggle } from "../actions"

export const updateStatus = (todoId, currentStatus) => async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            completed: !currentStatus
        }),
        headers: {
            'Content-type': 'application/json; charset= UTF-8'
        },
    })

    const todo = await response.json()
    dispatch(toggle(todo.id))
}