import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.productInventory.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get productInventory failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.productInventory.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get productInventory list failed: ", error);
        ;
    }
}

const addItem = async (productInventory:Prisma.ProductInventoryCreateInput) => {

    try {
        const item = await client.productInventory.create({
            data: {
                ...productInventory
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add productInventory failed",error);
    }
}

const editItem = async (id:number,productInventory:Prisma.ProductInventoryUpdateInput) => {

    try {
        const item = await client.productInventory.update({
            where: {
                id: id
            },
            data: {
                ...productInventory
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update productInventory failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.productInventory.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete productInventory failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }