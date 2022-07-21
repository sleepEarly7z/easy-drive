import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import AuthService from './service'

// Register new instructor
export const registerAsync = createAsyncThunk(
    actionTypes.REGISTER_INST,
    async (user, thunkAPI) => {
        try {
            return await AuthService.registerAsInstructor(user)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    },
)

// Login as instructor
export const loginAsInstructorAsync = createAsyncThunk(
    actionTypes.LOG_IN_INST,
    async (user, thunkAPI) => {
        try {
            return await AuthService.loginAsInstructor(user)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    },
)

// Login as student
export const loginAsStudentAsync = createAsyncThunk(
    actionTypes.LOG_IN_STUD,
    async (user, thunkAPI) => {
        try {
            return await AuthService.loginAsStudent(user)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    },
)

// Logout user
export const logoutAsync = createAsyncThunk(
    actionTypes.LOG_OUT,
    async (user, thunkAPI) => {
        await AuthService.logout()
    },
)
