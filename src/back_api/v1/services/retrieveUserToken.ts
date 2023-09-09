import client from "@lib/client";

const retrieveUserToken = async (username:string) => {
    try{
        const login = await client.login.findUnique({
            where: {
                username: username
            }
        })
    
        if (!login) return new Error("User not found")
    
        const token = await client.authenticationToken.findUnique({
            where: {
                userId: login.userId
            }
        })
        if (!token) return new Error("Token not found")

        return token;
    } catch (error) {
        return error
    }
}

export default retrieveUserToken;