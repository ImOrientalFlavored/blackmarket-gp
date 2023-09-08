import { Request, Response } from 'express'

import { getItemById, listItems, editItem,  deleteItem, getItemByName } from '../models/login.models'

export const getLoginById = async (req:Request, res:Response) => {
    console.log("retrieving Login " + req.params.id);
    console.log("retrieving Login " + req.headers);
    try {
        const resp = await getItemById(req.params.id)
        console.log(resp);
        if(resp) res.status(200).json(resp)
        else res.status(404).send("No login with that id")

    } catch (err) {
        console.error(err);
        throw err
    }
}


export const getLoginByName = async (req:Request, res:Response) => {
    console.log("retrieving Login " + req.params.id);
    console.log("retrieving Login " + req.headers);
    try {
        const { username } = req.query
        const resp = await getItemByName(username as string)
        console.log(resp);
        if(resp) res.status(200).json(resp)
        else res.status(500).send("No login with that id")

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listLogins = async (_req:Request, res:Response) => {
    console.log("retrieving Logins");
    try {
        const resp = await listItems()
        console.log(resp);
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editLogin = async (req:Request, res:Response) => {
    const data = req.body;
    try {
        const resp = await editItem(req.params.id, data)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteLogin = (req:Request, res:Response) => {
    try {
        const resp = deleteItem(req.params.id)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}