import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/users.models'

export const getUser = (_req:Request, res:Response) => {
    try {
        const resp = getItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listUsers = (_req:Request, res:Response) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editUser = (_req:Request, res:Response) => {
    try {
        const resp = editItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addUser = (_req:Request, res:Response) => {
    try {
        const resp = addItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteUser = (_req:Request, res:Response) => {
    try {
        const resp = deleteItem()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}