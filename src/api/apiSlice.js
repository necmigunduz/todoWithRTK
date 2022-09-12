import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

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
export const createTodo = createAsyncThunk("todos/createTodo", async (data) => {
  try {
    const { title, content } = data;
    const res = await fetch(
      "https://631753e382797be77ff9bf90.mockapi.io/necm/api/todos",
      {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({ title, content }),
      }
    );
    const todo = await res.json();
    return todo;
  } catch (error) {
    console.log(error);
  }
});
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (initialState) => {
    try {
      const { id } = initialState;
      const res = await fetch(
        `https://631753e382797be77ff9bf90.mockapi.io/necm/api/todos/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res?.status === 200) return initialState;
      return `${res.status} : ${res.statusText}`;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (id, data) => {
    try {         
      const res = await fetch(
        `https://631753e382797be77ff9bf90.mockapi.io/necm/api/todos/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(data)
        }
      );
      const todo = res.json()
      return todo
    } catch (error) {
      console.log(error);
    }
  }
);

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
      .addCase(deleteTodo.fulfilled, (state, action) => {
        if (!action?.payload.id) {
          console.log("Could not delete the todo!");
          return;
        }
        const { id } = action.payload;
        const oldTodos = state.todos.filter((todo) => todo.id !== id);
        state.todos = oldTodos;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos = [...state.todos, action.payload];
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const  {id} = action.payload
        console.log(state.todos)
      });
  },
});

export const todoReducer = todoSlice.reducer;
