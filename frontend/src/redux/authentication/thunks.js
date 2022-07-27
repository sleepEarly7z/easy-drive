import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import AuthService from './service'
import studentService from '../students/service'

export const toggleFollowInstructorAsync = createAsyncThunk(
    actionTypes.TOGGLE_FOLLOW_INSTRUCTOR,
    async (instructorId, { getState, rejectWithValue }) => {
        const studentId = getState().auth.user.data._id;
        const currIds = getState().auth.user.data.followedInstructors;

        const { action, updatedIds } =
            (currIds.includes(instructorId))
                ? {
                    updatedIds: currIds.filter((id) => (id !== instructorId)),
                    action: 'follow'
                }
                : {
                    updatedIds: currIds.reduce((updatedIds, id) => {
                        updatedIds.push(id);
                        return updatedIds;
                    }, [instructorId]),
                    action: 'unfollow'
                }
        try {
            await studentService.updateStudent(studentId, { followedInstructors: updatedIds })
            return updatedIds;
        } catch {
            rejectWithValue(`Failed to ${action} instructor`);
        }
    }
)

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
