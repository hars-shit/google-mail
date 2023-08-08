import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mailShow from "./mailShow";
import sendData from "./sendData";


import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import DraftsData from "./DraftsData";
import binData from "./binData";



const persistConfig={
    key:"root",
    version:1,
    storage
};
const reducer=combineReducers({
    boolValue:mailShow,
   drafts:DraftsData,
    send:sendData,
    bin:binData,
})
const persistedReducer=persistReducer(persistConfig,reducer);

const store=configureStore({
    reducer:persistedReducer,
})
export default store;
