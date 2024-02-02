import { createSlice } from "@reduxjs/toolkit";
import { actionForAll } from "../usersSlice/usersSlice";
const countSlice = createSlice(
    {
        name: "count",
        initialState: 0,
        reducers: {
            addCount :(state,action)=>{
                return state+=1
            },
            minusCount :(state,action)=>{
                return state-=1
            },
        },
        extraReducers(builder){
            builder
            .addCase(actionForAll,(state, action) => { return state-=1})
        }

    }
)
export default countSlice.reducer
export const {addCount,minusCount} = countSlice.actions