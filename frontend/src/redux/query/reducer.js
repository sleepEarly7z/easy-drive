import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import { updateQueryAsync } from './thunks'

const INITIAL_STATE = {
    resultList: [],
    query: {
        filterBy: [],
        sortBy: null,
        searchBy: ''
    },
    updateQuery: REQUEST_STATE.IDLE,
    error: null
}

const querySlice = createSlice({
    name: 'query',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateQueryAsync.pending, (state) => {
                state.updateQuery = REQUEST_STATE.PENDING;
            })
            .addCase(updateQueryAsync.fulfilled, (state, action) => {
                state.updateQuery = REQUEST_STATE.FULFILLED;
                state.query = { ...state.query, ...action.payload };
            })
    }
})

export default querySlice.reducer;