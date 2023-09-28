import { Box, Typography } from "@mui/material";

export default function Banner(){

    return(
        <Box
        className="banner"
        sx={{
            margin:".6rem 1rem",
            height:"75svh",
            bgcolor:"#944f138e"
        }}
        >
            <Typography variant="h3">Banner</Typography>
        </Box>
    )
}