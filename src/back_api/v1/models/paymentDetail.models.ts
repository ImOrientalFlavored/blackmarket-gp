import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.paymentDetail.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get paymentDetail failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.paymentDetail.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get paymentDetail list failed: ", error);
        ;
    }
}

const addItem = async (paymentDetail:Prisma.PaymentDetailCreateInput) => {

    try {
        const item = await client.paymentDetail.create({
            data: {
                ...paymentDetail
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add paymentDetail failed",error);
    }
}

const editItem = async (id:number,paymentDetail:Prisma.PaymentDetailUpdateInput) => {

    try {
        const item = await client.paymentDetail.update({
            where: {
                id: id
            },
            data: {
                ...paymentDetail
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update paymentDetail failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.paymentDetail.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete paymentDetail failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }