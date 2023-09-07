import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        export interface Request {
            user?: any;
        }
    }
}

export const validateToken = async (req:Request, res:Response, next:NextFunction) => {
    try {
        if (!req.headers.authorization) {
            return res.status(403).json({
                message: "No token provided"
            })
        }
        const token = req.headers.authorization.split(" ")[1];
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as { username: string};
        req.user = decoded.username;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};