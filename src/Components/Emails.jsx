
import { DeleteOutlined } from "@mui/icons-material";
import { Box, Checkbox, List, ListItem, Typography } from "@mui/material";
import { useOutletContext} from "react-router-dom"
import Inbox from "../FakeData/Inbox";
import Email from "./Email";
import { useSelector } from "react-redux";
import AllMails from "../FakeData/allMails/AllMails";
import EditMails from "./EditMails";

const Emails=()=>{
    const {openDrawer}=useOutletContext();
    const checkArr=useSelector((state)=>state.boolValue);
   const sendArr=useSelector((state)=>state.send);
   const draftsArr=useSelector((state)=>state.drafts);
  const binArr=useSelector((state)=>state.bin);
    
    return (
        <Box
        style={openDrawer ? {marginLeft:250}:{width:'100%'} }>
       
       {/* for mails header */}

       <Box style={{paddind:'20px 10px 0 10px' ,display:'flex',alignItems:'center'}}>
        <Checkbox size="small"/> 
        < DeleteOutlined />
       </Box>

        {/* for mails */}
       <Box>
       {/* {
        console.log('inbox value',checkArr[checkArr.length-1]?.inbox)
       }
       {
        console.log('starred value',checkArr[checkArr.length-1]?.starred)
       }
       {
        console.log('drafts value',checkArr[checkArr.length-1]?.drafts)
       }
       {
        console.log('bin value',checkArr[checkArr.length-1]?.bin)
       }
       {
        console.log('sent value',checkArr[checkArr.length-1]?.sent)
       }
       {
        console.log('allmail value',checkArr[checkArr.length-1]?.allmail)
       } */}
        
        <List>{
          checkArr[checkArr.length-1]?.inbox && Inbox.map((data)=>{
                return(
                    <ListItem>
                        <Email key={data.sNo} data={data}/>
                    </ListItem>
                )
            })
            
            }
            {
                checkArr[checkArr.length-1]?.allmail && AllMails.map((data)=>{
                    return(<ListItem>
                        <Email key={data.sNo} data={data}/>
                    </ListItem>)
                })
            }
            {
                checkArr[checkArr.length-1]?.sent && sendArr.map((data)=>{
                    return(
                        <ListItem>
                            <EditMails data={data} />
                        </ListItem>
                    )
                })
                    
            }
             {
                checkArr[checkArr.length-1]?.drafts && draftsArr.map((data)=>{
                    return(
                        <ListItem>
                            <EditMails data={data} />
                        </ListItem>
                    )
                })
               
                    
            }
            {
                checkArr[checkArr.length-1]?.bin && binArr.map((data)=>{
                    return(
                        <ListItem>
                            <EditMails data={data} />
                        </ListItem>
                    )
                })
               
                    
            }

            </List>
       </Box>
       
       
       </Box>
    )
}
export default Emails