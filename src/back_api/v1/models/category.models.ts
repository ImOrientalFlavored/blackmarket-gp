import client from "../../../lib/client";
import { Category } from "@prisma/client";


const getItemById = async (id:number) => {
    const item = await client.category.findUnique({
        where:{
            id: id
        },
    })
    return item;
}

const getItemByName = async (categoryName:string) => {
    const item = await client.category.findUnique({
        where:{
            categoryName:categoryName
        },
    })
    return item;
}

const listItems = async () => {
    const itemList = await client.category.findMany({
        orderBy: {
            id: 'asc' // Use 'desc' for descending order
        }
    })
    return itemList;
}

const listItemsBy = async (option: Partial<Category>, sortOption: 'asc' | 'desc' = 'asc') => {
    const { id, categoryName } = option;
    
    let filterOptions:Partial<Category> = {};
    
    if (id) {
        filterOptions['id'] = id;
    }
    
    if (categoryName) {
        filterOptions['categoryName'] = categoryName;
    }

    const itemList = await client.category.findMany({ 
        where: filterOptions, 
        orderBy: {
            id: sortOption // Use sortOption for order
        }
    });
    return itemList;
}


const addItem = async ({categoryName, categoryDesc, slug }:Partial<Category>) => {
    
    if (!(categoryName && categoryDesc) ) throw new Error('Please include a category name/description');

    const categoryField = {
        data:{
            categoryName,
            categoryDesc,
            slug
        },
    }

    try {
        const newCategory = await client.category.create(categoryField);
        console.log(newCategory);
    }catch (error: unknown) {
        if (error instanceof Error) {
            console.log(`Error creating new category: ${error.message}`);
            console.error(error);
            console.trace(error);
        }
    }
}

const editItem = async (id : number, category:Partial<Category>) => {
    try{
        const item = await client.category.update({
            where: {
                id:id
            },
            data:category
        })
        return item
    }catch(error){
        console.error(`Error updating Category with ${id}`, error);
        throw error
    }
}

const deleteItem = async (id:number) => {
    try{
        const item = await client.category.delete({
            where:{
                id:id
            }
        })
        return item
    }catch(error){
        console.error(error);
        console.error(`No category found with ${id}`);
    }
}



export { addItem , editItem , listItems, listItemsBy, getItemById, getItemByName, deleteItem};