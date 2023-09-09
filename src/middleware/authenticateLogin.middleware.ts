import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { AuthenticationToken, Login } from '@prisma/client'
import { getItemByName as getLoginByName } from 'back_api/v1/models/login.models'
import { generateRefreshToken } from 'lib/generateRefreshToken'
import { generateAccessToken } from 'lib/generateAccessToken'
import { refreshUserToken } from 'back_api/v1/controllers/authenticationToken.controllers'
import retrieveUserToken from 'back_api/v1/services/retrieveUserToken'

export const authenticateLogin = async (req: Request, res: Response) => {
    const { username, hashedPassword } = req.body.data as Partial<Login>

    if (!username ||!hashedPassword) {
        return res.status(400).json({
            message: 'Please provide username and password',
        })
    }
    const login = await getLoginByName(username)
    if (!login) {
        return res.status(400).json({
            message: 'Invalid username',
        })
    }
    const isMatch = await bcrypt.compare(hashedPassword, login.hashedPassword)
    if (!isMatch) {
        return res.status(400).json({
            message: 'Incorrect password',
        })
    }

    const accessToken = generateAccessToken(login)
    const refreshToken = generateRefreshToken(login);

    const userToken = await retrieveUserToken(username) as AuthenticationToken
    const updatedToken = refreshUserToken(userToken.id, refreshToken)
    if (!updatedToken) { return res.status(400).json({message:"Attempt to refresh user token failed"})}

    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: true, secure: true })
    return res.status(200).json({
        data:{accessToken}
    })
}