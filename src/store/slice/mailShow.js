import { createSlice } from "@reduxjs/toolkit";

const mailShow=createSlice({
    name:'showBool',
    initialState:[],
    reducers:{
        showBool(state,action){
            state.push(action.payload);
        }
    }
})
export default mailShow.reducer;
export const {showBool}=mailShow.actions;