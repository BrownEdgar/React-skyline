import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    plus(state) {
      return state + 1;
    },
    minus(state) {
      return state - 1;
    }
  }
})

export default countSlice.reducer;
export const { plus, minus } = countSlice.actions