import client from "../../../lib/client";
import { Prisma, User, } from "@prisma/client";

const getItemById = async (param_id:number|string) => {
    const id = parseInt(param_id.toString());
    try{
        const item = await client.user.findUnique({
            where:{
                id: id
            },
        })
        return item;
    }catch(err){
        console.error(`Couldn't retrieve user with id#${id}`,err);
    }
}

const getItemByName = async (email:string) => {
    const item = await client.user.findUnique({
        where:{
            email:email
        },
    })
    return item;
}

const listItems = async () => {
    const itemList = await client.user.findMany({
        orderBy: {
            id: 'asc' // Use 'desc' for descending order
        }
    })
    return itemList;
}


const listItemsBy = async (option: Partial<User>, sortOption:Prisma.SortOrder = 'asc') => {
    const { id, email, createdAt, updatedAt } = option;
    
    let filterOptions:Prisma.UserWhereInput = {};
    
    if (id) {
        filterOptions.id = id;
    }
    
    if (email) {
        filterOptions.email = email;
    }

    if (createdAt){
        filterOptions.createdAt = createdAt
    }

    if (updatedAt){
        filterOptions.updatedAt = updatedAt
    }

    const itemList = await client.user.findMany({ 
        where: filterOptions, 
        orderBy: {
            id: sortOption // Use sortOption for order
        }
    });
    return itemList;
}


const addItem = async ({email, preference }:Partial<User>) => {
    
    if (!(email) ) throw new Error('Please include a valid email');
    if (!(preference)) preference = {};
    const userField = {     
            email,
            preference,
        }

    try {
        const newUser = await client.user.create({data:userField});
        console.log(newUser);
    }catch (error: unknown) {
        if (error instanceof Error) {
            console.log(`Error creating new user: ${error.message}`);
            console.error(error);
            console.trace(error);
        }
    }
}

const editItem = async (id : number, user:Partial<User>) => {
    const {email, preference} = user;
    if(!(email && preference)) return
    try{
        const item = await client.user.update({
            where: {
                id:id
            },
            data:{
                email,
                preference
            }
        })
        return item
    }catch(error){
        console.error(`Error updating user with ${id}`, error);
        throw error
    }
}

const deleteItem = async (id:number) => {
    try{
        const item = await client.user.delete({
            where:{
                id:id
            }
        })
        return item
    }catch(error){
        console.error(error);
        console.error(`No user found with ${id}`);
    }
}



export { addItem , editItem , listItems, listItemsBy, getItemById, getItemByName, deleteItem};