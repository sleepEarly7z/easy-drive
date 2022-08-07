import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import AppointmentService from './service'

export const addAppointmentAsync = createAsyncThunk(
    actionTypes.ADD_TIMESLOT,
    async (appointment) => {
        return await AppointmentService.addAppointment(appointment)
    },
)
