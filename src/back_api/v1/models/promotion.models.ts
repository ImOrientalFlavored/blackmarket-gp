import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.promotion.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get promotion failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.promotion.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get promotion list failed: ", error);
        ;
    }
}

const addItem = async (promotion:Prisma.PromotionCreateInput) => {

    try {
        const item = await client.promotion.create({
            data: {
                ...promotion
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add promotion failed",error);
    }
}

const editItem = async (id:number,promotion:Prisma.PromotionUpdateInput) => {

    try {
        const item = await client.promotion.update({
            where: {
                id: id
            },
            data: {
                ...promotion
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update promotion failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.promotion.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete promotion failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }