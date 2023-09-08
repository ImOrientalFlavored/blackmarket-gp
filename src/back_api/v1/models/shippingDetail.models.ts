import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.shippingDetail.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get shippingDetail failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.shippingDetail.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get shippingDetail list failed: ", error);
        ;
    }
}

const addItem = async (shippingDetail:Prisma.ShippingDetailCreateInput) => {

    try {
        const item = await client.shippingDetail.create({
            data: {
                ...shippingDetail
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add shippingDetail failed",error);
    }
}

const editItem = async (id:number,shippingDetail:Prisma.ShippingDetailUpdateInput) => {

    try {
        const item = await client.shippingDetail.update({
            where: {
                id: id
            },
            data: {
                ...shippingDetail
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update shippingDetail failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.shippingDetail.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete shippingDetail failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }