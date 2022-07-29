import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    grid: {
        row: '',
        col: '',
        prevRow: '',
        prevCol: ''
    }
};

let rowColSlice = createSlice({
    name: 'rowcol',
    initialState: initialState,
    reducers: {
        handleRow: (state, action) => {
            state.grid.row = action.payload
        },
        handleCol: (state, action) => {
            state.grid.col = action.payload
        },
        enterItems: (state, action) => {
            state.grid.prevRow = state.grid.row;
            state.grid.prevCol = state.grid.col;
            state.grid.row = '';
            state.grid.col = '';
        }
    }
});

export const { handleRow, handleCol, enterItems } = rowColSlice.actions;
export default rowColSlice.reducer;