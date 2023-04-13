import { colorSelect } from "../actions"

export const updateColor = (color, todoId) => async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            color
        }),
        headers: {
            'Content-type': 'application/json; charset= UTF-8'
        },
    })

    const todo = await response.json()
    dispatch(colorSelect(todo.color, todo.id))
}