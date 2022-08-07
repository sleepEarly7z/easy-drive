import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import { addAppointmentAsync } from './thunks'

const INITIAL_STATE = {
    appointments: [],
    addAppointment: REQUEST_STATE.IDLE,
    error: null,
}

const timeslotsSlice = createSlice({
    name: 'appointments',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addAppointmentAsync.pending, (state) => {
                state.addAppointment = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(addAppointmentAsync.fulfilled, (state, action) => {
                state.addAppointment = REQUEST_STATE.FULFILLED
                state.appointments.push(action.payload.data)
            })
            .addCase(addAppointmentAsync.rejected, (state, action) => {
                state.addAppointment = REQUEST_STATE.REJECTED
                state.error = action.error
            })
    },
})

export default timeslotsSlice.reducer
