import { AppBar, Box, Divider, IconButton, Typography } from "@mui/material";
//import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import Box from "@mui/material/Box";
import Logo from "~components/ui/Logo";
import SearchBar from "~components/ui/Searchbar";
import { useNavigate } from "react-router-dom";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { useAppSelector } from "~hook/redux";

export default function Navbar(){
    const cartItemList = useAppSelector(state => state.cartItems);
    const totalQuantity = cartItemList.reduce((acc, item) => acc + item.quantity, 0);
    const navigate = useNavigate();
    return (
        <AppBar
            className="NavBar"
            position="fixed"
            elevation={2}
            sx={{
                left: "50%",
                transform: "translateX(-50%)",
                backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.40),rgba(0, 0, 0, 0.5)) , url("src/assets/img/low_contrast_linen.png")`,
                opacity: ".91",
                zIndex: "9999",
                //height: "4rem",
                maxWidth:"1920px",
                paddingInline: "1rem",
        }}>

            <Box display={"flex"} justifyContent={"space-between"}>

                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} marginLeft={'1rem'} justifyContent={'space-between'}>
                    <IconButton onClick={()=>navigate("/")}> 
                        <Logo/>
                    </IconButton>
                    <SearchBar />
                </Box>

                <Typography variant="h3" textAlign={"center"}>
                    Navbar
                </Typography>
            <Box />

                <Box />

                <Box 
                    component={"section"} 
                    display={'flex'} 
                    sx={{
                        //outline:"1px solid white"
                    }} 
                    alignItems={"center"} 
                >
                    <Divider variant="middle" orientation="vertical" sx={{border:"1px solid #303030", mx:".75rem", height:"65%"} } />

                        <Box position={"relative"}>
                            <IconButton onClick={()=>navigate("/profile")} sx={{color:"#d6d6d6"}}>
                                <AccountBoxOutlinedIcon sx={{fontSize:"2.1rem"}} />
                            </IconButton>
                        </Box>

                    <Divider variant="middle" orientation="vertical" sx={{border:"1px solid #303030", mx:".75rem", height:"65%"} } />

                    <Box position={"relative"}>
                        <IconButton onClick={()=>navigate("/cart")} sx={{color:"#d6d6d6"}}>
                            <ShoppingCartIcon sx={{fontSize:"2.25rem"}} />
                        </IconButton>
                        <Box position={"absolute"} sx={{
                            transform:"Scale(.45)",
                            transformOrigin:"center center",
                            top:".2rem",
                            right:".725rem",
                            fontWeight:"700",
                            // background:"#cf4545",
                            // borderRadius:"100px",
                            minWidth:"1.75rem",
                            //minHeight:"1.75rem"
                            textAlign:"center",
                            textShadow:"1px 1px 2px #000000",
                            color:"#202020"
                        
                        }}>
                            <span>{totalQuantity > 0?
                                    totalQuantity < 100 ? totalQuantity : "99+"
                                    : '' }</span>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </AppBar>
    )
}