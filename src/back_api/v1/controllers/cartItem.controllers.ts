
import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/cartItem.models'

export const getCartItem = (req:Request, res:Response) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listCartItem = (_req:Request, res:Response) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editCartItem = (req:Request, res:Response) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const addCartItem = (req:Request, res:Response) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteCartItem = (req:Request, res:Response) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}