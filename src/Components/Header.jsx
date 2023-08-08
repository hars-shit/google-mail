import { AppBar, Box, InputBase, Toolbar, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { gmailLogo } from "../Constant/constant";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
const StyledAppbar=styled(AppBar)({
    background:'#F5F5F5',
    boxShadow:'none',
    
    
})
const Search=styled(Box)({
background:'#EAF1FB',
marginLeft:80,
borderRadius:8,
minWidth:690,
maxWidth:720,
height:48,
display:'flex',
alignItems:'center',
justifyContent:'space-between',
padding:'0 20px',
'& > div':{
    width:'100%',
    padding:'0 10px'
}
})
const NavIcons=styled(Box)({
width:'100%',
display:'flex',
justifyContent:'end',
gap:'20px'
})
const Header=({toogle})=>{
    return(
       <StyledAppbar position="static">
        <Toolbar>
        <MenuIcon color="action" onClick={toogle}/>
        <img src={gmailLogo} alt="logo" style={{width:110 ,marginLeft:15}}/>
        <Search>
            <SearchIcon color="action"/>
            <InputBase placeholder="Search Mail"/>
            <TuneIcon color="action"/>
        </Search>
        <NavIcons>
            <HelpOutlineOutlinedIcon color="action"/>
            <SettingsOutlinedIcon color="action"/>
            <AppsOutlinedIcon color="action" /> 
            <AccountCircleOutlinedIcon color="action" />
        </NavIcons>
        </Toolbar>
       </StyledAppbar>
    )
}
export default Header;