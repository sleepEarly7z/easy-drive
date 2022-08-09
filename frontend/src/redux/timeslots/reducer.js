import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import { addTimeslotAsync } from './thunks'

const INITIAL_STATE = {
    timeslots: [],
    addTimeslot: REQUEST_STATE.IDLE,
    error: null,
}

const timeslotsSlice = createSlice({
    name: 'timeslots',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTimeslotAsync.pending, (state) => {
                state.addTimeslot = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(addTimeslotAsync.fulfilled, (state, action) => {
                state.addTimeslot = REQUEST_STATE.FULFILLED
                state.timeslots.push(action.payload.data)
            })
            .addCase(addTimeslotAsync.rejected, (state, action) => {
                state.addTimeslot = REQUEST_STATE.REJECTED
                state.error = action.error
            })
    },
})

export default timeslotsSlice.reducer
