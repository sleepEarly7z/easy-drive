import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import AppointmentService from './service'

export const getAppointmentsByInstructorIDAsync = createAsyncThunk(
    actionTypes.GET_APPOINTMENTS_BY_INSTRUCTORID,
    async (id) => {
        return await AppointmentService.getAppointmentsByInstructorID(id)
    },
)

export const addAppointmentAsync = createAsyncThunk(
    actionTypes.ADD_APPOINTMENT,
    async (appointment) => {
        return await AppointmentService.addAppointment(appointment)
    },
)

export const updateAppointmentAsync = createAsyncThunk(
    actionTypes.UPDATE_APPOINTMENT,
    async (patch) => {
        return await AppointmentService.updateAppointment(patch);
    }
)
