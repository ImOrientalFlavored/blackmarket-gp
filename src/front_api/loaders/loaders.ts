import { getProductById, getProducts } from "~front_api/routes/product";
import {  LoaderFunctionArgs } from "react-router-dom";

export async function manyProductsLoader(){
    const products = await getProducts();
    console.log(products);
    return products;
}

export async function singleProductLoader(args:LoaderFunctionArgs){
    const { params } = args;
    console.log(params);
    if(!params.id) return null;
    const  productId  = parseInt(params.id);
    const { data } = await getProductById(productId);
    console.log("product", data);
    //console.log(product);
    if(!data) return null;
    return data;
}