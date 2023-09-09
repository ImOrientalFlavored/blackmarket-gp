//import retrieveUserToken from 'back_api/v1/services/retrieveUserToken';
import {Request, Response, NextFunction} from 'express';

export function authenticate(req:Request, res:Response, next:NextFunction){
    const auth = req.headers.authorization
    //const {username} = req.body
    //const token = retrieveUserToken(username)
    
    console.log("//Authenticating...");
    console.log(auth);
    console.log("Authenticating...//");
    
    if(auth !== "Bearer abc1234"){
        console.log("failed to authenticate");
        res.status(401).send("Failed to authenticate");
        next('router')
        return
    }

    console.log("Authentication successful");
    
    next()
}