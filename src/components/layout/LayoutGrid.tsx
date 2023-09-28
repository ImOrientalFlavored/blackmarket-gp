import { Box, useMediaQuery } from "@mui/material"
import ContentPane from "./ContentPane"
import SideBar from "./SideBar"
import Navbar from "./Navbar"
import Footer from "./Footer"

type LayoutGridProps = {
    children: React.ReactNode
}

export function LayoutGrid({children}: LayoutGridProps){
    const matches = useMediaQuery('(min-width: 1024px)');

    return matches ? (
        <Box className="layout" >
            <Navbar />
            <Box
                className="Content-grid"
                
                sx={
                    {
                        
                        width: "minmax(400px, 1920px)",
                        display: "grid",
                        gridTemplateColumns: "minmax(0px,240px) minmax(400px,1440px) minmax(0px,240px)",
                        gridGap: "0",
                    }
                }
            >
                <SideBar className="side-nav" />
                <ContentPane>
                        {children}
                </ContentPane>
                <SideBar className="side-review" />
            </Box>
            <Footer />
        </Box>
        ) : (
        <Box className="layout"
            minWidth={"410px"}
            width="97vw"
            sx={{
             //   outline:"4px solid #00da24"
        }}
        >
            <Navbar />
            <Box
                className="Content-grid"
                sx={
                    {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        outline:"4px white solid",
                    }
                }
            >
                <ContentPane>
                    {children}
                    <Footer />
                </ContentPane>
            </Box>
        </Box>
        )       
}