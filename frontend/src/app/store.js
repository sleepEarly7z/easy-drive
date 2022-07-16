import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../redux/users/reducer'
import instructorsReducer from '../redux/instructors/reducer'
import authReducer from '../redux/authentication/reducer'
import queryReducer from '../redux/query/reducer'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        instructors: instructorsReducer,
        auth: authReducer,
        query: queryReducer
    },
    devTools: true,
})
