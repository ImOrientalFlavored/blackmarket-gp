
//A component that retrieves and displays a list of all the cart items that have been added to the cart
//Cart items are stored in a local storage they have have four properties: productId, quantity, product price, and an optional promotion code.
//The quantity is the number of times the product has been added to the cart
//The product price is the price of the product that has been added to the cart
//The productId is the unique identifier for the product that has been added to the cart
//If the user is logged in, the component will display a list of all the cart items that have been added to the
//previously cart. The cart will fetch either from local storage or from the server the users cart items.
//When the cart item updates an update event will be triggered and the cart will be updated to reflect the changes in either
//the database or the local storage.
//When the quantity is decremented below one, the product will be removed from the cart.
//When the quantity is incremented above zero, the product will be added to the cart.
//Will either need to fetch the cart items from the database or from the local storage depending on whether the user is logged in, or
//use the useContext hook 

// import React, { Component } from'react';
// import { connect } from'react-redux';
import Box from '@mui/material/Box/Box';
import { useSelector } from 'react-redux';
// import { Link } from'react-router-dom';
import { RootState } from '~/store';
import BackLink from '~components/ui/BackLink';
import CartItem from '~components/ui/CartItem';
// import { fetchCart } from '../store/cart';
// import { fetchUser } from '../store/user';
//import { NavLink } from 'react-router-dom';
export default function Cart(){



    const cartItemList =  useSelector((state:RootState) => state.cartItems );
    console.log("cartItemList");
    console.log(cartItemList);
    console.log("//cartItemList");

    
    const totalQuantity = cartItemList.reduce((acc, item) =>  acc + item.quantity!, 0);
    
    
    
    return (
        <Box minHeight={'85vh'} margin={"2.5%"}>
            <Box component={"nav"}>
                <BackLink to='/' />
            </Box>
                <div>
                    <h3>Cart</h3>
                    <Box display={"grid"} gridTemplateColumns={"7fr 3fr"}>

                        <Box>
                            {cartItemList.length > 0? (
                                cartItemList.map((cartItem) => {
                                    return (
                                    <CartItem 
                                        key={cartItem.id} 
                                        productId={cartItem.id}  
                                        quantity={cartItem.quantity!} 
                                    />)
                                }
                                
                                )
                                ) : (
                                    <Box>
                                    <p>
                                        There are no items in your cart
                                    </p>
                                </Box>
                            )
                        }
                        </Box>

                        <Box 
                            sx={{
                                outline:"1px solid #cfcf45",
                                bgcolor:"#404040"
                        }}>
                            <Box >

                            </Box>
                        </Box>
                        <Box>
                            <p>Total item(s):{totalQuantity}</p>
                        </Box>

                    </Box>
                </div>
            
        </Box>
    )
}