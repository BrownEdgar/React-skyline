import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/users/usersSlice'
import countSlice from '../features/count/countSlice'

const store = configureStore({
  reducer: {
    users: usersSlice,
    count: countSlice
  }
})


export default store