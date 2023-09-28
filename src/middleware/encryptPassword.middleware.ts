import bcrypt from 'bcrypt';
import { Response, Request, NextFunction } from 'express';

export async function encryptPassword(req: Request, _res: Response, next: NextFunction){
    console.log("Encrypting Password in progress");

    try {
        const { data } = req.body;       
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, salt);
        req.body.data.password = hashedPassword;
        console.log(req.body);        
        console.log("Encrypted Password has been set");
        next();
    }catch (error) {
        console.log("Error while encrypting password");
        next(error);
    }
}