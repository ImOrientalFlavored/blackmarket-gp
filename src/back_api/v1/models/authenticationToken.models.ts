import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.authenticationToken.findUnique({
            where: {
                id: id
            }
        });
        return item;
    } catch (error) {
        console.log("Attempt to get authenticationToken failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const item = await client.authenticationToken.findMany({});
        return item;
    } catch (error) {
        console.log("Attempt to get authenticationToken list failed: ", error);
        ;
    }
}

const addItem = async (authenticationToken:Prisma.AuthenticationTokenCreateInput) => {

    try {
        const item = await client.authenticationToken.create({
            data: {
                ...authenticationToken
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add authenticationToken failed",error);
    }
}

const editItem = async (id:number,authenticationToken:Prisma.AuthenticationTokenUpdateInput) => {

    try {
        const item = await client.authenticationToken.update({
            where: {
                id: id
            },
            data: {
                ...authenticationToken
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update authenticationToken failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.authenticationToken.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete authenticationToken failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }