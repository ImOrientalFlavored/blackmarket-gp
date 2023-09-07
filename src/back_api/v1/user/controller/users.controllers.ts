import { Request, Response } from 'express'

import { getItemById, listItems, editItem,  deleteItem } from '../model/users.models'
import { Prisma, User } from '@prisma/client'

export const getUser = async (req:Request, res:Response) => {
    console.log("retrieving user");
    const { id } = req.params
    try {
        const resp = await getItemById(id)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listUsers = async (_req:Request, res:Response) => {
    console.log("retrieving users");
    try {
        const resp = await listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editUser = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const user = req.body as unknown as User;
    try {
        const resp = await editItem(id, user)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteUser = (req:Request, res:Response) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}