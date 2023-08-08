import styled from "@emotion/styled";
import { StarBorder } from "@mui/icons-material";
import { Box, Checkbox, Typography } from "@mui/material";


const Wrapper=styled(Box)({
    padding:'0 0 0 10px',
    background:'#f2f6fc',
    display:'flex',
    alignItems:'center',
    cursor:'pointer',
    '& > div':{
        display:'flex',
        width:'100%',
    '& > p':{
        fontSize:14
    }
    }
     

})
const Data=styled(Typography)({
    marginLeft:'auto',
    marginRight:20,
    fontSize:12,
    color:'#5f6368'

})
const Indicator=styled(Typography)({
    fontSize:'12px !important',
    background:'#ddd',
    height:20,
    color:'#222',
    padding:'0 4px',
    borderRadius:4,
    marginRight:6

})
const EditMails = ({ data }) => {
  return (
    <Wrapper>
      <Checkbox />
      <StarBorder fontSize='small' style={{marginRight:10}}/>
      <Box>

      <Typography style={{width:200,overflow:'hidden'}}>{data.to}</Typography>
      <Indicator>Inbox</Indicator>
      <Typography>{data.subject.substring(0,15)}... {data.body && '-'} {data.body.substring(0,20)} </Typography>
        <Data>
            {/* {(new window.Date().toLocaleTimeString())} &nbsp; */}
            {(new window.Date().toLocaleDateString())}
        </Data>
      </Box>
    
    </Wrapper>
  );
};
export default EditMails;
