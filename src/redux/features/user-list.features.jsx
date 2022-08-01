import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    users: [],
    errorMessage: null
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        let dataURL = `https://jsonplaceholder.typicode.com/users`;
        let response = await axios.get(dataURL);
        return response.data;
    }
);

const userListSlice = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            // if (state.loading === false) {
            //     state.loading = true;
            //     state.currentRequestId = action.meta.requestId
            //   }
            state.loading = true;
        }).addCase(getUsers.fulfilled, (state, action) => {
            // const { requestId } = action.meta
            // if (
            // state.loading === true &&
            // state.currentRequestId === requestId
            // ) {
            // state.loading = false;
            // state.users = action.payload;
            // state.currentRequestId = undefined;
            // }
        
            state.loading = false;
            state.users = action.payload;
        }).addCase(getUsers.rejected, (state) => {
        //     const { requestId } = action.meta
        //     if (
        //     state.loading === false &&
        //     state.currentRequestId === requestId
        //     ) {
        //     state.loading = false
        //     state.errorMessage = 'Oops! Something went wrong!';
        //     state.currentRequestId = undefined
        // }
        
            state.loading = false;
            state.errorMessage = 'Oops! Something went wrong!';
        })
    }
});

export default userListSlice.reducer;