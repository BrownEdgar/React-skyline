import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import { actionForAll } from '../actions/actions';
import axios from 'axios';

const initialUsersValue = {
  data: [
    {
      "id" : "gvgchgc",
      "name": "Glenna Reichert",
      "email": "Chaim_McDermott@dana.io"
    },
  ],
  // loading: false,
  // error: null
}

// export const getUsersAsync = createAsyncThunk('users/getasync', async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//   return response.data;
// })

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersValue,
  reducers: {
    clearList() {
      return initialUsersValue;
    },
    pushUser: (state, {payload}) => {
      
      // state.data
      console.log(payload);
      state.data.push(payload)

      // const data = {
      //   'id' : `${nanoid(5)}`,
      //   "name": `${action.payload.target[0].value}`,
      //   "email": `${action.payload.target[1].value}`
        
      // };
      // state.data.push(data)
    },
  },
  extraReducers(builder) {
    builder
      // .addCase(getUsersAsync.pending, (state, action) => {
      //   state.loading = true
      // })
      // .addCase(getUsersAsync.fulfilled, (state, action) => {
      //   return {
      //     data: [...state.data, ...action.payload],
      //     loading: false,
      //     error: null
      //   }
      // })
      // .addCase(getUsersAsync.rejected, (state, action) => {
      //   state.error = action.error
      //   state.loading = false
      // })
      .addCase(actionForAll, (state, { payload: { userId } }) => {
        const data = state.data.filter(user => user.id !== userId);
        return {
          ...state,
          data,
        }
      })
  },
  selectors: {
   
    usersSelector: state => state.data,
    // getUsersStatus: state => state.loading,
  }
})

export const { clearList,pushUser } = usersSlice.actions;
export const { usersSelector } = usersSlice.selectors
export default usersSlice.reducer;