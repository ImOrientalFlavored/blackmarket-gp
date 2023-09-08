import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.shippingMethod.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get shippingMethod failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.shippingMethod.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get shippingMethod list failed: ", error);
        ;
    }
}

const addItem = async (shippingMethod:Prisma.ShippingMethodCreateInput) => {

    try {
        const item = await client.shippingMethod.create({
            data: {
                ...shippingMethod
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add shippingMethod failed",error);
    }
}

const editItem = async (id:number,shippingMethod:Prisma.ShippingMethodUpdateInput) => {

    try {
        const item = await client.shippingMethod.update({
            where: {
                id: id
            },
            data: {
                ...shippingMethod
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update shippingMethod failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.shippingMethod.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete shippingMethod failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }