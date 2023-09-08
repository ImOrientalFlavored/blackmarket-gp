import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.orderDetail.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get orderDetail failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.orderDetail.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get orderDetail list failed: ", error);
        ;
    }
}

const addItem = async (orderDetail:Prisma.OrderDetailCreateInput) => {

    try {
        const item = await client.orderDetail.create({
            data: {
                ...orderDetail
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add orderDetail failed",error);
    }
}

const editItem = async (id:number,orderDetail:Prisma.OrderDetailUpdateInput) => {

    try {
        const item = await client.orderDetail.update({
            where: {
                id: id
            },
            data: {
                ...orderDetail
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update orderDetail failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.orderDetail.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete orderDetail failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }