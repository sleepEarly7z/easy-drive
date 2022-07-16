import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'

export const updateQueryAsync = createAsyncThunk(
    actionTypes.UPDATE_QUERY,
    async (query) => {
        return query;
    }
)