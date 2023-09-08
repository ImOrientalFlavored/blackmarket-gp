import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.userRole.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get userRole failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.userRole.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get userRole list failed: ", error);
        ;
    }
}

const addItem = async (userRole:Prisma.UserRoleCreateInput) => {

    try {
        const item = await client.userRole.create({
            data: {
                ...userRole
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add userRole failed",error);
    }
}

const editItem = async (id:number,userRole:Prisma.UserRoleUpdateInput) => {

    try {
        const item = await client.userRole.update({
            where: {
                id: id
            },
            data: {
                ...userRole
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update userRole failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.userRole.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete userRole failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }