import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import AuthService from './service'

// Register new user
export const registerAsync = createAsyncThunk(
    actionTypes.REGISTER,
    async (user, thunkAPI) => {
        try {
            return await AuthService.register(user)
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

// Login user
export const loginAsync = createAsyncThunk(
    actionTypes.LOG_IN,
    async (user, thunkAPI) => {
        try {
            return await AuthService.login(user)
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
