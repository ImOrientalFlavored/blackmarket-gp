import db from '../../../../data/dummydb'
import Product from '../../../../types/Product.type'
import client from '../../../../db/client'

export const getItem = async (id:number) => {
    try {
        const product = await client.product.findUniqueOrThrow({
            where:{
                id:id
            }
        })
        console.log(product);
        return product
    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = async () => {
    try {
        const products = await client.product.findMany()
        console.log(products);
        
        return products
    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id:number, data:Product) => {
    try {
        const index = db.products.findIndex(product => product.id === id)

        if (index === -1) throw new Error('Product not found')
        else {
            db.products[index] = data
            return db.products[index]
        }        
    } catch (err) {
        console.log('Error', err)
    }
}

export const addItem = (data: any) => {
    try {  
        const newProduct = { id: db.products.length + 1, ...data }
        db.products.push(newProduct)
        return newProduct

    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = (id:number) => {
    try {
        // delete item from db
        const index = db.products.findIndex(product => product.id === id)

        if (index === -1) throw new Error('Product not found')
        else {
            db.products.splice(index, 1)
            return db.products
        }
    } catch (error) {
        
    }
}