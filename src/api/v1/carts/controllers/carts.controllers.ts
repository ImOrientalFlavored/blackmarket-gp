import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/carts.models'

export const getCart = (_req:Request, res:Response) => {
    try {
        const resp = getItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listCarts = (_req:Request, res:Response) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editCart = (_req:Request, res:Response) => {
    try {
        const resp = editItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addCart = (_req:Request, res:Response) => {
    try {
        const resp = addItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteCart = (_req:Request, res:Response) => {
    try {
        const resp = deleteItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}