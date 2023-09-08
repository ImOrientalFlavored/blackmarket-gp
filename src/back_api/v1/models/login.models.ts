import client from "lib/client";
import { Prisma, Login, } from "@prisma/client";
import removeNull from "utils/object/removeNull.utils";
import { error } from "console";

const getItemById = async (id : string) => {
    try{
        const item = await client.login.findUnique({
            where:{
                id
            },
        })
        return item;
    }catch(err){
        console.error(`Attempt to retrieve login with id#${id} failed`,err);
    }
}

const getItemByName = async (username:string) => {
    try{
        console.log("Now querying: " +username);
        const item = await client.login.findUnique({
            where:{
                username:username
            },
        })
        return item;
    }catch(err){
        console.error(`Failed to retrieve login with username#${username}`,err);
        throw err
    }
}

const listItems = async () => {
    try{

        const itemList = await client.login.findMany({
            orderBy: {
                id: 'asc' // Use 'desc' for descending order
            }
        })
        return itemList;
    }catch(err){
        console.error(`Failed to retrieve list`,err);
        throw err;
    }
}


const listItemsBy = async (option: Partial<Login>, sortOption:Prisma.SortOrder = 'asc') => {
    const { id, username, createdAt, updatedAt } = option;
    try{
        const itemList = await client.login.findMany({ 
            where:{
                id,
                username,
                createdAt,
                updatedAt,
            }, 
            orderBy: {
                id: sortOption // Use sortOption for order
            }
        });
        return itemList;
    }catch(err){
        console.error("Failed to retrieve list of logins");
        throw error
    }
}

//Assume Prisma is imported and client is a new Prisma client
const addItem = async (param_data:{data : Partial<Login>}) => {
    const { data } = param_data
    const createField = removeNull<Partial<Login>>({...data}) as Prisma.LoginCreateInput;
    if(!(createField.username&&createField.hashedPassword)) throw new Error("Please provide a valid username and password")
    try {
        const newLogin = await client.login.create({data:createField});
        console.log(newLogin);
        return newLogin;
    }catch (error: any) {
            console.error(`Error creating new login: ${error.message}`);
            throw new Error("Attempt to create login failed " + error)
    }
}

const editItem = async (id :string, param_data:{data : Partial<Login>}) => {
    const { data } = param_data
    const updateField = removeNull<Partial<Login>>({...data}) as Prisma.LoginUpdateInput;
    try{
        const item = await client.login.update({
            where: {
                id:id
            },
            data:{
                ...updateField
            }
        })
        return item
    }catch(error){
        console.error(`Error updating login with ${id}`, error);
        throw error
    }
}

const deleteItem = async (id:string) => {
    try{
        const item = await client.login.delete({
            where:{
                id:id
            }
        })
        return item
    }catch(error){
        console.error(error);
        console.error(`Attempt to delete login #${id} failed.`);
        throw error
    }
}



export { addItem , editItem , listItems, listItemsBy, getItemById, getItemByName, deleteItem};