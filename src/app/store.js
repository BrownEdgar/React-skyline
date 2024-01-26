import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/usersSlice/usersSlice'
import countSlice from '../features/countSlice/countSlice'

const store = configureStore({
  reducer: {
    users: usersSlice,
    count: countSlice
  }
})


export default store