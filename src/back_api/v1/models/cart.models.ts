import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.cart.findUnique({
            where: {
                id: id
            }
        });
        return item;
    } catch (error) {
        console.log("Attempt to get cart failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const item = await client.cart.findMany({});
        return item;
    } catch (error) {
        console.log("Attempt to get cart list failed: ", error);
        ;
    }
}

const addItem = async (cart:Prisma.CartCreateInput) => {

    try {
        const item = await client.cart.create({
            data: {
                ...cart
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add cart failed",error);
    }
}

const editItem = async (id:number,cart:Prisma.CartUpdateInput) => {

    try {
        const item = await client.cart.update({
            where: {
                id: id
            },
            data: {
                ...cart
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update cart failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.cart.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete cart failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }