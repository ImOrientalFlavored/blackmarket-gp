import Box from "@mui/material/Box/Box";

type PageSectionProp = {
    children: React.ReactNode,
    sx?: object
}

export default function PageSection({children, sx}: PageSectionProp){

    const defaultSx = {
        //outline: "5px solid #73007eb7",
        //boxShadow:"0px 0px 1px 3px rgba(0,0,0,.9)",
        marginBottom: "10%",
        borderBottom: "3px solid #0d0d0d77",
    }

    return(
        <Box 
            className="page-section"
            //component="section"
            marginBottom={".1rem"}
            bgcolor={"#31313127"}
            sx={{
                ...defaultSx,
                ...sx
            }}>
            {children}
        </Box>
    )
}