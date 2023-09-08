import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.rolePermission.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get rolePermission failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.rolePermission.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get rolePermission list failed: ", error);
        ;
    }
}

const addItem = async (rolePermission:Prisma.RolePermissionCreateInput) => {

    try {
        const item = await client.rolePermission.create({
            data: {
                ...rolePermission
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add rolePermission failed",error);
    }
}

const editItem = async (id:number,rolePermission:Prisma.RolePermissionUpdateInput) => {

    try {
        const item = await client.rolePermission.update({
            where: {
                id: id
            },
            data: {
                ...rolePermission
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update rolePermission failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.rolePermission.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete rolePermission failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }