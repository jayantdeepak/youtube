import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        show:true,
        isMenuOpen:true
    },
        reducers:
        {
            // togglemenu:(state)=>{state.isMenuOpen = !state.isMenuOpen },
            togglemenu:(state)=>{state.show= !state.show},
            closeMenu:(state)=>{state.show= false}
        }
})
export default appSlice.reducer
export const{togglemenu,tryreducer,closeMenu}=appSlice.actions