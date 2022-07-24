import { createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATE } from '../utils'
import {
    getStudentsAsync,
    addStudentAsync,
    updateStudentAsync,
    deleteStudentAsync,
    followInstructorAsync,
    isInstructorFollowedAsync,
    getFollowingListAsync
} from './thunks'

const INITIAL_STATE = {
    list: [],
    followingList: [],
    getStudents: REQUEST_STATE.IDLE,
    addStudent: REQUEST_STATE.IDLE,
    updateStudent: REQUEST_STATE.IDLE,
    deleteStudent: REQUEST_STATE.IDLE,
    followInstructor: REQUEST_STATE.IDLE,
    isInstructorFollowed: REQUEST_STATE.IDLE,
    getFollowingList: REQUEST_STATE.IDLE,
    error: null,
}

const studentsSlice = createSlice({
    name: 'students',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStudentsAsync.pending, (state) => {
                state.getStudents = REQUEST_STATE.PENDING
                state.error = null
            }
            )
            .addCase(getStudentsAsync.fulfilled, (state, action) => {
                state.getStudents = REQUEST_STATE.FULFILLED
                state.list = action.payload
            }
            )
            .addCase(getStudentsAsync.rejected, (state, action) => {
                state.getStudents = REQUEST_STATE.REJECTED
                state.error = action.error
            }
            )
            .addCase(addStudentAsync.pending, (state) => {
                state.addStudent = REQUEST_STATE.PENDING
                state.error = null
            }
            )
            .addCase(addStudentAsync.fulfilled, (state, action) => {
                state.addStudent = REQUEST_STATE.FULFILLED
                state.list.push(action.payload)
            }
            )
            .addCase(addStudentAsync.rejected, (state, action) => {
                state.addStudent = REQUEST_STATE.REJECTED
                state.error = action.error
            }
            )
            .addCase(updateStudentAsync.pending, (state) => {
                state.updateStudent = REQUEST_STATE.PENDING
                state.error = null
            }
            )
            .addCase(updateStudentAsync.fulfilled, (state, action) => {
                state.updateStudent = REQUEST_STATE.FULFILLED
                state.list = action.payload
            }
            )
            .addCase(updateStudentAsync.rejected, (state, action) => {
                state.updateStudent = REQUEST_STATE.REJECTED
                state.error = action.error
            }
            )
            .addCase(deleteStudentAsync.pending, (state) => {
                state.deleteStudent = REQUEST_STATE.PENDING
                state.error = null
            }
            )
            .addCase(deleteStudentAsync.fulfilled, (state, action) => {
                state.deleteStudent = REQUEST_STATE.FULFILLED
                state.list = action.payload
            }
            )
            .addCase(deleteStudentAsync.rejected, (state, action) => {
                state.deleteStudent = REQUEST_STATE.REJECTED
                state.error = action.error
            }
            )
            .addCase(followInstructorAsync.pending, (state) => {
                state.followInstructor = REQUEST_STATE.PENDING
                state.error = null
            }
            )
            .addCase(followInstructorAsync.fulfilled, (state, action) => {
                state.followInstructor = REQUEST_STATE.FULFILLED
                state.followingList = action.payload
            }
            )
            .addCase(followInstructorAsync.rejected, (state, action) => {
                state.followInstructor = REQUEST_STATE.REJECTED
                state.error = action.error
            }
            )
            .addCase(isInstructorFollowedAsync.pending, (state) => {
                state.isInstructorFollowed = REQUEST_STATE.PENDING
                state.error = null
            }
            )
            .addCase(isInstructorFollowedAsync.fulfilled, (state, action) => {
                state.isInstructorFollowed = REQUEST_STATE.FULFILLED
                state.list = action.payload
            }
            )
            .addCase(isInstructorFollowedAsync.rejected, (state, action) => {
                state.isInstructorFollowed = REQUEST_STATE.REJECTED
                state.error = action.error
            }
            )
            .addCase(getFollowingListAsync.pending, (state) => {
                state.getFollowingList = REQUEST_STATE.PENDING
                state.error = null
            }
            )
            .addCase(getFollowingListAsync.fulfilled, (state, action) => {
                state.getFollowingList = REQUEST_STATE.FULFILLED
                state.followingList = action.payload
            }
            )
            .addCase(getFollowingListAsync.rejected, (state, action) => {
                state.getFollowingList = REQUEST_STATE.REJECTED
                state.error = action.error
            }
            )
    },
})

export default studentsSlice.reducer