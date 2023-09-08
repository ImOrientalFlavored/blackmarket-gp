import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.userReview.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get userReview failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.userReview.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get userReview list failed: ", error);
        ;
    }
}

const addItem = async (userReview:Prisma.UserReviewCreateInput) => {

    try {
        const item = await client.userReview.create({
            data: {
                ...userReview
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add userReview failed",error);
    }
}

const editItem = async (id:number,userReview:Prisma.UserReviewUpdateInput) => {

    try {
        const item = await client.userReview.update({
            where: {
                id: id
            },
            data: {
                ...userReview
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update userReview failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.userReview.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete userReview failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }