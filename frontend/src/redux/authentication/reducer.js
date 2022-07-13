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

// // Register new user
// export const register = createAsyncThunk(
// 	'auth/register',
// 	async (user, thunkAPI) => {
// 		try {
// 			return await authService.register(user);
// 		} catch (error) {
// 			const message =
// 				(error.response &&
// 					error.response.data &&
// 					error.response.data.message) ||
// 				error.message ||
// 				error.toString();
// 			return thunkAPI.rejectWithValue(message);
// 		}
// 	}
// );

// // Login user
// export const login = createAsyncThunk(
// 	'auth/login',
// 	async (user, thunkAPI) => {
// 		try {
// 			return await authService.login(user);
// 		} catch (error) {
// 			const message =
// 				(error.response &&
// 					error.response.data &&
// 					error.response.data.message) ||
// 				error.message ||
// 				error.toString();
// 			return thunkAPI.rejectWithValue(message);
// 		}
// 	}
// );

// // Logout user
// export const logout = createAsyncThunk(
// 	'auth/logout',
// 	async (user, thunkAPI) => {
// 		await authService.logout();
// 	}
// );

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
