import { configureStore } from "@reduxjs/toolkit";
import housesSlice from "../features/housesSlice/housesSlice";

const store = configureStore({
  reducer: {
    houses: housesSlice,
  },
});

export default store;
