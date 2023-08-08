import { Box, CircularProgress, Typography } from "@mui/material"

const Loader=()=>{
    return (
        <Box>
            <CircularProgress />
            <Typography>Loading...</Typography>
        </Box>
    )
}
export default Loader