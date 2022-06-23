import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import { addInstructorAsync, getInstructorsAsync,getFiltersAsync,updateFilterAsync } from './thunks'

const INITIAL_STATE = {
    list: [],
    filter: [],
    getInstructors: REQUEST_STATE.IDLE,
    addInstructor: REQUEST_STATE.IDLE,
    error: null,
}

const instructorsSlice = createSlice({
    name: 'instructors',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
            .addCase(getFiltersAsync.pending, (state) => {
                state.getInstructors = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(getFiltersAsync.fulfilled, (state, action) => {
                state.getInstructors = REQUEST_STATE.FULFILLED
                state.filter = action.payload
            })
            .addCase(getFiltersAsync.rejected, (state, action) => {
                state.getInstructors = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            .addCase(updateFilterAsync.pending, (state) => {
                state.addInstructor = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(updateFilterAsync.fulfilled, (state, action) => {
                state.addInstructor = REQUEST_STATE.FULFILLED
                state.filter = state.filter.filter(instructor => instructor.id.$oid !== action.payload.id);
            })
            .addCase(updateFilterAsync.rejected, (state, action) => {
                state.addInstructor = REQUEST_STATE.REJECTED
                state.error = action.error
            })
    },
})

export default instructorsSlice.reducer
