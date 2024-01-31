import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/users/usersSlice'
import countSlice from '../features/count/countSlice'
import myMiddleWares from '../middlewares'

const store = configureStore({
  reducer: {
    users: usersSlice,
    count: countSlice
  },
  middleware: myMiddleWares
})


export default store