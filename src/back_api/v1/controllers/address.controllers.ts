
import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/address.models'

export const getAddress = async (req:Request, res:Response) => {
    try {
        const resp = await getItem(parseInt(req.params.id))
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listAddress = async (_req:Request, res:Response) => {
    try {
        const resp = await listItems()
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editAddress = (req:Request, res:Response) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const addAddress = (req:Request, res:Response) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteAddress = (req:Request, res:Response) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}