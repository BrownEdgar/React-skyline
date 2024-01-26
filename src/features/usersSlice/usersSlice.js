import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    pushUser: (state, action) => {
      state.push(action.payload)
    },
    clearList() {
      return []
    }
  }
})

export default usersSlice.reducer;
export const { pushUser, clearList } = usersSlice.actions;