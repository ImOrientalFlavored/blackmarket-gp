import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:string) => {
    
    try { 
        const item = await client.order.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get order failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.order.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get order list failed: ", error);
        ;
    }
}

const addItem = async (order:Prisma.OrderCreateInput) => {

    try {
        const item = await client.order.create({
            data: {
                ...order
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add order failed",error);
    }
}

const editItem = async (id:string,order:Prisma.OrderUpdateInput) => {

    try {
        const item = await client.order.update({
            where: {
                id: id
            },
            data: {
                ...order
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update order failed",error);
    }
}

const deleteItem = async (id:string) => {

    try {
        const item = await client.order.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete order failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }