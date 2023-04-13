import {LOADED, ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECT, DELETED, TOGGLED } from './actionTypes';
import { initialState } from "./initialState";


const nextId = (state) => {
    const newId = state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
    return newId + 1;
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload


        case ADDED:
            if (action.payload.trim() !== "") {
                return [
                    ...state,
                    {
                        id: nextId(state),
                        text: action.payload,
                        completed: false
                    }
                ]
            } else {
                return state;
            }
            
        
        case ALL_COMPLETED:
            return state.map(todo => ({
                ...todo,
                completed: true
            }))
        
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed)
        
        case COLOR_SELECT:
            const { color, id } = action.payload
            return state.map(todo => {
                if (todo.id !== id) {
                    return todo
                } else {
                    return {
                        ...todo,
                        color: color
                    }
                }
            })

        case DELETED:
            return state.filter(todo => todo.id !== action.payload)
        
        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                } else {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            })

        default:
            return state
    }
}

export default reducer