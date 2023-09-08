
import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/order.models'

export const getOrder = (req:Request, res:Response) => {
    try {
        const resp = getItem(req.params.id)
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listOrders = (_req:Request, res:Response) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editOrder = (req:Request, res:Response) => {
    try {
        const resp = editItem(req.params.id, req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const addOrder = (req:Request, res:Response) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteOrder = (req:Request, res:Response) => {
    try {
        const resp = deleteItem(req.params.id)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}