import { configureStore } from '@reduxjs/toolkit'
import instructorsReducer from '../redux/instructors/reducer'
import studentsReducer from '../redux/students/reducer'
import reviewsReducer from '../redux/reviews/reducer'
import authReducer from '../redux/authentication/reducer'
import queryReducer from '../redux/query/reducer'

export const store = configureStore({
    reducer: {
        instructors: instructorsReducer,
        students: studentsReducer,
        reviews: reviewsReducer,
        auth: authReducer,
        query: queryReducer,
    },
    devTools: true,
})
