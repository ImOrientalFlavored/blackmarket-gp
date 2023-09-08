import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/authenticationToken.models'

export const getAuthToken = (req:Request, res:Response) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)
        console.log(resp);
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listAuthTokens = (_req:Request, res:Response) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editAuthToken = (req:Request, res:Response) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addAuthToken = (req:Request, res:Response) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteAuthToken = (req:Request, res:Response) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}