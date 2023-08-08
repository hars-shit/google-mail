import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";

import { Box, Button, Dialog, InputBase, TextField, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { send } from "../store/slice/sendData";
import { drafts } from "../store/slice/DraftsData";
import { bin } from "../store/slice/binData";



const dialogStyle={
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0',
    '& > p':{
        fontSize:14,
        fontWeight:500
    
    }
}
const Header=styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc'

})
const Recipt=styled(Box)({
    display:'flex',
    flexDirection:'column',
    padding:'0 15px',
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid #F5F5F5'
    }
})

const Footer=styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    alignItems:'center'
})
const Send=styled(Button)({
    background:'#0B57D0',
    color:'#fff',
    fontWeight:500,
    textTransform:'none',
    borderRadius:18,
    width:100,
   
    
})
const ComposeMail=({openDailog,setOpenDailog})=>{
    const dispatch=useDispatch();
    const [mail,setmail]=useState({})
    const onClose=(e)=>{
        e.preventDefault();
        setOpenDailog(false);
        dispatch(drafts(mail));

    }
    const handleDelete=(e)=>{
        setOpenDailog(false)
        dispatch(bin(mail));
       
    }
    const handleChange=(e)=>{
        setmail({
            ...mail ,[e.target.name]:e.target.value
        })
        console.log(mail)
    }
    const sendMail=()=>{
        
        if(window.Email){

           window.Email.send({
                Host : "smtp.elasticemail.com",
                Username : "upadhyayharshit05@gmail.com",
                Password : "B2DCAEEE39FCD55AA9DF9522E09A4BE72EE1",
                Port:2525,
                To : mail.to,
                From : "upadhyayharshit05@gmail.com",
                Subject : mail.subject,
                Body : mail.body
            }).then(
                message => alert(message)
                );
            }
        
        setOpenDailog(false);
        dispatch(send(mail));
       
    }
    
    return(
        <Dialog open={openDailog} PaperProps={{sx:dialogStyle}}>
           
           {/* for header  */}
           <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e)=>onClose(e)}/>
           </Header>

           <Recipt>
            {/* to whom you are sending mail  */}
        <InputBase placeholder="Recipents"  name="to" onChange={(e)=>handleChange(e)}/>
        {/* subject  */}
        <InputBase placeholder="Subject"  name="subject" onChange={(e)=>handleChange(e)}/>
           </Recipt>

        {/* Message  */}
           <TextField multiline rows={22}  name="body" onChange={(e)=>handleChange(e)}/>

          <Footer>
            <Send className="sendBtn" onClick={sendMail}>
                Send
            </Send >
            <DeleteOutlineOutlinedIcon onClick={(e)=>handleDelete(e)}/>
          </Footer>
             
        </Dialog>
    )
}
export default ComposeMail;