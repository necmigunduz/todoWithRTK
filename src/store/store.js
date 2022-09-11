import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../api/apiSlice";

export default configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    })
})
