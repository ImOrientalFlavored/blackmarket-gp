import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.role.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get role failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.role.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get role list failed: ", error);
        ;
    }
}

const addItem = async (role:Prisma.RoleCreateInput) => {

    try {
        const item = await client.role.create({
            data: {
                ...role
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add role failed",error);
    }
}

const editItem = async (id:number,role:Prisma.RoleUpdateInput) => {

    try {
        const item = await client.role.update({
            where: {
                id: id
            },
            data: {
                ...role
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update role failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.role.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete role failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }