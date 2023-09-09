import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/authenticationToken.models'
import { User } from '@prisma/client'
import client from '@lib/client'

export const getAuthToken = async (req:Request, res:Response) => {
    try {
        const resp = await getItem(parseInt(req.params.id))
        res.status(200).json(resp)
        console.log(resp);
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listAuthTokens = async (_req:Request, res:Response) => {
    try {
        const resp = await listItems()
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editAuthToken = async (req:Request, res:Response) => {
    try {
        const resp = await editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addAuthToken = async (req:Request, res:Response) => {
    try {
        const resp = await addItem(req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteAuthToken = async (req:Request, res:Response) => {
    try {
        const resp = await deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

// export const getAuthTokenBy = (req:Request, res:Response) => {
    //     try {
    //         const resp = getItem(parseInt(req.params.id))
//         res.status(200).json(resp)
//         console.log(resp);
        
//     } catch (err) {
//         res.status(500).send(err)
//     }
// }

export const authenticateNewUser = async (user:User, token:string ) => {
    try {
        const resp = await client.authenticationToken.create(
            {
                data: {
                    token: token,
                    user: {
                        connect: {
                            id: user.id
                        }
                    }
                }
            }
        )
        return resp
    } catch (err) {
        console.log(err)
        throw err;
    }
}

export const refreshUserToken = async(id:number ,token:string) => {
    try {
        const resp = await client.authenticationToken.update(
            {
                where: {
                    id: id
                },
                data: {
                    token: token
                }
            }
        )
        return resp
    } catch (err) {
        console.log(err)
        throw err;
    }
}
