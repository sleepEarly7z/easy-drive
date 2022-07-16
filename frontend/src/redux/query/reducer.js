import { createSlice } from '@reduxjs/toolkit'
import { updateQueryAsync } from './thunks'
import { REQUEST_STATE } from '../utils'

const INITIAL_STATE = {
    resultList: [],
    query: {
        filterBy: null,
        sortBy: null,
        searchBy: null
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
            .addCase(updateQueryAsync.pending, (state, action) => {
                state.updateQuery = REQUEST_STATE.FULFILLED;
                state.query = action.payload
            })
    }
})

export default querySlice.reducer