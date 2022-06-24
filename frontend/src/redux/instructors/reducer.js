import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import { addInstructorAsync, getInstructorsAsync, updateInstructorAsync,getFiltersAsync,updateFilterAsync,
    sortFiltersAsync  } from './thunks'

const INITIAL_STATE = {
    list: [],
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
            .addCase(updateInstructorAsync.pending, (state) => {
                state.updateInstructor = REQUEST_STATE.PENDING
                state.error = null
            }
            )
            .addCase(updateInstructorAsync.fulfilled, (state, action) => {
                state.updateInstructor = REQUEST_STATE.FULFILLED
                state.list = action.payload
            }
            )
    },
})

export default instructorsSlice.reducer
