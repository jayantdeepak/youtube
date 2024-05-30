import { createSlice } from "@reduxjs/toolkit";

const repliesSlice= createSlice({
    name:"reply",
    initialState:{show:true},
    reducers:{togglereply:(state)=>{state.show = !state.show}}

})
export default repliesSlice.reducer
export const{togglereply}=repliesSlice.actions