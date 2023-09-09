import jwt from 'jsonwebtoken';

export default function getUserIdFromRefreshToken(refreshToken:string) {
    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string);

    console.log(decodedToken);
    
}