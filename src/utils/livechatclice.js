import { createSlice } from '@reduxjs/toolkit';
let chatslice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addmessage:(state,action)=>{
            state.messages.splice(20,1)
            state.messages.unshift(action.payload)}
    }
})

export default chatslice.reducer
export const{addmessage}=chatslice.actions