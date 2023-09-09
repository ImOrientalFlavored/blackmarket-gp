import jwt from 'jsonwebtoken';

export function generateAccessToken(payload:object){
    return jwt.sign(
        payload, 
        process.env.ACCESS_TOKEN_SECRET as string, 
        {
            expiresIn:`15m`,
        }
    );
}