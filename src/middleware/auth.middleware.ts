import {Request, Response, NextFunction} from 'express';

export function authenticate(req:Request, res:Response, next:NextFunction){
    const auth = req.headers.authorization
    console.log("//Authenticating...");
    console.log(auth);
    console.log("Authenticating...//");
    
    if(auth !== "Bearer abc1234"){
        console.log("failed to authenticate");
        res.status(401).send("Failed to authenticate");
        next('router')
        return
    }

    next()
}