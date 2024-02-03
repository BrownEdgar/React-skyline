import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/usersSlice/usersSlice";
import counterSlice from "../features/counterSlice/counterSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    counter: counterSlice,
  },
});

export default store;
