import { createSlice } from "@reduxjs/toolkit";

const searchslice=createSlice(
    {name:"search",
    initialState:[],
    reducers:{
        addsuggestion:(state,action)=>{state=state.push(action.payload)}

    }}
)

export default searchslice.reducer
export const{addsuggestion}=searchslice.actions