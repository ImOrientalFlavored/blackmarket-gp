//import { SxProps, Theme, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";

type GridBoxProps = {
    children: React.ReactNode,
    sx?:object
}

export default function GridBox({children, sx}: GridBoxProps) {
    // const defaultSx = {
    //     outline:"5px solid #a92222",
    //     gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",
    //     gridTemplateRows:"repeat(auto-fill, minmax(200px, 1fr))",
    //     gridGap:"10px",
    //     padding:"10px",
    //     borderRadius:"10px",
    //     boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.75)",
    //     transition:"0.3s ease-in-out",
    // }
    return(
        <Box>
            <h2 style={{paddingLeft:"30px"}}>Category Header</h2>
            
            <Box 
                component={"section"}
                width={"100%"} 
                display={"grid"}
                sx={sx}
            >
                {children}
            </Box>
    </Box>
    )
}