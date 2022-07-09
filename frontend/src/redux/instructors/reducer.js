import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import {
    getInstructorsAsync,
    // getInstructorAsync,
    addInstructorAsync,
    updateInstructorAsync,
    deleteInstructorAsync,
    getFiltersAsync,
    updateFilterAsync,
    sortFiltersAsync,
} from './thunks'

const INITIAL_STATE = {
    list: [],
    filter: [],
    // currentInstructor: {},
    getInstructors: REQUEST_STATE.IDLE,
    // getInstructor: REQUEST_STATE.IDLE,
    addInstructor: REQUEST_STATE.IDLE,
    deleteInstructor: REQUEST_STATE.IDLE,
    updateInstructor: REQUEST_STATE.IDLE,
    getFilter: REQUEST_STATE.IDLE,
    addFilter: REQUEST_STATE.IDLE,
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
                state.list = action.payload.data
            })
            .addCase(getInstructorsAsync.rejected, (state, action) => {
                state.getInstructors = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            // .addCase(getInstructorAsync.pending, (state) => {
            //     state.getInstructor = REQUEST_STATE.PENDING
            //     state.error = null
            // })
            // .addCase(getInstructorAsync.fulfilled, (state, action) => {
            //     state.getInstructor = REQUEST_STATE.FULFILLED
            //     state.currentInstructor = action.payload
            // })
            // .addCase(getInstructorAsync.rejected, (state, action) => {
            //     state.getInstructor = REQUEST_STATE.REJECTED
            //     state.error = action.error
            // })
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
            .addCase(updateInstructorAsync.pending, (state) => {
                state.updateInstructor = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(updateInstructorAsync.fulfilled, (state, action) => {
                state.updateInstructor = REQUEST_STATE.FULFILLED
                state.list = action.payload
            })
            .addCase(updateInstructorAsync.rejected, (state, action) => {
                state.updateInstructor = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            .addCase(deleteInstructorAsync.pending, (state) => {
                state.deleteInstructor = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(deleteInstructorAsync.fulfilled, (state, action) => {
                state.deleteInstructor = REQUEST_STATE.FULFILLED
                state.list = action.payload
            })
            .addCase(deleteInstructorAsync.rejected, (state, action) => {
                state.deleteInstructor = REQUEST_STATE.REJECTED
                state.error = action.error
            })

            .addCase(getFiltersAsync.pending, (state) => {
                state.getFilter = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(getFiltersAsync.fulfilled, (state, action) => {
                state.getFilter = REQUEST_STATE.FULFILLED
                state.filter = action.payload
            })
            .addCase(getFiltersAsync.rejected, (state, action) => {
                state.getFilter = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            .addCase(updateFilterAsync.pending, (state) => {
                state.addFilter = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(updateFilterAsync.fulfilled, (state, action) => {
                state.addFilter = REQUEST_STATE.FULFILLED
                state.filter = state.filter.filter(
                    (instructor) => instructor.id.$oid !== action.payload.id,
                )
            })
            .addCase(updateFilterAsync.rejected, (state, action) => {
                state.addFilter = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            .addCase(sortFiltersAsync.pending, (state) => {
                state.getFilter = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(sortFiltersAsync.fulfilled, (state, action) => {
                state.getFilter = REQUEST_STATE.FULFILLED
                state.filter = action.payload
            })
            .addCase(sortFiltersAsync.rejected, (state, action) => {
                state.getFilter = REQUEST_STATE.REJECTED
                state.error = action.error
            })
    },
})

export default instructorsSlice.reducer
