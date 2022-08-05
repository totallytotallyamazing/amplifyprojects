import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    myUsers: [],
    errorMessage: null
}

export const getUsers = createAsyncThunk(
    'myUsers/getUsers',
    async () => {
        let dataURL = `https://jsonplaceholder.typicode.com/users`;
        let response = await axios.get(dataURL);
        return response.data;
    }
);

const userListSlice = createSlice({
    name: 'myUsers',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
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
            state.myUsers = action.payload;
        }).addCase(getUsers.rejected, (state, action) => {
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