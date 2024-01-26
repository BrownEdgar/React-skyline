import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/usersSlice/usersSlice'

const store = configureStore({
  reducer: {
    users: usersSlice
  }
})


export default store