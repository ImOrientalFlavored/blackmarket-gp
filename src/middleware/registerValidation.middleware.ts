import { Request, Response, NextFunction } from "express";
//import { User, Login } from "@prisma/client";
import { signUpSchema } from "lib/signUpFormSchema.types";

export async function registerValidation(req: Request, res: Response, next: NextFunction) {
    const { data } = req.body;
    console.log("Validating data with zod schema:");
    console.log(req.body);
    signUpSchema.safeParseAsync(data).then((data) => {
        if (!data.success) {
            return res.status(400).json({ error: data.error.message });
        }
        console.log(data);
    }).catch(next);
    console.log("Registration input validation successful");
    next();
    // const { data } = req.body;
    // const { user , login } = data as { user:User, login:Login};

    // if(!user ||!login){
    //     return res.status(400).json({
    //         error: 'Bad request no user or login provided'
    //     })
    // }

    // const { email } = user;
    // const { username } = login;
    // const password = login.hashedPassword;

    // if(!email ||!username ||!password){
    //     return res.status(400).json({
    //         error: 'Bad request invalid email, username or password provided'
    //     })
    // }
    // next();
}