import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        export interface Request {
            user?: any;
        }
    }
}

export const verifyAccessToken = async (req:Request, res:Response, next:NextFunction) => {
    console.log("Verifying access token");
    
    try {
        if (!req.headers.authorization) {
            return res.status(403).json({
                message: "No token provided"
            })
        }
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as { username: string};
        console.log(decoded);
        req.user = decoded.username;
        console.log("Verifying access token successful");
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};