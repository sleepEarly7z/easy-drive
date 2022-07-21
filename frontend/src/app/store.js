import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../redux/users/reducer'
import instructorsReducer from '../redux/instructors/reducer'
import reviewsReducer from '../redux/reviews/reducer'
import authReducer from '../redux/authentication/reducer'
import queryReducer from '../redux/query/reducer'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        instructors: instructorsReducer,
        reviews: reviewsReducer,
        auth: authReducer,
        query: queryReducer,
    },
    devTools: true,
})
