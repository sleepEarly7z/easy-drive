import { createSlice } from '@reduxjs/toolkit'

import { registerAsync, loginAsInstructorAsync, loginAsStudentAsync, logoutAsync } from './thunks'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    isInstructor: false,
    message: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.isInstructor = false
            state.message = ''
        },
        toggleFollowInstructor: (state, action) => {
            const instructorId = action.payload;
            const currState = JSON.parse(JSON.stringify(state));
            let ids = currState.user.data.followedInstructors;
            if (!ids.includes(instructorId)) {
                ids.push(instructorId);
            } else {
                ids.splice(ids.indexOf(instructorId), 1);
            }
            state.user.data.followedInstructors = ids;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(loginAsInstructorAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginAsInstructorAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(loginAsInstructorAsync.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(loginAsStudentAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginAsStudentAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(loginAsStudentAsync.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logoutAsync.fulfilled, (state) => {
                state.user = null
            })
    },
})

export const { reset, toggleFollowInstructor } = authSlice.actions
export default authSlice.reducer
