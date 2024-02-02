import {configureStore} from '@reduxjs/toolkit'
import usersSlice from '../features/usersSlice/usersSlice'
import countSlise from '../features/counSlice/countSlise'

const store = configureStore({
    reducer: {
        users: usersSlice,
        count: countSlise
    }
})
export default store