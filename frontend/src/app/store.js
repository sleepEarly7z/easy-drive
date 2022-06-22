import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../redux/users/reducer'

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    devTools: true,
})
