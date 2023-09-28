import { Divider } from "@mui/material";
import { NavLink, useLoaderData } from "react-router-dom";
import Product from "~types/Product.type";

export default function Product(){

    const p = useLoaderData() as unknown as Product;

    return (
        <div className="product-detail">
            <div className="product-filter">
            <NavLink to={"/"}>Back to product page</NavLink>
            <p>Filter</p>
            </div>
            <div className="product-header">
                <p>Product Name: {p ? p.productName : ''}</p>
            </div>
            <div className="product-pane">
                <section className="product-content">
                    <div>
                        <p>Product Image</p>
                    </div>
                    <section>
                        <p>Product Description:{p ? p.productDesc : ''}</p>
                        <p>Product Price:{p ? p.price : ''}</p>
                    </section>
                </section>
                <section  className="product-links">
                        <NavLink to={""}>Details</NavLink>
                        <NavLink to={""}>Reviews</NavLink>
                        <NavLink to={""}>Gallery</NavLink>
                        <NavLink to={""}>Similar Items</NavLink>
                </section>
            </div>
            <Divider sx={{marginBlock:".5rem"}} />
            <div className="product-gallery">
                <p>Product Gallery</p>
            </div>
        </div>
    )
}