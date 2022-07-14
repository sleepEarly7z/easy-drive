import { createSlice } from '@reduxjs/toolkit';

import {
	registerAsync,
    loginAsync,
	logoutAsync
} from './thunks'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	isInstructor: false,
	message: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.isInstructor = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerAsync.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(registerAsync.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(loginAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginAsync.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(loginAsync.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(logoutAsync.fulfilled, (state) => {
				state.user = null;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
