import { createSlice } from "@reduxjs/toolkit";

const binData=createSlice({
    name:"drafts",
    initialState:[],
    reducers:{
        bin(state,action){
            state.push(action.payload);
        }
    }
})
export default binData.reducer;
export const {bin}=binData.actions;