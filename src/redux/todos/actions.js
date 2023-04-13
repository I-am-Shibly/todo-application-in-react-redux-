import {LOADED ,ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECT, DELETED, TOGGLED } from './actionTypes'


export const loaded = (todos) => {
    return {
        type: LOADED,
        payload: todos
    }
}

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText
    }
}

export const colorSelect = (color, id) => {
    return {
        type: COLOR_SELECT,
        payload: {
            color, id
        }
    }
}

export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id
    }
}

export const toggle = (id) => {
    return {
        type: TOGGLED,
        payload: id
    }
}

export const allCompleted = () => {
    return {
        type: ALL_COMPLETED
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
}
