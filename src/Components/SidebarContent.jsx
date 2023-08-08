import { Box, Button, List, ListItem, styled } from "@mui/material"
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { dummyIcons } from "../FakeData/dummyIcons";
import ComposeMail from "./ComposeMail";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../Constant/routes";
import { useDispatch } from "react-redux";
import { showBool } from "../store/slice/mailShow";






const Compose=styled(Button)({
    background:'#c2e7ff',
    color:'#001d35',
    padding:15,
    borderRadius:16,
    minWidth:140,
    textTransform:'none'

})
const Container=styled(Box)({
    padding:8,
    '& > ul':{
        padding:'10px 0 0 5px',
        fontSize:14,
        fontWeight:500,
        cursor:'pointer',
        '& > a':{
            textDecoration:'none',
            color:'inherit'
        },
    },
    '& > ul > a > li > svg':{
        marginRight:20
    }
})
const SidebarContent=()=>{
    const dispatch=useDispatch();
    const {type}=useParams();
    const [openDailog,setOpenDailog]=useState(false);
    const [iconArr,setIconArr]=useState({
        inbox:false,
        starred:false,
        sent:false,
        drafts:false,
        bin:false,
        allmail:false,
    });
   const handleCLick=(name)=>{
    const updateArr={};
    Object.keys(iconArr).forEach((key)=>{
        updateArr[key]=false;
    });
    updateArr[name]=true;
    setIconArr(updateArr);
    dispatch(showBool(updateArr));
   
    
   }
    return ( 
<Container>
    {
        console.log(iconArr)
    }

<Box>
<Compose onClick={()=>setOpenDailog(true)}><CreateOutlinedIcon color="action"/>Compose</Compose>

</Box>
<List>
    {
       dummyIcons.map((data)=>{
            return(
                <NavLink key={data.name} name={data.name}  to={`${routes.emails.path}/${data.name}`} onClick={()=>handleCLick(data.name)}>

                <ListItem style={type==data.name.toLowerCase()? {background:'#d3e3fd',borderRadius:'0 16px 16px 0'}:{}}>
                    <data.icon fontSize="small"/> {data.title}
                </ListItem>
                </NavLink>
            )
        })
    }
  
</List>
<ComposeMail openDailog={openDailog} setOpenDailog={setOpenDailog }/>

</Container>
    )
}
export default SidebarContent;