import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.userAddress.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get userAddress failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.userAddress.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get userAddress list failed: ", error);
        ;
    }
}

const addItem = async (userAddress:Prisma.UserAddressCreateInput) => {

    try {
        const item = await client.userAddress.create({
            data: {
                ...userAddress
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add userAddress failed",error);
    }
}

const editItem = async (id:number,userAddress:Prisma.UserAddressUpdateInput) => {

    try {
        const item = await client.userAddress.update({
            where: {
                id: id
            },
            data: {
                ...userAddress
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update userAddress failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.userAddress.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete userAddress failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }