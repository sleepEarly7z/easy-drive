import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import {
    getReviewsByInstructorIdAsync,
    getReviewsByStudentIdAsync,
    addReviewAsync,
    // updateReviewAsync,
    deleteReviewAsync,
} from './thunks'

const INITIAL_STATE = {
    reviewsOfInstructor: [],
    reviewsOfStudent: [],
    getReviewsByInstructorId: REQUEST_STATE.IDLE,
    getReviewsByStudentId: REQUEST_STATE.IDLE,
    addReview: REQUEST_STATE.IDLE,
    // updateReview: REQUEST_STATE.IDLE,
    deleteReview: REQUEST_STATE.IDLE,
    error: null,
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReviewsByInstructorIdAsync.pending, (state) => {
                state.getReviewsByInstructorId = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(
                getReviewsByInstructorIdAsync.fulfilled,
                (state, action) => {
                    state.getReviewsByInstructorId = REQUEST_STATE.FULFILLED
                    state.reviewsOfInstructor = action.payload.data
                },
            )
            .addCase(
                getReviewsByInstructorIdAsync.rejected,
                (state, action) => {
                    state.getReviewsByInstructorId = REQUEST_STATE.REJECTED
                    state.error = action.error
                },
            )
            .addCase(getReviewsByStudentIdAsync.pending, (state) => {
                state.getReviewsByStudentId = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(getReviewsByStudentIdAsync.fulfilled, (state, action) => {
                state.getReviewsByStudentId = REQUEST_STATE.FULFILLED
                state.reviewsOfStudent = action.payload.data
            })
            .addCase(getReviewsByStudentIdAsync.rejected, (state, action) => {
                state.getReviewsByStudentId = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            .addCase(addReviewAsync.pending, (state) => {
                state.addReview = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(addReviewAsync.fulfilled, (state, action) => {
                state.addReview = REQUEST_STATE.FULFILLED
                state.reviewsOfStudent.push(action.payload)
            })
            .addCase(addReviewAsync.rejected, (state, action) => {
                state.addReview = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            // .addCase(updateReviewAsync.pending, (state) => {
            //     state.updateReview = REQUEST_STATE.PENDING
            //     state.error = null
            // })
            // .addCase(updateReviewAsync.fulfilled, (state, action) => {
            //     state.updateReview = REQUEST_STATE.FULFILLED
            //     state.list = action.payload
            // })
            // .addCase(updateReviewAsync.rejected, (state, action) => {
            //     state.updateReview = REQUEST_STATE.REJECTED
            //     state.error = action.error
            // })
            .addCase(deleteReviewAsync.pending, (state) => {
                state.deleteReview = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(deleteReviewAsync.fulfilled, (state, action) => {
                state.deleteReview = REQUEST_STATE.FULFILLED
                state.reviewsOfStudent = action.payload
            })
            .addCase(deleteReviewAsync.rejected, (state, action) => {
                state.deleteReview = REQUEST_STATE.REJECTED
                state.error = action.error
            })
    },
})

export default reviewsSlice.reducer
