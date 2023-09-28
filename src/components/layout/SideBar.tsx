import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

type SideBarProps = {
    sx?: object,
    className?: string
}

export default function Sidebar({sx, className}:SideBarProps){

    
    return (
        <Box
            className={className +" "+"hidden"}
            width={"240px"}
            bgcolor={"#ab42013b"}
            padding={"3px"}
            marginTop={"5rem"}
            sx={sx}
        >
            <Box
                className={`${className}-header`}
                bgcolor={"transparent"}
                padding={0}
                margin={0}
            >
                <Typography variant="h3">
                    Side 
                </Typography>
            </Box>
            <Box
                component={"section"}
                height={"90%"}
                bgcolor={"#8a350029"}
            >
            </Box>
        </Box>
    )
}