import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from "../App";


type ActionsType = AddTodolistActionType

const initialState: Array<TodolistType> =  []

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'АDD-TODOLIST': {
            const newTodo:TodolistType = {
                id: action.todolistId,
                title: action.title,
                filter: 'all'}
            return [newTodo, ...state]
        }
        default:
            return state;
    }
}

export type AddTodolistActionType = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (title: string) => {
    return {
    type: 'АDD-TODOLIST',
    title: title,
    todolistId: v1()
}as const }
