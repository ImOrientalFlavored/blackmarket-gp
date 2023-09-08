import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.address.findUnique({
            where: {
                id: id
            }
        });
        return item;
    } catch (error) {
        console.log("Attempt to get address failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const item = await client.address.findMany({});
        return item;
    } catch (error) {
        console.log("Attempt to get address list failed: ", error);
        ;
    }
}

const addItem = async (address:Prisma.AddressCreateInput) => {

    try {
        const item = await client.address.create({
            data: {
                ...address
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add address failed",error);
    }
}

const editItem = async (id:number,address:Prisma.AddressUpdateInput) => {

    try {
        const item = await client.address.update({
            where: {
                id: id
            },
            data: {
                ...address
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update address failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.address.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete address failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }