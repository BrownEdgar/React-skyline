import { createSlice } from '@reduxjs/toolkit';
import { actionForAll } from '../actions/actions';


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
  },
  extraReducers: (builder) => {
    builder.addCase(actionForAll, (state, { payload: { count } }) => {
      return state + (count || 1);
    })
  }
})

export default countSlice.reducer;
export const { plus, minus } = countSlice.actions