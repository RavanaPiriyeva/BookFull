import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    books: [],
    loading: true,
    error: {}
}


//middleware
export const getBooks = createAsyncThunk(
    "api/getBooks",
    async (thunkAPI, { rejectWithValue }) => {
        try {
            let res = await axios.get('http://localhost:3000/api/book');
            //    console.log(res.data)
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


const bookSlice = createSlice({
    name: 'bookSlice',
    initialState: initialState,
    extraReducers: {
        [getBooks.pending]: (state) => {
            state.loading = true
            state.books = []
            state.error = null
        },
        [getBooks.rejected]: (state, { payload }) => {
            state.loading = false
            state.books = []
            state.error = payload;
        },
        [getBooks.fulfilled]: (state, { payload }) => {
            state.books = payload;
            state.loading = false
            state.error = null
        }
    }
})


export default bookSlice.reducer