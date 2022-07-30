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
    async (id, patch) => {
        return await StudentService.updateStudent(id, patch)
    }
)

export const deleteStudentAsync = createAsyncThunk(
    actionTypes.DELETE_STUDENT,
    async (id) => {
        return await StudentService.deleteStudent(id)
    }
)