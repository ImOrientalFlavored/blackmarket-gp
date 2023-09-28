import { Box } from "@mui/material";

type ContentPaneProps = {
    children: React.ReactNode;
}

export default function ContentPane({children}: ContentPaneProps){
return(
    <Box sx={{
        //marginInline:"4px",
        //borderInline:"3px solid #161616",
        //position: "relative",
        // boxShadow:`
        // inset 0 0 .2rem .1rem rgba(200,200,200,.25),
        // inset 0 0 1.5rem .05rem #9f9f9f9b`
    }}>
        <Box
            //position={"relative"}
            //width={"1440px"} 
            bgcolor={"rgba(5, 5, 5, 0.109)"}
            display={"flex"}
            justifyContent={"stretch"}
            marginTop={"4rem"}
            sx={{
                //outline:"10px solid #0019f8",
                zIndex:"-1",
                opacity:".85",
                filter:"blur(0px)",
                //overflow:"hidden",
                //border:"10px solid rgba(120, 120, 120, 0.148)",
                // boxShadow:`
                // inset 0 0 20rem 20rem rgb(114, 114, 114),
                // inset 0 0 10rem 5rem rgba(0, 0, 0, 0.229),
                // inset 0 0 20rem 10rem rgba(0, 0, 0, 0.229),
                // inset 0 0 30rem 15rem rgba(0, 0, 0, 0.229),
                // inset 0 0 40rem 20rem rgba(0, 0, 0, 0.229),
                // 0 0 5rem 1rem rgba(0, 0, 0, 0.747)
                // `,
            }}
            >
            <Box 
                width={"100%"}  
                bgcolor={"rgba(25, 25, 25, 0.121)"}
                //display={"flex"}
                //position={"relative"}
                sx={{
                    opacity:"1",
                    //outline:"10px solid #f80000",
                    
                    //overflow:"hidden",
                    //border:"10px solid rgb(0, 0, 0)",
                    // boxShadow:`
                    // inset 0 0 2rem .5rem rgb(135,135,135),
                    // inset 0 0 10rem 5rem rgba(0, 0, 0, 0.229),
                    // inset 0 0 20rem 10rem rgba(0, 0, 0, 0.229),
                    // inset 0 0 30rem 15rem rgba(0, 0, 0, 0.229),
                    // inset 0 0 40rem 20rem rgba(0, 0, 0, 0.229),
                    // 0 0 5rem 1rem rgba(80, 80, 80, 0.747)
                    // `,
                }}
            >
                {children}
            </Box>
        </Box>
    </Box>
    )
}

