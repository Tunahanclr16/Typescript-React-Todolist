import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoState, TodoType } from "../types/Types";

const initialState: TodoState ={
    todos:[
        {id:1,title:'Buy Milk',},
        {id:2,title:'Cook Dinner',},
        {id:3,title:'Clean House',}
    ]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
            createTodo:(state:TodoState, action:PayloadAction<TodoType>) =>{
                    state.todos=[...state.todos,action.payload]
            },
            removeTodo:(state:TodoState ,action:PayloadAction<number>) =>{
                    state.todos=[...state.todos.filter((todo:TodoType) =>todo.id!==action.payload)]
            }
    }
})
export const {createTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer