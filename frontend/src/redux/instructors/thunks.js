import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import InstructorService from './service'

export const getInstructorsAsync = createAsyncThunk(
    actionTypes.GET_INSTRUCTORS,
    async (query) => {
        return await InstructorService.getInstructors(query)
    },
)

export const getInstructorByIdAsync = createAsyncThunk(
    actionTypes.GET_INSTRUCTORBYID,
    async (id) => {
        return await InstructorService.getInstructorById(id)
    },
)

export const addInstructorAsync = createAsyncThunk(
    actionTypes.ADD_INSTRUCTOR,
    async (data) => {
        return await InstructorService.addInstructor(data)
    },
)

export const updateInstructorAsync = createAsyncThunk(
    actionTypes.UPDATE_INSTRUCTOR,
    async (instData) => {
        return await InstructorService.updateInstructor(instData)
    },
)

export const deleteInstructorAsync = createAsyncThunk(
    actionTypes.DELETE_INSTRUCTOR,
    async (id) => {
        return await InstructorService.deleteInstructor(id)
    },
)

export const getFiltersAsync = createAsyncThunk(
    actionTypes.GET_FILTER,
    async () => {
        return await InstructorService.getFilter()
    },
)

export const updateFilterAsync = createAsyncThunk(
    actionTypes.UPDATE_FILTER,
    async ({ id }) => {
        return await InstructorService.updateFilter({ id })
    },
)

export const sortFiltersAsync = createAsyncThunk(
    actionTypes.SORT_FILTER,
    async (sortCondition) => {
        return await InstructorService.sortFilter(sortCondition)
    },
)
