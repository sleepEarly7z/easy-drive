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
  async (data) => {
    return await InstructorService.addInstructor(data);
  }
);