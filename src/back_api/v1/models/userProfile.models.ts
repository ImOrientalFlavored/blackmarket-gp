import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.userProfile.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get userProfile failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.userProfile.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get userProfile list failed: ", error);
        ;
    }
}

const addItem = async (userProfile:Prisma.UserProfileCreateInput) => {

    try {
        const item = await client.userProfile.create({
            data: {
                ...userProfile
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add userProfile failed",error);
    }
}

const editItem = async (id:number,userProfile:Prisma.UserProfileUpdateInput) => {

    try {
        const item = await client.userProfile.update({
            where: {
                id: id
            },
            data: {
                ...userProfile
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update userProfile failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.userProfile.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete userProfile failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }