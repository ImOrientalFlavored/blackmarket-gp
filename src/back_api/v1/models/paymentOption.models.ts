import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.paymentOption.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get paymentOption failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.paymentOption.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get paymentOption list failed: ", error);
        ;
    }
}

const addItem = async (paymentOption:Prisma.PaymentOptionCreateInput) => {

    try {
        const item = await client.paymentOption.create({
            data: {
                ...paymentOption
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add paymentOption failed",error);
    }
}

const editItem = async (id:number,paymentOption:Prisma.PaymentOptionUpdateInput) => {

    try {
        const item = await client.paymentOption.update({
            where: {
                id: id
            },
            data: {
                ...paymentOption
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update paymentOption failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.paymentOption.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete paymentOption failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }