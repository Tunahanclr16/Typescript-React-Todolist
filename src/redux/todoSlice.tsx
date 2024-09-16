import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoState, TodoType } from "../types/Types";

const initialState: TodoState ={
    todos:[]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
            createTodo:(state:TodoState, action:PayloadAction<TodoType>) =>{
                    state.todos=[...state.todos,action.payload]
            }
    }
})
export const {createTodo} = todoSlice.actions

export default todoSlice.reducer