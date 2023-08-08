import { createSlice } from "@reduxjs/toolkit";

const DraftsData=createSlice({
    name:"drafts",
    initialState:[],
    reducers:{
        drafts(state,action){
            state.push(action.payload);
        }
    }
})
export default DraftsData.reducer;
export const {drafts}=DraftsData.actions;