import client from "@lib/client";
import { Prisma } from "@prisma/client";

const getItem = async (id:number) => {
    
    try { 
        const item = await client.socialLink.findUnique({
            where: {
                id: id
            }
        });
        console.log(item);
        return item;
    } catch (error) {
        console.log("Attempt to get socialLink failed: ", error);
        ;
    }
}

const listItems = async () => {
    
    try { 
        const items = await client.socialLink.findMany({});
        console.log(items);
        return items;
    } catch (error) {
        console.log("Attempt to get socialLink list failed: ", error);
        ;
    }
}

const addItem = async (socialLink:Prisma.SocialLinkCreateInput) => {

    try {
        const item = await client.socialLink.create({
            data: {
                ...socialLink
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to add socialLink failed",error);
    }
}

const editItem = async (id:number,socialLink:Prisma.SocialLinkUpdateInput) => {

    try {
        const item = await client.socialLink.update({
            where: {
                id: id
            },
            data: {
                ...socialLink
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to update socialLink failed",error);
    }
}

const deleteItem = async (id:number) => {

    try {
        const item = await client.socialLink.delete({
            where: {
                id: id
            }
        })
        console.log(item);
        return item
    } catch (error) {
        console.log("Attempt to delete socialLink failed",error);
    }
}


export { getItem, listItems , addItem, editItem, deleteItem }