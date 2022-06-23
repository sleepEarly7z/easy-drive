import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../redux/users/reducer'
import instructorsReducer from '../redux/instructors/reducer'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        instructors: instructorsReducer,
    },
    devTools: true,
})
