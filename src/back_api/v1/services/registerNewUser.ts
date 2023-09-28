import { Request, Response, NextFunction } from 'express';
import { generateRefreshToken } from 'lib/generateRefreshToken';
import createNewUser from './createNewUser';
import { authenticateNewUser } from '../controllers/authenticationToken.controllers';

export async function registerNewUser(req: Request, res: Response, next: NextFunction) {
    //console.log(req.body);
    console.log("Registering new user in progress");

    const { email, username, password } = req.body.data;

    console.log(email);
    console.log(username);
    console.log(password);
    
    
    try {
        const userToken = generateRefreshToken(req.body.data);
        const newUser = await createNewUser({email}, { username, password });
        
        if(!userToken){ return res.status(400).json({error: "Could not generate token"}); }
        if(!newUser){ return res.status(400).json({error: "Could not create new user"}); }

        const newAuthToken = await authenticateNewUser(newUser, userToken);
        if(!newAuthToken){ return res.status(400).json({error: "Could not authenticate new user"}); }
        console.log(newAuthToken);
        const {token} = newAuthToken;

        return res.status(200).json({data:{token}});
    } catch (error) {
        console.log(error);
        throw new Error("Failed to register new user")
    }
}