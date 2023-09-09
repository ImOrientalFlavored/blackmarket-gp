import jwt from 'jsonwebtoken';

export function generateRefreshToken(payload:object){
    return jwt.sign(
        payload, 
        process.env.REFRESH_TOKEN_SECRET as string, 
        {
            expiresIn:`30d`,
        }
    );
}