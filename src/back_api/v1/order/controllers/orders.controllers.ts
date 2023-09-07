import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/orders.models'

export const getOrder = (_req:Request, res:Response) => {
    try {
        const resp = getItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listOrders = (_req:Request, res:Response) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editOrder = (_req:Request, res:Response) => {
    try {
        const resp = editItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addOrder = (_req:Request, res:Response) => {
    try {
        const resp = addItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteOrder = (_req:Request, res:Response) => {
    try {
        const resp = deleteItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}