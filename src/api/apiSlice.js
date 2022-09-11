import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
};

export const getTodos = createAsyncThunk("posts/getPosts", async () => {
  try {
    const res = await fetch(
      "https://631753e382797be77ff9bf90.mockapi.io/necm/api/todos",
      {
        method: "GET",
      }
    );
    const todos = await res.json();

    console.log(todos);
    return todos;
  } catch (error) {
    console.log(error);
  }
});

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
      });
  },
});

export const todoReducer = todoSlice.reducer;
