import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/product.models'

export const getProduct = async (req:Request, res:Response) => {
    try {
        const resp = await getItem(parseInt(req.params.id))
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({data:resp})
        console.log(resp);
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listProducts = async (_req:Request, res:Response) => {
    try {
        const resp = await listItems()
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({data:resp})
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editProduct = async (req:Request, res:Response) => {
    try {
        const resp = await editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addProduct = async (req:Request, res:Response) => {
    try {
        const resp = await addItem(req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteProduct = async (req:Request, res:Response) => {
    try {
        const resp = await deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}