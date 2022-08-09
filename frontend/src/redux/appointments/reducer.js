import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import {
    getAppointmentsByInstructorIDAsync,
    addAppointmentAsync,
    updateAppointmentAsync,
} from './thunks'

import { prefillJson } from '../../utils/data'

// const list = JSON.parse(localStorage.getItem('appointments'))

const getInitialAppointments = () => {
    const localAppointmentList = window.localStorage.getItem('appointments')
    if (
        localAppointmentList &&
        localAppointmentList.length !== 0 &&
        localAppointmentList !== '[]'
    ) {
        return JSON.parse(localAppointmentList)
    }
    window.localStorage.setItem('appointments', JSON.stringify(prefillJson))
    return prefillJson
}

const INITIAL_STATE = {
    list: getInitialAppointments(),
    addAppointment: REQUEST_STATE.IDLE,
    getAppointmentsByInstructorID: REQUEST_STATE.IDLE,
    error: null,
}

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAppointmentsByInstructorIDAsync.pending, (state) => {
                state.getAppointmentsByInstructorID = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(
                getAppointmentsByInstructorIDAsync.fulfilled,
                (state, action) => {
                    state.getAppointmentsByInstructorID =
                        REQUEST_STATE.FULFILLED
                    state.list = action.payload.data
                },
            )
            .addCase(
                getAppointmentsByInstructorIDAsync.rejected,
                (state, action) => {
                    state.getAppointmentsByInstructorID = REQUEST_STATE.REJECTED
                    state.error = action.error
                },
            )
            .addCase(addAppointmentAsync.pending, (state) => {
                state.addAppointment = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(addAppointmentAsync.fulfilled, (state, action) => {
                state.addAppointment = REQUEST_STATE.FULFILLED
                state.list.push(action.payload.data)
            })
            .addCase(addAppointmentAsync.rejected, (state, action) => {
                state.addAppointment = REQUEST_STATE.REJECTED
                state.error = action.error
            })
            .addCase(updateAppointmentAsync.pending, (state) => {
                state.addAppointment = REQUEST_STATE.PENDING
                state.error = null
            })
            .addCase(updateAppointmentAsync.fulfilled, (state, action) => {
                state.addAppointment = REQUEST_STATE.FULFILLED
                state.list.push(action.payload.data)
            })
            .addCase(updateAppointmentAsync.rejected, (state, action) => {
                state.addAppointment = REQUEST_STATE.REJECTED
                state.error = action.error
            })
    },
})

export default appointmentsSlice.reducer
