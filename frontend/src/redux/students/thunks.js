import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import StudentService from './service'

export const getStudentsAsync = createAsyncThunk(
    actionTypes.GET_STUDENT,
    async () => {
        return await StudentService.getStudents()
    }
)

export const addStudentAsync = createAsyncThunk(
    actionTypes.ADD_STUDENT,
    async (data) => {
        return await StudentService.addStudent(data)
    }
)

export const updateStudentAsync = createAsyncThunk(
    actionTypes.UPDATE_STUDENT,
    async (data) => {
        return await StudentService.updateStudent(data)
    }
)

export const deleteStudentAsync = createAsyncThunk(
    actionTypes.DELETE_STUDENT,
    async (id) => {
        return await StudentService.deleteStudent(id)
    }
)

export const followInstructorAsync = createAsyncThunk(
    actionTypes.FOLLOW_INSTRUCTOR,
    async (id) => {
        return await StudentService.followInstructor(id);
    }
)

export const isInstructorFollowedAsync = createAsyncThunk(
    actionTypes.CHECK_INSTRUCTOR_FOLLOWED,
    async (id) => {
        return await StudentService.isInstructorFollowed(id);
    }
) 

export const getFollowingListAsync = createAsyncThunk(
    actionTypes.GET_FOLLOWING_LIST,
    async (id) => {
        return await StudentService.getFollowingList(id);
    }
) 