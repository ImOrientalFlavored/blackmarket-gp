import { 
    Box, 
    IconButton, 
    Paper, 
    Typography 
} from "@mui/material";
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Product from "~types/Product.type";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "~/store";
import { RootState } from '../../store';
import FavoriteIcon from '@mui/icons-material/Favorite';

type ProductPaperProps = {
    product?: Product,
    sx?: object
}

export default function ProductPaper({sx, product}: ProductPaperProps){
    const navigate = useNavigate();
    const [toggled, setToggled] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const dispatch = useDispatch();
    const cartItemList = useSelector((state:RootState) => state.cartItems);
    

    const handleAddToCart = (item: Product) => {
        //if(!item) return;
        const { id, productName, imageUrl , price } = item;
        console.log("Adding to cart", item);
        console.log(cartItemList);
        dispatch(addToCart({id, productName, imageUrl, price}));
    };

    //const reviewBar = document.getElementsByClassName("side-review")
    //console.log(reviewBar);
    
    //const cssReviewBar = reviewBar[0] as unknown as CSSStyleRule
    //console.log(cssReviewBar);
    
    // useEffect(() => {
    //     if(toggled){
    //         cssReviewBar.style.display = "block";
    //     }else{
    //         cssReviewBar.style.display = "none";
    //     }
    // }, [cssReviewBar.style, toggled])

    const defaultSx ={
        backgroundColor:"#30303009",
        minHeight:"250px",
        maxHeight:"450px",
        maxWidth:"400px",
        //padding:".1rem",
        outline:"2px solid #a0a0a05f",
        borderRadius:"0",
        //position:"relative",
        //zIndex:"9999",
        //margin:"auto", 
        //filter:("brightness(.5)"),
        transition: "all 0.3s ease-in-out",
        "&:hover": {
            transform: "scale(1.007)",
            boxShadow: 1
        }
        
    }
    
    return (
        <Box>
            <Paper
            className="product-card"
            elevation={1}
                sx={{
                    ...defaultSx,
                    sx
            }}>
                <Box 
                    component={"section"} 
                    onClick={()=>{navigate(`/products/${product?.id}`)}}
                    sx={{
                        cursor:"pointer",
                }}>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        backgroundColor:"#212121",
                        justifyContent:"center",
                        alignItems:"center",
                        height:"250px",
                        //width:"330px",
                        outline:"1px solid #3b3b3b11",
                        textShadow:"2px 2px 2px #000000",
                    }}>
                        <p>image</p>
                    </div>
                    <Typography variant="h5" sx={{
                        color:"#e6e6e6",
                        textAlign:"start",
                        paddingBlock:".1rem",
                        margin:"0",
                        paddingInline:".35rem",
                        fontFamily:"'Poppins', sans-serif",
                        fontWeight:"500",
                        letterSpacing:"0.1rem",
                        textShadow:"2px 2px 2px #000000",
                    }}>
                        {product ? 
                            (product?.productName):
                            ("Product Name")
                        }
                    </Typography>

                    <Typography 
                        variant="body2" 
                        className="card-description"
                        fontSize={"0.1rem"}
                        sx={{
                            color:"#c8c8c8",
                            textAlign:"start",
                            paddingInline:".5rem",
                            fontFamily:"Poppins, sans-serif",
                            fontWeight:"100",
                            minHeight:"5rem",
                            //letterSpacing:"0.1rem",
                            textShadow:"1px 1px 1px #000000",
                    }}>
                        {product ? 
                            (product.shortDesc ? (product.shortDesc):(" ")):
                            ("Product Desc")
                        }
                    </Typography>

                    <Typography variant="body2" sx={{
                        color:"#c8c8c8",
                        textAlign:"start",
                        paddingInline:".2rem",
                        fontFamily:"'Poppins', sans-serif",
                        fontWeight:"300",
                        //letterSpacing:"0.1rem",
                        //textShadow:"1px 1px 1px #000000",
                    }}>
                        {product ? 
                            ("Cr "+ product?.price + ".00"):
                            ("Price")
                        }
                    </Typography>   
                </Box>
                {/* Icon Footer */}
                <Box
                    component={"section"}
                    sx={{
                        height:"2.5rem",
                        display:"flex",
                        justifyContent:"space-between",
                }}>
                    <IconButton sx={{color:"#eeeeee"}} onClick={()=>setIsFavorited(!isFavorited)}>
                        { !isFavorited ? (<FavoriteBorderSharpIcon />) : (<FavoriteIcon />)}
                    </IconButton>
                    
                    <Box component={"span"} >
                        <IconButton 
                            onClick={()=>setToggled(!toggled)} 
                            sx={{color:"#eeeeee"}}>
                                <ThreePOutlinedIcon />
                        </IconButton>
                        <IconButton 
                            onClick={()=>{handleAddToCart(product!)}} 
                            sx={{color:"#eeeeee"}}>
                                <AddShoppingCartSharpIcon />
                        </IconButton>
                    </Box>
                    {/* <IconButton sx={{color:"#eeeeee"}}><AddShoppingCartSharpIcon /></IconButton> */}
                </Box>
                
            </Paper>
        </Box>
    )
}