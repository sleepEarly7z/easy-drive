import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import { getAppointmentsByInstructorIdAsync } from './thunks'

const INITIAL_STATE = {
    appointmentsOfInstructor: [],
    getAppointmentsByInstructorId: REQUEST_STATE.IDLE,
    error: null,
}

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAppointmentsByInstructorIdAsync.pending, (state) => {
                state.getAppointmentsByInstructorId = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(
                getAppointmentsByInstructorIdAsync.fulfilled,
                (state, action) => {
                    state.getAppointmentsByInstructorId =
                        REQUEST_STATE.FULFILLED
                    state.appointmentsOfInstructor = action.payload.data
                },
            )
            .addCase(
                getAppointmentsByInstructorIdAsync.rejected,
                (state, action) => {
                    state.getAppointmentsByInstructorId = REQUEST_STATE.REJECTED
                    state.error = action.error
                },
            )
    },
})

export default appointmentsSlice.reducer
