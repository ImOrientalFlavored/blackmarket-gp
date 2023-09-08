import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.permission.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get permission failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.permission.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get permission list failed: ", error);
        ;
    }
}

const addItem = async (permission:Prisma.PermissionCreateInput) => {

    try {
        const item = await client.permission.create({
            data: {
                ...permission
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add permission failed",error);
    }
}

const editItem = async (id:number,permission:Prisma.PermissionUpdateInput) => {

    try {
        const item = await client.permission.update({
            where: {
                id: id
            },
            data: {
                ...permission
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update permission failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.permission.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete permission failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }