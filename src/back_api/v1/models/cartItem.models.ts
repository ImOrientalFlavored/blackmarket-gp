import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.cartItem.findUnique({
            where: {
                id: id
            }
        });
        return item;
    } catch (error) {
        console.log("Attempt to get cartItem failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const item = await client.cartItem.findMany({});
        return item;
    } catch (error) {
        console.log("Attempt to get cartItem list failed: ", error);
        ;
    }
}

const addItem = async (cartItem:Prisma.CartItemCreateInput) => {

    try {
        const item = await client.cartItem.create({
            data: {
                ...cartItem
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add cartItem failed",error);
    }
}

const editItem = async (id:number,cartItem:Prisma.CartItemUpdateInput) => {

    try {
        const item = await client.cartItem.update({
            where: {
                id: id
            },
            data: {
                ...cartItem
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update cartItem failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.cartItem.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete cartItem failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }