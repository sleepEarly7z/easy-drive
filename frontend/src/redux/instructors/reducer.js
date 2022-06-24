import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import {
    addInstructorAsync, getInstructorsAsync, getFiltersAsync, updateFilterAsync,
    sortFiltersAsync
} from './thunks'

const INITIAL_STATE = {
    list: [],
    filter: [],
    getInstructors: REQUEST_STATE.IDLE,
    addInstructor: REQUEST_STATE.IDLE,
    getFilters: REQUEST_STATE.IDLE,
    addFilter: REQUEST_STATE.IDLE,
    error: null,
}

const instructorsSlice = createSlice({
    name: 'instructors',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get
            .addCase(getInstructorsAsync.pending, (state) => {
                state.getInstructors = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(getInstructorsAsync.fulfilled, (state, action) => {
                state.getInstructors = REQUEST_STATE.FULFILLED
                state.list = action.payload
            })
            .addCase(getInstructorsAsync.rejected, (state, action) => {
                state.getInstructors = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            // add
            .addCase(addInstructorAsync.pending, (state) => {
                state.addInstructor = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(addInstructorAsync.fulfilled, (state, action) => {
                state.addInstructor = REQUEST_STATE.FULFILLED
                state.list.push(action.payload)
            })
            .addCase(addInstructorAsync.rejected, (state, action) => {
                state.addInstructor = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            // getFilter
            .addCase(getFiltersAsync.pending, (state) => {
                state.getFilters = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(getFiltersAsync.fulfilled, (state, action) => {
                state.getFilters = REQUEST_STATE.FULFILLED
                state.filter = action.payload
            })
            .addCase(getFiltersAsync.rejected, (state, action) => {
                state.getFilters = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            // updateFilter
            .addCase(updateFilterAsync.pending, (state) => {
                state.addFilter = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(updateFilterAsync.fulfilled, (state, action) => {
                state.addFilter = REQUEST_STATE.FULFILLED
                state.filter = state.filter.filter(instructor => instructor.id.$oid !== action.payload.id);
            })
            .addCase(updateFilterAsync.rejected, (state, action) => {
                state.addFilter = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            // sort
            .addCase(sortFiltersAsync.pending, (state) => {
                state.getFilters = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(sortFiltersAsync.fulfilled, (state, action) => {
                state.getFilters = REQUEST_STATE.FULFILLED
                state.filter = action.payload;
            })
            .addCase(sortFiltersAsync.rejected, (state, action) => {
                state.getFilters = REQUEST_STATE.REJECTED
                state.error = action.error
            })
    },
})

export default instructorsSlice.reducer
