import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.productImage.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get productImage failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.productImage.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get productImage list failed: ", error);
        ;
    }
}

const addItem = async (productImage:Prisma.ProductImageCreateInput) => {

    try {
        const item = await client.productImage.create({
            data: {
                ...productImage
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add productImage failed",error);
    }
}

const editItem = async (id:number,productImage:Prisma.ProductImageUpdateInput) => {

    try {
        const item = await client.productImage.update({
            where: {
                id: id
            },
            data: {
                ...productImage
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update productImage failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.productImage.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete productImage failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }