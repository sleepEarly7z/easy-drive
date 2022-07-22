import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import ReviewService from './service'

export const getReviewsByInstructorIdAsync = createAsyncThunk(
    actionTypes.GET_REVIEWS_BY_INSTRUCTOR_ID,
    async (id) => {
        return await ReviewService.getReviewsByInstructorId(id)
    },
)

export const getReviewsByStudentIdAsync = createAsyncThunk(
    actionTypes.GET_REVIEWS_BY_STUDENT_ID,
    async (id) => {
        return await ReviewService.getReviewsByStudentId(id)
    },
)

export const addReviewAsync = createAsyncThunk(
    actionTypes.ADD_REVIEW,
    async (payload) => {
        return await ReviewService.addReview(payload)
    },
)

export const updateReviewAsync = createAsyncThunk(
    actionTypes.UPDATE_REVIEW,
    async (payload) => {
        return await ReviewService.updateReview(payload)
    },
)

export const deleteReviewAsync = createAsyncThunk(
    actionTypes.DELETE_REVIEW,
    async (id) => {
        return await ReviewService.deleteReview(id)
    },
)

// export const getRatingAsync = createAsyncThunk(
//     actionTypes.GET_RATING,
//     async (id) => {
//         const result = await ReviewService.getRating(id)
//         console.log('result:' + result)
//         return await ReviewService.getRating(id)
//     },
// )