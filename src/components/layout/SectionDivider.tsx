import Divider from "@mui/material/Divider/Divider"

type SectionDividerProps = {
    sx?:object
}

export default function SectionDivider({sx}:SectionDividerProps){
    return (
        <Divider className="section-divider" sx={{
            height:"45vh",
            bgcolor:"#000000e0",
            //border:"2px solid #4040405f",
            boxShadow:`
            inset 0 3px 6px 2px rgba(130, 130, 130, 0.08),
            inset 0 6px 10px 20px rgba(12,12,12,0.07),
            inset 0 6px 15px 10px rgba(21,21,21,0.05),
            inset 0 5px 20px 17px rgba(12,12,12,.05)`,
            "&:hover": {
                bgcolor:"#000",
                //filter:"opacity(0.5)",
                //boxShadow: 1
            },
            transition:"all 0.5s linear 0s",
        ...sx}}/>
    )
}