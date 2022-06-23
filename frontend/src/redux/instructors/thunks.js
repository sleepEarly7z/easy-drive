import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import InstructorService from './service';

export const getInstructorsAsync = createAsyncThunk(
  actionTypes.GET_INSTRUCTORS,
  async () => {
    return await InstructorService.getInstructors();
  }
);

export const addInstructorAsync = createAsyncThunk(
  actionTypes.ADD_INSTRUCTOR,
  async (name) => {
    return await InstructorService.addInstructor({ name });
  }
);

export const updateInstructorAsync = createAsyncThunk(
  actionTypes.UPDATE_INSTRUCTOR,
  async (id) => {
    return await InstructorService.updateInstructor({ id});
  }
);