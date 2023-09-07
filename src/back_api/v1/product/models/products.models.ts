import { Prisma, Product } from '@prisma/client';
import client from '../../../../lib/client'
import removeNull from 'utils/object/removeNull.utils';

const getItem = async (id:number) => {
    try {
        const product = await client.product.findUniqueOrThrow({
            where:{
                id:id
            }
        })
        console.log(product);
        return product
    } catch (err) {
        console.log('Error', err)
    }
}

const listItems = async () => {
    try {
        const products = await client.product.findMany()
        console.log(products);
        
        return products
    } catch (err) {
        console.log('Error', err)
    }
}

const editItem = async (id:number, productParam:Product) => {
    const editField = removeNull<Product>(productParam) as Prisma.ProductUpdateInput;
    try {
        const updatedProduct = await client.product.update({
            where:{
                id:id
            },
            data:{
                ...editField
            }
        })
        console.log(`Product #${id} updated`);
        return updatedProduct;
    } catch (err) {
        console.log('Error', err)
    }
}

const addItem = (data: any) => {
    try {  
        console.log(data);
    } catch (err) {
        console.log('Error', err)
    }
}

const deleteItem = (id:number) => {
    try {
        console.log(id);  
    } catch (error) {
        console.error(error);
    }
}

export { addItem, editItem, getItem, deleteItem, listItems}