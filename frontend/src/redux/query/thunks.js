import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'

export const updateQueryAsync = createAsyncThunk(
    actionTypes.UPDATE_QUERY,
    // sortBy, filterBy or searchBy
    async (queryOption) => {
        return queryOption;
    }
)