import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import AppointmentService from './service'

export const getAppointmentsByInstructorIdAsync = createAsyncThunk(
    actionTypes.GET_APPOINTMENTS_BY_INSTRUCTOR_ID,
    async (id) => {
        return await AppointmentService.getAppointmentsByInstructorId(id)
    },
)
