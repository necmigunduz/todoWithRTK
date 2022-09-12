import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  try {
    const res = await fetch(
      "https://631753e382797be77ff9bf90.mockapi.io/necm/api/todos",
      {
        method: "GET",
      }
    );
    const todos = await res.json();
    return todos;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (initialState) => {
    try {
        const { id } = initialState
        const res = await fetch(`https://631753e382797be77ff9bf90.mockapi.io/necm/api/todos/${id}`, {
            method: "DELETE"
        })
        if(res?.status === 200) return initialState
        return `${res.status} : ${res.statusText}`
    } catch (error) {
        console.log(error)
    }
})

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(getTodos.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteTodo.fulfilled, (state,action) => {
        if(!action?.payload.id){
            console.log("Could not delete the todo!")
            return
        }
        const { id } = action.payload
        const oldTodos = state.todos.filter(todo=> todo.id !== id)
        state.todos = oldTodos
      })
  },
});

export const todoReducer = todoSlice.reducer;
