import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getItemById } from '../models/login.models'
import { Login } from '@prisma/client'

export const authenticateLogin = async (req: Request, res: Response) => {
    const { username, hashedPassword } = req.body as Partial<Login>

    if (!username ||!hashedPassword) {
        return res.status(400).json({
            message: 'Please provide username and password',
        })
    }
    const user = await getItemById(username)
    if (!user) {
        return res.status(400).json({
            message: 'Invalid username',
        })
    }
    const isMatch = await bcrypt.compare(hashedPassword, user.hashedPassword)
    if (!isMatch) {
        return res.status(400).json({
            message: 'Incorrect password',
        })
    }
    const authToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET as string, {
        expiresIn: '120s',
    })

    const refreshToken = jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET as string, {
        expiresIn: '7d',
    })
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: true, secure: true })
    return res.status(200).json({
        authToken
    })
}