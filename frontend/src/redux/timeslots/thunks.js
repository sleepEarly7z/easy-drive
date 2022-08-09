import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import TimeslotService from './service'

export const addTimeslotAsync = createAsyncThunk(
    actionTypes.ADD_TIMESLOT,
    async (timeslot) => {
        return await TimeslotService.addTimeslot(timeslot)
    },
)
