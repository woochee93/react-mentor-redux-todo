import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
   name: "todos",
   initialState: {
      todos: [],
      id: 0,
   },
   reducers: {
      add: (state, action) => {
         action.payload.id = state.id;
         state.id++;
         action.payload.isChecked = false;
         state.todos.push(action.payload);
      },
      remove: (state, action) => {
         state.todos = state.todos.filter(
            (todo) => todo.id !== action.payload.id
         );
      },
      edit: (state, action) => {
         const index = state.todos.findIndex(
            (todo) => todo.id === action.payload.id
         );
         state.todos[index] = action.payload;
      },
      check: (state, action) => {
         // console.log(action);
         const index = state.todos.findIndex(
            (todo) => todo.id === action.payload.id
         );
         const isChecked = state.todos[index].isChecked;
         state.todos[index].isChecked = !isChecked;
      },
   },
});

export const { add, remove, edit, check } = todoSlice.actions;
export default todoSlice.reducer;
