import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.promotionCategory.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get promotionCategory failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.promotionCategory.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get promotionCategory list failed: ", error);
        ;
    }
}

const addItem = async (promotionCategory:Prisma.PromotionCategoryCreateInput) => {

    try {
        const item = await client.promotionCategory.create({
            data: {
                ...promotionCategory
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add promotionCategory failed",error);
    }
}

const editItem = async (id:number,promotionCategory:Prisma.PromotionCategoryUpdateInput) => {

    try {
        const item = await client.promotionCategory.update({
            where: {
                id: id
            },
            data: {
                ...promotionCategory
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update promotionCategory failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.promotionCategory.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete promotionCategory failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }