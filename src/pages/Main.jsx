import { Suspense, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

import { Outlet } from "react-router-dom";
import Loader from "../Components/Loader";
import { Box } from "@mui/material";

const Main=()=>{
    const[openDrawer,setOpenDrawer]=useState(true);
    const toogle=()=>{
        setOpenDrawer(preState=> !preState);
    }
    return (
        <>
            <Header toogle={toogle}/>
            <Box>
            <Sidebar openDrawer={openDrawer}/>
            <Suspense fallback={<Loader />}>

            <Outlet context={{openDrawer}}/>
            </Suspense>
                </Box>
            {/* <Emails openDrawer={openDrawer}/> */}
        </>
    )
}
export default Main;