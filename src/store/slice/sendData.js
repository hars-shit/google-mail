import { createSlice } from "@reduxjs/toolkit";

const sendData=createSlice({
    name:"send",
    initialState:[],
    reducers:{
        send(state,action){
            state.push(action.payload);
        }
    }
})
export default sendData.reducer;
export const {send}=sendData.actions;