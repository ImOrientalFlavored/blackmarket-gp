import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/productInventory.models'

export const getProductInventory = (req:Request, res:Response) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)
        console.log(resp);
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listProductInventories = (_req:Request, res:Response) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editProductInventory = (req:Request, res:Response) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addProductInventory = (req:Request, res:Response) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteProductInventory = (req:Request, res:Response) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}