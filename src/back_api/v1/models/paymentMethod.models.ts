import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.paymentMethod.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get paymentMethod failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.paymentMethod.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get paymentMethod list failed: ", error);
        ;
    }
}

const addItem = async (paymentMethod:Prisma.PaymentMethodCreateInput) => {

    try {
        const item = await client.paymentMethod.create({
            data: {
                ...paymentMethod
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add paymentMethod failed",error);
    }
}

const editItem = async (id:number,paymentMethod:Prisma.PaymentMethodUpdateInput) => {

    try {
        const item = await client.paymentMethod.update({
            where: {
                id: id
            },
            data: {
                ...paymentMethod
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update paymentMethod failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.paymentMethod.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete paymentMethod failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }