import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialUserState = {
  data: [],
  loading: false,
  error: null,
};

export const getUsers = createAsyncThunk("users/getusers", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    pushUser: (state, action) => {
      return action.payload;
    },
    clearList: () => {
      return initialUserState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        console.log("fulf", action);
        return {
          data: action.payload,
          loading: false,
          error: null,
        };
      })
      .addCase(getUsers.rejected, (state, action) => {
        console.log("err", action);
        state.error = action.error;
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
export const { pushUser, clearList } = usersSlice.actions;
