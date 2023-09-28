import Box from "@mui/material/Box/Box"
import { useEffect, useState } from "react"
import { useAppDispatch } from "~/hook/redux"
import { getProductById } from "~front_api/routes/product"
import { decrementQuantity } from "~/store"
import Product from "~types/Product.type"

type CartItemProps = {
    productId: number,
    quantity: number
}

export default function CartItem({productId, quantity}:CartItemProps){

    const [fetchedProduct, setFetchedProduct] = useState({})
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function fetchCartItem(){
            console.log("fetching cart item");
            
            console.log(productId);
            const product = await getProductById(productId);
            console.log(product);
            
            setFetchedProduct(product.data);
        }
        fetchCartItem();
    },[productId])

    console.log("Cart Item");
    console.log(fetchedProduct);
    const {productName, imageUrl, price} = fetchedProduct as Product;
    

    return(
        <Box
            display={"grid"}
            gridTemplateColumns={"3fr 4fr"}
            className="cart-item" 
            sx={{outline:"1px solid #ddd"
        }}>
            <Box sx={{outline:"1px solid #ccc"}}>
                {imageUrl && <img src={imageUrl} alt={productName} color="#d6d6d6"/>}
                {!imageUrl && <h4>{productName + "-image"}</h4>}
            </Box>
            <div className="cart-item-info">
                <h5>{productName}</h5>
                <p>Cr {price}.00</p>
                <p>Qty.{quantity}</p>
                <button className="cart-item-remove" onClick={() => dispatch(decrementQuantity(productId))}>Remove</button>
            </div>
        </Box>
    )

}