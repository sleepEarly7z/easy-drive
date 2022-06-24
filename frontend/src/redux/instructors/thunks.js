import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import InstructorService from './service'

export const getInstructorsAsync = createAsyncThunk(
    actionTypes.GET_INSTRUCTORS,
    async () => {
        return await InstructorService.getInstructors()
    },
)

export const getInstructorAsync = createAsyncThunk(
    actionTypes.GET_INSTRUCTOR,
    async () => {
        return await InstructorService.getInstructor()
    },
)

export const addInstructorAsync = createAsyncThunk(
  actionTypes.ADD_INSTRUCTOR,
  async (data) => {
    return await InstructorService.addInstructor(data);
  }
);

export const updateInstructorAsync = createAsyncThunk(
    actionTypes.UPDATE_INSTRUCTOR,
    async (instData) => {
        return await InstructorService.updateInstructor(instData)
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
