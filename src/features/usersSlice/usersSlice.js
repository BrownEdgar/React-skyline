import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getUsersAsync = createAsyncThunk('users/getAsync', async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
    return response.data;
})
export const actionForAll = createAction('popUser/addCount')

const  initialUsersValu ={
    data:[],
    loading: false,
    error: null
}

const usersSlice = createSlice({
    name: "users",
    initialState: initialUsersValu,
    reducers: {
        addUser:(state,action)=>{
            state.data.push({
                id: "111111",
                userId: "22222",
                title: "aaaaaaaaaaaaa"
            })
        },
        clearList() { 
            return initialUsersValu
        }
        },
    extraReducers(builder){
            builder
            .addCase(getUsersAsync.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(getUsersAsync.fulfilled,(state,action)=>{
                // console.log("fulfilld", action);
                
                return {
                    data:action.payload,
                    loading: false,
                    error: null
                }
                // state.data = action.payload
            })
            .addCase(getUsersAsync.rejected,(state,action)=>{
                state.error = action.error
                state.loading = false
            })
            .addCase(actionForAll,(state, action) => { state.data.pop()})
        },
    selectors: {
        usersSelector: state => state.data.map(user => ({id:user.id, userid: user.userId, title: user.title}))
    }

})
export default usersSlice.reducer
export const {addUser,clearList} = usersSlice.actions
export const {usersSelector} =usersSlice.selectors
