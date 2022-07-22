import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import ReviewService from './service'

export const getReviewsByIdAsync = createAsyncThunk(
    actionTypes.GET_REVIEWS_BY_ID,
    async (id, idType) => {
        return await ReviewService.getReviewsById(id, idType)
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
