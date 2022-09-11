import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    loading: false
}

export const getPosts = createAsyncThunk("posts/getPosts",async () => {
    try {
        const res = await fetch("")
    } catch (error) {
        console.log(error)
    }
})